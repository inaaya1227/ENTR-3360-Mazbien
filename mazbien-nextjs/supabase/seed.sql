-- Synthetic Mazbien seed for one consultant.
-- Companies, tools, and answers are fictional. Role titles are ordinary job titles, not named people. No real organizations.
--
-- BEFORE YOU RUN
-- 1. In Supabase: Authentication → Users → copy your user id.
-- 2. The consultant id is set in the insert into seed_params.
--
-- WIPE (deletes every assessment owned by that consultant, including any you
-- created in the app; roles and follow-up answers cascade):
--   delete from public.assessments
--   where consultant_id = 'b86cda46-f1b1-4487-9b8d-5d73db494aef';
-- Then run this whole script again.
--
-- HOW THE ROWS WERE BUILT
-- 40 assessments. Role counts vary by company and sum to 160 (4 on average).
-- Each assessment gets 4 follow-up answers (160).
-- score = role_count + department_count + AI weight
--   None = 2, Some = 1, Advanced = 0
--   score > 8 → gold, score 5–8 → silver, score < 5 → bronze
-- The script calculates score and tier from those inputs and stops if a row disagrees.
-- created_at steps back 4 days 16 hours from 2026-10-21, covering about six months.
-- Status is sent_for_review on 32 rows, draft on 4, in_review on 4.

drop table if exists seed_params;
create temp table seed_params (consultant_id uuid);
insert into seed_params (consultant_id)
values ('b86cda46-f1b1-4487-9b8d-5d73db494aef');

