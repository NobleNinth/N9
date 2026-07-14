/**
 * 9th Manhattan Masonic District - Shared Frontend Script
 * Handles global interactions: mobile navigation, sticky header shrink, and scroll reveals.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const toggleBtn = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // 2. Sticky Navbar Scroll Shrink
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    // Check initial scroll state (in case of page refresh)
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    }
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 3. Scroll Reveal Observer (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
  
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -40px 0px' // Trigger slightly before crossing viewport
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(el => el.classList.add('active'));
  }
});
