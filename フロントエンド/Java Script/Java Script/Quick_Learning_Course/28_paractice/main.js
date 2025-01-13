const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-slide-animation');
        observer.unobserve(entry.target);
      }
    }
  },
  {
    threshold: 0.5,
  }
);
const sections = document.querySelectorAll('section');
for (const section of sections) {
  observer.observe(section);
}
