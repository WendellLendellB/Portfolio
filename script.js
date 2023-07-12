function toggleMode() {
    const html = document.documentElement 

    //if(html.classList.contains('light')){
    //    html.classList.remove('light')
    //} else {
    //    html.classList.add('light')
    //}
    html.classList.toggle('light')

    //pegar tag image e substituir a imagem
    //se tiver light mode add imagem light

    const img = document.querySelector('#profile img')
    if (html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'foto para fundo claro')
    }   else{
        img.setAttribute('src', './assets/wendell lendell.png')
        img.setAttribute('alt', 'foto para fundo preto')
    }
}
const sobre = document.getElementById('sobre');

sobre.addEventListener('click', function(){
    window.scrollTo(50,0)
});