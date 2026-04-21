const state = {
  lang: 'en',
  loggedIn: false,
  phone: null,
  role: 'beneficiary',
  donations: [
    {
      id: 1,
      foodType: 'Rice',
      quantity: 3,
      location: 'Dammam, Street 10',
      time: '2026-04-21 18:00',
      status: 'available'
    }
  ],
  history: []
};

const screens = document.querySelectorAll('.screen');

function showScreen(id, animationClass = 'fade-in') {
  screens.forEach(s => {
    s.classList.remove('active', 'fade-in', 'slide-up', 'slide-left', 'slide-right');
  });
  const el = document.getElementById(`screen-${id}`);
  if (el) {
    el.classList.add('active');
    if (animationClass) el.classList.add(animationClass);
  }
}

/* Start sequence – نفس فكرة الفيديو */

function startSequence() {
  showScreen('start-1', 'fade-in');
  setTimeout(() => showScreen('start-2', 'fade-in'), 1500);
  setTimeout(() => showScreen('start-3', 'slide-up'), 3000);
}

startSequence();

/* Translations */

const translations = {
  en: {
    appName: 'SOUN',
    appTagline: 'A Platform to Sharing Surplus Food and Reducing Waste',
    verse: '(And eat and drink but waste not by extravagance)',
    start2Title: 'Reduce food waste',
    start2Body: 'Share what you don’t need with those who do.',
    start3Title: 'Welcome to SOUN',
    start3Body: 'Where food is shared, not wasted.',
    startNow: 'Log in',
    loginTitle: 'SOUN صون',
    loginSub: 'A Platform to Sharing Surplus Food and Reducing Waste',
    loginBtn: 'Log in',
    welcomeTitle: 'Welcome to SOUN',
    welcomeBody: 'Where food is Shared not Wasted',
    loginSectionTitle: 'Log in',
    phoneLabel: 'Enter your mobile number',
    sendCode: 'Send verification code',
    codeTitle: 'Verification code',
    codeBody: 'Enter the code we sent to your phone.',
    continue: 'Continue',
    langTitle: 'Choose language',
    langEn: 'English',
    langAr: 'Arabic',
    homeTitle: 'Welcome to SOUN',
    homeSubtitle: 'Choose what you want to do today.',
    donateFood: 'Donate food',
    requestFood: 'Request food',
    donateTitle: 'New donation',
    foodType: 'Food type',
    quantity: 'Quantity',
    location: 'Pickup location',
    time: 'Pickup time',
    submitDonation: 'Submit donation',
    donationSubmitted: 'Donation submitted',
    donationThanks: 'Thank you for your contribution.',
    backHome: 'Back to home',
    requestTitle: 'Available donations',
    refresh: 'Refresh',
    requestSubmitted: 'Request submitted',
    requestInfo: 'Donor will be notified.',
    historyTitle: 'History',
    profileTitle: 'Profile',
    profilePhone: 'Phone:',
    profileRole: 'Role:',
    logout: 'Logout',
    navHome: 'Home',
    navHistory: 'History',
    navProfile: 'Profile',
    roleDonor: 'Donor',
    roleBeneficiary: 'Beneficiary',
    noDonations: 'No donations available right now.',
    noHistory: 'No history yet.',
    requestThis: 'Request this',
    alertPhone: 'Please enter phone number',
    alertCode: 'Enter the code',
    alertFields: 'Please fill all fields.',
    alertDonorOnly: 'Only donors can create donations.',
    alertBenefOnly: 'Only beneficiaries can request donations.'
  },
  ar: {
    appName: 'صون',
    appTagline: 'منصة لمشاركة فائض الطعام وتقليل الهدر',
    verse: '(وكلوا واشربوا ولا تسرفوا)',
    start2Title: 'قللي هدر الطعام',
    start2Body: 'شاركي الفائض مع من يحتاجه.',
    start3Title: 'مرحباً في صون',
    start3Body: 'حيث يُشارك الطعام ولا يُهدر.',
    startNow: 'تسجيل الدخول',
    loginTitle: 'SOUN صون',
    loginSub: 'منصة لمشاركة فائض الطعام وتقليل الهدر',
    loginBtn: 'تسجيل الدخول',
    welcomeTitle: 'مرحباً في صون',
    welcomeBody: 'حيث يُشارك الطعام ولا يُهدر',
    loginSectionTitle: 'تسجيل الدخول',
    phoneLabel: 'أدخلي رقم جوالك',
    sendCode: 'إرسال رمز التحقق',
    codeTitle: 'رمز التحقق',
    codeBody: 'أدخلي الرمز المرسل إلى جوالك.',
    continue: 'متابعة',
    langTitle: 'اختاري اللغة',
    langEn: 'الإنجليزية',
    langAr: 'العربية',
    homeTitle: 'مرحباً في صون',
    homeSubtitle: 'اختاري وش حابة تسوين اليوم.',
    donateFood: 'تبرع بطعام',
    requestFood: 'طلب طعام',
    donateTitle: 'تبرع جديد',
    foodType: 'نوع الطعام',
    quantity: 'الكمية',
    location: 'موقع الاستلام',
    time: 'وقت الاستلام',
    submitDonation: 'إرسال التبرع',
    donationSubmitted: 'تم إرسال التبرع',
    donationThanks: 'شكراً لمساهمتك.',
    backHome: 'الرجوع للرئيسية',
    requestTitle: 'التبرعات المتاحة',
    refresh: 'تحديث',
    requestSubmitted: 'تم إرسال الطلب',
    requestInfo: 'سيتم إشعار المتبرع.',
    historyTitle: 'السجل',
    profileTitle: 'الملف الشخصي',
    profilePhone: 'الجوال:',
    profileRole: 'الدور:',
    logout: 'تسجيل خروج',
    navHome: 'الرئيسية',
    navHistory: 'السجل',
    navProfile: 'الملف',
    roleDonor: 'متبرع',
    roleBeneficiary: 'مستفيد',
    noDonations: 'لا توجد تبرعات حالياً.',
    noHistory: 'لا يوجد سجل بعد.',
    requestThis: 'طلب هذا التبرع',
    alertPhone: 'أدخلي رقم الجوال',
    alertCode: 'أدخلي الرمز',
    alertFields: 'عبّي كل الحقول.',
    alertDonorOnly: 'فقط المتبرعين يقدرون يضيفون تبرعات.',
    alertBenefOnly: 'فقط المستفيدين يقدرون يطلبون تبرعات.'
  }
};

