const Shora = document.querySelector('.hora')
const Sminutos = document.querySelector('.minutos')
const Ssegundos = document.querySelector('.segundos')

// const relogio = setInterval(function time(){
//     let dataHoje = new Date()
//     let min = dataHoje.getMinutes()
//     let hor = dataHoje.getHours()
//     let seg =  dataHoje.getSeconds()

//     Shora.textContent = hor
//     Sminutos.textContent = min
//     Ssegundos.textContent = seg
// })

const relogioWndos = setInterval(function tempo(){

    let dataHoje = new Date()

    const seg = dataHoje.getSeconds()
    const min = dataHoje.getMinutes()
    const hor = dataHoje.getHours()

    Shora.textContent = segunFunc(hor)
    Sminutos.textContent = segunFunc(min)
    Ssegundos.textContent = segunFunc(seg) 


})

function segunFunc(tempoModificado){
    return tempoModificado < 10 ? `0${tempoModificado}` : tempoModificado
}

// ///////////////////////////////////////////////
const toggleWindosBtn = document.querySelector('.toggleWindos')
const conetudoWindowsToggle = document.querySelector('#conetudoWindowsToggle')

toggleWindosBtn.onclick = () =>{
    conetudoWindowsToggle.classList.toggle('ShowconetudoWindowsToggle')
}