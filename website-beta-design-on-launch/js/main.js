/* ==========================================================================
   Alec Davis Foundation — v1
   Shared header/footer, icons and interactions
   ========================================================================== */

/* ---------- Site settings: edit these in one place ---------- */
var CONFIG = {
  email: 'alec@alecdavis.com',
  // Paste the online giving link here when it's ready (e.g. the fiscal sponsor's
  // program donation page). While empty, donate buttons open a pre-filled email.
  donateUrl: '',
  siteUrl: 'https://alecdavis.org'
};

(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var page = document.body.getAttribute('data-page') || '';

  /* ---------- Icon sprite ---------- */
  var I = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="M5 12l5 5L20 7"/>',
    chev: '<path d="M6 9l6 6 6-6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10M10 20v-6h4v6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
    book: '<path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2 2 2 0 0 0 2 2h13"/>',
    flask: '<path d="M9 3h6M10 3v6L4.5 18.5A2 2 0 0 0 6.2 21.5h11.6a2 2 0 0 0 1.7-3L14 9V3M7 15h10"/>',
    leaf: '<path d="M12 21v-8M12 13c0-4 3-7 8-7 0 4-3 7-8 7zM12 15c0-3-2.5-5.5-7-5.5 0 3 2.5 5.5 7 5.5z"/>',
    cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    star: '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3l-5.5 2.9 1-6.2L3 9.6l6.2-.9z"/>',
    paw: '<circle cx="5.5" cy="10" r="2"/><circle cx="9.5" cy="5.5" r="2"/><circle cx="14.5" cy="5.5" r="2"/><circle cx="18.5" cy="10" r="2"/><path d="M8 17c0-2.5 1.8-5 4-5s4 2.5 4 5c0 2-1.8 3-4 3s-4-1-4-3z"/>',
    music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v2"/>',
    trend: '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8S10.5 3 8 3a2.5 2.5 0 0 0 0 5M12 8s1.5-5 4-5a2.5 2.5 0 0 1 0 5"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-5M12 8h.01"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
    infinity: '<path d="M12 12c-2-2.5-3.5-4-5.5-4a4 4 0 0 0 0 8c2 0 3.5-1.5 5.5-4s3.5-4 5.5-4a4 4 0 0 1 0 8c-2 0-3.5-1.5-5.5-4z"/>',
    landmark: '<path d="M3 21h18M5 18v-7M9.5 18v-7M14.5 18v-7M19 18v-7M3 9l9-5 9 5z"/>',
    handheart: '<path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16M7 20l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L14.4 13M2 15l6 6"/><path d="M19.5 8.5A2.5 2.5 0 0 0 16 5l-.5.5L15 5a2.5 2.5 0 0 0-3.5 3.5l4 4z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    radio: '<circle cx="12" cy="12" r="2"/><path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19 5a10 10 0 0 1 0 14M5 19A10 10 0 0 1 5 5"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 21v-4h6v4M8 7h2M14 7h2M8 11h2M14 11h2"/>',
    droplet: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V6a2.5 2.5 0 0 0-3-2zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
    fire: '<path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5 1-8.5z"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    scale: '<path d="M12 3v18M7 21h10M5 7h14M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z"/>',
    medical: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
    church: '<path d="M12 2v4M10 4h4M6 21V11l6-4 6 4v10M3 21h18M10 21v-4a2 2 0 0 1 4 0v4"/>',
    flower: '<circle cx="12" cy="12" r="2.5"/><path d="M12 9.5a3 3 0 1 1 0-6 3 3 0 1 1 0 6zM12 14.5a3 3 0 1 0 0 6 3 3 0 1 0 0-6zM9.5 12a3 3 0 1 1-6 0 3 3 0 1 1 6 0zM14.5 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0z"/>',
    news: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h4M7 16h4M14 12h3v4h-3z"/>',
    palette: '<path d="M12 3a9 9 0 0 0 0 18c1 0 1.5-.7 1.5-1.5 0-.9-.8-1.3-.8-2.2 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5C21 6.4 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',
    tent: '<path d="M3 20L12 4l9 16zM8.5 20L12 13l3.5 7"/>',
    truck: '<path d="M2 6h12v10H2zM14 9h4l4 4v3h-8"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    dollar: '<path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    pie: '<path d="M12 3v9h9A9 9 0 1 1 12 3z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    handshake: '<path d="M2 11l4-4 5 2 3-2 4 1 4 4M2 11l6 6 2-1 2 2 2-1 2 2 4-4-1-3M9 14l2 2M12 12l2 2"/>',
    pin: '<path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
    repeat: '<path d="M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"/>',
    vault: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M12 8v1M12 15v1M8 12h1M15 12h1M6 20v1M18 20v1"/>',
    seed: '<path d="M12 22V12M12 12C12 7 8 4 3 4c0 5 4 8 9 8zM12 14c0-4 3-7 9-7 0 4-3 7-9 7z"/>',
    graduation: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6"/>',
    hammer: '<path d="M15 12l-8.5 8.5a2.1 2.1 0 0 1-3-3L12 9M17.6 15L22 10.6 13.4 2 9 6.4z"/>',
    tree: '<path d="M12 22v-6M12 2L5 12h4l-3 4h12l-3-4h4z"/>',
    camera: '<path d="M3 8a2 2 0 0 1 2-2h2l2-3h6l2 3h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'
  };
  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">';
  Object.keys(I).forEach(function (k) { sprite += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + I[k] + '</symbol>'; });
  sprite += '</svg>';
  document.body.insertAdjacentHTML('afterbegin', sprite);

  function ic(name, cls) { return '<svg class="icon-svg ' + (cls || '') + '" aria-hidden="true"><use href="#i-' + name + '"/></svg>'; }
  // Expand <i data-i="name"></i> placeholders in the page markup into icons
  function expandIcons(root) {
    (root || document).querySelectorAll('i[data-i]').forEach(function (el) {
      var cls = el.getAttribute('data-c') || '';
      el.outerHTML = ic(el.getAttribute('data-i'), cls);
    });
  }

  /* ---------- Shared chrome ---------- */
  var nav = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'about.html', label: 'About', key: 'about' },
    { href: 'mission.html', label: 'Mission', key: 'mission' },
    { href: 'resources.html', label: 'Resources', key: 'resources' },
    { href: 'get-involved.html', label: 'Get Involved', key: 'involved', drop: [
      { href: 'get-involved.html', i: 'compass', t: 'Ways to Give', d: 'Every path to support the endowment' },
      { href: 'donate.html', i: 'heart', t: 'Donate Today', d: 'Make a one-time or monthly gift' },
      { href: 'get-involved.html#monthly', i: 'repeat', t: 'Founding Circle', d: 'Monthly giving that builds forever' },
      { href: 'get-involved.html#corporate', i: 'briefcase', t: 'Corporate Sponsorship', d: 'Partner your company with the mission' },
      { href: 'get-involved.html#legacy', i: 'infinity', t: 'Legacy Giving', d: 'Leave a gift in your will or estate' },
      { href: 'get-involved.html#assets', i: 'trend', t: 'Stock, DAF & Assets', d: 'Give appreciated and non-cash assets' },
      { href: 'get-involved.html#matching', i: 'repeat', t: 'Matching Gifts', d: 'Double your impact through work' },
      { href: 'get-involved.html#ambassadors', i: 'users', t: 'Ambassadors', d: 'Volunteer your voice and expertise' }
    ] }
  ];

  var bg = '<div class="bg" aria-hidden="true"><div class="grid-overlay"></div><div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div></div><div class="progress" id="progress"></div>';

  var links = nav.map(function (n) {
    var active = n.key === page ? ' active' : '';
    if (!n.drop) return '<li><a class="nav-link' + active + '" href="' + n.href + '"' + (active ? ' aria-current="page"' : '') + '>' + n.label + '</a></li>';
    var items = n.drop.map(function (d) {
      return '<a class="drop-item" href="' + d.href + '"><span class="drop-ic">' + ic(d.i) + '</span><span><strong>' + d.t + '</strong><span>' + d.d + '</span></span></a>';
    }).join('');
    return '<li class="has-drop"><a class="nav-link' + active + '" href="' + n.href + '" aria-haspopup="true" aria-expanded="false">' + n.label + ic('chev', 'chev') + '</a><div class="dropdown" role="menu">' + items + '</div></li>';
  }).join('');

  var mobile = nav.map(function (n) {
    var a = '<a href="' + n.href + '"' + (n.key === page ? ' class="active"' : '') + '>' + n.label + '</a>';
    if (n.drop) a += '<div class="sub">' + n.drop.slice(2).map(function (d) { return '<a href="' + d.href + '">' + d.t + '</a>'; }).join('') + '</div>';
    return a;
  }).join('');

  var header =
    '<a class="skip-link" href="#main">Skip to content</a>' +
    '<header class="nav" id="nav"><div class="container nav-inner">' +
      '<a href="index.html" class="brand" aria-label="Alec Davis Foundation home"><img src="assets/logo-mark.png" alt="" width="44" height="28" /><span class="brand-text">ALEC DAVIS<small>FOUNDATION</small></span></a>' +
      '<nav aria-label="Main"><ul class="nav-links">' + links + '</ul></nav>' +
      '<div class="nav-cta">' +
        '<a href="donate.html" class="btn btn-primary btn-sm">' + ic('heart') + 'Donate</a>' +
        '<button class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false" aria-controls="mobilePanel">' + ic('menu') + '</button>' +
      '</div>' +
    '</div></header>' +
    '<div class="mobile-panel" id="mobilePanel">' + mobile + '<a class="btn btn-primary" href="donate.html">' + ic('heart') + 'Donate to the Endowment</a></div>';

  var footer =
    '<footer class="site-footer"><div class="container">' +
      '<div class="foot-grid">' +
        '<div class="foot-about">' +
          '<a href="index.html" class="brand"><img src="assets/logo-mark.png" alt="" width="44" height="28" /><span>ALEC DAVIS<small>FOUNDATION</small></span></a>' +
          '<p>Building a permanent endowment to serve American communities, today and for generations to come.</p>' +
          '<a class="btn btn-ghost btn-sm" href="mailto:' + CONFIG.email + '">' + ic('mail') + CONFIG.email + '</a>' +
        '</div>' +
        '<div class="foot-col"><h4>Foundation</h4><ul>' +
          '<li><a href="about.html">About Us</a></li><li><a href="mission.html">Our Mission</a></li><li><a href="about.html#focus">Focus Areas</a></li><li><a href="mission.html#how">How the Endowment Works</a></li><li><a href="mission.html#roadmap">Roadmap</a></li>' +
        '</ul></div>' +
        '<div class="foot-col"><h4>Get Involved</h4><ul>' +
          '<li><a href="donate.html">Donate</a></li><li><a href="get-involved.html#monthly">Founding Circle</a></li><li><a href="get-involved.html#corporate">Corporate Sponsorship</a></li><li><a href="get-involved.html#legacy">Legacy Giving</a></li><li><a href="get-involved.html#ambassadors">Ambassadors</a></li>' +
        '</ul></div>' +
        '<div class="foot-col"><h4>Resources</h4><ul>' +
          '<li><a href="resources.html#faq">Donor FAQ</a></li><li><a href="resources.html#planned">Planned Giving Guide</a></li><li><a href="resources.html#help">Help &amp; Hotlines</a></li><li><a href="resources.html#glossary">Glossary</a></li><li><a href="resources.html#brand">Brand Kit</a></li>' +
        '</ul></div>' +
      '</div>' +
    '</div>' +
    '<div class="fineprint"><div class="container">&copy; 2026 by Alec Davis Foundation is a fiscally sponsored program of United Charitable, a registered 501(c)(3) public charity.</div></div>' +
    '</footer>' +
    '<button class="to-top" id="toTop" aria-label="Back to top">' + ic('up') + '</button>' +
    '<div class="toast" id="toast" role="status" aria-live="polite">' + ic('check') + '<span id="toastText">Copied</span></div>';

  document.body.insertAdjacentHTML('afterbegin', bg + header);
  document.body.insertAdjacentHTML('beforeend', footer);
  expandIcons();

  /* ---------- Nav behaviour ---------- */
  var navEl = document.getElementById('nav');
  var menuBtn = document.getElementById('menuBtn');
  var progress = document.getElementById('progress');
  var toTop = document.getElementById('toTop');

  function onScroll() {
    var y = window.scrollY;
    navEl.classList.toggle('scrolled', y > 10);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = 'scaleX(' + (h > 0 ? y / h : 0) + ')';
    toTop.classList.toggle('show', y > 700);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });

  function setMenu(open) {
    navEl.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.innerHTML = ic(open ? 'x' : 'menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  menuBtn.addEventListener('click', function () { setMenu(!navEl.classList.contains('open')); });
  document.querySelectorAll('#mobilePanel a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  window.addEventListener('resize', function () { if (window.innerWidth > 1100) setMenu(false); });

  document.querySelectorAll('.has-drop').forEach(function (li) {
    var trigger = li.querySelector('.nav-link');
    li.addEventListener('mouseenter', function () { trigger.setAttribute('aria-expanded', 'true'); });
    li.addEventListener('mouseleave', function () { trigger.setAttribute('aria-expanded', 'false'); });
    li.addEventListener('keydown', function (e) { if (e.key === 'Escape') { trigger.setAttribute('aria-expanded', 'false'); trigger.focus(); li.querySelector('.dropdown').classList.remove('show'); } });
  });

  /* ---------- Donate links ---------- */
  function donateHref(amount, monthly) {
    if (CONFIG.donateUrl) return CONFIG.donateUrl;
    var subj = 'Donation to the Alec Davis Foundation Endowment';
    var body = 'Hello Alec,\n\nI would like to make a ' + (monthly ? 'monthly ' : '') + 'gift' + (amount ? ' of $' + amount.toLocaleString() : '') + ' to the Alec Davis Foundation endowment campaign. Please send me the giving details.\n\nThank you,';
    return 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
  }
  document.querySelectorAll('[data-donate]').forEach(function (a) {
    a.href = donateHref();
    if (CONFIG.donateUrl) { a.target = '_blank'; a.rel = 'noopener'; }
  });
  document.querySelectorAll('[data-mail]').forEach(function (a) {
    var subj = a.getAttribute('data-mail') || 'Alec Davis Foundation';
    a.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent(subj);
  });

  /* ---------- Toast + copy ---------- */
  var toast = document.getElementById('toast');
  var toastText = document.getElementById('toastText');
  var toastTimer;
  function showToast(msg) {
    toastText.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2400);
  }
  function copyText(text, msg) {
    function fallback() {
      var t = document.createElement('textarea');
      t.value = text; t.setAttribute('readonly', ''); t.style.position = 'absolute'; t.style.left = '-9999px';
      document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); showToast(msg); } catch (e) {}
      document.body.removeChild(t);
    }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(function () { showToast(msg); }, fallback);
    else fallback();
  }
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var sel = btn.getAttribute('data-copy');
      var text = sel.charAt(0) === '#' ? document.querySelector(sel).innerText.trim() : sel;
      copyText(text, btn.getAttribute('data-toast') || 'Copied to clipboard');
    });
  });

  /* ---------- Share links ---------- */
  var shareUrl = encodeURIComponent(CONFIG.siteUrl);
  var shareMsg = encodeURIComponent('The Alec Davis Foundation is building a $1 billion permanent endowment to serve American communities for generations. Take a look:');
  var shareMap = {
    x: 'https://twitter.com/intent/tweet?text=' + shareMsg + '&url=' + shareUrl,
    facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + shareUrl,
    linkedin: 'https://www.linkedin.com/sharing/share-offsite/?url=' + shareUrl,
    email: 'mailto:?subject=' + encodeURIComponent('A foundation built to give forever') + '&body=' + shareMsg + '%20' + shareUrl
  };
  document.querySelectorAll('[data-share]').forEach(function (a) {
    var k = a.getAttribute('data-share');
    if (k === 'copy') { a.addEventListener('click', function () { copyText(CONFIG.siteUrl, 'Link copied'); }); return; }
    a.href = shareMap[k];
    if (k !== 'email') { a.target = '_blank'; a.rel = 'noopener'; }
  });

  /* ---------- Split headline words ---------- */
  document.querySelectorAll('.split-words').forEach(function (el) {
    var delay = parseFloat(el.getAttribute('data-delay') || '0.1');
    var i = 0;
    function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            var s = document.createElement('span');
            s.className = 'w'; s.textContent = part;
            s.style.animationDelay = (delay + i++ * 0.07) + 's';
            frag.appendChild(s);
          });
          child.parentNode.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          if (child.classList.contains('grad-text')) {
            child.classList.add('w');
            child.style.animationName = 'word-in, grad-shift';
            child.style.animationDuration = '.9s, 6s';
            child.style.animationTimingFunction = 'cubic-bezier(0.22, 1, 0.36, 1), ease-in-out';
            child.style.animationIterationCount = '1, infinite';
            child.style.animationDirection = 'normal, alternate';
            child.style.animationFillMode = 'forwards, none';
            child.style.animationDelay = (delay + i++ * 0.07) + 's, 0s';
          } else walk(child);
        }
      });
    }
    walk(el);
  });

  /* ---------- Count-up numbers ---------- */
  function formatNum(n, dec) {
    return n.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var pre = el.getAttribute('data-prefix') || '';
    var suf = el.getAttribute('data-suffix') || '';
    if (reduce) { el.textContent = pre + formatNum(target, dec) + suf; return; }
    var dur = 1800, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 4);
      el.textContent = pre + formatNum(target * eased, dec) + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Reveal on scroll ---------- */
  var revealTargets = document.querySelectorAll('.reveal, .phases, [data-count]');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        if (e.target.hasAttribute('data-count')) countUp(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in'); if (el.hasAttribute('data-count')) countUp(el); });
  }

  /* ---------- Parallax ---------- */
  var parallax = document.querySelectorAll('[data-parallax]');
  if (parallax.length && !reduce) {
    var ticking = false;
    function updateParallax() {
      parallax.forEach(function (el) {
        var r = el.parentElement.getBoundingClientRect();
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
        var offset = (r.top + r.height / 2 - window.innerHeight / 2) * speed;
        el.style.transform = 'translateY(' + offset.toFixed(1) + 'px) scale(1.15)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(updateParallax); ticking = true; } }, { passive: true });
    updateParallax();
  }

  /* ---------- Blob mouse drift ---------- */
  if (!reduce && window.matchMedia('(pointer: fine)').matches) {
    var blobs = document.querySelectorAll('.blob');
    window.addEventListener('mousemove', function (e) {
      var x = e.clientX / window.innerWidth - 0.5, y = e.clientY / window.innerHeight - 0.5;
      blobs.forEach(function (b, idx) { var f = (idx + 1) * 16; b.style.translate = (x * f) + 'px ' + (y * f) + 'px'; });
    }, { passive: true });
  }

  /* ---------- Tilt on hover ---------- */
  if (!reduce && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('[data-tilt]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = 'perspective(1000px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  /* ---------- Sticky sub-nav + scrollspy ---------- */
  var subnav = document.querySelector('.subnav');
  if (subnav) {
    var chips = subnav.querySelectorAll('a.chip[href^="#"]');
    var sections = Array.prototype.map.call(chips, function (c) { return document.querySelector(c.getAttribute('href')); });
    var chipRow = subnav.querySelector('.chips');
    window.addEventListener('scroll', function () {
      var top = subnav.getBoundingClientRect().top;
      subnav.classList.toggle('stuck', top <= navEl.offsetHeight + 1);
      var current = -1;
      sections.forEach(function (s, idx) { if (s && s.getBoundingClientRect().top < window.innerHeight * 0.35) current = idx; });
      chips.forEach(function (c, idx) {
        var on = idx === current;
        if (on && !c.classList.contains('active')) {
          chipRow.scrollTo({ left: c.offsetLeft - (chipRow.clientWidth - c.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' });
        }
        c.classList.toggle('active', on);
      });
    }, { passive: true });

    // Edge fades only on the side(s) with more chips to reveal
    function updateFades() {
      var max = chipRow.scrollWidth - chipRow.clientWidth;
      chipRow.classList.toggle('fade-l', chipRow.scrollLeft > 4);
      chipRow.classList.toggle('fade-r', chipRow.scrollLeft < max - 4);
    }
    chipRow.addEventListener('scroll', updateFades, { passive: true });
    window.addEventListener('resize', updateFades);
    updateFades();

    // Click-and-drag to scroll the chip row with a mouse
    var dragX = null, dragStart = 0, moved = false;
    chipRow.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse') return;
      dragX = e.clientX; dragStart = chipRow.scrollLeft; moved = false;
    });
    window.addEventListener('pointermove', function (e) {
      if (dragX === null) return;
      var dx = e.clientX - dragX;
      if (Math.abs(dx) > 5) { moved = true; chipRow.classList.add('dragging'); }
      if (moved) chipRow.scrollLeft = dragStart - dx;
    });
    window.addEventListener('pointerup', function () {
      dragX = null;
      setTimeout(function () { chipRow.classList.remove('dragging'); }, 0);
    });
  }

  /* ---------- Range slider fill ---------- */
  function paintRange(r) {
    var p = (r.value - r.min) / (r.max - r.min) * 100;
    r.style.setProperty('--p', p + '%');
  }

  function money(n) {
    if (n >= 1e9) return '$' + (n / 1e9).toFixed(n % 1e9 === 0 ? 0 : 2) + ' billion';
    if (n >= 1e6) return '$' + (n / 1e6).toFixed(1).replace(/\.0$/, '') + ' million';
    return '$' + Math.round(n).toLocaleString('en-US');
  }
  function animateText(el, to, fmt) {
    var from = parseFloat(el.getAttribute('data-v') || '0');
    el.setAttribute('data-v', to);
    if (reduce) { el.textContent = fmt(to); return; }
    var start = null, dur = 600;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(from + (to - from) * e);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Endowment calculator (Mission) ---------- */
  var rate = document.getElementById('calcRate');
  if (rate) {
    var size = document.getElementById('calcSize');
    var outRate = document.getElementById('outRate');
    var outSize = document.getElementById('outSize');
    var annual = document.getElementById('calcAnnual');
    var daily = document.getElementById('calcDaily');
    var century = document.getElementById('calcCentury');
    function updateCalc() {
      var r = parseFloat(rate.value) / 100;
      var s = parseFloat(size.value) * 1e6;
      outRate.textContent = rate.value + '%';
      outSize.textContent = money(s);
      paintRange(rate); paintRange(size);
      animateText(annual, s * r, money);
      animateText(daily, s * r / 365, function (v) { return '$' + Math.round(v).toLocaleString('en-US'); });
      animateText(century, s * r * 100, money);
    }
    rate.addEventListener('input', updateCalc);
    size.addEventListener('input', updateCalc);
    updateCalc();
  }

  /* ---------- Donate amount picker ---------- */
  var amountWrap = document.getElementById('amounts');
  if (amountWrap) {
    var amount = 250, monthly = false;
    var giveBtn = document.getElementById('giveBtn');
    var giveLabel = document.getElementById('giveLabel');
    var impYear = document.getElementById('impYear');
    var imp100 = document.getElementById('imp100');
    var impTotal = document.getElementById('impTotal');
    var custom = document.getElementById('customAmount');
    var customOut = document.getElementById('customOut');
    function updateGift() {
      var principal = monthly ? amount * 12 : amount;
      giveLabel.textContent = 'Give $' + amount.toLocaleString('en-US') + (monthly ? ' / month' : '');
      giveBtn.href = donateHref(amount, monthly);
      animateText(impTotal, principal, function (v) { return '$' + Math.round(v).toLocaleString('en-US'); });
      animateText(impYear, principal * 0.05, function (v) { return '$' + Math.round(v).toLocaleString('en-US'); });
      animateText(imp100, principal * 0.05 * 100, function (v) { return '$' + Math.round(v).toLocaleString('en-US'); });
      document.getElementById('impTotalLabel').textContent = monthly ? 'Added to the endowment each year' : 'Added to the permanent endowment';
    }
    amountWrap.querySelectorAll('.amount').forEach(function (b) {
      b.addEventListener('click', function () {
        amountWrap.querySelectorAll('.amount').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        amount = parseInt(b.getAttribute('data-amount'), 10);
        custom.value = amount; paintRange(custom); customOut.textContent = '$' + amount.toLocaleString('en-US');
        updateGift();
      });
    });
    custom.addEventListener('input', function () {
      amount = parseInt(custom.value, 10);
      customOut.textContent = '$' + amount.toLocaleString('en-US');
      paintRange(custom);
      amountWrap.querySelectorAll('.amount').forEach(function (x) { x.classList.toggle('active', parseInt(x.getAttribute('data-amount'), 10) === amount); });
      updateGift();
    });
    document.querySelectorAll('.freq button').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('.freq button').forEach(function (x) { x.classList.remove('active'); x.setAttribute('aria-pressed', 'false'); });
        b.classList.add('active'); b.setAttribute('aria-pressed', 'true');
        monthly = b.getAttribute('data-freq') === 'monthly';
        updateGift();
      });
    });
    // Allow links like donate.html?freq=monthly&amount=100
    var params = new URLSearchParams(window.location.search);
    var preset = parseInt(params.get('amount'), 10);
    if (preset >= 25 && preset <= 10000) {
      amount = preset; custom.value = preset;
      customOut.textContent = '$' + preset.toLocaleString('en-US');
      amountWrap.querySelectorAll('.amount').forEach(function (x) { x.classList.toggle('active', parseInt(x.getAttribute('data-amount'), 10) === preset); });
    }
    if (params.get('freq') === 'monthly') { var mb = document.querySelector('.freq [data-freq="monthly"]'); if (mb) mb.click(); }
    paintRange(custom);
    updateGift();
  }

  /* ---------- Typed text ---------- */
  document.querySelectorAll('[data-typed]').forEach(function (el) {
    var words = el.getAttribute('data-typed').split('|');
    if (reduce) { el.textContent = words[0]; return; }
    var w = 0, i = 0, del = false;
    (function tick() {
      var word = words[w];
      el.textContent = word.slice(0, i);
      if (!del && i < word.length) { i++; setTimeout(tick, 80); }
      else if (!del) { del = true; setTimeout(tick, 2200); }
      else if (i > 0) { i--; setTimeout(tick, 35); }
      else { del = false; w = (w + 1) % words.length; setTimeout(tick, 300); }
    })();
  });
})();
