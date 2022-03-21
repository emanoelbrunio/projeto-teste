let alturaInico = document.getElementById("inicio").offsetTop;
let alturaQSomos = document.getElementById("qsomos").offsetTop - 100;
let alturaAP = document.getElementById("ap").offsetTop - 100;
let alturaFalec = document.getElementById("falec").offsetTop - 100;

window.addEventListener("scroll", function(){
    
    if (this.window.scrollY > 100){
        const header = this.document.querySelector(".header");
        header.classList.add("novo_fundo");
    }
    else {
        const header = this.document.querySelector(".header");
        header.classList.remove("novo_fundo");
    }

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
       
    // console.log(alturaAP);
    // console.log(alturaFalec);
    // console.log(alturaInico);
    
});

window.addEventListener("load", function(){
    const largura = this.window.screen.width;
    
    if (largura <= 850) {
        this.window.addEventListener("scroll", function(){

            if (this.window.scrollY > 100){  
                this.document.querySelector(".header_logo").classList.add("invi"); 
            }
            else {
                this.document.querySelector(".header_logo").classList.remove("invi")
            }
        });
    }
    
});