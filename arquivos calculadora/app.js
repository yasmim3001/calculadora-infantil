const valor1 = document.querySelector('#valor1')
const valor2 = document.querySelector('#valor2')
const btn = document.querySelectorAll('.btn')

const btnCalcular = document.querySelector('#calcular')
const display = document.querySelector('#display')

let operador = ''

btn.forEach((e)=>{
    e.addEventListener('click', ()=>{
        operador = e.textContent
    })
})

btnCalcular.addEventListener('click',calcular)

function calcular(){
    if((valor1.value) && (valor2.value)){
        let resultado = `${valor1.value}${operador}${valor2.value}`
        display.innerHTML = eval(resultado)
    }else {
        alert('preencha os dois inputs')
    }
}
