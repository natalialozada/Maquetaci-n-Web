const imagenes = ["img/img1.jpg", "img/img2.jpeg", "img/img3.jpg"]

const contenedor1 = document.createElement ("div");
contenedor1.className = "contenedor1";
document.body.appendChild (contenedor1);


const contenedorTitulo = document.createElement ("div");
contenedorTitulo.className = "contenedorTitulo";
const imgTitulo = document.createElement("img");
imgTitulo.className = "img1";
imgTitulo.setAttribute ("src", "img/titulo.jpg");
contenedorTitulo.appendChild(imgTitulo);
contenedor1.appendChild(contenedorTitulo);


const contenedor2= document.createElement ("div");
contenedor2.className = "contenedor2";
contenedor1.appendChild(contenedor2);


const contenedorMenu = document.createElement ("div");
contenedorMenu.className = "contenedorMenu";
const inicio = document.createElement("p");
inicio.className = "inicio"
inicio.textContent = "Inicio"
const nosotros = document.createElement("p");
nosotros.className = "nosotros"
nosotros.textContent = "Nosotros"
const servicios = document.createElement("p");
servicios.className = "servicios"
servicios.textContent = "Servicios"
const contacto = document.createElement("p");
contacto.className = "contacto"
contacto.textContent = "Contacto"
contenedorMenu.appendChild(inicio);
contenedorMenu.appendChild(nosotros);
contenedorMenu.appendChild(servicios);
contenedorMenu.appendChild(contacto);
contenedor2.appendChild(contenedorMenu);


const contenedorImgtext = document.createElement ("div");
contenedorImgtext.className = "contenedorImgtext";
const contenedorImg = document.createElement("div")
contenedorImg.className = "contenedorImg";
const imgText = document.createElement("img");
imgText.className = "img";
imgText.setAttribute ("src", "img/berlin.jpg");
const contenedorTexto = document.createElement("div")
contenedorTexto.className = "contenedorTexto";
const textot = document.createElement ("h2");
textot.className = "textot";
textot.textContent = "Este es el titular del div del texto"
const texto = document.createElement ("p");
        texto.className = "texto4";
        texto.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor magna quam, molestie vestibulum nisl sagittis sed. Integer id condimentum justo, id hendrerit ex. Nullam non libero neque. Quisque sit amet lacus molestie, ultricies turpis sit amet, suscipit enim. Fusce fermentum condimentum placerat. Pellentesque sollicitudin odio id augue tristique, non imperdiet sapien molestie. Sed scelerisque scelerisque mauris, non feugiat ex aliquam id. Donec at aliquam orci";
const boton1 = document.createElement("button");
boton1.className = "boton";
boton1.textContent = "Ver más";

contenedorTexto.appendChild(textot);
contenedorTexto.appendChild(texto);
contenedorTexto.appendChild(boton1);
contenedorImgtext.appendChild(imgText);
contenedorImgtext.appendChild(contenedorTexto);
contenedor2.appendChild(contenedorImgtext);

const contenedorBigimg = document.createElement ("div");
contenedorBigimg .className = "contenedorBigimg";
const texto3 = document.createElement ("h3");
texto3.className = "texto3";
texto3.textContent = "Ese es el titular de la sección 2"
const bigImg = document.createElement ("img");
bigImg.className = "bigImg";
bigImg.setAttribute ("src", "img/imgbig.jpg");
contenedorBigimg.appendChild(texto3)
contenedorBigimg.appendChild(bigImg)
contenedor2.appendChild(contenedorBigimg);

const contenedor3 = document.createElement("div");
contenedor3.className = "contenedor3";

for (let i = 0; i < imagenes.length; i++) 
    {
        const seccion = document.createElement("div");
        seccion.className = "seccion";

        const img = document.createElement("img");
        img.className = "img2";
        img.setAttribute("src", imagenes[i]);

        const text = document.createElement ("p");
        text.className = "texto";
        text.textContent = "Lorem Ipsum dolor sit amet consectetur adipiscing edit";

        const boton = document.createElement("button");
        boton.className = "boton";
        boton.textContent = "Comprar";



        seccion.appendChild(img);
        seccion.appendChild(text);
        seccion.appendChild(boton);
        contenedor3.appendChild(seccion);
   
    }
    contenedor1.appendChild(contenedor3);
    

