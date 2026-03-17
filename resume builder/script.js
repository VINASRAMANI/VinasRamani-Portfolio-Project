/**
 * ResumeCraft — script.js
 * Full resume builder logic: templates, live preview, PDF, photo crop, customization
 */

/* ════════════════════════════════════════
   STATE
   ════════════════════════════════════════ */
const state = {
  activeTemplate: 'modern',
  resumeColor: '#c9a84c',
  fontFamily: 'DM Sans',
  fontSize: 13,
  lineSpacing: 1.5,
  profilePhoto: null,
  skills: [],
  experience: [],
  education: [],
  projects: [],
  languages: [],
  hiddenSections: new Set(),
  sectionOrder: ['summary','experience','education','skills','projects','languages'],
};

/* ════════════════════════════════════════
   TEMPLATE DEFINITIONS
   ════════════════════════════════════════ */
const TEMPLATES = [
  { id:'modern',    name:'Modern Dark',   category:'Tech / Design',      bg:'#1a1a2e' },
  { id:'minimal',   name:'Clean Minimal', category:'Corporate / Finance', bg:'white' },
  { id:'creative',  name:'Creative Bold', category:'Creative / Marketing',bg:'linear-gradient(135deg,#c9a84c,#8a5a20)' },
  { id:'executive', name:'Executive Pro', category:'Leadership / C-Suite',bg:'#1e3a5f' },
  { id:'classic',   name:'Classic Pro',   category:'Law / Academia',      bg:'white' },
  { id:'tech',      name:'Tech Terminal', category:'Engineering / Dev',   bg:'#0f172a' },
  { id:'elegant',   name:'Elegant Gold',  category:'Consulting / Finance',bg:'#fdf8ee' },
];

/* ════════════════════════════════════════
   INIT
   ════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Read URL param
  const urlParam = new URLSearchParams(window.location.search).get('tpl');
  if (urlParam && TEMPLATES.find(t => t.id === urlParam)) {
    state.activeTemplate = urlParam;
  }

  initTabs();
  initFormListeners();
  initPhotoUpload();
  buildTemplatesGrid();
  initCustomization();
  initDragDrop();
  initPDFDownload();
  initZoom();
  seedSampleData();
  renderPreview();
});

/* ════════════════════════════════════════
   TABS
   ════════════════════════════════════════ */
function initTabs() {
  document.querySelectorAll('.panel-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
  });
}

/* ════════════════════════════════════════
   FORM LISTENERS
   ════════════════════════════════════════ */
function initFormListeners() {
  // Auto-update on any input change
  document.getElementById('tab-form').addEventListener('input', () => renderPreview());

  // Dynamic sections
  document.getElementById('addExperience').addEventListener('click', () => addExperience());
  document.getElementById('addEducation').addEventListener('click', () => addEducation());
  document.getElementById('addProject').addEventListener('click', () => addProject());
  document.getElementById('addLanguage').addEventListener('click', () => addLanguage());

  // Skills
  const skillInput = document.getElementById('skillInput');
  skillInput.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ',') && skillInput.value.trim()) {
      e.preventDefault();
      addSkill(skillInput.value.trim().replace(/,/g, ''));
      skillInput.value = '';
      renderPreview();
    }
  });

  // Mobile preview toggle
  document.getElementById('btnPreviewMobile').addEventListener('click', () => {
    const pp = document.getElementById('previewPanel');
    const fp = document.getElementById('formPanel');
    if (pp.style.display === 'flex') {
      pp.style.display = 'none';
      fp.style.maxHeight = '100%';
    } else {
      pp.style.display = 'flex';
      fp.style.maxHeight = '50vh';
    }
  });
}

/* ════════════════════════════════════════
   SEED DATA (for demo)
   ════════════════════════════════════════ */
