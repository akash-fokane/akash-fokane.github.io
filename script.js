(function () {
  var sections = document.querySelectorAll('main section[id]');
  var sbLinks = document.querySelectorAll('#sbNav a');
  var mLinks = document.querySelectorAll('#mobileNav a');
  function setActive(id) {
    sbLinks.forEach(function (a) { a.classList.toggle('active', a.dataset.target === id); });
    mLinks.forEach(function (a) { a.classList.toggle('active', a.dataset.target === id); });
  }
  var navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { setActive(entry.target.id); }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(function (s) { navObserver.observe(s); });
})();

(function () {
  var items = document.querySelectorAll('.reveal');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(function (el) { revealObserver.observe(el); });
})();