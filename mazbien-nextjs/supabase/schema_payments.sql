-- Stripe test-mode deposit records. One row per Checkout session.
-- Safe to re-run in the Supabase SQL editor. Does not use the service_role key.

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.assessments(id) on delete cascade,
  stripe_session_id text not null unique,
  amount_cents integer not null,
  currency text not null default 'cad',
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed')),
  created_at timestamptz default now(),
  paid_at timestamptz
);

alter table public.payments enable row level security;

drop policy if exists "consultants_select_own_payments" on public.payments;
create policy "consultants_select_own_payments"
  on public.payments
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.assessments a
      where a.id = payments.assessment_id
        and a.consultant_id = auth.uid()
    )
  );

drop policy if exists "consultants_insert_own_payments" on public.payments;
create policy "consultants_insert_own_payments"
  on public.payments
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

drop policy if exists "consultants_update_own_payments" on public.payments;
create policy "consultants_update_own_payments"
  on public.payments
  for update
  to authenticated
  using (
    exists (
      select 1
      from public.assessments a
      where a.id = payments.assessment_id
        and a.consultant_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.assessments a
      where a.id = assessment_id
        and a.consultant_id = auth.uid()
    )
  );

grant select, insert, update on public.payments to authenticated;
revoke all on public.payments from anon;