function seedSampleData() {
  document.getElementById('fullName').value = 'Jane Doe';
  document.getElementById('jobTitle').value = 'Senior Product Designer';
  document.getElementById('phone').value = '+1 (555) 012-3456';
  document.getElementById('email').value = 'jane.doe@email.com';
  document.getElementById('address').value = 'San Francisco, CA';
  document.getElementById('website').value = 'linkedin.com/in/janedoe';
  document.getElementById('summary').value = 'Award-winning Product Designer with 7+ years crafting user-centric digital experiences for Fortune 500 companies. Passionate about design systems, accessibility, and turning complex problems into elegant solutions.';

  addExperience({
    company: 'TechCorp Inc.',
    role: 'Senior Product Designer',
    dates: 'Jan 2021 – Present',
    desc: 'Led end-to-end design for flagship SaaS platform serving 2M+ users. Built and maintained design system with 200+ components. Increased user retention by 34% through UX improvements.'
  });
  addExperience({
    company: 'Creative Agency',
    role: 'UX Designer',
    dates: 'Mar 2018 – Dec 2020',
    desc: 'Designed mobile apps and web products for 15+ clients across fintech, health, and e-commerce. Conducted user research, usability testing, and stakeholder presentations.'
  });

  addEducation({
    school: 'University of California, Berkeley',
    degree: 'B.S. Human-Computer Interaction',
    dates: '2014 – 2018',
    notes: 'Graduated Magna Cum Laude. Dean\'s List 2016–2018.'
  });

  ['Figma', 'UX Research', 'Prototyping', 'Design Systems', 'HTML/CSS', 'User Testing', 'Sketch'].forEach(addSkill);

  addProject({
    name: 'Onboarding Redesign',
    link: 'github.com/janedoe/onboarding',
    desc: 'Redesigned onboarding flow reducing drop-off by 52%. Won company innovation award 2022.'
  });

  addLanguage({ lang: 'English', level: 'Native', pct: 100 });
  addLanguage({ lang: 'Spanish', level: 'Professional', pct: 75 });
}

/* ════════════════════════════════════════
   DYNAMIC ENTRIES
   ════════════════════════════════════════ */
let expCount = 0, eduCount = 0, projCount = 0, langCount = 0;

function addExperience(data = {}) {
  const id = expCount++;
  const div = document.createElement('div');
  div.className = 'dynamic-entry';
  div.innerHTML = `
    <button class="entry-remove" onclick="this.parentElement.remove(); renderPreview()"><i class="fas fa-times"></i> Remove</button>
    <div class="row g-2">
      <div class="col-12"><label class="form-label">Job Title</label><input type="text" class="form-control rc-input exp-role" placeholder="e.g. Software Engineer" value="${data.role||''}"></div>
      <div class="col-12"><label class="form-label">Company</label><input type="text" class="form-control rc-input exp-company" placeholder="e.g. Google" value="${data.company||''}"></div>
      <div class="col-12"><label class="form-label">Dates</label><input type="text" class="form-control rc-input exp-dates" placeholder="Jan 2020 – Present" value="${data.dates||''}"></div>
      <div class="col-12"><label class="form-label">Description</label><textarea class="form-control rc-input exp-desc" rows="3" placeholder="Key achievements and responsibilities...">${data.desc||''}</textarea></div>
    </div>`;
  document.getElementById('experienceContainer').appendChild(div);
  div.querySelectorAll('input,textarea').forEach(el => el.addEventListener('input', renderPreview));
}

