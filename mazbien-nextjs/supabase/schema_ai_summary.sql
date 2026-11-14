-- Saved AI recommendation summaries on assessments. All four columns are nullable.
-- Safe to re-run in the Supabase SQL editor. Does not change row level security.

alter table public.assessments
  add column if not exists ai_summary jsonb;

alter table public.assessments
  add column if not exists ai_summary_status text;

alter table public.assessments
  add column if not exists ai_summary_model text;

alter table public.assessments
  add column if not exists ai_summary_updated_at timestamptz;

alter table public.assessments
  drop constraint if exists assessments_ai_summary_status_check;

alter table public.assessments
  add constraint assessments_ai_summary_status_check
  check (ai_summary_status in ('draft', 'approved'));
