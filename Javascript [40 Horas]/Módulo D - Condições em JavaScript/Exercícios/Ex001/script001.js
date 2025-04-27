function carregar () {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    msg.innerHTML = `Agora são ${hour}h${minute}.`;

    if (hour >= 0 && hour < 12) {
        // Bom dia!
        msg.innerHTML += ' Bom dia! 🌞'
        img.src = 'fotomanha.png';
        document.body.style.background = '#e2cd9f';
    } else if (hour >= 12 && hour < 18) {
        // Boa tarde!
        msg.innerHTML += ' Boa tarde! ⛅'
        img.src = 'fototarde.png';
        document.body.style.background = '#b9846f';
    } else {
        // Boa noite!
        msg.innerHTML += 'Boa noite! 🌙'
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154';
    }
}