function addEducation(data = {}) {
  const div = document.createElement('div');
  div.className = 'dynamic-entry';
  div.innerHTML = `
    <button class="entry-remove" onclick="this.parentElement.remove(); renderPreview()"><i class="fas fa-times"></i> Remove</button>
    <div class="row g-2">
      <div class="col-12"><label class="form-label">School / University</label><input type="text" class="form-control rc-input edu-school" placeholder="e.g. MIT" value="${data.school||''}"></div>
      <div class="col-12"><label class="form-label">Degree & Field</label><input type="text" class="form-control rc-input edu-degree" placeholder="e.g. B.S. Computer Science" value="${data.degree||''}"></div>
      <div class="col-12"><label class="form-label">Dates</label><input type="text" class="form-control rc-input edu-dates" placeholder="2016 – 2020" value="${data.dates||''}"></div>
      <div class="col-12"><label class="form-label">Notes (optional)</label><input type="text" class="form-control rc-input edu-notes" placeholder="GPA, honors, activities..." value="${data.notes||''}"></div>
    </div>`;
  document.getElementById('educationContainer').appendChild(div);
  div.querySelectorAll('input,textarea').forEach(el => el.addEventListener('input', renderPreview));
}

function addProject(data = {}) {
  const div = document.createElement('div');
  div.className = 'dynamic-entry';
  div.innerHTML = `
    <button class="entry-remove" onclick="this.parentElement.remove(); renderPreview()"><i class="fas fa-times"></i> Remove</button>
    <div class="row g-2">
      <div class="col-12"><label class="form-label">Project Name</label><input type="text" class="form-control rc-input proj-name" placeholder="e.g. Portfolio Website" value="${data.name||''}"></div>
      <div class="col-12"><label class="form-label">Link / URL (optional)</label><input type="text" class="form-control rc-input proj-link" placeholder="github.com/user/project" value="${data.link||''}"></div>
      <div class="col-12"><label class="form-label">Description</label><textarea class="form-control rc-input proj-desc" rows="2" placeholder="What you built and its impact...">${data.desc||''}</textarea></div>
    </div>`;
  document.getElementById('projectsContainer').appendChild(div);
  div.querySelectorAll('input,textarea').forEach(el => el.addEventListener('input', renderPreview));
}

function addLanguage(data = {}) {
  const div = document.createElement('div');
  div.className = 'dynamic-entry';
  div.innerHTML = `
    <button class="entry-remove" onclick="this.parentElement.remove(); renderPreview()"><i class="fas fa-times"></i> Remove</button>
    <div class="row g-2 align-items-end">
      <div class="col-6"><label class="form-label">Language</label><input type="text" class="form-control rc-input lang-name" placeholder="e.g. Spanish" value="${data.lang||''}"></div>
      <div class="col-6"><label class="form-label">Level</label><select class="form-select rc-input lang-level"><option ${data.level==='Native'?'selected':''}>Native</option><option ${data.level==='Fluent'?'selected':''}>Fluent</option><option ${data.level==='Professional'?'selected':''}>Professional</option><option ${data.level==='Intermediate'?'selected':''}>Intermediate</option><option ${data.level==='Basic'?'selected':''}>Basic</option></select></div>
    </div>`;
  document.getElementById('languagesContainer').appendChild(div);
  div.querySelectorAll('input,select').forEach(el => el.addEventListener('change', renderPreview));
  div.querySelectorAll('input').forEach(el => el.addEventListener('input', renderPreview));
}

/* ════════════════════════════════════════
   SKILLS
   ════════════════════════════════════════ */
function addSkill(name) {
  if (!name || state.skills.includes(name)) return;
  state.skills.push(name);
  const tag = document.createElement('span');
  tag.className = 'skill-tag';
  tag.innerHTML = `${escHtml(name)}<button onclick="removeSkill('${escHtml(name)}',this)" title="Remove">×</button>`;
  document.getElementById('skillsTags').appendChild(tag);
}

function removeSkill(name, btn) {
  state.skills = state.skills.filter(s => s !== name);
  btn.parentElement.remove();
  renderPreview();
}

/* ════════════════════════════════════════
   PHOTO UPLOAD + CROPPER
   ════════════════════════════════════════ */
let cropper = null;

