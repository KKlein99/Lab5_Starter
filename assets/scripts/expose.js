// expose.js
var select=document.querySelector('select');
window.addEventListener('change', init);

function init() {
  // TODO
  var choice=select.value;
  console.log(choice);
  if(choice==='Air horn'){
    url(asserts/images/air-horn.svg);
  }
  else if(choice==='Car horn'){
    var img=new img;
    url(asserts/images/car-horn.svg);
  }
  else if(choice==='Party horn'){
    var img=new img;
    url(asserts/images/party-horn.svg);
  }

}

