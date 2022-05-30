/*buat project dengan nama : "luas-bentuk"
menggunakan node js, dengan tujuan luas sebagai package
buat methode/function hitung luas bangung :
a. persegi
b. lingkaran
c. segitiga
d. jajargenjang
e. persegi panjang
per orang 1 function
push code ke github repo dengan nama luas-bentuk
dengan minimal perorang 1 commit
pilih seorang untuk membuat repository*/
let luasbentuk = require("luas-bentuk");
var namaBangun = prompt('pilih jenis bangun : ');

switch(namaBangun){
    case "luasPersegi":
        function luasPersegi();
        break;
    case "luasLingkaran": 
        function luasLingkaran();
        break;
}


function luasPersegipanjang (){
    const panjang = prompt('masukan panjang : ');
    const lebar = prompt('masukan lebar : ');
    const persegi = panjang * lebar;
    return persegi;
}

export{luasPersegipanjang};
