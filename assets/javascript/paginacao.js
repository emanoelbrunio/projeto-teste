// pegando a altura de cada section
let alturaInico = document.getElementById("inicio").offsetTop;
let alturaQSomos = document.getElementById("qsomos").offsetTop - 100;
let alturaAP = document.getElementById("ap").offsetTop - 100;
let alturaFalec = document.getElementById("falec").offsetTop - 100;

//fazendo evento de scroll
window.addEventListener("scroll", function(){

    //quando a altura do scroll for obedecer o parametro terá esse comportamento
    if (this.window.scrollY > 100){
        const header = this.document.querySelector(".header");
        header.classList.add("novo_fundo");
    }
    else {
        const header = this.document.querySelector(".header");
        header.classList.remove("novo_fundo");
    }
    
    //daqui para baixo eu só vou verificar a altura do scroll atual e de acordo com a altura eu vou mudar os links do nav bar e o traço logo abaixo
    
    if (this.window.scrollY < alturaQSomos){
        this.document.querySelector(".traco_inicio").classList.add("traco_visi");
        document.querySelector(".traco_qsomos").classList.remove("traco_visi");
        document.querySelector(".traco_apart").classList.remove("traco_visi");

        this.document.querySelector(".a_ini").classList.remove("a_hover");
        this.document.querySelector(".a_qs").classList.add("a_hover");
        this.document.querySelector(".a_ap").classList.add("a_hover");

        this.document.querySelector(".a_ini").classList.add("a_forte");
        this.document.querySelector(".a_qs").classList.remove("a_forte");
        this.document.querySelector(".a_ap").classList.remove("a_forte");
    }

    if (this.window.scrollY > alturaQSomos && this.window.scrollY < alturaAP){
        this.document.querySelector(".traco_inicio").classList.remove("traco_visi");
        this.document.querySelector(".traco_qsomos").classList.add("traco_visi");
        this.document.querySelector(".traco_apart").classList.remove("traco_visi");

        this.document.querySelector(".a_ini").classList.add("a_hover");
        this.document.querySelector(".a_qs").classList.remove("a_hover");
        this.document.querySelector(".a_ap").classList.add("a_hover");

        this.document.querySelector(".a_ini").classList.remove("a_forte");
        this.document.querySelector(".a_qs").classList.add("a_forte");
        this.document.querySelector(".a_ap").classList.remove("a_forte");
    }
    if (this.window.scrollY > alturaAP && this.window.scrollY <= alturaFalec){
        this.document.querySelector(".traco_inicio").classList.remove("traco_visi");
        this.document.querySelector(".traco_qsomos").classList.remove("traco_visi");
        this.document.querySelector(".traco_apart").classList.add("traco_visi");

        this.document.querySelector(".a_ini").classList.add("a_hover");
        this.document.querySelector(".a_qs").classList.add("a_hover");
        this.document.querySelector(".a_ap").classList.remove("a_hover");

        this.document.querySelector(".a_ini").classList.remove("a_forte");
        this.document.querySelector(".a_qs").classList.remove("a_forte");
        this.document.querySelector(".a_ap").classList.add("a_forte");
    }

    if (this.window.scrollY > alturaFalec){
        this.document.querySelector(".traco_inicio").classList.remove("traco_visi");
        this.document.querySelector(".traco_qsomos").classList.remove("traco_visi");
        this.document.querySelector(".traco_apart").classList.remove("traco_visi");

        this.document.querySelector(".a_ini").classList.add("a_hover");
        this.document.querySelector(".a_qs").classList.add("a_hover");
        this.document.querySelector(".a_ap").classList.add("a_hover");

        this.document.querySelector(".a_ini").classList.remove("a_forte");
        this.document.querySelector(".a_qs").classList.remove("a_forte");
        this.document.querySelector(".a_ap").classList.remove("a_forte");
    }  
});