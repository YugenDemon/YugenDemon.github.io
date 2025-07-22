/*Como tengo algunos divs con scroll, quiero obligar a que se scrolee primero estos antes que las paginas, asi que añadi
esta funcion*/
/*Esta primera parte es para reflejar en un div el contenido de otro div, es decir, las imagenes miniatura de la 
compra se reflejan de manera grande en el otro div y de paso la imagen no se actualiza hasta pasar a otra imagen*/
const referencias = document.querySelectorAll('.Reference img');
const imagenGrande = document.querySelector('.ImagenGrande');

// Imagen por defecto al cargar
imagenGrande.style.backgroundImage = "url('../Imagenes/Ropa/Ejemplo Venta ropa/1.png')";

// Función para actualizar la imagen
function actualizarImagen(src) {
    imagenGrande.style.backgroundImage = `url(${src})`;
}

// Eventos: mouseenter y click, osea, para que los de celular puedan dar click sobre la imagen 
//  que se refleje esta en el grandecito de al lado
referencias.forEach(img => {
    img.addEventListener('mouseenter', () => {
    actualizarImagen(img.src);
});

    img.addEventListener('click', () => {
    actualizarImagen(img.src);
});
});
/*Esto de aqui es para que el boton de tallas se mantenga oprimido al presionarlo*/
    const botones = document.querySelectorAll('.talla-btn');

    botones.forEach(boton => {
    boton.addEventListener('click', () => {
    botones.forEach(b => b.classList.remove('activo'));
    boton.classList.add('activo');
    });
    });
/*Esto es para agregar un contador para las unidades a comprar
del producto deseado*/
    const contador = document.getElementById("contador");
    const sumar = document.getElementById("sumar");
    const restar = document.getElementById("restar");

    let valor = 1;

    sumar.addEventListener("click", () => {
    valor++;
    contador.textContent = valor;
    });

    restar.addEventListener("click", () => {
    if (valor > 1) {
        valor--;
        contador.textContent = valor;
        }
  });

/*Para el menu despegable*/
const menuToggle = document.querySelector('.menu-toggle');
const articulos1 = document.querySelector('.Articulos1');

menuToggle.addEventListener('click', () => {
    articulos1.classList.toggle('active');
});