function initPhotoUpload() {
  document.getElementById('btnUploadPhoto').addEventListener('click', () =>
    document.getElementById('photoInput').click());

  document.getElementById('photoInput').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => openCropModal(ev.target.result);
    reader.readAsDataURL(file);
  });

  document.getElementById('btnCropConfirm').addEventListener('click', confirmCrop);
  document.getElementById('btnCropRotate').addEventListener('click', () => cropper?.rotate(90));
  document.getElementById('btnCropZoomIn').addEventListener('click', () => cropper?.zoom(0.1));
  document.getElementById('btnCropZoomOut').addEventListener('click', () => cropper?.zoom(-0.1));
}

function openCropModal(src) {
  const img = document.getElementById('cropperImage');
  img.src = src;

  const modal = new bootstrap.Modal(document.getElementById('cropModal'));
  modal.show();

  document.getElementById('cropModal').addEventListener('shown.bs.modal', () => {
    if (cropper) { cropper.destroy(); cropper = null; }
    cropper = new Cropper(img, {
      aspectRatio: 1,
      viewMode: 1,
      movable: true,
      zoomable: true,
      rotatable: true,
      scalable: true,
      preview: '.photo-preview',
    });
  }, { once: true });
}

function confirmCrop() {
  if (!cropper) return;
  const canvas = cropper.getCroppedCanvas({ width: 300, height: 300 });
  state.profilePhoto = canvas.toDataURL('image/jpeg', 0.9);

  // Update thumbnail
  const prev = document.getElementById('photoPreview');
  prev.innerHTML = `<img src="${state.profilePhoto}" alt="Profile" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`;

  bootstrap.Modal.getInstance(document.getElementById('cropModal')).hide();
  cropper.destroy(); cropper = null;
  renderPreview();
}

/* ════════════════════════════════════════
   TEMPLATES GRID
   ════════════════════════════════════════ */
function buildTemplatesGrid() {
  const grid = document.getElementById('templatesGrid');
  grid.innerHTML = '';
  TEMPLATES.forEach(t => {
    const div = document.createElement('div');
    div.className = 'tpl-thumb' + (t.id === state.activeTemplate ? ' active' : '');
    div.innerHTML = `
      <div class="tpl-thumb-preview">
        <div style="height:100%;background:${t.bg};padding:10px;overflow:hidden;">
          <div style="background:rgba(255,255,255,0.15);height:8px;border-radius:2px;margin-bottom:6px;width:60%;"></div>
          <div style="background:rgba(255,255,255,0.1);height:5px;border-radius:2px;margin-bottom:4px;"></div>
          <div style="background:rgba(255,255,255,0.07);height:5px;border-radius:2px;width:80%;"></div>
        </div>
      </div>
      <div class="tpl-thumb-label">${t.name}<small>${t.category}</small></div>`;
    div.addEventListener('click', () => {
      state.activeTemplate = t.id;
      document.querySelectorAll('.tpl-thumb').forEach(el => el.classList.remove('active'));
      div.classList.add('active');
      renderPreview();
    });
    grid.appendChild(div);
  });
}

/* ════════════════════════════════════════
   CUSTOMIZATION
   ════════════════════════════════════════ */
function initCustomization() {
  // Color swatches
  document.querySelectorAll('.swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      state.resumeColor = sw.dataset.color;
      document.getElementById('customColor').value = sw.dataset.color;
      document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
      sw.classList.add('active');
      renderPreview();
    });
  });

  document.getElementById('customColor').addEventListener('input', e => {
    state.resumeColor = e.target.value;
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
    renderPreview();
  });

  // Font
  document.getElementById('fontSelect').addEventListener('change', e => {
    state.fontFamily = e.target.value;
    renderPreview();
  });

  // Font size
  document.getElementById('fontSizeRange').addEventListener('input', e => {
    state.fontSize = parseFloat(e.target.value);
    document.getElementById('fontSizeLabel').textContent = e.target.value + 'px';
    renderPreview();
  });

  // Line spacing
  document.getElementById('lineSpacingRange').addEventListener('input', e => {
    state.lineSpacing = parseFloat(e.target.value);
    document.getElementById('lineSpacingLabel').textContent = e.target.value;
    renderPreview();
  });

  // Section toggles
  document.querySelectorAll('.section-toggle').forEach(cb => {
    cb.addEventListener('change', e => {
      if (e.target.checked) state.hiddenSections.delete(e.target.dataset.section);
      else state.hiddenSections.add(e.target.dataset.section);
      renderPreview();
    });
  });
}

