const option = {};

function callback (entries, obj) {
  entries.forEach(function(entry, i) {
      if (!entry.isIntersecting) {
          return;
      }

      const el = entry.target;
      const article_data_ep = 'endpoint.json';
      fetch(article_data_ep)
      .then(e => e.json())
      .then(e => {
        const article_body = e.data;
        el.innerHTML = article_body;
        obj.unobserve(el);
      })
  });
}

const observer = new IntersectionObserver(callback, option)

const target = document.querySelectorAll('.infinite_contents');
[...target].forEach(e => {
  observer.observe(e)
})
