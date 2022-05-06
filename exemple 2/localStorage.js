document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {

    // let btnConsulta = document.getElementByI("consulta");
    // btnConsulta.addEventListener("click", carregarDades);

    // let btnGuarda = document.getElementById("guarda");
    // btnGuarda.addEventListener("click", guardaDades);

    let btnBorra = document.getElementById("borra");
    btnBorra.addEventListener("click", borraDades);

    let btnsComprar = document.querySelectorAll(".comprar");

    for(i = 0; i < btnsComprar.length; i++){

        btnsComprar[i].addEventListener('click', (e) => {

            img = e.target.parentElement.children[0].src;
            marca = e.target.parentElement.children[1].innerText; 
            model = e.target.parentElement.children[2].innerText;
            preu = e.target.parentElement.children[3].innerText;
            
            let clau = localStorage.length + 1;

            const persona = { 
                            img: img,
                            marca: marca,
                            model: model,
                            preu: preu
                        };
        
            const myJSON = JSON.stringify(persona);
        
            localStorage.setItem(clau, myJSON);
        
            carregarDades();

        });

    }

}

function carregarDades() {
    
    // let text = localStorage.getItem("001");
    // let obj = JSON.parse(text);
    // document.getElementById("dades").innerHTML =    `<p>Nom: ${obj.nom}</p>
    //                                                  <p>Edat: ${obj.edat}</p>
    //                                                  <p>Ciutat: ${obj.ciutat} `;

    let clau;
    let info;
    let obj;

    document.getElementById("productes_carrito").innerHTML = "";

    for(i=0; i < localStorage.length; i++){

        clau = localStorage.key(i);
        info = localStorage.getItem(clau);

        obj = JSON.parse(info);
        document.getElementById("productes_carrito").innerHTML += `<div id="producte_carrito">
                                                                <p><img src="${obj.img}" alt="perfil"></p>
                                                                <p>${obj.marca}</p>
                                                                <p>${obj.model}</p>
                                                                <p>${obj.preu}</p>
                                                                <p><input type="button" value="E" onclick="esborraItem(${clau})"></p>
                                                                </div>`;
    

    }

}

function guardaDades(){

    let nom = document.getElementById("nom").value;
    let edat = document.getElementById("edat").value;
    let ciutat = document.getElementById("ciutat").value;
    let img = document.getElementById("img").src;

    let clau = localStorage.length + 1;

    const persona = { 
                    nom: nom, 
                    edat: edat, 
                    ciutat: ciutat,
                    img: img
                };

    const myJSON = JSON.stringify(persona);

    localStorage.setItem(clau, myJSON);

    carregarDades();
    esborrarCamps();

}

function borraDades(){

    if(confirm("Estàs segur que vols esborrar?")){

        localStorage.clear();
        
        carregarDades();
        esborrarCamps();
    }
}

function esborrarCamps(){

    document.getElementById("nom").value = "";
    document.getElementById("edat").value = "";
    document.getElementById("ciutat").value = "";

}

function esborraItem( id ){

    if(confirm("Estàs segur que vols esborar el Item?")){
        localStorage.removeItem(id)

        carregarDades();
        esborrarCamps();
    }

}

