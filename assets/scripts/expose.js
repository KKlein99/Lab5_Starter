// expose.js
let select=document.querySelector('select');
let img=document.querySelector('img');
let audio=document.querySelector('audio');
let vv=document.getElementById("volume-controls");
console.log(vv);
let vvimg=vv.querySelector('img');
console.log(vvimg);
let input=vv.querySelector('input');
window.addEventListener('change', init);
window.addEventListener('click',Playv);

function init() {
  // TODO
  var choice=select.value;
  if(choice==='air-horn'){
    img.src='assets/images/air-horn.svg';
    audio.src='assets/audio/air-horn.mp3';
    console.log(audio.src);
  }
  else if(choice==='car-horn'){
    img.src='assets/images/car-horn.svg';
    audio.src='assets/audio/car-horn.mp3';
  }
  else if(choice==='party-horn'){
    img.src='assets/images/party-horn.svg';
    audio.src='assets/audio/party-horn.mp3';
  }

  if(input.value==="0"){
    vvimg.src='assets/icons/volume-level-0.svg';
  }
  else if(input.value>=1&&input.value<=33){
    vvimg.src='assets/icons/volume-level-1.svg'
  }
  else if(input.value>=34&&input.value<=67){
    vvimg.src='assets/icons/volume-level-2.svg'
  }
  else {
    vvimg.src='assets/icons/volume-level-3.svg'
  }

}
function Playv(){
  audio.volume=input.value/100;
  audio.play();
}

