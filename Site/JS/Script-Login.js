function aparecer() {
    let inputPass = document.getElementById('senha')
    let btn = document.getElementById('btn-senha')

    if(inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')

        btn.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }
//Colocar novamente em modo oculto
    else {
        inputPass.setAttribute('type', 'password')

        btn.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}

function mudarTheme() {
    let corpo = document.querySelector('body');
    let telaLogin = document.querySelector('.login-page');
    let botaoLogin = document.querySelector('#login-button');
    let lightCabecalho = document.querySelector('h1');
    let lightParagrafo = document.querySelector('p');
    let classSenha = document.querySelector('.senha');
    let classMatricula = document.querySelector('.matricula');
    let idSenha = document.querySelector('#senha');
    let idMatricula = document.querySelector('#matricula');
    let IconLoginPage = document.querySelector('.material-symbols-outlined'); // Ícone principal
    let IconSenha = document.querySelector('.senha .material-symbols-outlined'); // Ícone da senha
    let Input_Senha = document.querySelector('.senha input');
    let Input_Matricula = document.querySelector('.matricula input');
    let bordaSenha = document.querySelector('.senha');
    let bordaMatricula = document.querySelector('.matricula');
    let sombraLoginPage = document.querySelector('.login-page');
    let ThemeIcon = document.getElementById('butto-theme')

    if (corpo.classList.contains('dark-theme')) {
        // Modo Claro
        corpo.classList.remove('dark-theme');
        corpo.classList.add('light-theme');

        telaLogin.style.backgroundColor = '#f5f5f5';
        botaoLogin.style.backgroundColor = '#dc143c';
        lightCabecalho.style.color = '#000';
        lightParagrafo.style.color = '#000';
        classSenha.style.backgroundColor = '#fafafa';
        classMatricula.style.backgroundColor = '#fafafa';
        idSenha.style.backgroundColor = '#fafafa';
        idMatricula.style.backgroundColor = '#fafafa';
        IconLoginPage.style.backgroundColor = '#fafafa';
        Input_Senha.style.backgroundColor = '#fafafa';
        Input_Senha.style.color = '#000';
        Input_Matricula.style.color = '#000';
        bordaSenha.style.borderColor = '#E5E5E5E5';
        bordaMatricula.style.borderColor = '#E5E5E5E5';
        sombraLoginPage.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.551)';

        ThemeIcon.src = 'Site/Imgs/sol-icon.png'

        // Alterando o fundo do ícone da senha para modo claro
        if (IconSenha) {
            IconSenha.style.backgroundColor = '#fafafa'; // Ou qualquer outra cor
        }

        // Mudar a cor do hover para modo claro
        botaoLogin.addEventListener('mouseover', function() {
            botaoLogin.style.backgroundColor = '#fa0636bd';  // Cor do hover
        });

        botaoLogin.addEventListener('mouseout', function() {
            botaoLogin.style.backgroundColor = '#dc143c';  // Cor original
        });

    } else {
        // Modo Escuro
        corpo.classList.remove('light-theme');
        corpo.classList.add('dark-theme');

        telaLogin.style.backgroundColor = '#4141454f';
        botaoLogin.style.backgroundColor = '#dc143c';
        lightCabecalho.style.color = 'white';
        lightParagrafo.style.color = 'white';
        classSenha.style.backgroundColor = '#1a1a2E';
        classMatricula.style.backgroundColor = '#1a1a2E';
        idSenha.style.backgroundColor = '#1a1a2E';
        idMatricula.style.backgroundColor = '#1a1a2E';
        IconLoginPage.style.backgroundColor = '#1a1a2E';
        Input_Senha.style.backgroundColor = '#1a1a2E';
        Input_Senha.style.color = 'white';
        Input_Matricula.style.color = 'white';
        bordaSenha.style.borderColor = '#dc143c';
        bordaMatricula.style.borderColor = '#dc143c';
        sombraLoginPage.style.boxShadow = '5px 5px 10px #0b0b2b'; // Remover sombra

        ThemeIcon.src = 'Site/Imgs/lua-icon.png'

        // Alterando o fundo do ícone da senha para modo escuro
        if (IconSenha) {
            IconSenha.style.backgroundColor = '#1a1a2E'; // Cor do fundo no modo escuro
        }

        // Mudar a cor do hover para modo escuro
        botaoLogin.addEventListener('mouseover', function() {
            botaoLogin.style.backgroundColor = '#fa0636bd';  // Cor do hover
        });

        botaoLogin.addEventListener('mouseout', function() {
            botaoLogin.style.backgroundColor = '#dc143c';  // Cor original
        });
    }
}

