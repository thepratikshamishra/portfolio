const bars = document.querySelectorAll('.progress-bar');

function animateBars() {
    bars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (barTop < windowHeight) {  // visible in viewport
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }
    });
}

window.addEventListener('scroll', animateBars);
window.addEventListener('load', animateBars);



document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.project-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});


// our services part
/// Fade-in effect when services are visible
document.addEventListener("DOMContentLoaded", () => {
  const fadeItems = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  });

  fadeItems.forEach(item => observer.observe(item));
});


document.addEventListener("DOMContentLoaded", () => {
  const hireSection = document.querySelector(".hireme-section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        hireSection.classList.add("show");
        observer.unobserve(hireSection);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(hireSection);
});
