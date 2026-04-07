// Initialize Icons
lucide.createIcons();

// AOS Initialization
AOS.init({ duration: 1200, once: false });

// URL Guest Name
const urlParams = new URLSearchParams(window.location.search);
const guest = urlParams.get('to');
if (guest) document.getElementById('guest-name').innerText = guest;

// Theme Toggle with Icon Switch
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    
    const icon = themeToggle.querySelector('i');
    if(body.classList.contains('dark-theme')) {
        icon.setAttribute('data-lucide', 'sun');
    } else {
        icon.setAttribute('data-lucide', 'moon-star');
    }
    lucide.createIcons(); // Refresh icons
});

// Countdown
const target = new Date("Juny 02, 2026 08:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;
    document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('seconds').innerText = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);

// RSVP Gmail
function sendRSVP() {
    const name = document.getElementById('rsvp-name').value;
    const status = document.getElementById('rsvp-status').value;
    const mail = "muhammadromliidris@gmail.com";
    const subject = encodeURIComponent(`RSVP Undangan - ${name}`);
    const body = encodeURIComponent(`Halo Romli & Maryam,\n\nSaya ${name} memberikan konfirmasi bahwa saya ${status} dalam acara pernikahan kalian.\n\nTerima kasih.`);
    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
}

// Tambahkan ini di dalam script.js mu
const mobileThemeBtn = document.getElementById('theme-toggle-mobile');

if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        
        // Update Ikon
        const isDark = document.body.classList.contains('dark-theme');
        mobileThemeBtn.querySelector('i').setAttribute('data-lucide', isDark ? 'sun' : 'moon');
        
        if(window.lucide) lucide.createIcons();
    });
}
lucide.createIcons();

function toggleMenu() {
    const overlay = document.getElementById('navOverlay');
    const menuIcon = document.querySelector('.menu-toggle i');
    
    // Toggle class active
    overlay.classList.toggle('active');
    
    // Ganti ikon Menu ke 'X' saat terbuka
    if (overlay.classList.contains('active')) {
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    
    // Refresh Lucide Icons
    if (window.lucide) lucide.createIcons();
}

function copyNorek(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<span>BERHASIL DISALIN</span> <i data-lucide="check"></i>';
        if (window.lucide) lucide.createIcons();
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            if (window.lucide) lucide.createIcons();
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}

function toggleMenu() {
  const overlay = document.getElementById('menuOverlay');
  overlay.classList.toggle('active');
  
  // Ganti ikon menu menjadi Close (X)
  const icon = document.querySelector('.menu-toggle i');
  const isOpen = overlay.classList.contains('active');
  icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
  lucide.createIcons();
}

