// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var horn=document.querySelector('horn');
  console.log(horn);
  horn.addEventListener('change',images);

}

function images(){
  var choice=horn.value;
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