function applyLanguage() {
  const t = translations[state.lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  const phone = document.querySelector('.phone');
  if (state.lang === 'ar') {
    phone.classList.add('rtl');
  } else {
    phone.classList.remove('rtl');
  }

  document.getElementById('profile-phone').textContent = state.phone || '-';
  document.getElementById('profile-role').textContent =
    state.role === 'donor' ? t.roleDonor : t.roleBeneficiary;
}

/* Lang buttons top */

document.getElementById('btn-lang-en').addEventListener('click', () => {
  state.lang = 'en';
  document.getElementById('btn-lang-en').classList.add('active');
  document.getElementById('btn-lang-ar').classList.remove('active');
  applyLanguage();
});

document.getElementById('btn-lang-ar').addEventListener('click', () => {
  state.lang = 'ar';
  document.getElementById('btn-lang-ar').classList.add('active');
  document.getElementById('btn-lang-en').classList.remove('active');
  applyLanguage();
});

/* Lang screen buttons */

document.getElementById('btn-lang-screen-en').addEventListener('click', () => {
  state.lang = 'en';
  document.getElementById('btn-lang-en').classList.add('active');
  document.getElementById('btn-lang-ar').classList.remove('active');
  applyLanguage();
  showHome();
});

document.getElementById('btn-lang-screen-ar').addEventListener('click', () => {
  state.lang = 'ar';
  document.getElementById('btn-lang-ar').classList.add('active');
  document.getElementById('btn-lang-en').classList.remove('active');
  applyLanguage();
  showHome();
});

/* Start 3 → Login */

document.getElementById('btn-start-now').addEventListener('click', () => {
  showScreen('login', 'slide-left');
});

/* Login → LoginNum */

document.getElementById('btn-go-login-num').addEventListener('click', () => {
  showScreen('login-num', 'slide-left');
});

/* Back buttons */

document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-back');
    if (target === 'login') showScreen('login', 'slide-right');
    else if (target === 'login-num') showScreen('login-num', 'slide-right');
    else if (target === 'home') showHome();
  });
});

/* LoginNum: send code */

document.getElementById('btn-send-code').addEventListener('click', () => {
  const t = translations[state.lang];
  const phoneInput = document.getElementById('login-phone');
  const phone = phoneInput.value.trim();
  if (!phone) {
    alert(t.alertPhone);
    return;
  }
  state.phone = phone;
  showScreen('login-enter', 'slide-up');
});

/* LoginEnter: verify */

document.getElementById('btn-verify-pin').addEventListener('click', () => {
  const t = translations[state.lang];
  const pin = document.getElementById('login-pin').value.trim();
  if (!pin) {
    alert(t.alertCode);
    return;
  }
  state.loggedIn = true;
  showScreen('language', 'slide-left');
});

/* Home */

