const handleLogin = async () => {
    const botaoLogin = document.querySelector("#botao-login");

   async function realizaLogin(event){
        event.preventDefault();

        const email = document.querySelector('#email-login').value;
        const senha = document.querySelector('#password-login').value;

        if(email !== '' && senha !== ''){
            const response = await fetch('/realizaLogin', {
                method:'POST',
                body: JSON.stringify({email, senha}),
            });

            console.log(response);
        } else {
            console.log('nao da pra fazer')
        }
    }

    botaoLogin.addEventListener('click', (e) => realizaLogin(e));
}

handleLogin();