/* ════════════════════════════════════════
   DRAG & DROP SECTION ORDER
   ════════════════════════════════════════ */
function initDragDrop() {
  const list = document.getElementById('sectionOrderList');
  let draggingEl = null;

  list.addEventListener('dragstart', e => {
    draggingEl = e.target.closest('.order-item');
    draggingEl?.classList.add('dragging');
  });
  list.addEventListener('dragend', () => {
    draggingEl?.classList.remove('dragging');
    draggingEl = null;
    // Update order from DOM
    state.sectionOrder = [...list.querySelectorAll('.order-item')].map(el => el.dataset.section);
    renderPreview();
  });
  list.addEventListener('dragover', e => {
    e.preventDefault();
    const item = e.target.closest('.order-item');
    if (item && item !== draggingEl) {
      const rect = item.getBoundingClientRect();
      const isAfter = e.clientY > rect.top + rect.height / 2;
      list.insertBefore(draggingEl, isAfter ? item.nextSibling : item);
    }
  });
}

/* ════════════════════════════════════════
   READ FORM DATA
   ════════════════════════════════════════ */
function getFormData() {
  // Experience
  const experience = [...document.querySelectorAll('#experienceContainer .dynamic-entry')].map(el => ({
    role: el.querySelector('.exp-role')?.value || '',
    company: el.querySelector('.exp-company')?.value || '',
    dates: el.querySelector('.exp-dates')?.value || '',
    desc: el.querySelector('.exp-desc')?.value || '',
  })).filter(e => e.role || e.company);

  // Education
  const education = [...document.querySelectorAll('#educationContainer .dynamic-entry')].map(el => ({
    school: el.querySelector('.edu-school')?.value || '',
    degree: el.querySelector('.edu-degree')?.value || '',
    dates: el.querySelector('.edu-dates')?.value || '',
    notes: el.querySelector('.edu-notes')?.value || '',
  })).filter(e => e.school || e.degree);

  // Projects
  const projects = [...document.querySelectorAll('#projectsContainer .dynamic-entry')].map(el => ({
    name: el.querySelector('.proj-name')?.value || '',
    link: el.querySelector('.proj-link')?.value || '',
    desc: el.querySelector('.proj-desc')?.value || '',
  })).filter(e => e.name);

  // Languages
  const languages = [...document.querySelectorAll('#languagesContainer .dynamic-entry')].map(el => ({
    lang: el.querySelector('.lang-name')?.value || '',
    level: el.querySelector('.lang-level')?.value || '',
    pct: { 'Native': 100, 'Fluent': 90, 'Professional': 75, 'Intermediate': 55, 'Basic': 30 }[el.querySelector('.lang-level')?.value] || 50,
  })).filter(e => e.lang);

  return {
    name: document.getElementById('fullName').value || 'Your Name',
    title: document.getElementById('jobTitle').value || '',
    phone: document.getElementById('phone').value || '',
    email: document.getElementById('email').value || '',
    website: document.getElementById('website').value || '',
    address: document.getElementById('address').value || '',
    summary: document.getElementById('summary').value || '',
    skills: state.skills,
    experience,
    education,
    projects,
    languages,
  };
}

/* ════════════════════════════════════════
   RENDER PREVIEW
   ════════════════════════════════════════ */
