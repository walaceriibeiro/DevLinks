function toggleMode() {
    const hmtl = document.documentElement
    hmtl.classList.toggle('light')

    const img = document.getElementById('user-img')
    const imageSource = img.src;

    if(imageSource.endsWith('avatar-light.png')) {
        img.src= './assets/avatar.png'
    } else {
        img.src= './assets/avatar-light.png'
    }


    
    /*
    // Criando o novo elemento HTML
    const novoElemento = document.createElement('div');
    novoElemento.textContent = "NOVA DIV";

    //Adicionando o elemento que criei na tela através da div com id "teste"
    const testeDiv = document.getElementById('teste');
    testeDiv.removeChild(novoElemento);




    // Verificar se o elemento já está na tela
    // Se o elemento não estiver na tela, adicionar ele
    // Se o elemento JÁ estiver na tela, remove ele
    */
}