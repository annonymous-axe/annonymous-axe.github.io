    const toggleIcon = document.getElementById('toggleIcon');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuItems = menuOverlay.querySelectorAll('li');

    

    toggleIcon.addEventListener('click', () => {
      const isOpen = menuOverlay.classList.toggle('show');

      toggleIcon.classList.toggle('fa-chevron-down', !isOpen);
      toggleIcon.classList.toggle('fa-angle-up', isOpen);
    
      toggleIcon.style.color = '#f1f1f1';
    
      if (isOpen) {
        menuItems.forEach((item) => {

          item.classList.remove('animate');
          void item.offsetWidth; // force reflow
          setTimeout(() => item.classList.add('animate'), 50);
        });
      } 
    });

    document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll(".stat-number");
  
  const startCounting = (element) => {
    const target = +element.getAttribute("data-count");
    let count = 0;
    const speed = target / 300; // speed factor
    
    const updateCount = () => {
      if (count < target) {
        count += Math.ceil(speed);
        element.textContent = count + (target > 10 ? "+" : "");
        requestAnimationFrame(updateCount);
      } else {
        element.textContent = target + (target > 10 ? "+" : "");
      }
    };
    
    updateCount();
  };

  // Trigger animation when section is visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        counters.forEach(counter => startCounting(counter));
        observer.disconnect(); // run once
      }
    });
  }, { threshold: 0.5 });

    observer.observe(document.querySelector(".stats-section"));
  });