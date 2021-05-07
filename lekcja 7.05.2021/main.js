const zmienna = new Array

function przycisk(){
    const imie = document.getElementById('input1').value
    const nazwisko = document.getElementById('input2').value
    const mail = document.getElementById('input3').value
    const telefon = document.getElementById('input4').value
    const wiadomość = document.getElementById('input5').value

    if(imie.length > 2) {
        document.getElementById('imie-error').style = 'visibility: hidden'
        zmienna.push(imie)
        console.log(zmienna)

    }
    else {
        document.getElementById('imie-error').style = 'visibility: visible'
    }
    if(nazwisko.length > 3) {
        document.getElementById('nazwisko-error').style = 'visibility: hidden'
        zmienna.push(nazwisko)
        console.log(zmienna)
    }
    else {
        document.getElementById('nazwisko-error').style = 'visibility: visible'
    }
    if(mail.indexOf('@') > -1 ) {
        document.getElementById('email-error').style = 'visibility: hidden'
        zmienna.push(mail)
        console.log(zmienna)
    }
    else {
        document.getElementById('email-error').style = 'visibility: visible'
    }
    if (telefon.indexOf('1','2','3','4','5','6','7','8','9','0')) {
        document.getElementById('numer-error').style = 'visibility: hidden'
        zmienna.push(telefon)
        console.log(zmienna)
    }
    else {
        document.getElementById('numer-error').style = 'visibility: visible'
    }
    if (wiadomość.length > 10) {
        document.getElementById('mess-error').style = 'visibility: hidden'
        zmienna.push(wiadomość)
        console.log(zmienna)
    }
    else {
        document.getElementById('mess-error').style = 'visibility: visible'
    }
}