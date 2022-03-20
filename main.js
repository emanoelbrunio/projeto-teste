 // Ao clicar no botão de envio, a página deve exibir uma das seguintes mensagens:

// "Erro no envio: Insira uma mensagem", caso o campo de texto esteja em branco. - OK 

const botao = document.getElementById("botao");

function validacao (){

    let email = document.getElementById("email").value;
    let msg = document.getElementById("mensagem").value;

    let cont = 0;
    
    if (email == false){
        alert('Erro no envio: Insira um e-mail');
    }
    else {
        cont += 1;
    }

    if (msg == false){
        alert('Erro no envio: Insira uma mensagem');
    }
    else {
        cont += 1;
    }


    let temArroba = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@'){
            temArroba += 1;
        }
    }
    //usei a intereção com for porque o foreach não foi aceito
    
    
    if (cont === 2) {
        let temEspaco;

        if (email.includes(' ')){
            temEspaco = true;
        }
        else {
            temEspaco = false;
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

            && !temEspaco) {

            const user = email.substr(0, email.indexOf('@'));

            alert(`Obrigado pelo contato, ${user}`);

            document.getElementById("email").value = '';
            document.getElementById("mensagem").value = '';

            console.log(email.indexOf('.', email.indexOf('@')))
            console.log(email.indexOf('@'))
            
        }
        else {
            alert('Erro no envio: Endereço de mail inválido');
        }
    }
}





botao.onclick = validacao;


