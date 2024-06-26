const input = document.getElementById('nama');
const bHasil = document.getElementById('bHasil');
const bRefersh = document.getElementById('bRefresh');

function generate(){
    event.preventDefault();
    let namaKhodam = [
        "Unta Arab", 
        "Harimau (hari² maunya kamu)", 
        "Gajah Afrika", 
        "Kuda Nil", 
        "Ber-uang", 
        "Buaya darat", 
        "Tuyul miskin", 
        "Pocong dance", 
        "Kecoa", 
        "Tikus kantor",
        "Ikan buntal", 
        "Koala", 
        "Samsudin", 
        "Jimin (Jin Miskin)", 
        "Kucing Persia", 
        "Kan-guru", 
        "Paus ijo", 
        "Mimi Peri", 
        "Kupu²", 
        "Kuntil-anak"
    ];
const nameRandom = Math.floor(Math.random() * namaKhodam.length);
const hasilGenerate = namaKhodam[nameRandom];
document.getElementById('hasil').innerText = hasilGenerate;
};

bHasil.addEventListener('click', function(){
    generate();
    input.value = "";
});

bRefersh.addEventListener('click', function(){
    location.reload();
});