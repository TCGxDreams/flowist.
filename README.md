# flowist. — your week, sorted.

> A minimalist, responsive weekly planner and productivity hub built for mobile, tablet (iPad), and desktop.

![flowist.](favicon.svg)

---

## ✨ Key Features

- 📅 **Weekly Interactive Planner**: Manage projects, subtasks, priorities, and daily scheduling.
- 📝 **Daily Notes**: Dedicated daily notebook with auto-saving notes partitioned per user.
- 📊 **Productivity Statistics**:
  - Full 52-week **Activity Heatmap** (GitHub-style contribution graph).
  - **By Weekday Chart** with *Completion %* and *Task Distribution* view modes.
  - Summary metrics: *Avg Completion*, *Best Week*, *Week Streak*, and *Weeks Tracked*.
- 📦 **Weekly Archive**: Automatic and manual snapshot archiving of completed weeks with copyable summaries.
- 📱 **PWA & Cross-Device Responsive**:
  - Full **Progressive Web App (PWA)** support — installable on iOS (Safari Add to Home Screen), Android, and Desktop.
  - Smart touch-optimized bottom tab bar for iPhone & iPad (up to 1366px landscape).
- 🔐 **Authentication & User Data Isolation**:
  - Multi-user login and registration with local fallback and nickname support.
  - Guest mode for quick offline usage.
- ☁️ **Supabase Cloud Sync Integration**:
  - Real-time cloud sync for user accounts, planner data, daily notes, and archives.
- 🌐 **Multilingual & Theming**:
  - Instant toggle between **English** and **Tiếng Việt**.
  - Light, Dark, and System Auto theme modes.

---

## 🛠️ Tech Stack

- **Frontend**: Pure Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Typography**: Fraunces, Newsreader, JetBrains Mono (Google Fonts)
- **Backend / Database**: Supabase (PostgreSQL + REST API)
- **PWA**: Service Worker (`sw.js`) & Web App Manifest (`manifest.webmanifest`)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/TCGxDreams/flowist..git
cd flowist.
```

### 2. Environment Setup

Copy `.env.example` to `.env` and fill in your Supabase credentials:

```bash
cp .env.example .env
```

Set your credentials in `.env` and `config.js`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

### 3. Database Setup (Supabase)

Open your Supabase Dashboard ➔ SQL Editor and execute the script in [`schema.sql`](schema.sql):

```sql
-- Create flowist_users table
CREATE TABLE IF NOT EXISTS public.flowist_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  nickname TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create flowist_data table
CREATE TABLE IF NOT EXISTS public.flowist_data (
  user_key TEXT PRIMARY KEY,
  email TEXT,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  archive JSONB DEFAULT '[]'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

---

## 🔒 Security Best Practices

- `.env` and private keys are excluded from git index via `.gitignore`.
- RLS (Row Level Security) policies configured in `schema.sql`.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
