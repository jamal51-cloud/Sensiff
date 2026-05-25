const sensiData = {
  "Samsung Galaxy A14": {
    general: 185,
    redDot: 195,
    scope2x: 175,
    scope4x: 160,
    sniper: 120,
    freeLook: 90,
    dpi: 620,
    touch: 'Smooth'
  },

  "Samsung Galaxy S23": {
    general: 200,
    redDot: 200,
    scope2x: 190,
    scope4x: 180,
    sniper: 145,
    freeLook: 110,
    dpi: 780,
    touch: 'Ultra Smooth'
  },

  "Xiaomi Redmi Note 12": {
    general: 190,
    redDot: 198,
    scope2x: 182,
    scope4x: 165,
    sniper: 130,
    freeLook: 95,
    dpi: 700,
    touch: 'Drag HS'
  },

  "POCO X6 Pro": {
    general: 200,
    redDot: 200,
    scope2x: 195,
    scope4x: 185,
    sniper: 150,
    freeLook: 120,
    dpi: 820,
    touch: 'iPhone Feel'
  },

  "Infinix GT 20 Pro": {
    general: 198,
    redDot: 200,
    scope2x: 188,
    scope4x: 175,
    sniper: 145,
    freeLook: 110,
    dpi: 760,
    touch: 'Fast Drag'
  },

  "TECNO POVA 6": {
    general: 192,
    redDot: 199,
    scope2x: 180,
    scope4x: 168,
    sniper: 135,
    freeLook: 100,
    dpi: 720,
    touch: 'Smooth Aim'
  },

  "realme Narzo 70": {
    general: 194,
    redDot: 200,
    scope2x: 184,
    scope4x: 170,
    sniper: 140,
    freeLook: 102,
    dpi: 735,
    touch: 'Auto Headshot'
  },

  "ROG Phone 8": {
    general: 200,
    redDot: 200,
    scope2x: 200,
    scope4x: 190,
    sniper: 160,
    freeLook: 130,
    dpi: 900,
    touch: 'Extreme Smooth'
  },

  "iPhone 15 Pro Max": {
    general: 200,
    redDot: 200,
    scope2x: 198,
    scope4x: 188,
    sniper: 155,
    freeLook: 120,
    dpi: 850,
    touch: 'Ultra iPhone'
  },

  "Advan GX": {
    general: 180,
    redDot: 192,
    scope2x: 170,
    scope4x: 155,
    sniper: 118,
    freeLook: 88,
    dpi: 600,
    touch: 'Stabil'
  }
};

function generateSensi(){

const hp = document.getElementById('brand').value;
const data = sensiData[hp];

if(!data){
  alert('HP belum tersedia');
  return;
}

document.getElementById('general').innerText = data.general;
document.getElementById('reddot').innerText = data.redDot;
document.getElementById('scope2x').innerText = data.scope2x;
document.getElementById('scope4x').innerText = data.scope4x;
document.getElementById('sniper').innerText = data.sniper;
document.getElementById('freelook').innerText = data.freeLook;
document.getElementById('dpi').innerText = data.dpi;
document.getElementById('touch').innerText = data.touch;

document.getElementById('result').style.display = 'block';
}