do $seed$
declare
  consultant uuid;
  companies text[] := array[
    'Larkspur Parcel Cooperative',
    'Brindle Harbor Clinics',
    'Copperline Millworks',
    'Moss Quill Advisors',
    'Fennel Street Outfitters',
    'Glasspine Mutual',
    'Oddment Toy Atelier',
    'Yellowdock Learning Rooms',
    'Silt Cedar Freight',
    'Pebblewick Remedy Shops',
    'Kitefin Marine Supply',
    'Marrowstone Bakehouse',
    'Tinderbox Foundry',
    'Lowtide Claims Desk',
    'Vellum Arch Partners',
    'Cindermoth Apparel',
    'Brightloam Growers',
    'Quillharbor Books',
    'Nettlebridge Transit',
    'Amberlane Care Cottages',
    'Foxhollow Tooling',
    'Paperlantern Shops',
    'Saltribbon Fisheries',
    'Wrenfield Seminars',
    'Cobalt Orchard Goods',
    'Hushgrove Inns',
    'Driftmaple Hauling',
    'Ironthistle Works',
    'Lanternwick Classrooms',
    'Bluejuniper Mutual',
    'Thistleport Stevedores',
    'Candlebarrow Grocers',
    'Rookspur Benchworks',
    'Meadowglass Eyewear',
    'Pinecone Pay Studio',
    'Otterlantern Tours',
    'Redclay Tileworks',
    'Silverthistle Press',
    'Umberdock Warehousing',
    'Kindling Court Clinics'
  ];
  industries text[] := array[
    'Technology',
    'Logistics & Transport',
    'Healthcare',
    'Financial Services',
    'Manufacturing',
    'Professional Services',
    'Retail',
    'Education'
  ];
  sizes text[] := array['1-50', '51-150', '151-500', '501-2000', '2000+'];
  all_depts text[] := array[
    'Sales',
    'Customer Service',
    'Operations',
    'Finance',
    'Human Resources',
    'Marketing',
    'Engineering',
    'Legal & Compliance',
    'Logistics'
  ];
  role_counts int[] := array[
    2, 2, 2, 3, 1, 2, 2, 1, 3, 1,
    3, 4, 5, 3, 4, 5, 2, 3, 4, 5,
    3, 4, 5, 4, 6, 3, 5, 2,
    6, 5, 6, 5, 6, 5, 7, 4, 6, 7, 8, 6
  ];
  dept_counts int[] := array[
    1, 1, 2, 1, 1, 1, 2, 2, 1, 3,
    2, 1, 1, 1, 2, 2, 2, 3, 2, 1,
    2, 3, 2, 2, 2, 3, 3, 3,
    3, 3, 2, 4, 3, 3, 2, 4, 4, 3, 3, 4
  ];
  experiences text[] := array[
    'Advanced', 'Some', 'Advanced', 'Advanced', 'None', 'Some', 'Advanced', 'Some', 'Advanced', 'Advanced',
    'Some', 'Some', 'Advanced', 'None', 'Some', 'Advanced', 'None', 'Advanced', 'Some', 'Some',
    'None', 'Advanced', 'Some', 'None', 'Advanced', 'Some', 'Advanced', 'None',
    'Some', 'None', 'Some', 'Advanced', 'Some', 'None', 'Some', 'None', 'Some', 'None', 'Some', 'None'
  ];
  tools text[] := array[
    'Cinder Desk',
    'Quillboard',
    'Parcel Ledger',
    'Harbor Chat',
    'Loomline Sheets',
    'Brass Tack CRM',
    'Kindling Copilot',
    'Dockwhistle Notes'
  ];
  titles jsonb := jsonb_build_object(
    'Sales', jsonb_build_array('Account Executive', 'Sales Development Representative', 'Proposal Specialist', 'Sales Operations Analyst', 'Customer Success Manager', 'Renewal Coordinator'),
    'Customer Service', jsonb_build_array('Customer Support Team Lead', 'Support Specialist', 'Knowledge Base Editor', 'Quality Assurance Analyst', 'Escalation Coordinator', 'Chat Support Agent'),
    'Operations', jsonb_build_array('Operations Manager', 'Process Analyst', 'Operations Coordinator', 'Workforce Scheduler', 'Continuous Improvement Lead', 'Service Desk Coordinator'),
    'Finance', jsonb_build_array('Accounts Payable Clerk', 'Accounts Receivable Specialist', 'Financial Analyst', 'Staff Accountant', 'Payroll Administrator', 'Billing Coordinator'),
    'Human Resources', jsonb_build_array('Recruitment Coordinator', 'HR Business Partner', 'Onboarding Specialist', 'HR Generalist', 'Talent Sourcer', 'Employee Relations Advisor'),
    'Marketing', jsonb_build_array('Content Marketing Manager', 'Campaign Coordinator', 'Brand Specialist', 'Marketing Operations Analyst', 'Social Media Coordinator', 'Demand Generation Specialist'),
    'Engineering', jsonb_build_array('Software Engineer', 'QA Engineer', 'Engineering Manager', 'Technical Writer', 'DevOps Engineer', 'Application Support Analyst'),
    'Legal & Compliance', jsonb_build_array('Compliance Analyst', 'Contract Specialist', 'Paralegal', 'Policy Advisor', 'Records Coordinator', 'Regulatory Affairs Associate'),
    'Logistics', jsonb_build_array('Dispatcher', 'Warehouse Supervisor', 'Supply Planner', 'Inventory Analyst', 'Transportation Coordinator', 'Shipping Clerk')
  );
  i int;
  role_count int;
  dept_count int;
  experience text;
  weight int;
  score int;
  tier text;
  dept_list text[];
  dept_name text;
  title_pool jsonb;
  title_name text;
  assessment_id uuid;
  company text;
  industry text;
  size_band text;
  status text;
  r int;
  f int;
  dept_slot int;
  answer_pick int;
  week_count int;
  hours_count int;
  share_pct int;
  days_count int;
  role_total int := 0;
  follow_total int := 0;
  assessment_total int := 0;
  inserted uuid[] := array[]::uuid[];
