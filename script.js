document.addEventListener('DOMContentLoaded', function() {
  // Initialize Feather icons
  feather.replace();
  
  // Scroll behavior for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(this.hash);
        
        if (targetElement) {
          // Close mobile menu if open
          if (document.querySelector('.mobile-menu-sheet').classList.contains('open')) {
            toggleMobileMenu();
          }
          
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for header height
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenuSheet = document.querySelector('.mobile-menu-sheet');
  
  function toggleMobileMenu() {
    mobileMenuSheet.classList.toggle('open');
    document.body.classList.toggle('overflow-hidden');
  }
  
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  
  // Header shadow on scroll
  const header = document.querySelector('.header');
  
  function handleScroll() {
    if (window.scrollY > 10) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  
  // Toast notification system
  const toastContainer = document.getElementById('toast-container');
  
  window.showToast = function(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = message;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        toastContainer.removeChild(toast);
      }, 300);
    }, duration);
  };
  
  // Media query for mobile detection
  function checkMobile() {
    return window.innerWidth < 768;
  }
  
  // Initial mobile check
  window.isMobile = checkMobile();
  
  // Update on resize
  window.addEventListener('resize', function() {
    window.isMobile = checkMobile();
  });
});