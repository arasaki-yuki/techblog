(function(){
  const MAX = 100;
  let rand_num = Math.floor(Math.random() * MAX + 1)
  if (rand_num > 99) {
    const app = document.querySelector('#app');
    const creative = `
      <div style="
        font-weight: bold;
        font-size: 104px;
        color: salmon;
        display: flex;
        justify-content: center;
        align-items: center; 
        margin-top: 100px;
      "><span>Tada!</span></div>
    `
    app.insertAdjacentHTML('beforeend', creative);
  }
})();