function renderPreview() {
  const data = getFormData();
  const el = document.getElementById('resumePreview');

  // Apply CSS vars
  el.style.setProperty('--resume-color', state.resumeColor);
  el.style.fontFamily = `'${state.fontFamily}', sans-serif`;
  el.style.fontSize = state.fontSize + 'px';
  el.style.lineHeight = state.lineSpacing;
  el.className = `resume-page tpl-${state.activeTemplate}`;

  el.innerHTML = renderTemplate(state.activeTemplate, data);
}

/* ════════════════════════════════════════
   TEMPLATE RENDERERS
   ════════════════════════════════════════ */
function renderTemplate(id, data) {
  const renderers = { modern, minimal, creative, executive, classic, tech, elegant };
  return (renderers[id] || modern)(data);
}

function photoHtml(cls, size = 80) {
  if (state.profilePhoto) {
    return `<img src="${state.profilePhoto}" class="${cls}" style="width:${size}px;height:${size}px;object-fit:cover;border-radius:50%;" alt="Profile" />`;
  }
  return `<div class="${cls}" style="width:${size}px;height:${size}px;"><i class="fas fa-user"></i></div>`;
}

function contactsHtml(data) {
  const items = [];
  if (data.phone) items.push(`<span class="contact-item"><i class="fas fa-phone"></i>${escHtml(data.phone)}</span>`);
  if (data.email) items.push(`<span class="contact-item"><i class="fas fa-envelope"></i>${escHtml(data.email)}</span>`);
  if (data.address) items.push(`<span class="contact-item"><i class="fas fa-map-marker-alt"></i>${escHtml(data.address)}</span>`);
  if (data.website) items.push(`<span class="contact-item"><i class="fas fa-link"></i>${escHtml(data.website)}</span>`);
  return items.join('');
}

function skillsHtml(skills) {
  return skills.map(s => `<span class="skill-chip">${escHtml(s)}</span>`).join('');
}

function sectionBody(tplClass, data) {
  const parts = [];
  for (const sec of state.sectionOrder) {
    if (state.hiddenSections.has(sec)) continue;
    switch(sec) {
      case 'summary':
        if (data.summary) parts.push(`
          <div class="section-title"><i class="fas fa-align-left" style="margin-right:6px;opacity:.7;"></i>Profile Summary</div>
          ${tplClass==='tpl-creative'?'<div class="section-divider"></div>':''}
          <p style="margin-bottom:6px;">${escHtml(data.summary)}</p>`);
        break;
      case 'experience':
        if (data.experience.length) parts.push(`
          <div class="section-title"><i class="fas fa-briefcase" style="margin-right:6px;opacity:.7;"></i>Work Experience</div>
          ${tplClass==='tpl-creative'?'<div class="section-divider"></div>':''}
          ${data.experience.map(e => `
            <div class="resume-entry">
              <div class="entry-header">
                <span class="entry-title">${escHtml(e.role)}</span>
                <span class="entry-date">${escHtml(e.dates)}</span>
              </div>
              <div class="entry-subtitle">${escHtml(e.company)}</div>
              ${e.desc ? `<div class="entry-desc">${escHtml(e.desc)}</div>` : ''}
            </div>`).join('')}`);
        break;
      case 'education':
        if (data.education.length) parts.push(`
          <div class="section-title"><i class="fas fa-graduation-cap" style="margin-right:6px;opacity:.7;"></i>Education</div>
          ${tplClass==='tpl-creative'?'<div class="section-divider"></div>':''}
          ${data.education.map(e => `
            <div class="resume-entry">
              <div class="entry-header">
                <span class="entry-title">${escHtml(e.school)}</span>
                <span class="entry-date">${escHtml(e.dates)}</span>
              </div>
              <div class="entry-subtitle">${escHtml(e.degree)}</div>
              ${e.notes ? `<div class="entry-desc">${escHtml(e.notes)}</div>` : ''}
            </div>`).join('')}`);
        break;
      case 'skills':
        if (data.skills.length) parts.push(`
          <div class="section-title"><i class="fas fa-star" style="margin-right:6px;opacity:.7;"></i>Skills</div>
          ${tplClass==='tpl-creative'?'<div class="section-divider"></div>':''}
          <div style="margin-bottom:6px;">${skillsHtml(data.skills)}</div>`);
        break;
      case 'projects':
        if (data.projects.length) parts.push(`
          <div class="section-title"><i class="fas fa-code" style="margin-right:6px;opacity:.7;"></i>Projects</div>
          ${tplClass==='tpl-creative'?'<div class="section-divider"></div>':''}
          ${data.projects.map(p => `
            <div class="resume-entry">
              <div class="entry-header">
                <span class="entry-title">${escHtml(p.name)}</span>
                ${p.link ? `<span style="font-size:.72rem;opacity:.7;">${escHtml(p.link)}</span>` : ''}
              </div>
              ${p.desc ? `<div class="entry-desc">${escHtml(p.desc)}</div>` : ''}
            </div>`).join('')}`);
        break;
      case 'languages':
        if (data.languages.length) parts.push(`
          <div class="section-title"><i class="fas fa-language" style="margin-right:6px;opacity:.7;"></i>Languages</div>
          ${tplClass==='tpl-creative'?'<div class="section-divider"></div>':''}
          ${data.languages.map(l => `
            <div class="resume-entry" style="display:flex;justify-content:space-between;align-items:center;">
              <span class="entry-title" style="font-size:.85rem;">${escHtml(l.lang)}</span>
              <span class="entry-date">${escHtml(l.level)}</span>
            </div>`).join('')}`);
        break;
    }
  }
  return parts.join('');
}

