function verificar() {
    var date = new Date();
    var year = date.getFullYear();
    var fyear = document.getElementById('txtyear');
    var res = document.querySelector('div#res');

    if (fyear.value.length == 0 || fyear.value > year) {
        window.alert('[ERROR] Check the data and try again!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var age = year - Number(fyear.value);
        var gender = '';
        var image = document.createElement('img')
        image.setAttribute('id', 'picture')

        if (fsex[0].checked) {
            gender = 'Man';
            if (age >= 0 && age <= 10) {
                // Child
                image.setAttribute('src', 'foto-bebe-m.png');
            } else if (age < 21 ) {
                // Young
                image.setAttribute('src', 'foto-jovem-m.png');
            } else if (age < 58) {
                // Adult
                image.setAttribute('src', 'foto-adulto-m.png');
            } else {
                // Elderly
                image.setAttribute('src', 'foto-idoso-m.png');
            }

        } else if (fsex[1].checked) {
            gender = 'Woman';
            if (age >= 0 && age <= 10) {
                // Child
                image.setAttribute('src', 'foto-bebe-f.png');
            } else if (age < 21 ) {
                // Young
                image.setAttribute('src', 'foto-jovem-f.png');
            } else if (age < 58) {
                // Adult
                image.setAttribute('src', 'foto-adulto-f.png');
            } else {
                // Elderly
                image.setAttribute('src', 'foto-idoso-f.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `<p>We detected an ${age}-year-old ${gender}<p>`;

        res.appendChild(image)
    }
}