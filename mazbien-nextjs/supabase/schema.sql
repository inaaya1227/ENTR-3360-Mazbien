-- Full Mazbien schema, including consultant ownership and selected add-ons.
-- Safe to re-run in the Supabase SQL editor.
-- Email/password auth is Supabase Auth (auth.users). Turn on the Email provider
-- and, for this project, turn off "Confirm email" so sign-up returns a session.

create table if not exists public.assessments (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  industry text,
  size text,
  departments jsonb default '[]'::jsonb,
  ai_experience text,
  department_ai_experience jsonb not null default '{}'::jsonb,
  pain_points text,
  tools jsonb default '[]'::jsonb,
  tier text,
  score integer,
  quote_total text,
  status text default 'sent_for_review',
  previous_status text,
  desired_outcomes text,
  consultant_notes text,
  created_at timestamptz default now(),
  consultant_id uuid references auth.users(id) on delete cascade,
  selected_addons jsonb not null default '[]'::jsonb
);

create table if not exists public.roles (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.assessments(id) on delete cascade,
  name text not null,
  department text,
  priority text,
  modules jsonb default '[]'::jsonb
);

create table if not exists public.followup_answers (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.assessments(id) on delete cascade,
  question_text text not null,
  answer_text text
);

alter table public.assessments
  add column if not exists consultant_id uuid references auth.users(id) on delete cascade;

alter table public.assessments
  add column if not exists selected_addons jsonb not null default '[]'::jsonb;

alter table public.assessments
  add column if not exists quote_total text;

alter table public.assessments
  add column if not exists previous_status text;

alter table public.assessments
  add column if not exists desired_outcomes text;

alter table public.assessments
  add column if not exists consultant_notes text;

alter table public.assessments
  add column if not exists department_ai_experience jsonb not null default '{}'::jsonb;

-- Older rows stored one company-wide level. Copy it onto each saved department.
update public.assessments as assessment
set department_ai_experience = coalesce(
  (
    select jsonb_object_agg(dept.value, assessment.ai_experience)
    from jsonb_array_elements_text(assessment.departments) as dept(value)
  ),
  '{}'::jsonb
)
where assessment.department_ai_experience = '{}'::jsonb
  and assessment.ai_experience is not null
  and jsonb_typeof(assessment.departments) = 'array';

create index if not exists assessments_consultant_id_idx
  on public.assessments (consultant_id);

alter table public.assessments enable row level security;
alter table public.roles enable row level security;
alter table public.followup_answers enable row level security;

drop policy if exists "anon_read_assessments" on public.assessments;
drop policy if exists "anon_insert_assessments" on public.assessments;
drop policy if exists "anon_read_roles" on public.roles;
drop policy if exists "anon_insert_roles" on public.roles;
drop policy if exists "anon_read_followups" on public.followup_answers;
drop policy if exists "anon_insert_followups" on public.followup_answers;

drop policy if exists "consultants_select_own_assessments" on public.assessments;
drop policy if exists "consultants_insert_own_assessments" on public.assessments;
drop policy if exists "consultants_update_own_assessments" on public.assessments;
drop policy if exists "consultants_select_own_roles" on public.roles;
drop policy if exists "consultants_insert_own_roles" on public.roles;
drop policy if exists "consultants_select_own_followups" on public.followup_answers;
drop policy if exists "consultants_insert_own_followups" on public.followup_answers;

create policy "consultants_select_own_assessments"
  on public.assessments
  for select
  to authenticated
  using (consultant_id = auth.uid());

create policy "consultants_insert_own_assessments"
  on public.assessments
  for insert
  to authenticated
  with check (consultant_id = auth.uid());

create policy "consultants_update_own_assessments"
  on public.assessments
  for update
  to authenticated
  using (consultant_id = auth.uid())
  with check (consultant_id = auth.uid());

create policy "consultants_select_own_roles"
  on public.roles
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.assessments a
      where a.id = roles.assessment_id
        and a.consultant_id = auth.uid()
    )
  );

create policy "consultants_insert_own_roles"
  on public.roles
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

drop policy if exists "consultants_delete_own_roles" on public.roles;
create policy "consultants_delete_own_roles"
  on public.roles
  for delete
  to authenticated
  using (
    exists (
      select 1
      from public.assessments a
      where a.id = roles.assessment_id
        and a.consultant_id = auth.uid()
    )
  );

create policy "consultants_select_own_followups"
  on public.followup_answers
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.assessments a
      where a.id = followup_answers.assessment_id
        and a.consultant_id = auth.uid()
    )
  );

create policy "consultants_insert_own_followups"
  on public.followup_answers
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

drop policy if exists "consultants_delete_own_followups" on public.followup_answers;
create policy "consultants_delete_own_followups"
  on public.followup_answers
  for delete
  to authenticated
  using (
    exists (
      select 1
      from public.assessments a
      where a.id = followup_answers.assessment_id
        and a.consultant_id = auth.uid()
    )
  );

grant select, insert, update on public.assessments to authenticated;
grant select, insert, delete on public.roles to authenticated;
grant select, insert, delete on public.followup_answers to authenticated;

revoke all on public.assessments from anon;
revoke all on public.roles from anon;
revoke all on public.followup_answers from anon;
