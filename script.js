function random(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function generateSensi(){

let ram=document.getElementById('ram').value;
let fps=document.getElementById('fps').value;

let general=100;
let redDot=90;
let scope2x=80;
let scope4x=70;
let sniper=60;
let freeLook=50;
let dpi=600;
let touch='Smooth';

if(ram==='2 GB'){
  general=random(70,85);
  dpi=random(450,520);
  touch='Stabil';
}

if(ram==='4 GB'){
  general=random(85,95);
  dpi=random(520,650);
  touch='Licin';
}

if(ram==='6 GB'){
  general=random(95,100);
  dpi=random(650,720);
  touch='Super Smooth';
}

if(ram==='8 GB' || ram==='12 GB' || ram==='16 GB'){
  general=100;
  dpi=random(700,850);
  touch='iPhone Feel';
}

if(fps==='120 FPS'){
  redDot=100;
  scope2x=95;
}

if(fps==='90 FPS'){
  redDot=95;
}

scope4x=random(60,85);
freeLook=random(50,75);
sniper=random(45,70);

document.getElementById('general').innerText=general;
document.getElementById('reddot').innerText=redDot;
document.getElementById('scope2x').innerText=scope2x;
document.getElementById('scope4x').innerText=scope4x;
document.getElementById('sniper').innerText=sniper;
document.getElementById('freelook').innerText=freeLook;
document.getElementById('dpi').innerText=dpi;
document.getElementById('touch').innerText=touch;

document.getElementById('result').style.display='block';
}
