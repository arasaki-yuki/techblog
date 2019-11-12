(function() {
  const SELECTOR  = ".sample li";
  const WRAP      = ".wrap a";
  const aLinks    = document.querySelectorAll(SELECTOR);

  [...aLinks].forEach(e => {
    e.addEventListener("click", function(el) {
      el.preventDefault();
      const par = el.target.closest(SELECTOR);
      const a = par.querySelector(WRAP) || {};
      const href = a.href;
      window.location.href = href;
    });
  });
})();