begin
  select consultant_id into consultant from seed_params;

  if consultant = '00000000-0000-0000-0000-000000000000'::uuid then
    raise exception 'Replace the placeholder uuid with your auth.users id, then run the script again.';
  end if;

  if not exists (select 1 from auth.users where id = consultant) then
    raise exception 'No auth.users row for %. Copy the id from Authentication → Users.', consultant;
  end if;

  if array_length(role_counts, 1) <> 40
     or array_length(dept_counts, 1) <> 40
     or array_length(experiences, 1) <> 40
     or array_length(companies, 1) <> 40 then
    raise exception 'Seed spec must contain 40 assessments.';
  end if;

  for i in 1..40 loop
    role_count := role_counts[i];
    dept_count := dept_counts[i];
    experience := experiences[i];
    weight := case experience
      when 'None' then 2
      when 'Some' then 1
      when 'Advanced' then 0
      else null
    end;
    if weight is null then
      raise exception 'Unknown AI experience % on row %', experience, i;
    end if;

    score := role_count + dept_count + weight;
    tier := case
      when score > 8 then 'gold'
      when score >= 5 then 'silver'
      else 'bronze'
    end;

    company := companies[i];
    industry := industries[((i - 1) % array_length(industries, 1)) + 1];
    size_band := sizes[((i - 1) % array_length(sizes, 1)) + 1];
    status := case
      when i % 10 = 0 then 'draft'
      when i % 10 = 1 then 'in_review'
      else 'sent_for_review'
    end;

    dept_list := array[]::text[];
    for r in 1..dept_count loop
      dept_list := dept_list || all_depts[(((i - 1) + (r - 1)) % array_length(all_depts, 1)) + 1];
    end loop;

    insert into public.assessments (
      company_name,
      industry,
      size,
      departments,
      ai_experience,
      pain_points,
      tools,
      tier,
      score,
      status,
      created_at,
      consultant_id,
      selected_addons
    ) values (
      company,
      industry,
      size_band,
      to_jsonb(dept_list),
      experience,
      case experience
        when 'None' then 'Teams still do the busywork by hand and worry a draft will be wrong.'
        when 'Some' then 'A few people draft with an approved tool, then rewrite it themselves.'
        else 'Several teams already have habits, but the rules differ by department.'
      end || ' Industry context: ' || industry || '.',
      jsonb_build_array(
        tools[((i - 1) % array_length(tools, 1)) + 1],
        tools[(i % array_length(tools, 1)) + 1],
        tools[((i + 1) % array_length(tools, 1)) + 1]
      ),
      tier,
      score,
      status,
      timestamptz '2026-10-21 15:00:00+00' - ((i - 1) * interval '4 days 16 hours'),
      consultant,
      case
        when i % 3 = 0 then jsonb_build_array(
          jsonb_build_object('id', 'seed-office-hours', 'name', 'Fictional office-hours block', 'custom', false)
        )
        when i % 3 = 1 then jsonb_build_array(
          jsonb_build_object('id', 'custom:seed-lab', 'name', 'Fictional lab for ' || industry, 'custom', true)
        )
        else '[]'::jsonb
      end
    )
    returning id into assessment_id;

    inserted := inserted || assessment_id;
    assessment_total := assessment_total + 1;

    for r in 1..role_count loop
      dept_name := dept_list[((r - 1) % dept_count) + 1];
      dept_slot := (r - 1) / dept_count;
      title_pool := titles -> dept_name;
      title_name := title_pool ->> (((i - 1) * 3 + dept_slot) % jsonb_array_length(title_pool));

      insert into public.roles (assessment_id, name, department, priority, modules)
      values (
        assessment_id,
        title_name,
        dept_name,
        case r % 3 when 1 then 'High' when 2 then 'Medium' else 'Low' end,
        jsonb_build_array(
          dept_name || ' workflow lab',
          dept_name || ' review habit'
        )
      );
      role_total := role_total + 1;
    end loop;

    week_count := 36 + ((i * 17) % 280);
    hours_count := 4 + ((i * 5) % 18);
    share_pct := 18 + ((i * 7) % 57);
    days_count := 2 + (i % 8);
    for f in 1..4 loop
      dept_name := dept_list[((f - 1) % dept_count) + 1];
      answer_pick := (i + f) % 6;
      insert into public.followup_answers (assessment_id, question_text, answer_text)
      values (
        assessment_id,
        case f
          when 1 then 'What does a normal week look like for ' || dept_name || '?'
          when 2 then 'Which ' || dept_name || ' tasks are repetitive enough to practice in a lab?'
          when 3 then 'What must ' || dept_name || ' keep out of a public AI tool?'
          else 'What should be different for this organization in 90 days?'
        end,
        case f
          when 1 then case answer_pick
            when 0 then dept_name || ' logs about ' || week_count || ' items a week, and staff spend roughly ' || hours_count || ' hours turning them into notes.'
            when 1 then 'A normal week is ' || week_count || ' handoffs. About ' || hours_count || ' hours go to rewriting the same update.'
            when 2 then dept_name || ' keeps ' || hours_count || ' hours for live work and still clears a queue of about ' || week_count || '.'
            when 3 then 'Volume sits near ' || week_count || ' a week. First drafts take about ' || hours_count || ' hours before a reviewer sees them.'
            when 4 then 'The calendar holds ' || (8 + (week_count % 28)) || ' working sessions, plus ' || hours_count || ' hours of after-action notes.'
            else 'About ' || share_pct || '% of the week is repeat work, roughly ' || hours_count || ' hours across ' || week_count || ' items.'
          end
          when 2 then case answer_pick
            when 0 then 'About ' || share_pct || '% of the queue is the same three request types, around ' || (12 + (week_count % 70)) || ' cases.'
            when 1 then 'Status updates are copied about ' || (hours_count + 3) || ' times a day across ' || (10 + (week_count % 40)) || ' open items.'
            when 2 then 'Staff retype one checklist on roughly ' || (15 + (week_count % 45)) || ' records each week.'
            when 3 then 'Follow-up messages follow one outline for about ' || share_pct || '% of contacts.'
            when 4 then 'The practice set is a weekly pack of about ' || (6 + (week_count % 24)) || ' summaries that differ only in dates and amounts.'
            else 'Exception notes are short and repeated, close to ' || hours_count || ' hours of near-duplicate writing.'
          end
          when 3 then case answer_pick
            when 0 then 'Account numbers, home addresses, and unpublished totals stay out. About ' || (8 + (week_count % 35)) || ' records a week include one of those.'
            when 1 then 'Pay figures and government identifiers never go into a public tool. Payroll touches about ' || (20 + (week_count % 80)) || ' people each cycle.'
            when 2 then 'Case files and unsigned drafts stay on the internal desk. A typical week adds ' || (12 + (week_count % 50)) || ' of them.'
            when 3 then 'Unreleased prices and vendor terms are restricted. Reviewers flag about ' || share_pct || '% of drafts for that reason.'
            when 4 then 'Health details, pay rates, and disciplinary notes are off limits, including as examples.'
            else 'A personal phone number or a bank reference is excluded. Staff estimate ' || hours_count || ' hours a week would be risky if pasted into a public tool.'
          end
          else case answer_pick
            when 0 then company || ' wants the ' || hours_count || '-hour note cycle cut by about a third within 90 days.'
            when 1 then 'The 90-day mark is one shared checklist and a drop of about ' || share_pct || '% in rework.'
            when 2 then company || ' hopes to free roughly ' || hours_count || ' hours a week in ' || dept_name || ' without adding headcount.'
            when 3 then 'The target is a ' || days_count || '-day faster handoff and a written rule for what a tool may see.'
            when 4 then 'In 90 days they want ' || (4 + (week_count % 18)) || ' people using the same approved pattern for first drafts.'
            else company || ' will judge the quarter on one metric: ' || share_pct || '% of repeat ' || dept_name || ' tasks started from a shared example.'
          end
        end
      );
      follow_total := follow_total + 1;
    end loop;
  end loop;

  if assessment_total <> 40 or role_total <> 160 or follow_total <> 160 then
    raise exception 'Expected 40 assessments, 160 roles, 160 follow-ups. Got %, %, %.',
      assessment_total, role_total, follow_total;
  end if;

  if exists (
    select 1
    from public.assessments a
    where a.id = any(inserted)
      and (
        a.score is distinct from (
          (select count(*) from public.roles r where r.assessment_id = a.id)
          + jsonb_array_length(a.departments)
          + case a.ai_experience when 'None' then 2 when 'Some' then 1 when 'Advanced' then 0 end
        )
        or a.tier is distinct from (
          case
            when (
              (select count(*) from public.roles r where r.assessment_id = a.id)
              + jsonb_array_length(a.departments)
              + case a.ai_experience when 'None' then 2 when 'Some' then 1 when 'Advanced' then 0 end
            ) > 8 then 'gold'
            when (
              (select count(*) from public.roles r where r.assessment_id = a.id)
              + jsonb_array_length(a.departments)
              + case a.ai_experience when 'None' then 2 when 'Some' then 1 when 'Advanced' then 0 end
            ) >= 5 then 'silver'
            else 'bronze'
          end
        )
      )
  ) then
    raise exception 'Stored score or tier does not match the seed rule.';
  end if;
end
$seed$;

-- Totals below include every assessment already owned by this consultant.
-- Wipe first if you want this run to be the only rows (40 assessments, 160 roles).
select
  count(*) as assessments,
  count(*) filter (where a.tier = 'bronze') as bronze,
  count(*) filter (where a.tier = 'silver') as silver,
  count(*) filter (where a.tier = 'gold') as gold,
  count(*) filter (where a.status = 'sent_for_review') as sent_for_review,
  (select count(*) from public.roles r join public.assessments owned on owned.id = r.assessment_id join seed_params sp on sp.consultant_id = owned.consultant_id) as roles_for_consultant,
  min(a.created_at) as oldest,
  max(a.created_at) as newest
from public.assessments a
join seed_params p on p.consultant_id = a.consultant_id;
