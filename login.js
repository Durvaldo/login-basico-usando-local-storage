function logaUsuario(event) {
    event.preventDefault()
    const nome = document.getElementById('nome').value
    const senha = document.getElementById('senha').value
    const senhaBD = localStorage.getItem(nome)

    if (!senhaBD || senhaBD !== senha) {
        // mostrar erro
        Swal.fire({
            title: "Erro",
            text: "Usuário ou senha inválidos",
            icon: "error"
        });
    } else {
        Swal.fire({
            title: "Sucesso",
            text: "Login efetuado com sucesso",
            icon: "success"
        });
    }
}

function cadastraUsuario(event) {
    event.preventDefault()
    const nome = document.getElementById('nome').value
    const senha = document.getElementById('senha').value
    const isUsuarioCadastrado = localStorage.getItem(nome)
    
    if (!isUsuarioCadastrado) {
        localStorage.setItem(nome, senha)
        Swal.fire({
            title: "Sucesso",
            text: "Cadastrado com sucesso",
            icon: "success"
        });
    } else {
        Swal.fire({
            title: "Erro",
            text: "Usuário já cadastrado",
            icon: "error"
        });
    }
}

