// KYBA - 한국유튜브방송협회 main.js

// 헤더 스크롤 효과
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// 햄버거 메뉴
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});

// 모바일 메뉴 링크 클릭 시 닫기
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

// 히어로 닷 애니메이션
const dots = document.querySelectorAll('.dot');
let current = 0;
setInterval(() => {
  dots[current].classList.remove('active');
  current = (current + 1) % dots.length;
  dots[current].classList.add('active');
}, 3000);

// 스크롤 애니메이션 (Intersection Observer)
const animateEls = document.querySelectorAll('.quick-card, .board-card, .member-card, .mission-list li');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animateEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// 현재 섹션 하이라이트
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#gnb a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.id;
    }
  });
  navLinks.forEach(link => {
    link.parentElement.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.parentElement.classList.add('active');
    }
  });
});
