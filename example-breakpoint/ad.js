(function(){
  const src = document.currentScript.src;
  const query = new URL(src).search;
  const id = query.split('=')[1];
  const selector = `#ad${id}`;

  const ad = document.querySelector(selector);
  const creative = `
  <div
    style="
      width: 300px;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: salmon;
      color: #fff;
      font-size: 24px;
      text-align: center;
      margin: 0 auto;
      border: solid 1px #333;
    "
  >{DevTools AD}</div>
  `;
  ad.insertAdjacentHTML("beforeend", creative);
})();