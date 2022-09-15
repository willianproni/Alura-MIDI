
//Utilizando OnClick em todos os elemntos Button
// function activeSoundForButton(nome) {
//     document.querySelector(`#${nome}`).play()
// }

const keyList = document.querySelectorAll('.tecla')

function playSound(AudioSelect) {
    const response = document.querySelector(AudioSelect)

    if (response && response.localName === 'audio') {
        response.play()
        return
    }
    console.log("Check the value and try again!")
}

keyList.forEach(element => {
    const sound = `#som_${element.classList[1]}`

    element.onclick = function () {
        playSound(sound)
    }

    element.onkeydown = function (keyPress) {
        if (keyPress.code = "Space" || keyPress.code === "Enter")
            element.classList.add('ativa')
    }

    element.onkeyup = function () {
        element.classList.remove('ativa')
    }
});
