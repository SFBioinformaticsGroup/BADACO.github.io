lucide.createIcons();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));


document.addEventListener('DOMContentLoaded', function() {
  const toggles = document.querySelectorAll('.crono-toggle');
  
  toggles.forEach(btn => {
    btn.addEventListener('click', function() {
      const targetId = this.dataset.target;
      const content = document.getElementById(targetId);
      const icon = this.querySelector('.crono-icon');
      
      // Alternar visibilidad
      if (content.classList.contains('hidden')) {
        document.querySelectorAll('.crono-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.crono-toggle').forEach(b => b.classList.remove('open'));
        
        content.classList.remove('hidden');
        this.classList.add('open');
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        content.classList.add('hidden');
        this.classList.remove('open');
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    });
  });
});