function count () {
    let start = document.getElementById('txtstart')
    let end = document.getElementById('txtend')
    let step = document.getElementById('txtstep')
    let result = document.getElementById('result')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        result.innerHTML = 'Impossible count'
        window.alert('[ERROR] Missing data')
    } else {
        result.innerHTML = 'Counting... <br>'
        let NumStart = Number(start.value)
        let NumEnd = Number(end.value)
        let NumStep = Number(step.value)

        if (NumStep <= 0) {
            window.alert('Invalid step! Considering STEP 1')
            NumStep = 1;
        }

        if (NumStart < NumEnd) {
            // Contagem crescente
            for (let c = NumStart; c <= NumEnd; c += NumStep) {
                result.innerHTML += `${c} ➡ `
            }
        } else {
            // Contagem regressiva
            for (let c = NumStart; c >= NumEnd; c -= NumStep) {
                result.innerHTML += `${c} ➡ `
            }
        }

        result.innerHTML += `🏁`
    }
}