/* ─── MODERN ─── */
function modern(data) {
  return `
  <div class="resume-header">
    ${photoHtml('header-photo-placeholder')}
    <div>
      <div class="header-name">${escHtml(data.name)}</div>
      ${data.title ? `<div class="header-title">${escHtml(data.title)}</div>` : ''}
      <div class="header-contacts">${contactsHtml(data)}</div>
    </div>
  </div>
  <div class="resume-body">
    <div class="main-col">${sectionBody('tpl-modern', data)}</div>
  </div>`;
}

/* ─── MINIMAL ─── */
function minimal(data) {
  return `
  <div class="resume-header">
    <div class="header-flex">
      <div class="header-left">
        ${photoHtml('header-photo-placeholder', 72)}
        <div>
          <div class="header-name">${escHtml(data.name)}</div>
          ${data.title ? `<div class="header-title">${escHtml(data.title)}</div>` : ''}
        </div>
      </div>
      <div class="header-contacts" style="flex-direction:column;align-items:flex-end;">
        ${contactsHtml(data)}
      </div>
    </div>
  </div>
  <div class="resume-body">${sectionBody('tpl-minimal', data)}</div>`;
}

/* ─── CREATIVE ─── */
function creative(data) {
  return `
  <div class="resume-header">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;">
      <div>
        <div class="header-name">${escHtml(data.name)}</div>
        ${data.title ? `<div class="header-title">${escHtml(data.title)}</div>` : ''}
        <div class="header-contacts">${contactsHtml(data)}</div>
      </div>
      ${photoHtml('header-photo-placeholder', 80)}
    </div>
  </div>
  <div class="resume-body">${sectionBody('tpl-creative', data)}</div>`;
}

/* ─── EXECUTIVE ─── */
function executive(data) {
  return `
  <div class="resume-header">
    <div class="header-accent">
      ${photoHtml('header-photo-placeholder', 80)}
    </div>
    <div class="header-main">
      <div class="header-name">${escHtml(data.name)}</div>
      ${data.title ? `<div class="header-title">${escHtml(data.title)}</div>` : ''}
      <div class="header-contacts">${contactsHtml(data)}</div>
    </div>
  </div>
  <div class="resume-body">${sectionBody('tpl-executive', data)}</div>`;
}

