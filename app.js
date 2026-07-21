/* ═══════════════════════════════════════════════════════════════
   FLOWIST. — Premium Application Logic
   ═══════════════════════════════════════════════════════════════ */

(() => {
  'use strict';

  // ── Translations / Đa Ngôn Ngữ ──────────────────────────────
  const TRANSLATIONS = {
    vi: {
      weekRangePrefix: '',
      thisWeek: 'Tuần này',
      lastWeek: 'Tuần trước',
      nextWeek: 'Tuần sau',
      weeksAgo: 'tuần trước',
      inWeeks: 'trong {n} tuần',
      emailReportSubject: 'Báo cáo kế hoạch tuần',
      copiedToClipboard: 'Đã sao chép vào clipboard',
      downloadedReport: 'Đã tải báo cáo',
      emailClientOpened: 'Đang mở trình duyệt email',
      authRequired: 'Vui lòng đăng nhập hoặc chọn chế độ khách',
      loginSuccess: 'Đăng nhập thành công',
      registrationSuccess: 'Đăng ký thành công! Hãy đăng nhập.',
      invalidCredentials: 'Email hoặc mật khẩu không đúng',
      userExists: 'Tài khoản đã tồn tại',
      logoutSuccess: 'Đã đăng xuất',
      lblEmail: 'Email',
      lblPassword: 'Mật khẩu',
      lblNickname: 'Biệt danh',
      placeholderNickname: 'Tên hiển thị (tùy chọn)',
      lblSwitchNoteRegister: 'Chưa có tài khoản?',
      lblSwitchNoteLogin: 'Đã có tài khoản?',
      btnRegister: 'Đăng ký',
      btnLogin: 'Đăng nhập',
      guestMode: 'Tiếp tục với chế độ khách',
      guestLabel: 'Khách',
      placeholderSearch: 'Tìm kiếm công việc…',
      titleProjects: 'Dự án',
      titleCalendar: 'Tuần này',
      titleDailyNotes: 'Ghi chú hàng ngày',
      titleStatistics: 'Thống kê hiệu suất',
      lblAddProject: 'Thêm dự án',
      lblViewing: 'Đang xem',
      lblShowAll: 'Xem tất cả',
      lblCompletionRate: 'Tỉ lệ hoàn thành',
      lblHighPrioDone: 'Mức ưu tiên cao',
      lblMostProductive: 'Ngày năng suất nhất',
      lblWeeklyProgress: 'Tiến độ tuần này',
      lblTasksDone: '{done} trên {total} nhiệm vụ hoàn thành',
      lblFocusImportant: 'Tập trung vào điều quan trọng',
      lblTasksCompletedOnDay: '{n} nhiệm vụ đã hoàn thành',
      lblNoTasksCompleted: 'Chưa có nhiệm vụ hoàn thành',
      lblTabPlan: 'Kế hoạch',
      lblTabNotes: 'Ghi chú',
      lblTabStats: 'Thống kê',
      lblTabShare: 'Chia sẻ',
      lblConfirmDeleteProj: 'Xóa dự án <strong>{name}</strong> và toàn bộ nhiệm vụ con?',
      toastProjectCreated: 'Đã tạo dự án',
      toastProjectDeleted: 'Đã xóa dự án',
      toastProjectUpdated: 'Đã cập nhật dự án',
      toastSubtaskDeleted: 'Đã xóa nhiệm vụ con',
      toastSubtaskUpdated: 'Đã cập nhật nhiệm vụ con',
      toastCompletedProj: 'Đã hoàn thành dự án "{name}"!',
      placeholderNoteText: 'Ghi lại những ý nghĩ, kế hoạch hoặc bất kỳ điều gì cho hôm nay…',
      placeholderProjectName: 'Tên dự án…',
      placeholderSubtaskName: 'Nhiệm vụ con…',
      lblSave: 'Lưu thay đổi',
      lblCancel: 'Hủy',
      lblDelete: 'Xóa',
      lblClose: 'Đóng',
      lblPriority: 'Mức ưu tiên',
      lblAssignedDays: 'Ngày thực hiện',
      lblDescription: 'Ghi chú thêm',
      lblPriorityNone: 'Không',
      lblPriorityHigh: 'Cao',
      lblPriorityMedium: 'Trung bình',
      lblPriorityLow: 'Thấp',
      lblShareTitle: 'Báo cáo tuần của bạn',
      lblShareSubtitle: 'Xuất báo cáo tuần sang email nháp, tải tệp hoặc sao chép văn bản Markdown.',
      lblShareMailOpt: 'Gửi bản nháp qua Email',
      lblShareCopyOpt: 'Sao chép Markdown vào Clipboard',
      lblShareDownloadOpt: 'Tải xuống tệp báo cáo (.txt)',
      welcomeTitle: 'Bắt đầu tuần mới',
      welcomeSubtitle: 'Chia nhỏ công việc thành các dự án và nhiệm vụ con, phân bổ chúng trong tuần và tích chọn khi hoàn thành.',
      welcomeStep1: 'Tạo một dự án lớn',
      welcomeStep2: 'Thêm nhiệm vụ con để chia nhỏ',
      welcomeStep3: 'Giao ngày thực hiện & đặt mức ưu tiên',
      welcomeCta: 'Thêm dự án đầu tiên',
      toastUndo: 'Hoàn tác'
    },
    en: {
      weekRangePrefix: '',
      thisWeek: 'this week',
      lastWeek: 'last week',
      nextWeek: 'next week',
      weeksAgo: 'weeks ago',
      inWeeks: 'in {n} weeks',
      emailReportSubject: 'Weekly Planner Report',
      copiedToClipboard: 'Copied to clipboard',
      downloadedReport: 'Downloaded report',
      emailClientOpened: 'Email client opened',
      authRequired: 'Please login or choose Guest Mode',
      loginSuccess: 'Login successful',
      registrationSuccess: 'Registration successful! Please login.',
      invalidCredentials: 'Invalid email or password',
      userExists: 'Account already exists',
      logoutSuccess: 'Logged out',
      lblEmail: 'Email',
      lblPassword: 'Password',
      lblNickname: 'Nickname',
      placeholderNickname: 'Display name (optional)',
      lblSwitchNoteRegister: "Don't have an account?",
      lblSwitchNoteLogin: 'Already have an account?',
      btnRegister: 'Register',
      btnLogin: 'Login',
      guestMode: 'Continue with guest mode',
      guestLabel: 'Guest',
      placeholderSearch: 'Search tasks…',
      titleProjects: 'Projects',
      titleCalendar: 'This week',
      titleDailyNotes: 'Daily Notes',
      titleStatistics: 'Statistics',
      lblAddProject: 'Add project',
      lblViewing: 'Viewing',
      lblShowAll: 'show all',
      lblCompletionRate: 'Completion Rate',
      lblHighPrioDone: 'High Priority Done',
      lblMostProductive: 'Most Productive Day',
      lblWeeklyProgress: 'This Week Progress',
      lblTasksDone: '{done} of {total} tasks done',
      lblFocusImportant: 'Focusing on what matters',
      lblTasksCompletedOnDay: '{n} tasks completed',
      lblNoTasksCompleted: 'No tasks done yet',
      lblTabPlan: 'Plan',
      lblTabNotes: 'Notes',
      lblTabStats: 'Stats',
      lblTabShare: 'Share',
      lblConfirmDeleteProj: 'Delete <strong>{name}</strong> and all its subtasks?',
      toastProjectCreated: 'Project created',
      toastProjectDeleted: 'Project deleted',
      toastProjectUpdated: 'Project updated',
      toastSubtaskDeleted: 'Subtask deleted',
      toastSubtaskUpdated: 'Subtask updated',
      toastCompletedProj: '"{name}" completed!',
      placeholderNoteText: 'Write your thoughts, plans, or anything for today…',
      placeholderProjectName: 'Project name…',
      placeholderSubtaskName: 'Subtask name…',
      lblSave: 'Save changes',
      lblCancel: 'Cancel',
      lblDelete: 'Delete',
      lblClose: 'Close',
      lblPriority: 'Priority',
      lblAssignedDays: 'Assigned Days',
      lblDescription: 'Description',
      lblPriorityNone: 'None',
      lblPriorityHigh: 'High',
      lblPriorityMedium: 'Medium',
      lblPriorityLow: 'Low',
      lblShareTitle: 'Your Week Report',
      lblShareSubtitle: 'Export your week planner report to email draft, download as file, or copy markdown report to clipboard.',
      lblShareMailOpt: 'Email draft report',
      lblShareCopyOpt: 'Copy Markdown to clipboard',
      lblShareDownloadOpt: 'Download report (.txt)',
      welcomeTitle: 'Start your week',
      welcomeSubtitle: 'Break your work into projects and tasks, spread them across the week, and check things off as you go.',
      welcomeStep1: 'Create a project',
      welcomeStep2: 'Add subtasks to break it down',
      welcomeStep3: 'Assign subtasks to days & set priorities',
      welcomeCta: 'Add your first project',
      toastUndo: 'Undo'
    }
  };

  // ── Constants ──────────────────────────────────────────────
  const DAY_NAMES = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const DAY_FULL  = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const STORAGE_KEY = 'flowist_data_v3';
  const PROJECT_COLORS = [
    { name: 'red',    value: 'var(--pc-red)',    soft: 'var(--pc-red-soft)' },
    { name: 'orange', value: 'var(--pc-orange)', soft: 'var(--pc-orange-soft)' },
    { name: 'amber',  value: 'var(--pc-amber)',  soft: 'var(--pc-amber-soft)' },
    { name: 'green',  value: 'var(--pc-green)',  soft: 'var(--pc-green-soft)' },
    { name: 'teal',   value: 'var(--pc-teal)',   soft: 'var(--pc-teal-soft)' },
    { name: 'blue',   value: 'var(--pc-blue)',   soft: 'var(--pc-blue-soft)' },
    { name: 'purple', value: 'var(--pc-purple)', soft: 'var(--pc-purple-soft)' },
    { name: 'pink',   value: 'var(--pc-pink)',   soft: 'var(--pc-pink-soft)' },
  ];
  const PRIORITIES = ['none','high','medium','low'];

  // ── State ──────────────────────────────────────────────────
  let state = {
    projects: [],
    weekOffset: 0,
    focusDay: null,
    theme: 'auto',
    searchQuery: '',
    currentTab: 'planner',
    notes: {}, // key: ISO Date string -> text content
    selectedNoteDay: 0, // 0-6
    lang: 'vi', // default to Vietnamese
    currentUser: null // null (not logged in), 'guest' (guest mode), or email string
  };

  // Undo stack
  let undoStack = [];

  // ── Helpers ────────────────────────────────────────────────
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const uid = () => (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2,11) + Date.now().toString(36));

  // Translation helper
  function t(key, params = {}) {
    let txt = TRANSLATIONS[state.lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
    Object.entries(params).forEach(([k, v]) => {
      txt = txt.replace(`{${k}}`, v);
    });
    return txt;
  }

  function getWeekDates(offset = 0) {
    const now = new Date();
    const day = now.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    const mon = new Date(now);
    mon.setDate(now.getDate() + diff + (offset * 7));
    mon.setHours(0,0,0,0);
    return Array.from({length: 7}, (_, i) => {
      const d = new Date(mon);
      d.setDate(mon.getDate() + i);
      return d;
    });
  }

  function formatDate(d) {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[d.getMonth()]} ${d.getDate()}`;
  }

  function isSameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  function isToday(d) { return isSameDay(d, new Date()); }

  function getTodayDayIndex() {
    const dates = getWeekDates(state.weekOffset);
    return dates.findIndex(d => isToday(d));
  }

  function toLocalDateStr(d) {
    if (!d) return '';
    if (typeof d === 'string') d = new Date(d);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function getWeekKey(offset) {
    return toLocalDateStr(getWeekDates(offset)[0]);
  }

  // Timestamp of last time WE pushed to Supabase — used to ignore our own Realtime bounce-back
  let _lastCloudSyncAt = 0;
  let _cloudSyncTimer = null;

  // ── Supabase Cloud Sync & Fetch ─────────────────────────────────────
  async function _doSyncCloud(key, data) {
    if (!window.supabaseClient || !state.currentUser) return;
    _lastCloudSyncAt = Date.now();
    try {
      await window.supabaseClient
        .from('flowist_data')
        .upsert({
          user_key: key,
          payload: data,
          email: state.currentUser,
          updated_at: new Date().toISOString()
        }, { onConflict: 'user_key' });
    } catch (err) {
      console.warn('Supabase cloud sync error:', err);
    }
  }

  // Debounced wrapper — waits 1.5s of silence before actually uploading
  function syncSupabaseCloud(key, data) {
    clearTimeout(_cloudSyncTimer);
    _cloudSyncTimer = setTimeout(() => _doSyncCloud(key, data), 1500);
  }

  function escHtml(str) {
    const d = document.createElement('div');
    d.textContent = str || '';
    return d.innerHTML;
  }

  function svgUse(id, cls = '') {
    return `<svg class="${cls}"><use href="#${id}"/></svg>`;
  }

  function colorVar(colorName) {
    const c = PROJECT_COLORS.find(c => c.name === colorName);
    return c ? c.value : 'var(--accent)';
  }

  // Get key prefixed by current user to keep data separated
  function getUserStorageKey() {
    const prefix = state.currentUser ? encodeURIComponent(state.currentUser) : 'anonymous';
    return `${STORAGE_KEY}_${prefix}`;
  }



  async function syncArchiveSupabaseCloud(archiveData) {
    if (!window.supabaseClient || !state.currentUser) return;
    const key = getUserStorageKey();
    try {
      await window.supabaseClient
        .from('flowist_data')
        .upsert({ user_key: key, archive: archiveData, email: state.currentUser, updated_at: new Date().toISOString() }, { onConflict: 'user_key' });
    } catch (err) {
      console.warn('Supabase archive sync error:', err);
    }
  }

  async function loadCloudData() {
    if (!state.currentUser || !window.supabaseClient) return;
    const key = getUserStorageKey();
    try {
      const { data, error } = await window.supabaseClient
        .from('flowist_data')
        .select('payload, archive')
        .eq('user_key', key)
        .maybeSingle();

      if (data) {
        let updated = false;
        if (data.payload) {
          const cloudAllData = data.payload;
          const localAllData = JSON.parse(localStorage.getItem(key) || '{}');
          const merged = { ...localAllData, ...cloudAllData };
          localStorage.setItem(key, JSON.stringify(merged));

          const weekKey = getWeekKey(state.weekOffset);
          const weekData = merged[weekKey];
          if (weekData) {
            state.projects = weekData.projects || [];
            state.notes = weekData.notes || {};
            updated = true;
          }
        }

        if (data.archive) {
          const archiveKey = getArchiveKey();
          const localArchive = JSON.parse(localStorage.getItem(archiveKey) || '[]');
          const archiveMap = {};
          localArchive.forEach(item => { archiveMap[item.weekKey] = item; });
          data.archive.forEach(item => { archiveMap[item.weekKey] = item; });
          localStorage.setItem(archiveKey, JSON.stringify(Object.values(archiveMap)));
        }

        if (updated) {
          if (state.currentTab === 'notes') {
            renderNotes();
          } else if (state.currentTab === 'planner') {
            render();
          } else if (state.currentTab === 'stats') {
            renderStats();
          } else if (state.currentTab === 'archive') {
            renderArchive();
          }
        }
      }
    } catch (err) {
      console.warn('Supabase cloud load error:', err);
    }
  }

  // ── Persistence ────────────────────────────────────────────
  function save() {
    if (!state.currentUser) return; // don't save if not logged in
    const weekKey = getWeekKey(state.weekOffset);
    const key = getUserStorageKey();
    const allData = JSON.parse(localStorage.getItem(key) || '{}');
    allData[weekKey] = {
      projects: state.projects,
      notes: state.notes,
      savedAt: new Date().toISOString()
    };
    const keys = Object.keys(allData).sort().reverse();
    if (keys.length > 20) keys.slice(20).forEach(k => delete allData[k]);
    localStorage.setItem(key, JSON.stringify(allData));
    syncSupabaseCloud(key, allData);
  }

  // Sync-only local load (no cloud call, safe to call multiple times)
  function loadLocal() {
    if (!state.currentUser) return;
    const weekKey = getWeekKey(state.weekOffset);
    const key = getUserStorageKey();
    const allData = JSON.parse(localStorage.getItem(key) || '{}');
    const weekData = allData[weekKey];
    state.projects = weekData?.projects || [];
    state.notes = weekData?.notes || {};
  }

  // Legacy alias — used by navigateWeek and other places
  function load() {
    loadLocal();
  }

  function pushUndo(label) {
    undoStack.push({ label, snapshot: JSON.parse(JSON.stringify(state.projects)) });
    if (undoStack.length > 20) undoStack.shift();
  }

  function popUndo() {
    const entry = undoStack.pop();
    if (entry) {
      state.projects = entry.snapshot;
      save();
      render();
      toast(`Undone: ${entry.label}`);
    }
  }

  // ── Toast ──────────────────────────────────────────────────
  function toast(message, options = {}) {
    const container = $('#toastContainer');
    const el = document.createElement('div');
    el.className = 'toast';
    let html = `<span>${message}</span>`;
    if (options.undo) {
      html += `<button class="toast-undo">Undo</button>`;
    }
    el.innerHTML = html;
    container.appendChild(el);

    if (options.undo) {
      el.querySelector('.toast-undo').addEventListener('click', () => {
        popUndo();
        removeToast(el);
      });
    }

    const timeout = setTimeout(() => removeToast(el), options.duration || 3500);
    el._timeout = timeout;
  }

  function removeToast(el) {
    if (el._timeout) clearTimeout(el._timeout);
    el.classList.add('leaving');
    setTimeout(() => el.remove(), 250);
  }

  // ── Theme ──────────────────────────────────────────────────
  function applyTheme(theme) {
    state.theme = theme;
    localStorage.setItem('planner_theme', theme);
    const root = document.documentElement;

    if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', theme);
    }

    $$('.themebtn').forEach(btn => btn.classList.toggle('on', btn.dataset.theme === theme));

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = root.getAttribute('data-theme') === 'dark' ? '#1a1815' : '#f4f1ea';
  }

  // ── Sticky header ──────────────────────────────────────────
  function initStickyHead() {
    const head = $('#stickyhead');
    if (!head) return;
    const observer = new IntersectionObserver(
      ([e]) => head.classList.toggle('stuck', e.intersectionRatio < 1),
      { threshold: [1], rootMargin: '-1px 0px 0px 0px' }
    );
    observer.observe(head);
  }

  // ── Week Navigation ────────────────────────────────────────
  function updateWeekLabel() {
    const dates = getWeekDates(state.weekOffset);
    $('#weekRange').textContent = `${formatDate(dates[0])} – ${formatDate(dates[6])}`;

    let sub = '';
    if (state.weekOffset === 0) sub = t('thisWeek');
    else if (state.weekOffset === -1) sub = t('lastWeek');
    else if (state.weekOffset === 1) sub = t('nextWeek');
    else if (state.weekOffset < 0) sub = `${Math.abs(state.weekOffset)} ${t('weeksAgo')}`;
    else sub = t('inWeeks', { n: state.weekOffset });
    $('#weekSub').textContent = sub;

    const calTitle = $('#calendarTitle');
    if (calTitle) calTitle.textContent = state.weekOffset === 0 ? t('titleCalendar') : sub.charAt(0).toUpperCase() + sub.slice(1);
  }

  function navigateWeek(dir) {
    save();
    state.weekOffset += dir;
    state.focusDay = null;
    load();
    render();
  }

  // ── CRUD ───────────────────────────────────────────────────
  function addProject(name = '') {
    pushUndo(t('welcomeStep1'));
    const colorIdx = state.projects.length % PROJECT_COLORS.length;
    const project = {
      id: uid(),
      name: name || '',
      deadline: null,
      color: PROJECT_COLORS[colorIdx].name,
      subs: [],
      collapsed: false
    };
    state.projects.push(project);
    save();
    render();
    toast(t('toastProjectCreated'));
    setTimeout(() => {
      const el = document.querySelector(`[data-project="${project.id}"] .mt-title`);
      if (el) { el.focus(); el.select(); }
    }, 80);
    return project;
  }

  function deleteProject(id) {
    const p = state.projects.find(p => p.id === id);
    pushUndo(`delete "${p?.name || 'project'}"`);
    state.projects = state.projects.filter(p => p.id !== id);
    save();
    render();
    toast(t('toastProjectDeleted'), { undo: true });
  }

  function addSub(projectId, name = '') {
    const project = state.projects.find(p => p.id === projectId);
    if (!project) return;
    const sub = {
      id: uid(),
      name: name || '',
      done: false,
      days: [],
      description: '',
      priority: 'none'
    };
    project.subs.push(sub);
    save();
    render();
    setTimeout(() => {
      const el = document.querySelector(`[data-sub="${sub.id}"] .sub-title`);
      if (el) el.focus();
    }, 80);
    return sub;
  }

  function deleteSub(projectId, subId) {
    const project = state.projects.find(p => p.id === projectId);
    if (!project) return;
    const sub = project.subs.find(s => s.id === subId);
    pushUndo(`delete "${sub?.name || 'subtask'}"`);
    project.subs = project.subs.filter(s => s.id !== subId);
    save();
    render();
    toast(t('toastSubtaskDeleted'), { undo: true });
  }

  function toggleSub(projectId, subId) {
    const project = state.projects.find(p => p.id === projectId);
    if (!project) return;
    const sub = project.subs.find(s => s.id === subId);
    if (!sub) return;
    sub.done = !sub.done;
    save();
    render();
    if (sub.done) {
      const allDone = project.subs.length > 0 && project.subs.every(s => s.done);
      if (allDone) toast(t('toastCompletedProj', { name: project.name }));
    }
  }

  function toggleProjectCollapse(id) {
    const p = state.projects.find(p => p.id === id);
    if (p) { p.collapsed = !p.collapsed; save(); render(); }
  }

  // ── Search ─────────────────────────────────────────────────
  function matchesSearch(project) {
    if (!state.searchQuery) return true;
    const q = state.searchQuery.toLowerCase();
    if (project.name.toLowerCase().includes(q)) return true;
    return project.subs.some(s => s.name.toLowerCase().includes(q) || (s.description || '').toLowerCase().includes(q));
  }

  // ── Render Projects ────────────────────────────────────────
  function renderProjects() {
    const container = $('#projectsList');
    if (!container) return;

    const filtered = state.projects.filter(matchesSearch);

    if (state.projects.length === 0) {
      container.innerHTML = renderWelcome();
      return;
    }

    if (filtered.length === 0 && state.searchQuery) {
      container.innerHTML = `<div class="empty">${state.lang === 'vi' ? 'Không tìm thấy kết quả cho' : 'No results for'} "${escHtml(state.searchQuery)}"</div>`;
      return;
    }

    let html = '';
    filtered.forEach(project => {
      const totalSubs = project.subs.length;
      const doneSubs = project.subs.filter(s => s.done).length;
      const pct = totalSubs > 0 ? Math.round((doneSubs / totalSubs) * 100) : 0;
      const allDone = totalSubs > 0 && doneSubs === totalSubs;
      const cVar = `--project-color: ${colorVar(project.color)}`;

      html += `
        <div class="maintask" data-project="${project.id}" draggable="true" style="${cVar}">
          <div class="mt-head">
            <button class="mt-collapse-btn${project.collapsed ? ' collapsed' : ''}" data-collapse="${project.id}" title="Toggle collapse">
              ${svgUse('ico-chevdown')}
            </button>
            <div class="drag-handle proj-handle" title="Drag to reorder">
              ${svgUse('ico-grip', 'grip-ic')}
            </div>
            <input class="mt-title${allDone ? ' done' : ''}"
              value="${escHtml(project.name)}"
              placeholder="${t('placeholderProjectName')}"
              data-project-name="${project.id}" />
            ${project.deadline ? renderDeadlineChip(project.deadline) : ''}
            <div class="mini">
              <div class="track"><div class="fill${allDone ? ' complete' : ''}" style="width:${pct}%"></div></div>
              <span class="num">${doneSubs}/${totalSubs}</span>
            </div>
            <div class="mt-actions">
              <button class="iconbtn" title="Edit" data-edit-project="${project.id}">${svgUse('ico-edit')}</button>
              <button class="iconbtn danger" title="Delete" data-delete-project="${project.id}">${svgUse('ico-trash')}</button>
            </div>
          </div>
          ${!project.collapsed ? renderSubs(project) : ''}
        </div>`;
    });

    container.innerHTML = html;
    attachProjectEvents();
  }

  function renderDeadlineChip(dateStr) {
    const d = new Date(dateStr + 'T23:59:59');
    const now = new Date();
    const diff = Math.ceil((d - now) / (1000*60*60*24));
    let cls = '';
    let label = '';
    if (diff < 0) { 
      cls = 'over'; 
      label = state.lang === 'vi' ? `Quá hạn ${Math.abs(diff)} ngày` : `${Math.abs(diff)}d overdue`; 
    }
    else if (diff === 0) { 
      cls = 'soon'; 
      label = state.lang === 'vi' ? 'Hạn hôm nay' : 'Due today'; 
    }
    else if (diff <= 2) { 
      cls = 'soon'; 
      label = state.lang === 'vi' ? `Còn ${diff} ngày` : `${diff}d left`; 
    }
    else { 
      label = formatDate(d); 
    }
    return `<span class="deadchip ${cls}"><span class="deadchip-ico"></span>${label}</span>`;
  }

  function renderSubs(project) {
    const todayIdx = getTodayDayIndex();
    let html = '<div class="subs">';

    project.subs.forEach(sub => {
      const dayBadges = sub.days.length > 0 ? `<div class="day-badges">${sub.days.map(d =>
        `<span class="daybadge${d === todayIdx ? ' today' : ''}">${DAY_NAMES[d]}</span>`
      ).join('')}</div>` : '';

      const priorityBadge = sub.priority && sub.priority !== 'none'
        ? `<span class="priority-badge ${sub.priority}">${sub.priority === 'high' ? '!!!' : sub.priority === 'medium' ? '!!' : '!'}</span>`
        : '';

      html += `
        <div class="sub" data-sub="${sub.id}" data-project-id="${project.id}" draggable="true">
          <div class="drag-handle sub-handle">${svgUse('ico-grip', 'grip-ic')}</div>
          <div class="check${sub.done ? ' on' : ''}" data-toggle-sub="${project.id}:${sub.id}">
            ${svgUse('ico-check')}
          </div>
          <input class="sub-title${sub.done ? ' done' : ''}"
            value="${escHtml(sub.name)}"
            placeholder="${t('placeholderSubtaskName')}"
            data-sub-name="${project.id}:${sub.id}" />
          ${priorityBadge}
          ${dayBadges}
          ${sub.days.length === 0 ? `<button class="assignhint" data-assign-sub="${project.id}:${sub.id}">+ days</button>` : ''}
          <div class="sub-actions">
            <button class="iconbtn" title="Assign days" data-edit-sub="${project.id}:${sub.id}">${svgUse('ico-calendar')}</button>
            <button class="iconbtn danger" title="Delete" data-delete-sub="${project.id}:${sub.id}">${svgUse('ico-trash')}</button>
          </div>
        </div>`;
    });

    html += `
      <button class="addsub" data-add-sub="${project.id}">
        <span class="plus">+</span> ${state.lang === 'vi' ? 'Thêm nhiệm vụ con' : 'Add subtask'}
      </button>
    </div>`;
    return html;
  }

  function renderWelcome() {
    return `
      <div class="week-welcome">
        <div class="ww-title">${t('welcomeTitle')}</div>
        <p class="ww-sub">${t('welcomeSubtitle')}</p>
        <div class="ww-steps">
          <div class="ww-step active">
            <div class="ww-num">1</div>
            <div class="ww-step-h">${t('welcomeStep1')}</div>
          </div>
          <div class="ww-step">
            <div class="ww-num">2</div>
            <div class="ww-step-h">${t('welcomeStep2')}</div>
          </div>
          <div class="ww-step">
            <div class="ww-num">3</div>
            <div class="ww-step-h">${t('welcomeStep3')}</div>
          </div>
        </div>
        <button class="ww-cta" id="welcomeAddBtn">
          <span class="ww-cta-plus">+</span> ${t('welcomeCta')}
        </button>
      </div>`;
  }

  // ── Render Calendar ────────────────────────────────────────
  function renderDayStrip() {
    const dates = getWeekDates(state.weekOffset);
    const container = $('#daystrip');

    container.innerHTML = dates.map((date, i) => {
      const today = isToday(date);
      const selected = state.focusDay === i;
      const tasks = getTasksForDay(i);
      const doneTasks = tasks.filter(t => t.done).length;

      const dots = tasks.slice(0, 6).map(t =>
        `<div class="daypill-dot ${t.done ? 'done' : 'undone'}"></div>`
      ).join('');

      return `
        <div class="daypill${today ? ' today' : ''}${selected ? ' selected' : ''}" data-day-pill="${i}">
          <span class="daypill-name">${DAY_NAMES[i]}</span>
          <span class="daypill-date">${date.getDate()}</span>
          <div class="daypill-ind">${dots}</div>
        </div>`;
    }).join('');
  }

  function renderDays() {
    const container = $('#daysGrid');
    const dates = getWeekDates(state.weekOffset);
    const focusHint = $('#focusHint');
    const focusDayName = $('#focusDayName');

    if (state.focusDay !== null) {
      container.classList.add('focused');
      focusHint.classList.remove('hidden');
      focusDayName.textContent = DAY_FULL[state.focusDay];
    } else {
      container.classList.remove('focused');
      focusHint.classList.add('hidden');
    }

    container.innerHTML = dates.map((date, i) => {
      const today = isToday(date);
      const isFocused = state.focusDay === i;
      const isCollapsed = state.focusDay !== null && state.focusDay !== i;
      const tasks = getTasksForDay(i);
      const doneTasks = tasks.filter(t => t.done).length;
      const pctStr = tasks.length > 0 ? `${doneTasks}/${tasks.length}` : '';
      const allDone = tasks.length > 0 && doneTasks === tasks.length;

      let cls = 'day';
      if (today) cls += ' today';
      if (isFocused) cls += ' focus';
      if (isCollapsed) cls += ' collapsed';

      // Sort: undone first, then by priority
      const prioOrder = { high: 0, medium: 1, low: 2, none: 3 };
      const sorted = [...tasks].sort((a, b) => {
        if (a.done !== b.done) return a.done ? 1 : -1;
        return (prioOrder[a.priority] || 3) - (prioOrder[b.priority] || 3);
      });

      const todayLabel = state.lang === 'vi' ? 'Hôm nay' : 'Today';

      return `
        <div class="${cls}" data-day="${i}">
          <button class="day-head" data-focus-day="${i}">
            <span class="day-name">
              ${today ? `<em class="todaymark">${todayLabel}</em> · ` : ''}${DAY_NAMES[i]} ${date.getDate()}
            </span>
            ${allDone ? '<span class="day-dot"></span>' : ''}
            ${pctStr ? `<span class="day-pct">${pctStr}</span>` : ''}
          </button>
          <div class="day-body">
            ${sorted.length === 0 ? `<div class="day-empty">${state.lang === 'vi' ? 'chưa lập kế hoạch' : 'nothing planned'}</div>` : ''}
            ${sorted.map(t => renderChip(t)).join('')}
          </div>
        </div>`;
    }).join('');
  }

  function renderChip(task) {
    const cColor = colorVar(task.projectColor);
    const prioBadge = task.priority && task.priority !== 'none'
      ? `<div class="chip-priority"><span class="priority-badge ${task.priority}">${task.priority === 'high' ? '!!!' : task.priority === 'medium' ? '!!' : '!'}</span></div>`
      : '';

    return `
      <div class="chip${task.done ? ' done' : ''}" style="--chip-color: ${cColor}"
        data-chip-project="${task.projectId}" data-chip-sub="${task.subId}">
        <div class="chip-line">
          <div class="c-check" data-chip-toggle="${task.projectId}:${task.subId}">
            ${svgUse('ico-check')}
          </div>
          <div class="chip-body">
            <span class="chip-main" style="color: ${cColor}">${escHtml(task.projectName)}</span>
            <span class="chip-sub">${escHtml(task.subName)}</span>
            ${task.description ? `<span class="chip-desc">${escHtml(task.description)}</span>` : ''}
          </div>
        </div>
        ${prioBadge}
      </div>`;
  }

  function getTasksForDay(dayIndex) {
    const tasks = [];
    state.projects.forEach(project => {
      project.subs.forEach(sub => {
        if (sub.days.includes(dayIndex)) {
          tasks.push({
            projectId: project.id,
            subId: sub.id,
            projectName: project.name || 'Untitled',
            projectColor: project.color,
            subName: sub.name || 'Untitled',
            done: sub.done,
            description: sub.description || '',
            priority: sub.priority || 'none'
          });
        }
      });
    });
    return tasks;
  }

  // ── Overall Progress ───────────────────────────────────────
  function updateOverallProgress() {
    let total = 0, done = 0;
    state.projects.forEach(p => p.subs.forEach(s => { total++; if (s.done) done++; }));
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const fill = $('#overallFill');
    const pctEl = $('#overallPct');
    if (fill) {
      fill.style.width = pct + '%';
      fill.classList.toggle('complete', pct === 100 && total > 0);
    }
    if (pctEl) {
      pctEl.textContent = total > 0 ? `${done} / ${total} tasks · ${pct}%` : '0 tasks';
      pctEl.classList.toggle('complete', pct === 100 && total > 0);
    }
  }

  // ── Modal System ───────────────────────────────────────────
  function showModal(content) {
    const root = $('#modalRoot');
    root.innerHTML = `<div class="scrim" id="scrimOverlay">${content}</div>`;
    root.querySelector('.scrim').addEventListener('click', e => {
      if (e.target.id === 'scrimOverlay') closeModal();
    });
    const handler = e => { if (e.key === 'Escape') { closeModal(); document.removeEventListener('keydown', handler); }};
    document.addEventListener('keydown', handler);
  }

  function closeModal() { $('#modalRoot').innerHTML = ''; }

  // ── Edit Subtask Modal ─────────────────────────────────────
  function showEditSubModal(projectId, subId) {
    const project = state.projects.find(p => p.id === projectId);
    if (!project) return;
    const sub = project.subs.find(s => s.id === subId);
    if (!sub) return;

    const todayIdx = getTodayDayIndex();

    const dayButtons = DAY_NAMES.map((name, i) =>
      `<button class="daytog${sub.days.includes(i) ? ' on' : ''}${i === todayIdx ? ' today' : ''}" data-day-toggle="${i}">${name}</button>`
    ).join('');

    const priorityBtns = PRIORITIES.map(p => {
      let label = t('lblPriorityNone');
      if (p === 'high') label = t('lblPriorityHigh');
      if (p === 'medium') label = t('lblPriorityMedium');
      if (p === 'low') label = t('lblPriorityLow');
      return `<button class="priority-opt ${p}${sub.priority === p || (!sub.priority && p === 'none') ? ' on' : ''}" data-priority="${p}">${label}</button>`;
    }).join('');

    showModal(`
      <div class="modal">
        <div class="modal-head">
          <div class="modal-eyebrow">${escHtml(project.name || t('titleProjects'))}</div>
          <div class="modal-title">${escHtml(sub.name || t('placeholderSubtaskName'))}</div>
        </div>
        <div class="modal-body">
          <div class="field">
            <label>${state.lang === 'vi' ? 'Tên nhiệm vụ' : 'Name'}</label>
            <input type="text" id="modalSubName" value="${escHtml(sub.name)}" placeholder="${t('placeholderSubtaskName')}" />
          </div>
          <div class="field">
            <label>${t('lblDescription')}</label>
            <textarea id="modalSubDesc" placeholder="${state.lang === 'vi' ? 'Thêm ghi chú, chi tiết công việc…' : 'Add notes, details, or context…'}">${escHtml(sub.description || '')}</textarea>
          </div>
          <div class="field">
            <label>${t('lblPriority')}</label>
            <div class="priority-pick" id="modalPriority">${priorityBtns}</div>
          </div>
          <div class="field">
            <label>${t('lblAssignedDays')}</label>
            <div class="dayspick" id="modalDaysPick">${dayButtons}</div>
          </div>
        </div>
        <div class="modal-foot">
          <button class="btn ghost" id="modalCancel">${t('lblCancel')}</button>
          <button class="btn primary" id="modalSave">${t('lblSave')}</button>
        </div>
      </div>`);

    let selectedDays = [...sub.days];
    let selectedPriority = sub.priority || 'none';

    // Day toggles
    $$('#modalDaysPick .daytog').forEach(btn => {
      btn.addEventListener('click', () => {
        const d = parseInt(btn.dataset.dayToggle);
        btn.classList.toggle('on');
        if (selectedDays.includes(d)) selectedDays = selectedDays.filter(x => x !== d);
        else { selectedDays.push(d); selectedDays.sort(); }
      });
    });

    // Priority toggles
    $$('#modalPriority .priority-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('#modalPriority .priority-opt').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        selectedPriority = btn.dataset.priority;
      });
    });

    $('#modalSave').addEventListener('click', () => {
      sub.name = $('#modalSubName').value.trim() || sub.name;
      sub.description = $('#modalSubDesc').value.trim();
      sub.days = selectedDays;
      sub.priority = selectedPriority;
      save();
      closeModal();
      render();
      toast(t('toastSubtaskUpdated'));
    });

    $('#modalCancel').addEventListener('click', closeModal);
    setTimeout(() => $('#modalSubName')?.focus(), 100);
  }

  // ── Edit Project Modal ─────────────────────────────────────
  function showEditProjectModal(projectId) {
    const project = state.projects.find(p => p.id === projectId);
    if (!project) return;

    const colorSwatches = PROJECT_COLORS.map(c =>
      `<button class="color-swatch${project.color === c.name ? ' on' : ''}" style="background: ${c.value}" data-color="${c.name}"></button>`
    ).join('');

    showModal(`
      <div class="modal">
        <div class="modal-head">
          <div class="modal-eyebrow">${state.lang === 'vi' ? 'Chỉnh sửa dự án' : 'Edit Project'}</div>
          <div class="modal-title">${escHtml(project.name || 'Untitled')}</div>
        </div>
        <div class="modal-body">
          <div class="field">
            <label>${state.lang === 'vi' ? 'Tên dự án' : 'Project Name'}</label>
            <input type="text" id="modalProjectName" value="${escHtml(project.name)}" placeholder="${t('placeholderProjectName')}" />
          </div>
          <div class="field">
            <label>${state.lang === 'vi' ? 'Màu sắc' : 'Color'}</label>
            <div class="color-pick" id="modalColorPick">${colorSwatches}</div>
          </div>
          <div class="field">
            <label>${state.lang === 'vi' ? 'Hạn hoàn thành' : 'Deadline'}</label>
            <div class="deadrow">
              <input type="date" class="dl-date" id="modalDeadline" value="${project.deadline || ''}" />
            </div>
          </div>
        </div>
        <div class="modal-foot">
          <button class="btn ghost" id="modalCancel">${t('lblCancel')}</button>
          <button class="btn primary" id="modalSave">${t('lblSave')}</button>
        </div>
      </div>`);

    let selectedColor = project.color;

    $$('#modalColorPick .color-swatch').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('#modalColorPick .color-swatch').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        selectedColor = btn.dataset.color;
      });
    });

    $('#modalSave').addEventListener('click', () => {
      project.name = $('#modalProjectName').value.trim() || project.name;
      project.deadline = $('#modalDeadline').value || null;
      project.color = selectedColor;
      save();
      closeModal();
      render();
      toast(t('toastProjectUpdated'));
    });

    $('#modalCancel').addEventListener('click', closeModal);
    setTimeout(() => $('#modalProjectName')?.focus(), 100);
  }

  // ── Confirm Modal ──────────────────────────────────────────
  function showConfirm(message, onConfirm) {
    showModal(`
      <div class="modal confirm">
        <div class="modal-head">
          <div class="modal-title">${state.lang === 'vi' ? 'Xác nhận' : 'Confirm'}</div>
        </div>
        <div class="modal-body">
          <p class="confirm-msg">${message}</p>
        </div>
        <div class="modal-foot confirm-foot">
          <button class="btn danger" id="confirmYes">${t('lblDelete')}</button>
          <button class="btn ghost" id="confirmNo">${t('lblCancel')}</button>
        </div>
      </div>`);
    $('#confirmYes').addEventListener('click', () => { closeModal(); onConfirm(); });
    $('#confirmNo').addEventListener('click', closeModal);
  }

  // ── Attach Events ──────────────────────────────────────────
  function attachProjectEvents() {
    // Collapse toggles
    $$('[data-collapse]').forEach(btn => {
      btn.addEventListener('click', () => toggleProjectCollapse(btn.dataset.collapse));
    });

    // Toggle sub done
    $$('[data-toggle-sub]').forEach(el => {
      el.addEventListener('click', () => {
        const [pId, sId] = el.dataset.toggleSub.split(':');
        toggleSub(pId, sId);
      });
    });

    // Add subtask
    $$('[data-add-sub]').forEach(btn => {
      btn.addEventListener('click', () => addSub(btn.dataset.addSub));
    });

    // Delete subtask
    $$('[data-delete-sub]').forEach(btn => {
      btn.addEventListener('click', () => {
        const [pId, sId] = btn.dataset.deleteSub.split(':');
        deleteSub(pId, sId);
      });
    });

    // Delete project
    $$('[data-delete-project]').forEach(btn => {
      btn.addEventListener('click', () => {
        const p = state.projects.find(p => p.id === btn.dataset.deleteProject);
        showConfirm(`Delete <strong>${escHtml(p?.name || 'this project')}</strong> and all its subtasks?`, () => {
          deleteProject(btn.dataset.deleteProject);
        });
      });
    });

    // Edit project
    $$('[data-edit-project]').forEach(btn => {
      btn.addEventListener('click', () => showEditProjectModal(btn.dataset.editProject));
    });

    // Edit subtask
    $$('[data-edit-sub]').forEach(btn => {
      btn.addEventListener('click', () => {
        const [pId, sId] = btn.dataset.editSub.split(':');
        showEditSubModal(pId, sId);
      });
    });

    // Assign hint
    $$('[data-assign-sub]').forEach(btn => {
      btn.addEventListener('click', () => {
        const [pId, sId] = btn.dataset.assignSub.split(':');
        showEditSubModal(pId, sId);
      });
    });

    // Inline edit project name
    $$('[data-project-name]').forEach(input => {
      input.addEventListener('blur', () => {
        const p = state.projects.find(p => p.id === input.dataset.projectName);
        if (p && p.name !== input.value.trim()) {
          p.name = input.value.trim();
          save();
          updateOverallProgress();
          renderDayStrip();
          renderDays();
        }
      });
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
        if (e.key === 'Escape') { input.blur(); }
      });
    });

    // Inline edit subtask name
    $$('[data-sub-name]').forEach(input => {
      input.addEventListener('blur', () => {
        const [pId, sId] = input.dataset.subName.split(':');
        const p = state.projects.find(p => p.id === pId);
        if (p) {
          const s = p.subs.find(s => s.id === sId);
          if (s && s.name !== input.value.trim()) {
            s.name = input.value.trim();
            save();
            updateOverallProgress();
            renderDayStrip();
            renderDays();
          }
        }
      });
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          input.blur();
          const [pId] = input.dataset.subName.split(':');
          if (input.value.trim()) addSub(pId);
        }
        if (e.key === 'Escape') input.blur();
      });
    });

    // Welcome
    const wb = document.getElementById('welcomeAddBtn');
    if (wb) wb.addEventListener('click', () => addProject());
  }

  function attachCalendarEvents() {
    // Day pill click
    $$('[data-day-pill]').forEach(pill => {
      pill.addEventListener('click', () => {
        const d = parseInt(pill.dataset.dayPill);
        state.focusDay = state.focusDay === d ? null : d;
        render();
      });
    });

    // Day head click
    $$('[data-focus-day]').forEach(btn => {
      btn.addEventListener('click', () => {
        const d = parseInt(btn.dataset.focusDay);
        state.focusDay = state.focusDay === d ? null : d;
        render();
      });
    });

    // Chip toggle
    $$('[data-chip-toggle]').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        const [pId, sId] = el.dataset.chipToggle.split(':');
        toggleSub(pId, sId);
      });
    });

    // Chip click → edit
    $$('.chip').forEach(chip => {
      chip.addEventListener('click', e => {
        if (e.target.closest('.c-check')) return;
        showEditSubModal(chip.dataset.chipProject, chip.dataset.chipSub);
      });
    });
  }



  // ── Tab Management ─────────────────────────────────────────
  function switchTab(tabId) {
    state.currentTab = tabId;
    $$('.page').forEach(page => page.classList.remove('active'));
    $$('.tabbar-btn').forEach(btn => btn.classList.toggle('on', btn.dataset.tab === tabId));
    $('#planNavBtn')?.classList.toggle('active', tabId === 'planner');
    $('#statsNavBtn')?.classList.toggle('active', tabId === 'stats');
    $('#archiveNavBtn')?.classList.toggle('active', tabId === 'archive');
    $('#notesNavBtn')?.classList.toggle('active', tabId === 'notes');

    if (tabId === 'planner') {
      $('#pagePlanner').classList.add('active');
    } else if (tabId === 'notes') {
      $('#pageNotes').classList.add('active');
      renderNotes();
    } else if (tabId === 'stats') {
      $('#pageStats').classList.add('active');
      renderStats();
    } else if (tabId === 'archive') {
      $('#pageArchive').classList.add('active');
      renderArchive();
    }
  }

  // ── Daily Notes ────────────────────────────────────────────
  function getNoteDateKey(dayIdx) {
    const dates = getWeekDates(state.weekOffset);
    return toLocalDateStr(dates[dayIdx]);
  }

  function renderNotes() {
    const container = $('#notesDaystrip');
    const dates = getWeekDates(state.weekOffset);

    container.innerHTML = dates.map((date, i) => {
      const active = state.selectedNoteDay === i;
      const noteKey = toLocalDateStr(date);
      const hasContent = !!state.notes[noteKey];

      return `
        <div class="notes-daypill${active ? ' active' : ''}" data-note-day="${i}">
          <span class="notes-daypill-name">${DAY_NAMES[i]}</span>
          <span class="notes-daypill-date">${date.getDate()}</span>
          ${hasContent ? '<div class="daypill-dot done" style="margin: 4px auto 0"></div>' : ''}
        </div>`;
    }).join('');

    const activeDate = dates[state.selectedNoteDay];
    const key = toLocalDateStr(activeDate);
    const todayLabel = state.lang === 'vi' ? 'Hôm nay · ' : 'Today · ';
    $('#noteDayLabel').textContent = `${isToday(activeDate) ? todayLabel : ''}${state.lang === 'vi' ? DAY_FULL_VI[state.selectedNoteDay] : DAY_FULL[state.selectedNoteDay]} (${formatDate(activeDate)})`;
    
    const textarea = $('#noteTextarea');
    textarea.placeholder = t('placeholderNoteText');
    textarea.value = state.notes[key] || '';

    // Attach click events to pills
    $$('[data-note-day]').forEach(pill => {
      pill.addEventListener('click', () => {
        saveCurrentNote();
        state.selectedNoteDay = parseInt(pill.dataset.noteDay);
        renderNotes();
      });
    });
  }

  const DAY_FULL_VI = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'];

  function saveCurrentNote() {
    const textarea = $('#noteTextarea');
    if (!textarea) return;
    // Guard: don't overwrite Supabase with empty state before cloud data arrives
    if (!cloudLoaded && state.currentUser !== 'guest') {
      // Still save locally — cloud sync happens after loadCloudData resolves
      const dates = getWeekDates(state.weekOffset);
      const key = toLocalDateStr(dates[state.selectedNoteDay]);
      const val = textarea.value;
      if (val.trim()) state.notes[key] = val;
      else delete state.notes[key];
      // Only write to localStorage, skip Supabase until cloud is ready
      const weekKey = getWeekKey(state.weekOffset);
      const storageKey = getUserStorageKey();
      const allData = JSON.parse(localStorage.getItem(storageKey) || '{}');
      allData[weekKey] = { projects: state.projects, notes: state.notes, savedAt: new Date().toISOString() };
      localStorage.setItem(storageKey, JSON.stringify(allData));
      return;
    }
    const dates = getWeekDates(state.weekOffset);
    const key = toLocalDateStr(dates[state.selectedNoteDay]);
    const val = textarea.value;
    if (val.trim()) {
      state.notes[key] = val;
    } else {
      delete state.notes[key];
    }
    save();
  }

  // ── Statistics ─────────────────────────────────────────────
  // ── Archive Helpers ─────────────────────────────────────────
  function getArchiveKey() {
    return `flowist_archive_${state.currentUser || 'guest'}`;
  }

  function getArchiveData() {
    return JSON.parse(localStorage.getItem(getArchiveKey()) || '[]');
  }

  function saveArchiveData(data) {
    localStorage.setItem(getArchiveKey(), JSON.stringify(data));
    syncArchiveSupabaseCloud(data);
  }

  // Auto-archive the current week snapshot when navigating weeks
  function autoArchiveCurrentWeek() {
    if (!state.projects.length) return;
    const dates = getWeekDates(state.weekOffset);
    const weekKey = toLocalDateStr(dates[0]);
    const archive = getArchiveData();
    // Don't duplicate
    if (archive.find(w => w.weekKey === weekKey)) return;
    const totalTasks = state.projects.reduce((s, p) => s + p.subs.length, 0);
    if (totalTasks === 0) return;
    const doneTasks = state.projects.reduce((s, p) => s + p.subs.filter(x => x.done).length, 0);
    const dayHasTasks = Array(7).fill(false);
    state.projects.forEach(p => p.subs.forEach(s => s.days.forEach(d => { dayHasTasks[d] = true; })));
    archive.unshift({
      weekKey,
      startDate: dates[0].toISOString(),
      endDate: dates[6].toISOString(),
      totalTasks,
      doneTasks,
      dayHasTasks,
      completionPct: Math.round((doneTasks / totalTasks) * 100)
    });
    saveArchiveData(archive);
  }

  function renderArchive() {
    const archive = getArchiveData();
    const listEl = $('#archiveList');
    const countEl = $('#archiveCount');
    const DAY_SHORT = state.lang === 'vi'
      ? ['T2','T3','T4','T5','T6','T7','CN']
      : ['M','T','W','T','F','S','S'];
    if (countEl) {
      const n = archive.length;
      countEl.textContent = state.lang === 'vi'
        ? `${n} tuần đã lưu trữ`
        : `${n} archived week${n !== 1 ? 's' : ''}`;
    }
    if (!listEl) return;
    if (!archive.length) {
      listEl.innerHTML = `<div class="archive-empty">${state.lang === 'vi' ? 'Chưa có tuần nào được lưu trữ.' : 'No archived weeks yet.'}</div>`;
      return;
    }
    listEl.innerHTML = archive.map((week, idx) => {
      const start = new Date(week.startDate);
      const end = new Date(week.endDate);
      const fmt = d => d.toLocaleDateString(state.lang === 'vi' ? 'vi-VN' : 'en-US', { day: 'numeric', month: 'short' });
      const dayDots = (week.dayHasTasks || Array(7).fill(false))
        .map((has, i) => `<span class="archive-daydot${has ? ' has-tasks' : ''}" title="${DAY_SHORT[i]}">${DAY_SHORT[i]}</span>`)
        .join('');
      return `
        <div class="archive-row" data-week-idx="${idx}">
          <div class="archive-meta">
            <span class="archive-daterange">${fmt(start)} – ${fmt(end)}</span>
            <span class="archive-tasks">${week.doneTasks}/${week.totalTasks} ${state.lang === 'vi' ? 'xong' : 'done'}</span>
          </div>
          <div class="archive-daydots">
            ${dayDots}
          </div>
          <div>
            <span class="archive-pct">${week.completionPct}%</span>
            <span class="archive-pct-label">${state.lang === 'vi' ? 'hoàn thành' : 'complete'}</span>
          </div>
          <div class="archive-actions">
            <button class="archive-icon-btn" data-copy-idx="${idx}" title="Copy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></button>
            <button class="archive-icon-btn del" data-del-idx="${idx}" title="Delete">×</button>
          </div>
        </div>`;
    }).join('');

    // Bind copy/delete buttons
    listEl.querySelectorAll('[data-copy-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.copyIdx);
        const week = archive[idx];
        const start = new Date(week.startDate);
        const end = new Date(week.endDate);
        const fmt = d => d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
        const text = `${fmt(start)} – ${fmt(end)}: ${week.doneTasks}/${week.totalTasks} tasks (${week.completionPct}% complete)`;
        navigator.clipboard?.writeText(text);
        toast(t('copied'));
      });
    });
    listEl.querySelectorAll('[data-del-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.delIdx);
        const a = getArchiveData();
        a.splice(idx, 1);
        saveArchiveData(a);
        renderArchive();
      });
    });
  }

  // ── Full Stats Render ────────────────────────────────────────
  function renderStats() {
    let totalTasks = 0, doneTasks = 0, highPrioCount = 0, highPrioDone = 0;
    state.projects.forEach(p => p.subs.forEach(s => {
      totalTasks++;
      if (s.done) doneTasks++;
      if (s.priority === 'high') { highPrioCount++; if (s.done) highPrioDone++; }
    }));
    const completionRate = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

    // Archive data for cross-week stats
    const archive = getArchiveData();
    const weeksTracked = archive.length + 1; // +1 for current
    const allCompletions = archive.map(w => w.completionPct);
    const avgCompletion = allCompletions.length
      ? Math.round(allCompletions.reduce((a, b) => a + b, 0) / allCompletions.length)
      : completionRate;
    const bestWeekPct = allCompletions.length ? Math.max(...allCompletions, completionRate) : completionRate;
    const bestWeekEntry = archive.find(w => w.completionPct === bestWeekPct);
    const bestWeekLabel = bestWeekEntry
      ? new Date(bestWeekEntry.startDate).toLocaleDateString(state.lang === 'vi' ? 'vi-VN' : 'en-US', { day: 'numeric', month: 'short' })
        + ' – ' + new Date(bestWeekEntry.endDate).toLocaleDateString(state.lang === 'vi' ? 'vi-VN' : 'en-US', { day: 'numeric', month: 'short' })
      : (state.lang === 'vi' ? 'Tuần này' : 'This week');

    // Streak: consecutive weeks with > 0 tasks done
    let streak = 0;
    for (const w of archive) {
      if (w.doneTasks > 0) streak++;
      else break;
    }
    if (doneTasks > 0) streak++;

    // Render summary cards
    $('#statCards').innerHTML = `
      <div class="stat-card">
        <span class="stat-num">${avgCompletion}%</span>
        <span class="stat-lab">${state.lang === 'vi' ? 'Tỉ lệ trung bình' : 'Avg Completion'}</span>
        <span class="stat-sub">${t('lblTasksDone', { done: doneTasks, total: totalTasks })}</span>
      </div>
      <div class="stat-card">
        <span class="stat-num">${bestWeekPct}%</span>
        <span class="stat-lab">${state.lang === 'vi' ? 'Tuần tốt nhất' : 'Best Week'}</span>
        <span class="stat-sub">${bestWeekLabel}</span>
      </div>
      <div class="stat-card">
        <span class="stat-num">${streak}</span>
        <span class="stat-lab">${state.lang === 'vi' ? 'Chuỗi tuần liên tiếp' : 'Week Streak'}</span>
        <span class="stat-sub">${streak > 0 ? (state.lang === 'vi' ? 'tuần liên tiếp' : 'weeks in a row') : (state.lang === 'vi' ? 'chưa có chuỗi' : 'no streak yet')}</span>
      </div>
      <div class="stat-card">
        <span class="stat-num">${weeksTracked}</span>
        <span class="stat-lab">${state.lang === 'vi' ? 'Tuần đã theo dõi' : 'Weeks Tracked'}</span>
        <span class="stat-sub">${state.lang === 'vi' ? 'toàn thời gian' : 'all-time'}</span>
      </div>
    `;

    renderHeatmap(archive);
    renderWeekdayChart();
  }

  let weekdayChartMode = 'completion';

  function renderHeatmap(archive) {
    const grid = $('#heatmapGrid');
    if (!grid) return;
    // Build a map of date -> completionPct
    const dateMap = {};
    archive.forEach(w => {
      const start = new Date(w.startDate);
      for (let i = 0; i < 7; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        const key = toLocalDateStr(d);
        const pct = w.completionPct;
        dateMap[key] = pct;
      }
    });
    // Fill current week
    const dates = getWeekDates(state.weekOffset);
    dates.forEach(d => {
      const key = toLocalDateStr(d);
      if (!(key in dateMap)) dateMap[key] = 0;
    });

    // Build 52 weeks grid (Mon-Sun columns)
    const today = new Date();
    const cells = [];
    for (let w = 51; w >= 0; w--) {
      for (let d = 0; d < 7; d++) {
        const date = new Date(today);
        date.setDate(today.getDate() - (w * 7) - (today.getDay() === 0 ? 6 : today.getDay() - 1) + d);
        const key = toLocalDateStr(date);
        const pct = dateMap[key];
        let level = 0;
        if (pct !== undefined) {
          if (pct >= 75) level = 3;
          else if (pct >= 40) level = 2;
          else if (pct > 0) level = 1;
          else level = 0;
        }
        const isFuture = date > today;
        cells.push(`<div class="hm-day" data-level="${isFuture ? 0 : (pct !== undefined ? level : 0)}" title="${key}: ${pct !== undefined ? pct + '%' : (state.lang === 'vi' ? 'Không có dữ liệu' : 'No data')}"></div>`);
      }
    }
    grid.innerHTML = cells.join('');
  }

  function renderWeekdayChart() {
    const chartEl = $('#weekdayChart');
    if (!chartEl) return;
    const DAY_SHORT = state.lang === 'vi'
      ? ['T2','T3','T4','T5','T6','T7','CN']
      : ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

    const dayCompleted = Array(7).fill(0);
    const dayTotal = Array(7).fill(0);
    state.projects.forEach(p => p.subs.forEach(s => {
      s.days.forEach(d => {
        dayTotal[d]++;
        if (s.done) dayCompleted[d]++;
      });
    }));

    const maxVal = weekdayChartMode === 'completion'
      ? Math.max(...dayTotal.map((t, i) => t > 0 ? Math.round(dayCompleted[i] / t * 100) : 0), 1)
      : Math.max(...dayTotal, 1);

    chartEl.innerHTML = DAY_SHORT.map((name, i) => {
      const total = dayTotal[i];
      const done = dayCompleted[i];
      let val, label;
      if (weekdayChartMode === 'completion') {
        val = total > 0 ? Math.round((done / total) * 100) : 0;
        label = total > 0 ? val + '%' : '—';
      } else {
        val = total;
        label = total.toString();
      }
      const height = maxVal > 0 ? Math.max((val / maxVal) * 110, val > 0 ? 4 : 0) : 0;
      return `
        <div class="wd-col">
          <span class="wd-pct">${label}</span>
          <div class="wd-bar-track">
            <div class="wd-bar-fill" style="height:${height}px"></div>
          </div>
          <span class="wd-label">${name}</span>
        </div>`;
    }).join('');
  }

  // ── Sharing, Email & Export ────────────────────────────────
  function generateReportText() {
    const dates = getWeekDates(state.weekOffset);
    let md = `# ${state.lang === 'vi' ? 'Báo cáo kế hoạch tuần' : 'Weekly Planner Report'}: ${formatDate(dates[0])} – ${formatDate(dates[6])}\n\n`;
    
    state.projects.forEach(p => {
      const doneCount = p.subs.filter(s => s.done).length;
      md += `## [${p.done ? 'x' : ' '}] ${state.lang === 'vi' ? 'Dự án' : 'Project'}: ${p.name || 'Untitled'} (${doneCount}/${p.subs.length})\n`;
      p.subs.forEach(s => {
        const assignedDays = s.days.map(d => DAY_NAMES[d]).join(', ');
        md += `  - [${s.done ? 'x' : ' '}] ${s.name} ${s.priority !== 'none' ? `[Priority: ${s.priority.toUpperCase()}]` : ''} ${assignedDays ? `(${assignedDays})` : ''}\n`;
        if (s.description) md += `    *Notes: ${s.description}*\n`;
      });
      md += '\n';
    });

    const hasNotes = Object.values(state.notes).some(n => n.trim().length > 0);
    if (hasNotes) {
      md += `## ${state.lang === 'vi' ? 'Ghi chú hàng ngày' : 'Daily Notes'}\n`;
      dates.forEach((date, i) => {
        const key = toLocalDateStr(date);
        if (state.notes[key]) {
          md += `### ${state.lang === 'vi' ? DAY_FULL_VI[i] : DAY_FULL[i]} (${formatDate(date)})\n${state.notes[key]}\n\n`;
        }
      });
    }

    return md;
  }

  function showShareModal() {
    showModal(`
      <div class="modal">
        <div class="modal-head">
          <div class="modal-eyebrow">${state.lang === 'vi' ? 'Chia sẻ & Xuất' : 'Export & Share'}</div>
          <div class="modal-title">${t('lblShareTitle')}</div>
        </div>
        <div class="modal-body">
          <p class="confirm-msg" style="margin-bottom: 8px">${t('lblShareSubtitle')}</p>
          <div class="share-options">
            <button class="share-btn-opt" id="shareMail">
              ${svgUse('ico-mail')} ${t('lblShareMailOpt')}
            </button>
            <button class="share-btn-opt" id="shareCopy">
              ${svgUse('ico-copy')} ${t('lblShareCopyOpt')}
            </button>
            <button class="share-btn-opt" id="shareDownload">
              ${svgUse('ico-download')} ${t('lblShareDownloadOpt')}
            </button>
          </div>
        </div>
        <div class="modal-foot">
          <button class="btn ghost" style="width: 100%" id="modalCloseShare">${t('lblClose')}</button>
        </div>
      </div>`);

    $('#modalCloseShare').addEventListener('click', closeModal);

    $('#shareMail').addEventListener('click', () => {
      const dates = getWeekDates(state.weekOffset);
      const subject = encodeURIComponent(`${t('emailReportSubject')} (${formatDate(dates[0])} - ${formatDate(dates[6])})`);
      const body = encodeURIComponent(generateReportText());
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
      closeModal();
      toast(t('emailClientOpened'));
    });

    $('#shareCopy').addEventListener('click', () => {
      const text = generateReportText();
      navigator.clipboard.writeText(text).then(() => {
        closeModal();
        toast(t('copiedToClipboard'));
      }).catch(() => {
        toast('Failed to copy');
      });
    });

    $('#shareDownload').addEventListener('click', () => {
      const dates = getWeekDates(state.weekOffset);
      const filename = `week-report-${toLocalDateStr(dates[0])}.txt`;
      const blob = new Blob([generateReportText()], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      closeModal();
      toast(t('downloadedReport'));
    });
  }

  // ── Drag & Drop ────────────────────────────────────────────
  let dragData = null;

  function initDragDrop() {
    const container = $('#projectsList');
    if (!container) return;

    container.addEventListener('dragstart', e => {
      const subEl = e.target.closest('.sub');
      const projEl = e.target.closest('.maintask');

      if (subEl?.draggable) {
        dragData = { type: 'sub', el: subEl, projectId: subEl.dataset.projectId, subId: subEl.dataset.sub };
        subEl.classList.add('dragging');
      } else if (projEl?.draggable) {
        dragData = { type: 'project', el: projEl, projectId: projEl.dataset.project };
        projEl.classList.add('dragging');
      }
      if (dragData) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', dragData.type);
      }
    });

    container.addEventListener('dragend', () => {
      $$('.dragging, .drop-before, .drop-after').forEach(el => el.classList.remove('dragging', 'drop-before', 'drop-after'));
      dragData = null;
    });

    container.addEventListener('dragover', e => {
      e.preventDefault();
      $$('.drop-before, .drop-after').forEach(el => el.classList.remove('drop-before', 'drop-after'));
      if (!dragData) return;

      if (dragData.type === 'project') {
        const target = e.target.closest('.maintask');
        if (target && target !== dragData.el) {
          const rect = target.getBoundingClientRect();
          target.classList.add(e.clientY < rect.top + rect.height / 2 ? 'drop-before' : 'drop-after');
        }
      } else if (dragData.type === 'sub') {
        const target = e.target.closest('.sub');
        if (target && target.dataset.sub !== dragData.subId) {
          const rect = target.getBoundingClientRect();
          target.classList.add(e.clientY < rect.top + rect.height / 2 ? 'drop-before' : 'drop-after');
        }
      }
    });

    container.addEventListener('drop', e => {
      e.preventDefault();
      if (!dragData) return;

      if (dragData.type === 'project') {
        const target = e.target.closest('.maintask');
        if (target && target !== dragData.el) {
          const fromIdx = state.projects.findIndex(p => p.id === dragData.projectId);
          const toId = target.dataset.project;
          let toIdx = state.projects.findIndex(p => p.id === toId);
          if (fromIdx >= 0 && toIdx >= 0) {
            const [moved] = state.projects.splice(fromIdx, 1);
            toIdx = state.projects.findIndex(p => p.id === toId);
            const rect = target.getBoundingClientRect();
            const insertAt = e.clientY < rect.top + rect.height / 2 ? toIdx : toIdx + 1;
            state.projects.splice(insertAt, 0, moved);
            save();
            render();
          }
        }
      } else if (dragData.type === 'sub') {
        const target = e.target.closest('.sub');
        if (target && target.dataset.sub !== dragData.subId) {
          const fromProj = state.projects.find(p => p.id === dragData.projectId);
          const toProj = state.projects.find(p => p.id === target.dataset.projectId);
          if (fromProj && toProj) {
            const fromIdx = fromProj.subs.findIndex(s => s.id === dragData.subId);
            if (fromIdx >= 0) {
              const [moved] = fromProj.subs.splice(fromIdx, 1);
              const toIdx = toProj.subs.findIndex(s => s.id === target.dataset.sub);
              const rect = target.getBoundingClientRect();
              const insertAt = e.clientY < rect.top + rect.height / 2 ? toIdx : toIdx + 1;
              toProj.subs.splice(insertAt, 0, moved);
              save();
              render();
            }
          }
        }
      }
    });
  }

  // ── Render All ─────────────────────────────────────────────
  function render() {
    updateWeekLabel();
    if (state.currentTab === 'planner') {
      renderProjects();
      renderDayStrip();
      renderDays();
    } else if (state.currentTab === 'notes') {
      renderNotes();
    } else if (state.currentTab === 'stats') {
      renderStats();
    }
    updateOverallProgress();
    attachCalendarEvents();
    initDragDrop();
  }

  // ── Translate DOM elements ────────────────────────────────
  function translateDOM() {
    // Top Brand & logo
    $$('.brand').forEach(el => {
      el.innerHTML = `flowist<span class="dot">.</span>`;
    });

    // Inputs placeholders
    const searchInput = $('#searchInput');
    if (searchInput) searchInput.placeholder = t('placeholderSearch');

    // UI elements text
    const lblEmail = $('#lblEmail');
    if (lblEmail) lblEmail.textContent = t('lblEmail');

    const lblNickname = $('#lblNickname');
    if (lblNickname) lblNickname.textContent = t('lblNickname');
    const authNickname = $('#authNickname');
    if (authNickname) authNickname.placeholder = t('placeholderNickname');

    const lblPassword = $('#lblPassword');
    if (lblPassword) lblPassword.textContent = t('lblPassword');

    const guestBtn = $('#guestBtn');
    if (guestBtn) guestBtn.textContent = t('guestMode');

    const authBtn = $('#authBtn');
    if (authBtn) {
      authBtn.textContent = authMode === 'login' ? t('btnLogin') : t('btnRegister');
    }

    const authSwitchBtn = $('#authSwitchBtn');
    if (authSwitchBtn) {
      authSwitchBtn.textContent = authMode === 'login' ? t('btnRegister') : t('btnLogin');
    }

    const lblSwitchNote = $('#lblSwitchNote');
    if (lblSwitchNote) {
      lblSwitchNote.textContent = authMode === 'login' ? t('lblSwitchNoteRegister') : t('lblSwitchNoteLogin');
    }

    const lblLangSection = $('#lblLangSection');
    if (lblLangSection) lblLangSection.textContent = t('lblLangSection');

    const lblThemeSection = $('#lblThemeSection');
    if (lblThemeSection) lblThemeSection.textContent = t('lblThemeSection');

    const lblLogout = $('#lblLogout');
    if (lblLogout) lblLogout.textContent = t('lblLogout');

    // Tabs
    const tabPlan = $('#tabPlan');
    if (tabPlan) tabPlan.textContent = t('lblTabPlan');

    const tabNotes = $('#tabNotes');
    if (tabNotes) tabNotes.textContent = t('lblTabNotes');

    const tabStats = $('#tabStats');
    if (tabStats) tabStats.textContent = t('lblTabStats');

    const tabArchiveTxt = $('#tabArchiveTxt');
    if (tabArchiveTxt) tabArchiveTxt.textContent = state.lang === 'vi' ? 'Lưu trữ' : 'Archive';

    // Panel Titles
    const lblProjectsTitle = $('#lblProjectsTitle');
    if (lblProjectsTitle) lblProjectsTitle.textContent = t('titleProjects');

    const lblAddProject = $('#lblAddProject');
    if (lblAddProject) lblAddProject.textContent = t('lblAddProject');

    const lblNotesTitle = $('#lblNotesTitle');
    if (lblNotesTitle) lblNotesTitle.textContent = t('titleDailyNotes');

    const lblStatsTitle = $('#lblStatsTitle');
    if (lblStatsTitle) lblStatsTitle.textContent = t('titleStatistics');

    const lblProgressTitle = $('#lblProgressTitle');
    if (lblProgressTitle) lblProgressTitle.textContent = t('lblWeeklyProgress');

    // Update login title
    const loginSubtitle = $('#loginSubtitle');
    if (loginSubtitle) {
      loginSubtitle.textContent = state.lang === 'vi' ? 'kế hoạch tuần tối giản' : 'your week, sorted';
    }

    // Refresh display name in profile (nickname > email > guest)
    const userEmailLabel = $('#userEmailLabel');
    if (userEmailLabel) {
      if (state.currentUser === 'guest') {
        userEmailLabel.textContent = t('guestLabel');
      } else if (state.currentUser) {
        const users = JSON.parse(localStorage.getItem('flowist_users') || '{}');
        const profile = users[state.currentUser];
        const nickname = (typeof profile === 'object' && profile.nickname) ? profile.nickname : '';
        userEmailLabel.textContent = nickname || state.currentUser;
      } else {
        userEmailLabel.textContent = '';
      }
    }
  }

  // ── Authentication System ──────────────────────────────────
  let authMode = 'login'; // 'login' or 'register'

  function initAuth() {
    const nicknameInput = $('#authNickname');
    const nicknameField = $('#nicknameField');
    const emailInput = $('#authEmail');
    const passwordInput = $('#authPassword');
    const authBtn = $('#authBtn');
    const authSwitchBtn = $('#authSwitchBtn');
    const guestBtn = $('#guestBtn');
    const pwToggle = $('#pwToggle');
    const errorEl = $('#authError');
    const noticeEl = $('#authNotice');

    // Password visibility toggle
    pwToggle.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      pwToggle.classList.toggle('active');
    });

    // Guest Mode
    guestBtn.addEventListener('click', () => {
      state.currentUser = 'guest';
      localStorage.setItem('flowist_current_user', 'guest');
      enterWorkspace();
    });

    // Password Security Helper (SHA-256 Hashing)
    async function hashPassword(plainPassword) {
      if (!plainPassword) return '';
      try {
        const encoder = new TextEncoder();
        const data = encoder.encode(`flowist_salt_v1_${plainPassword.trim()}`);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      } catch (e) {
        let hash = 0;
        for (let i = 0; i < plainPassword.length; i++) {
          hash = (hash << 5) - hash + plainPassword.charCodeAt(i);
          hash |= 0;
        }
        return 'h_' + Math.abs(hash);
      }
    }

    // Switch between Login and Register — show/hide nickname field
    authSwitchBtn.addEventListener('click', () => {
      authMode = authMode === 'login' ? 'register' : 'login';
      nicknameField.classList.toggle('hidden', authMode !== 'register');
      errorEl.classList.add('hidden');
      noticeEl.classList.add('hidden');
      translateDOM();
    });

    // Handle Authentication Form Submit
    authBtn.addEventListener('click', async () => {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const nickname = nicknameInput ? nicknameInput.value.trim() : '';

      errorEl.classList.add('hidden');
      noticeEl.classList.add('hidden');

      if (!email || !password) {
        errorEl.textContent = state.lang === 'vi' ? 'Vui lòng nhập email và mật khẩu' : 'Please enter email and password';
        errorEl.classList.remove('hidden');
        return;
      }

      const hashedPassword = await hashPassword(password);
      const users = JSON.parse(localStorage.getItem('flowist_users') || '{}');

      if (authMode === 'register') {
        if (users[email]) {
          errorEl.textContent = t('userExists');
          errorEl.classList.remove('hidden');
        } else {
          // Store hashed password locally
          users[email] = { password: hashedPassword, nickname };
          localStorage.setItem('flowist_users', JSON.stringify(users));
          
          // Sync hashed password to Supabase cloud table (NEVER plain-text)
          if (window.supabaseClient) {
            try {
              await window.supabaseClient
                .from('flowist_users')
                .upsert({ email, password_hash: hashedPassword, nickname }, { onConflict: 'email' });
            } catch (err) {
              console.warn('Supabase reg sync error:', err);
            }
          }

          noticeEl.textContent = t('registrationSuccess');
          noticeEl.classList.remove('hidden');
          authMode = 'login';
          nicknameField.classList.add('hidden');
          nicknameInput.value = '';
          translateDOM();
          passwordInput.value = '';
        }
      } else {
        // Login — verify hash locally or from Supabase cloud
        let profile = users[email];
        let storedPassword = typeof profile === 'object' ? profile?.password : profile;

        if (!storedPassword && window.supabaseClient) {
          try {
            const { data } = await window.supabaseClient
              .from('flowist_users')
              .select('password_hash, nickname')
              .eq('email', email)
              .maybeSingle();
            if (data) {
              storedPassword = data.password_hash || data.password;
              profile = { password: storedPassword, nickname: data.nickname };
              users[email] = profile;
              localStorage.setItem('flowist_users', JSON.stringify(users));
            }
          } catch (err) {
            console.warn('Supabase login fetch error:', err);
          }
        }

        const isValid = storedPassword && (storedPassword === hashedPassword || storedPassword === password);

        if (isValid) {
          // Upgrade legacy plain-text password to SHA-256 hash if needed
          if (storedPassword === password && storedPassword !== hashedPassword) {
            users[email] = { password: hashedPassword, nickname: profile?.nickname || '' };
            localStorage.setItem('flowist_users', JSON.stringify(users));
            if (window.supabaseClient) {
              window.supabaseClient
                .from('flowist_users')
                .upsert({ email, password_hash: hashedPassword, nickname: profile?.nickname || '' }, { onConflict: 'email' })
                .catch(() => {});
            }
          }

          state.currentUser = email;
          localStorage.setItem('flowist_current_user', email);
          toast(t('loginSuccess'));
          enterWorkspace();
        } else {
          errorEl.textContent = t('invalidCredentials');
          errorEl.classList.remove('hidden');
        }
      }
    });
  }

  let cloudLoaded = false;  // Guard: prevent saving empty state before cloud data arrives
  let realtimeChannel = null; // Supabase Realtime subscription handle
  let pollInterval = null;    // Polling fallback interval

  // ── Real-time sync ────────────────────────────────────────────
  function subscribeRealtime() {
    if (!window.supabaseClient || !state.currentUser || state.currentUser === 'guest') return;
    unsubscribeRealtime(); // clean up any existing subscription first

    const key = getUserStorageKey();

    // Primary: Supabase Realtime WebSocket — instant push from server
    try {
      realtimeChannel = window.supabaseClient
        .channel(`flowist_data_${state.currentUser}`)
        .on(
          'postgres_changes',
          { event: 'UPDATE', schema: 'public', table: 'flowist_data', filter: `user_key=eq.${key}` },
          async (payload) => {
            const remoteData = payload.new;
            if (!remoteData) return;

            // Skip if we ourselves pushed this update recently — avoids self-flicker
            if (Date.now() - _lastCloudSyncAt < 4000) return;

            const storageKey = getUserStorageKey();
            if (remoteData.payload) {
              const local = JSON.parse(localStorage.getItem(storageKey) || '{}');
              const merged = { ...local, ...remoteData.payload };
              localStorage.setItem(storageKey, JSON.stringify(merged));
              const weekKey = getWeekKey(state.weekOffset);
              const weekData = merged[weekKey];
              if (weekData) {
                state.projects = weekData.projects || [];
                state.notes = weekData.notes || {};
              }
            }
            if (remoteData.archive) {
              const archiveKey = getArchiveKey();
              const local = JSON.parse(localStorage.getItem(archiveKey) || '[]');
              const map = {};
              local.forEach(i => { map[i.weekKey] = i; });
              remoteData.archive.forEach(i => { map[i.weekKey] = i; });
              localStorage.setItem(archiveKey, JSON.stringify(Object.values(map)));
            }

            // Don't re-render if user is actively typing in any input/textarea
            const active = document.activeElement;
            const isTyping = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA');

            if (isTyping && state.currentTab === 'notes') {
              // For notes: only update the text if it's a DIFFERENT day's note, preserve cursor
              const dates = getWeekDates(state.weekOffset);
              dates.forEach((date, i) => {
                if (i === state.selectedNoteDay) return; // skip the day user is editing
                // Just update state silently, no DOM changes needed for other days
              });
              return; // don't touch the DOM while typing
            }

            // Re-render current view (safe — user is not actively typing)
            if (state.currentTab === 'notes') renderNotes();
            else if (state.currentTab === 'planner') render();
            else if (state.currentTab === 'stats') renderStats();
            else if (state.currentTab === 'archive') renderArchive();
          }
        )
        .subscribe();
    } catch (e) {
      console.warn('Realtime subscribe failed, using polling fallback', e);
    }

    // Fallback: poll every 30 seconds (covers environments where WebSocket is restricted)
    pollInterval = setInterval(async () => {
      if (!document.hidden) { // only poll when tab is visible
        await loadCloudData();
      }
    }, 30000);
  }

  function unsubscribeRealtime() {
    if (realtimeChannel) {
      window.supabaseClient?.removeChannel(realtimeChannel);
      realtimeChannel = null;
    }
    if (pollInterval) {
      clearInterval(pollInterval);
      pollInterval = null;
    }
  }

  async function enterWorkspace() {
    cloudLoaded = false;
    $('#loginScreen').classList.add('hidden');
    $('#appShell').classList.remove('hidden');
    $('#tabbar').classList.remove('hidden');
    $('#fabBtn').classList.remove('hidden');

    // 1. Render immediately from localStorage (fast, no delay)
    loadLocal();
    render();
    translateDOM();

    // 2. Then fetch cloud data and re-render with latest data
    await loadCloudData();
    cloudLoaded = true;

    // Re-render current tab with fresh cloud data
    if (state.currentTab === 'notes') renderNotes();
    else if (state.currentTab === 'planner') render();
    else if (state.currentTab === 'stats') renderStats();
    else if (state.currentTab === 'archive') renderArchive();

    // 3. Start real-time subscription for live cross-device updates
    subscribeRealtime();
  }

  function handleLogout() {
    save();
    unsubscribeRealtime(); // Stop real-time sync on logout
    cloudLoaded = false;
    state.currentUser = null;
    localStorage.removeItem('flowist_current_user');
    $('#appShell').classList.add('hidden');
    // Hide nav elements back on logout
    $('#tabbar').classList.add('hidden');
    $('#fabBtn').classList.add('hidden');
    $('#loginScreen').classList.remove('hidden');
    $('#authPassword').value = '';
    // Reset to login mode
    authMode = 'login';
    $('#nicknameField').classList.add('hidden');
    translateDOM();
    toast(t('logoutSuccess'));
  }

  // ── Init ───────────────────────────────────────────────────
  function init() {
    // Language detection
    const savedLang = localStorage.getItem('flowist_lang');
    if (savedLang) {
      state.lang = savedLang;
    } else {
      const browserLang = navigator.language || navigator.userLanguage;
      state.lang = browserLang.startsWith('vi') ? 'vi' : 'en';
    }

    // Theme initialization
    applyTheme(localStorage.getItem('planner_theme') || 'auto');
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (state.theme === 'auto') applyTheme('auto');
    });

    initStickyHead();
    initAuth();
    translateDOM();

    // Check existing login session
    const savedUser = localStorage.getItem('flowist_current_user');
    if (savedUser) {
      state.currentUser = savedUser;
      enterWorkspace();
    } else {
      $('#loginScreen').classList.remove('hidden');
      $('#appShell').classList.add('hidden');
    }

    // Nav
    $('#prevWeek').addEventListener('click', () => navigateWeek(-1));
    $('#nextWeek').addEventListener('click', () => navigateWeek(1));

    // Today button
    $('#todayBtn').addEventListener('click', () => {
      if (state.weekOffset !== 0) {
        save();
        state.weekOffset = 0;
        state.focusDay = null;
        load();
        render();
      }
      const todayIdx = getTodayDayIndex();
      if (todayIdx >= 0) {
        state.focusDay = state.focusDay === todayIdx ? null : todayIdx;
        render();
      }
    });

    // Add project buttons
    $('#addProjectBtn').addEventListener('click', () => addProject());
    $('#fabBtn').addEventListener('click', () => {
      if (state.currentTab !== 'planner') switchTab('planner');
      addProject();
    });
    $('#fabTab').addEventListener('click', () => {
      if (state.currentTab !== 'planner') switchTab('planner');
      addProject();
    });

    // Share button (desktop header only)
    $('#shareBtn').addEventListener('click', showShareModal);
    // tabShare was replaced by tabArchive — handled below via tabbar-btn[data-tab]

    // Theme toggle in profile dropdown
    $$('#themeToggle .themebtn').forEach(btn => {
      btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
    });

    // Profile Dropdown Toggle
    const acctTrigger = $('#acctTrigger');
    const acctMenu = $('#acctMenu');
    acctTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      acctMenu.classList.toggle('hidden');
      acctTrigger.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      acctMenu.classList.add('hidden');
      acctTrigger.classList.remove('open');
    });

    acctMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Brand logo click -> go to Plan
    $('#brandBtn')?.addEventListener('click', () => {
      if (state.currentTab === 'notes') saveCurrentNote();
      switchTab('planner');
    });

    // PLAN nav button
    $('#planNavBtn')?.addEventListener('click', () => {
      if (state.currentTab === 'notes') saveCurrentNote();
      switchTab('planner');
    });

    // NOTES nav button (desktop/header) - toggle if already active
    $('#notesNavBtn')?.addEventListener('click', () => {
      if (state.currentTab === 'notes') {
        saveCurrentNote();
        switchTab('planner');
      } else {
        switchTab('notes');
      }
    });

    // STATS nav button
    $('#statsNavBtn').addEventListener('click', () => {
      if (state.currentTab === 'notes') saveCurrentNote();
      switchTab('stats');
    });

    // ARCHIVE nav button
    $('#archiveNavBtn').addEventListener('click', () => {
      if (state.currentTab === 'notes') saveCurrentNote();
      autoArchiveCurrentWeek();
      switchTab('archive');
    });

    // Back to Plan buttons
    $('#statsBackBtn')?.addEventListener('click', () => switchTab('planner'));
    $('#archiveBackBtn')?.addEventListener('click', () => switchTab('planner'));
    $('#notesBackBtn')?.addEventListener('click', () => {
      saveCurrentNote();
      switchTab('planner');
    });

    // Clear all archive
    $('#archiveClearAllBtn').addEventListener('click', () => {
      if (confirm(state.lang === 'vi' ? 'Xóa tất cả lưu trữ?' : 'Clear all archived weeks?')) {
        saveArchiveData([]);
        renderArchive();
      }
    });

    // Chart mode toggle
    $('#chartModeCompletion').addEventListener('click', () => {
      weekdayChartMode = 'completion';
      $('#chartModeCompletion').classList.add('active');
      $('#chartModeDistribution').classList.remove('active');
      renderWeekdayChart();
    });
    $('#chartModeDistribution').addEventListener('click', () => {
      weekdayChartMode = 'distribution';
      $('#chartModeDistribution').classList.add('active');
      $('#chartModeCompletion').classList.remove('active');
      renderWeekdayChart();
    });

    // Logout
    $('#logoutBtn').addEventListener('click', handleLogout);

    // Language switch button
    $('#langSwitchBtn').addEventListener('click', () => {
      state.lang = state.lang === 'vi' ? 'en' : 'vi';
      localStorage.setItem('flowist_lang', state.lang);
      translateDOM();
      render();
      toast(state.lang === 'vi' ? 'Đã đổi sang Tiếng Việt' : 'Switched to English');
    });

    // Unfocus
    $('#unfocusBtn').addEventListener('click', () => { state.focusDay = null; render(); });

    // Collapse all
    $('#collapseAllBtn').addEventListener('click', () => {
      const allCollapsed = state.projects.every(p => p.collapsed);
      state.projects.forEach(p => p.collapsed = !allCollapsed);
      save();
      render();
    });

    // Tab buttons switching
    $$('.tabbar-btn[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (state.currentTab === 'notes') saveCurrentNote();
        switchTab(btn.dataset.tab);
      });
    });

    // Auto-save on note typing (input + blur)
    $('#noteTextarea')?.addEventListener('input', () => {
      if (state.currentTab === 'notes') saveCurrentNote();
    });
    $('#noteTextarea')?.addEventListener('blur', () => {
      if (state.currentTab === 'notes') saveCurrentNote();
    });

    // Search
    const searchToggle = $('#searchToggle');
    const searchInput = $('#searchInput');
    searchToggle.addEventListener('click', () => {
      searchInput.classList.toggle('hidden');
      if (!searchInput.classList.contains('hidden')) {
        searchInput.focus();
      } else {
        searchInput.value = '';
        state.searchQuery = '';
        render();
      }
    });

    searchInput.addEventListener('input', () => {
      state.searchQuery = searchInput.value.trim();
      renderProjects();
    });

    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        state.searchQuery = '';
        searchInput.classList.add('hidden');
        render();
      }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
      if (e.target.closest('.modal, input, textarea')) return;

      if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        if (state.currentTab !== 'planner') switchTab('planner');
        addProject();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        popUndo();
      }
      if (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key === 'f')) {
        e.preventDefault();
        searchInput.classList.remove('hidden');
        searchInput.focus();
      }
      if (e.key >= '1' && e.key <= '7' && !e.ctrlKey && !e.metaKey) {
        const d = parseInt(e.key) - 1;
        state.focusDay = state.focusDay === d ? null : d;
        render();
      }
    });

    // Auto-save interval
    setInterval(() => {
      save();
      if (state.currentTab === 'notes') saveCurrentNote();
    }, 30000);

    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(() => console.log('Service Worker Registered'))
        .catch(err => console.log('Service Worker Failed to Register', err));
    }
    // Migrate old data
    migrateOldData();
  }

  function migrateOldData() {
    const oldData = localStorage.getItem('planner_data');
    if (oldData && !localStorage.getItem(STORAGE_KEY)) {
      try {
        const parsed = JSON.parse(oldData);
        Object.values(parsed).forEach(week => {
          if (week.projects) {
            week.projects.forEach((p, i) => {
              if (!p.color) p.color = PROJECT_COLORS[i % PROJECT_COLORS.length].name;
              p.subs?.forEach(s => { if (!s.priority) s.priority = 'none'; });
            });
          }
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        load();
        render();
        toast('Data migrated from v1 ✓');
      } catch(e) { /* ignore */ }
    }
  }

  // Boot
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})();
