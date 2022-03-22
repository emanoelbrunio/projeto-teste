const botao = document.getElementById("botao");
const botaoOk = document.getElementById("id_botao_ok");

function validacao (event){

    event.preventDefault();

    document.getElementById("feedback").classList.remove("visi_sucesso");
    document.getElementById("id_botao_ok").classList.remove("botao_ok");

    let email = document.getElementById("email").value;
    let msg = document.getElementById("mensagem").value;

    let temArroba = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@'){
            temArroba += 1;
        }
    }
    
    
    
    let temEspaco;
    if (email.includes(' ')){
        temEspaco = true;
    } else {
        temEspaco = false;
    }

    const caractEsp = '!#$%&*()}{<>:;?/+=,`~^|"¨_°ª§º/¬'
    let temCaractEspc = 0;

    for (let i = 0; i < email.length; i++){
        if (caractEsp.includes(email[i])){
            temCaractEspc += 1;
        }
    }
   
    if (email.includes('@')
        && email.includes('.')
        && email.indexOf('@') < 33
        && email[email.length-1] !== '@'
        && email[0] !== '@'
        && email[0] !== '.'
        && email[email.length-1] !== '.'
        && email[email.indexOf('@') + 1] !== '.'
        && email[email.indexOf('@') - 1] !== '.'
        && temArroba === 1
        && email.indexOf('.', email.indexOf('@')) - email.indexOf('@') < 18
        && !temEspaco
        && temCaractEspc === 0 ) {

        if (msg == false){
            document.getElementById("feedback").classList.add("visi");
            const feedback = "Erro no envio: Insira uma mensagem"; 
            document.getElementById("feedback").innerHTML = feedback;
            document.getElementById("id_botao_ok").classList.add
            ("botao_ok_erro");  
            
            return false;
        }

        const user = email.substr(0, email.indexOf('@'));
        const msgSucesso = `Obrigado pelo contato, ${user}!`; 
                    
        document.getElementById("feedback").classList.add("visi_sucesso");
        document.getElementById("feedback").innerHTML = msgSucesso;
        
        document.getElementById("id_botao_ok").classList.add("botao_ok");

        // document.getElementById("mensagem").value = '';
    } else {  
        document.getElementById("feedback").classList.add("visi");
        const feedback = "Erro no envio: Endereço de email inválido"; 
        document.getElementById("feedback").innerHTML = feedback; 

        document.getElementById("id_botao_ok").classList.add("botao_ok_erro");
    }
}

function removeOK(){
    document.getElementById("feedback").classList.remove("visi_sucesso");
    document.getElementById("feedback").classList.remove("visi");
    document.getElementById("id_botao_ok").classList.remove("botao_ok");
    document.getElementById("id_botao_ok").classList.remove("botao_ok_erro");

    document.getElementById("mensagem").value = '';
}

botao.onclick = validacao;
botaoOk.onclick = removeOK;