/* ─── CLASSIC ─── */
function classic(data) {
  return `
  <div class="resume-header">
    ${photoHtml('header-photo-placeholder', 80)}
    <div class="header-name">${escHtml(data.name)}</div>
    ${data.title ? `<div class="header-title">${escHtml(data.title)}</div>` : ''}
    <div class="header-contacts">${contactsHtml(data)}</div>
  </div>
  <div class="divider"></div>
  <div class="resume-body">${sectionBody('tpl-classic', data)}</div>`;
}

/* ─── TECH ─── */
function tech(data) {
  return `
  <div class="resume-header">
    <div class="header-top">
      ${photoHtml('header-photo-placeholder', 72)}
      <div>
        <div class="header-comment">// resume.json — ${new Date().getFullYear()}</div>
        <div class="header-name">${escHtml(data.name)}</div>
        ${data.title ? `<div class="header-title">${escHtml(data.title)}</div>` : ''}
      </div>
    </div>
    <div class="header-contacts">${contactsHtml(data)}</div>
  </div>
  <div class="resume-body">${sectionBody('tpl-tech', data)}</div>`;
}

/* ─── ELEGANT ─── */
function elegant(data) {
  return `
  <div class="resume-header">
    <div class="header-left">
      <div class="header-name">${escHtml(data.name)}</div>
      ${data.title ? `<div class="header-title">${escHtml(data.title)}</div>` : ''}
      <div class="header-contacts">${contactsHtml(data)}</div>
    </div>
    <div class="header-photo-wrap">
      ${photoHtml('header-photo-placeholder', 90)}
    </div>
  </div>
  <div class="resume-body">${sectionBody('tpl-elegant', data)}</div>`;
}

/* ════════════════════════════════════════
   PDF DOWNLOAD
   ════════════════════════════════════════ */
function initPDFDownload() {
  ['btnDownloadPDF', 'btnDownloadPDF2'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', downloadPDF);
  });
}

function downloadPDF() {
  const btn = document.getElementById('btnDownloadPDF');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
  btn.disabled = true;

  const element = document.getElementById('resumePreview');
  const name = document.getElementById('fullName').value || 'resume';
  const filename = name.toLowerCase().replace(/\s+/g, '-') + '-resume.pdf';

  const opt = {
    margin: 0,
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save().then(() => {
    btn.innerHTML = '<i class="fas fa-download"></i> Download PDF';
    btn.disabled = false;
  }).catch(() => {
    btn.innerHTML = '<i class="fas fa-download"></i> Download PDF';
    btn.disabled = false;
  });
}

/* ════════════════════════════════════════
   ZOOM
   ════════════════════════════════════════ */
let zoomLevel = 0.75;

function initZoom() {
  setZoom(zoomLevel);
  document.getElementById('btnZoomIn').addEventListener('click', () => setZoom(Math.min(1.4, zoomLevel + 0.1)));
  document.getElementById('btnZoomOut').addEventListener('click', () => setZoom(Math.max(0.4, zoomLevel - 0.1)));

  // Auto zoom on load
  setTimeout(() => {
    const container = document.querySelector('.preview-scroll');
    const page = document.querySelector('.resume-page');
    if (container && page) {
      const fitZoom = (container.clientWidth - 48) / 794;
      setZoom(Math.min(fitZoom, 1));
    }
  }, 200);
}

function setZoom(level) {
  zoomLevel = level;
  document.getElementById('previewScaleWrapper').style.transform = `scale(${level})`;
  document.getElementById('zoomLabel').textContent = Math.round(level * 100) + '%';

  // Adjust wrapper height so scroll works correctly
  const wrapper = document.getElementById('previewScaleWrapper');
  wrapper.style.transformOrigin = 'top center';
  const page = document.getElementById('resumePreview');
  wrapper.style.marginBottom = (page.offsetHeight * level - page.offsetHeight) + 'px';
}

/* ════════════════════════════════════════
   UTILS
   ════════════════════════════════════════ */
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
