-- Scheduled training sessions for an assessment.
-- Safe to re-run in the Supabase SQL editor. Does not use the service_role key.
-- No update policy: a session is inserted or deleted, not edited in place.

create table if not exists public.scheduled_sessions (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.assessments(id) on delete cascade,
  module_name text not null,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  google_event_id text unique,
  created_at timestamptz default now(),
  constraint scheduled_sessions_ends_after_start check (ends_at > starts_at)
);

alter table public.scheduled_sessions enable row level security;

drop policy if exists "consultants_select_own_scheduled_sessions" on public.scheduled_sessions;
create policy "consultants_select_own_scheduled_sessions"
  on public.scheduled_sessions
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.assessments a
      where a.id = scheduled_sessions.assessment_id
        and a.consultant_id = auth.uid()
    )
  );

drop policy if exists "consultants_insert_own_scheduled_sessions" on public.scheduled_sessions;
create policy "consultants_insert_own_scheduled_sessions"
  on public.scheduled_sessions
  for insert
  to authenticated
  with check (
    exists (
      select 1
      from public.assessments a
      where a.id = assessment_id
        and a.consultant_id = auth.uid()
    )
  );

drop policy if exists "consultants_delete_own_scheduled_sessions" on public.scheduled_sessions;
create policy "consultants_delete_own_scheduled_sessions"
  on public.scheduled_sessions
  for delete
  to authenticated
  using (
    exists (
      select 1
      from public.assessments a
      where a.id = scheduled_sessions.assessment_id
        and a.consultant_id = auth.uid()
    )
  );

grant select, insert, delete on public.scheduled_sessions to authenticated;
revoke all on public.scheduled_sessions from anon;
