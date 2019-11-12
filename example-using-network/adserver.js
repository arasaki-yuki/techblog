const ad_section = document.querySelector('#adsection');
const endpoint = './endpoint.json';

fetch(endpoint)
.then(e=>e.json())
.then(e=>{
  const creative = e.data;
  const iframe = document.createElement('iframe');
  iframe.style.height = '0px';
  ad_section.appendChild(iframe)
  const doc = iframe.contentDocument;
  doc.open();
  doc.write(creative);
  doc.close();
  iframe.addEventListener('load', function(){
    const height = doc.body.scrollHeight;
    iframe.style.height = `${height}px`
  })
})