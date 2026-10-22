-- Proposed add-on tables. Does not drop assessments.selected_addons.
-- Safe to re-run: new tables are created only if missing, and the six
-- catalog rows are inserted only when that name is not already there.

create table if not exists public.addons (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text,
  price numeric(10, 2) not null,
  active boolean not null default true,
  created_at timestamptz default now()
);

insert into public.addons (name, description, price)
values
  ('Change-management office hours', 'Weekly working sessions for teams that are new to AI.', 4500.00),
  ('Department champion network', 'Local owners who keep the labs going after Mazbien leaves.', 6000.00),
  ('Train-the-trainer cascade', 'Internal trainers who can teach the next cohort.', 8500.00),
  ('AI governance & allowed-use lab', 'Policy, tool boundaries, and what staff may paste into a model.', 7000.00),
  ('Deflection measurement pack', 'Before-and-after ticket metrics for customer service.', 3500.00),
  ('90-day executive impact brief', 'One measurable outcome for leadership after the labs.', 2500.00)
on conflict (name) do nothing;

create table if not exists public.assessment_addons (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.assessments (id) on delete cascade,
  addon_id uuid references public.addons (id),
  custom_name text,
  price_at_selection numeric(10, 2) not null,
  created_at timestamptz default now(),
  constraint assessment_addons_source_check check (
    (addon_id is not null and custom_name is null)
    or (addon_id is null and nullif(btrim(custom_name), '') is not null)
  )
);

alter table public.addons enable row level security;
alter table public.assessment_addons enable row level security;

drop policy if exists "authenticated_select_addons" on public.addons;
create policy "authenticated_select_addons"
  on public.addons
  for select
  to authenticated
  using (true);

drop policy if exists "consultants_select_own_assessment_addons" on public.assessment_addons;
create policy "consultants_select_own_assessment_addons"
  on public.assessment_addons
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.assessments a
      where a.id = assessment_addons.assessment_id
        and a.consultant_id = auth.uid()
    )
  );

drop policy if exists "consultants_insert_own_assessment_addons" on public.assessment_addons;
create policy "consultants_insert_own_assessment_addons"
  on public.assessment_addons
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

drop policy if exists "consultants_delete_own_assessment_addons" on public.assessment_addons;
create policy "consultants_delete_own_assessment_addons"
  on public.assessment_addons
  for delete
  to authenticated
  using (
    exists (
      select 1
      from public.assessments a
      where a.id = assessment_addons.assessment_id
        and a.consultant_id = auth.uid()
    )
  );

grant select on public.addons to authenticated;
grant select, insert, delete on public.assessment_addons to authenticated;

revoke all on public.addons from anon;
revoke all on public.assessment_addons from anon;
