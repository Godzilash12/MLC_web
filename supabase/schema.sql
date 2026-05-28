create table if not exists events (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  title text not null,
  description text,
  event_date date,
  image_url text,
  tg_post_url text,
  is_upcoming boolean default false,
  is_visible boolean default true,
  sort_order int default 0
);

create table if not exists partners (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  logo_url text not null,
  website_url text,
  is_visible boolean default true,
  sort_order int default 0
);

create table if not exists team (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  role_mlc text not null,
  role_external text,
  photo_url text,
  linkedin_url text,
  is_visible boolean default true,
  sort_order int default 0
);

create table if not exists courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  direction text not null check (direction in ('data', 'ml', 'ai')),
  description text,
  partner_name text,
  partner_logo text,
  duration text,
  price text,
  platform_url text,
  is_visible boolean default true,
  sort_order int default 0
);

create table if not exists b2b_cases (
  id uuid default gen_random_uuid() primary key,
  company_name text not null,
  logo_url text,
  quote_text text,
  quote_author text,
  is_visible boolean default true,
  sort_order int default 0
);

create table if not exists ai_solutions (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  icon text,
  description text,
  detail_text text,
  features text[],
  price_from text,
  duration text,
  is_visible boolean default true,
  sort_order int default 0
);

create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  contact text not null,
  lead_type text not null check (lead_type in ('b2c', 'b2b', 'partner', 'ai_creator')),
  message text,
  source_page text,
  utm_source text default 'direct',
  status text default 'new' check (status in ('new', 'contacted', 'converted', 'closed'))
);

alter table events enable row level security;
alter table partners enable row level security;
alter table team enable row level security;
alter table courses enable row level security;
alter table b2b_cases enable row level security;
alter table ai_solutions enable row level security;
alter table leads enable row level security;

create policy if not exists public_read_events on events for select to anon using (is_visible = true);
create policy if not exists public_read_partners on partners for select to anon using (is_visible = true);
create policy if not exists public_read_team on team for select to anon using (is_visible = true);
create policy if not exists public_read_courses on courses for select to anon using (is_visible = true);
create policy if not exists public_read_b2b_cases on b2b_cases for select to anon using (is_visible = true);
create policy if not exists public_read_ai_solutions on ai_solutions for select to anon using (is_visible = true);
create policy if not exists public_insert_leads on leads for insert to anon with check (true);

create policy if not exists auth_all_events on events for all to authenticated using (true);
create policy if not exists auth_all_partners on partners for all to authenticated using (true);
create policy if not exists auth_all_team on team for all to authenticated using (true);
create policy if not exists auth_all_courses on courses for all to authenticated using (true);
create policy if not exists auth_all_b2b_cases on b2b_cases for all to authenticated using (true);
create policy if not exists auth_all_ai_solutions on ai_solutions for all to authenticated using (true);
create policy if not exists auth_all_leads on leads for all to authenticated using (true);

create index if not exists leads_created_idx on leads (created_at desc);
create index if not exists events_date_idx on events (event_date desc);
create index if not exists sort_order_events on events (sort_order);
create index if not exists sort_order_partners on partners (sort_order);
create index if not exists sort_order_team on team (sort_order);
