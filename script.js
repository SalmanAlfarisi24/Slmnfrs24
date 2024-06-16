const input = document.getElementById('nama');
const bHasil = document.getElementById('bHasil');
const bRefersh = document.getElementById('bRefresh');

function generate(){
    event.preventDefault();
    let namaKhodam = [
        "Singa", 
        "Harimau Siberia", 
        "Gajah Afrika", 
        "Kuda Nil", 
        "Beruang Grizzly", 
        "Buaya Muara", 
        "Harimau Sumatra", 
        "Paus Biru", 
        "Anaconda", 
        "Cheetah",
        "Panda", 
        "Koala", 
        "Otot-otot", 
        "Musang", 
        "Kucing Persia", 
        "Kanguru", 
        "Lumba-lumba", 
        "Kura-kura", 
        "Kupu-kupu", 
        "Anjing Shih Tzu"
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