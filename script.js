const sensiData = {
"Samsung Galaxy S24 Ultra":[200,200,195,185,150,120,850,"Late Game"],
"Samsung Galaxy A15":[188,197,178,160,125,95,650,"Smooth"],
"Xiaomi Redmi Note 13":[194,199,185,170,135,100,720,"Drag HS"],
"POCO X6 Pro":[200,200,198,188,155,125,880,"Ultra Gacor"],
"Infinix GT 20 Pro":[198,200,190,178,145,110,790,"Fast Aim"],
"TECNO POVA 6":[193,198,182,168,135,100,730,"Late Game"],
"realme GT Neo":[199,200,194,180,148,118,810,"Headshot"],
"ROG Phone 8":[200,200,200,190,160,130,920,"Extreme"],
"iPhone 15 Pro Max":[200,200,198,188,155,125,870,"iPhone Feel"],
"Advan GX":[182,193,172,156,120,90,610,"Stabil"],
"vivo V30":[195,199,186,172,138,105,760,"Aimlock Feel"],
"OPPO Reno 11":[192,198,180,165,130,98,710,"Smooth Drag"]
};

const ytbrData = {
"Hakai FF":[200,200,190,175,140,110,820,"Auto Headshot"],
"Frontal Gaming":[198,200,188,178,145,108,800,"Rush Style"],
"DEDD GAME":[195,199,185,170,135,100,760,"Late Game"],
"Kulgar":[200,200,195,185,150,120,850,"Ultra Aim"],
"Rido Odin":[197,199,187,175,140,105,780,"Fast Scope"],
"Bangsad FF":[199,200,192,180,145,115,810,"Drag Brutal"],
"Rizky Gaming":[196,198,184,170,135,102,750,"Stabil HS"],
"M8N":[200,200,198,188,155,125,900,"Pro Player"]
};

function setResult(data){
document.getElementById('general').innerText=data[0];
document.getElementById('reddot').innerText=data[1];
document.getElementById('scope2x').innerText=data[2];
document.getElementById('scope4x').innerText=data[3];
document.getElementById('sniper').innerText=data[4];
document.getElementById('freelook').innerText=data[5];
document.getElementById('dpi').innerText=data[6];
document.getElementById('touch').innerText=data[7];
document.getElementById('result').style.display='block';
}

function generateSensi(){
const hp=document.getElementById('brand').value;
setResult(sensiData[hp]);
}

function generateYtbr(){
const yt=document.getElementById('ytbr').value;
setResult(ytbrData[yt]);
}

function showTab(tab){
document.getElementById('deviceTab').style.display='none';
document.getElementById('ytbrTab').style.display='none';

document.getElementById(tab+'Tab').style.display='block';
}
