// expose.js
var select=document.querySelector('select');
console.log(select);
console.log(hello);
window.addEventListener('change', init);

function init() {
  // TODO
  var choice=select.value;
  console.log(choice);
  if(choice==='Air horn'){
    img.src=asserts/images/air-horn.svg;
  }
  else if(choice==='Car horn'){
    var img=new img;
    img.src=asserts/images/car-horn.svg;
  }
  else if(choice==='Party horn'){
    var img=new img;
    img.src=asserts/images/party-horn.svg;
  }

}