function showHome() {
  const t = translations[state.lang];
  document.getElementById('home-role-label').textContent = t.homeSubtitle;
  document.getElementById('profile-phone').textContent = state.phone || '-';
  document.getElementById('profile-role').textContent =
    state.role === 'donor' ? t.roleDonor : t.roleBeneficiary;
  showScreen('home', 'fade-in');
}

/* Bottom nav */

document.querySelectorAll('.bottom-nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-screen');
    if (target === 'home') showHome();
    else if (target === 'history') renderHistory();
    else if (target === 'profile') showScreen('profile', 'fade-in');
  });
});

/* Home actions */

document.getElementById('btn-go-donate').addEventListener('click', () => {
  const t = translations[state.lang];
  if (state.role !== 'donor') {
    alert(t.alertDonorOnly);
    return;
  }
  showScreen('donate', 'slide-left');
});

document.getElementById('btn-go-request').addEventListener('click', () => {
  const t = translations[state.lang];
  if (state.role !== 'beneficiary') {
    alert(t.alertBenefOnly);
    return;
  }
  renderDonations();
  showScreen('request', 'slide-left');
});

/* Donate form */

document.getElementById('form-donate').addEventListener('submit', e => {
  e.preventDefault();
  const t = translations[state.lang];
  const foodType = document.getElementById('donate-food-type').value.trim();
  const quantity = Number(document.getElementById('donate-quantity').value);
  const location = document.getElementById('donate-location').value.trim();
  const time = document.getElementById('donate-time').value;

  if (!foodType || !quantity || !location || !time) {
    alert(t.alertFields);
    return;
  }

  const newDonation = {
    id: Date.now(),
    foodType,
    quantity,
    location,
    time,
    status: 'available'
  };

  state.donations.push(newDonation);
  state.history.push({
    type: 'donation',
    ...newDonation
  });

  e.target.reset();
  showScreen('confirm-donation', 'fade-in');
});

document
  .getElementById('btn-back-home-from-confirm')
  .addEventListener('click', showHome);

/* Render donations */

function renderDonations() {
  const t = translations[state.lang];
  const list = document.getElementById('donations-list');
  list.innerHTML = '';

  const available = state.donations.filter(d => d.status === 'available');

  if (!available.length) {
    const li = document.createElement('li');
    li.textContent = t.noDonations;
    list.appendChild(li);
    return;
  }

  available.forEach(d => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${d.foodType}</strong><br/>
      ${t.quantity} : ${d.quantity}<br/>
      ${t.location} : ${d.location}<br/>
      ${t.time} : ${d.time}<br/>
    `;
    const btn = document.createElement('button');
    btn.textContent = t.requestThis;
    btn.className = 'btn secondary';
    btn.addEventListener('click', () => requestDonation(d.id));
    li.appendChild(btn);
    list.appendChild(li);
  });
}

document
  .getElementById('btn-refresh-donations')
  .addEventListener('click', renderDonations);

function requestDonation(id) {
  const donation = state.donations.find(d => d.id === id);
  if (!donation) return;
  donation.status = 'requested';
  state.history.push({
    type: 'request',
    donationId: donation.id,
    foodType: donation.foodType,
    quantity: donation.quantity,
    location: donation.location,
    time: donation.time
  });
  showScreen('confirm-request', 'fade-in');
}

document
  .getElementById('btn-back-home-from-request')
  .addEventListener('click', showHome);

/* History */

function renderHistory() {
  const t = translations[state.lang];
  const list = document.getElementById('history-list');
  list.innerHTML = '';

  if (!state.history.length) {
    const li = document.createElement('li');
    li.textContent = t.noHistory;
    list.appendChild(li);
    showScreen('history', 'fade-in');
    return;
  }

  state.history.forEach(item => {
    const li = document.createElement('li');
    if (item.type === 'donation') {
      li.innerHTML = `
        <strong>${t.donateFood}</strong><br/>
        ${item.foodType} – ${item.quantity}<br/>
        ${item.location}<br/>
        ${item.time}
      `;
    } else if (item.type === 'request') {
      li.innerHTML = `
        <strong>${t.requestFood}</strong><br/>
        ${item.foodType} – ${item.quantity}<br/>
        ${item.location}<br/>
        ${item.time}
      `;
    }
    list.appendChild(li);
  });

  showScreen('history', 'fade-in');
}

/* Logout */

document.getElementById('btn-logout').addEventListener('click', () => {
  state.loggedIn = false;
  state.phone = null;
  state.role = 'beneficiary';
  startSequence();
  applyLanguage();
});

/* أول مرة: طبّق اللغة الافتراضية */

applyLanguage();
