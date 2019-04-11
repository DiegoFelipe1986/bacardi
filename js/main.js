var steps = {
    "coctel": [{
        "img_item_next": "./img/menta.png",
        "img_coctel": "./img/vasoLimas.png"
    }, {
        "img_item_next": "./img/bacaBotella.png",
        "img_coctel": "./img/vasoMenta.png"
    }, {
        "img_item_next": "./img/hielo.png",
        "img_coctel": "./img/vasoBacardi.png"
    }, {
        "img_item_next": "./img/soda.png",
        "img_coctel": "./img/vasoHielo.png"
    }]
};

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    let step = parseInt(document.getElementById(data).getAttribute("data-id"));
    document.getElementById(data).setAttribute("data-id", step + 1);
    nextStep(step);
}

function nextStep(step) {
    if (typeof steps.coctel[step] != "undefined") {
        data = steps.coctel[step];
        document.getElementById("coctel").src = data.img_coctel;
        document.getElementById("item").src = data.img_item_next;
    } else {
        document.getElementById("ingrediente").classList.add('ocultar');
        document.getElementById("vaso").classList.add('ocultar');
        document.getElementById("coctelCompleto").classList.add('ocultar');
        document.getElementById("coctelCompleto").classList.add('mostrar');
        document.getElementById("instrucciones").classList.add('ocultar');
        document.getElementById("instrucciones2").classList.add('mostrar');
        document.getElementById("invitacion").classList.add('mostrar');


        //alert("Pailas");
    }

}

function transito() {
    document.getElementById('drag1').src = "./img/menta.png";
}