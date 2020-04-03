let foto = document.getElementsByTagName('img');
/*1*/
console.log('Puslapyje paveiksleliu yra: ' + foto.length);

/*2*/
xyz.innerHTML = 'Puslapyje paveiksleliu yra: ' + foto.length;

/*3 uzduotis html kode*/
//onclick = "window.alert('Puslapyje paveiksleliu yra: ' + foto.length)";

/*4*/
let fotos = document.querySelectorAll('img:nth-child(2n)');

for (let i = 0; i < fotos.length; i++) {
    elem = fotos[i];
    elem.setAttribute("alt", "Testas");
}

/*5*/
let style = {
    "font-size": "24px",
    "background-color": "green",
    "width": "200px",
    "height": "200px"
};
//Pirmas budas
// xyz.style.fontSize = '24px';
// xyz.style.backgroundColor = 'green';
// xyz.style.width = '200px';
// xyz.style.height = '200px';

//Antras budas
// for (let key in style){
//     xyz.style[key] = style[key]
// }

//Trecias budas
Object.assign(xyz.style, style);

//Ketvirtas budas
// xyz.setAttribute("class", "stilius2");