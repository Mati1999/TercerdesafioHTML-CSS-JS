const coment = document.getElementById('comentario');

const widthPantalla = window.innerWidth;
console.log(widthPantalla);

const getUsuario = async () => {
    let peticion = await axios("usuarios.txt").then(res => res.data);
    // let resultado = await peticion.json();

    for (let i of peticion) {
        const newHTML = document.createElement("div");
        let HTMLcode = `
            <img src="${i.imagen}" alt="">
            <p>${i.comentario}</p>
            <h6>${i.nombre}</h6>
            <span>${i.cargo}</span>
        `;

        newHTML.innerHTML = HTMLcode;
        coment.appendChild(newHTML);
    };

}

getUsuario()


