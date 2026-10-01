-- Run this in the Supabase SQL editor before using Send For Review.

create table if not exists public.assessments (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  industry text,
  size text,
  departments jsonb default '[]'::jsonb,
  ai_experience text,
  pain_points text,
  tools jsonb default '[]'::jsonb,
  tier text,
  score integer,
  status text default 'sent_for_review',
  created_at timestamptz default now()
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

alter table public.assessments enable row level security;
alter table public.roles enable row level security;
alter table public.followup_answers enable row level security;

create policy "anon_read_assessments" on public.assessments for select using (true);
create policy "anon_insert_assessments" on public.assessments for insert with check (true);
create policy "anon_read_roles" on public.roles for select using (true);
create policy "anon_insert_roles" on public.roles for insert with check (true);
create policy "anon_read_followups" on public.followup_answers for select using (true);
create policy "anon_insert_followups" on public.followup_answers for insert with check (true);
