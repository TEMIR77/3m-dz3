let inp1 = document.querySelector('.inp1')
let check = document.querySelector('.check')

let inp2 = document.querySelector('.inp2')
let check2 = document.querySelector('.check2')

let age = 26

let word = 'JavaScript'

check.addEventListener('click', () => {
    let prom = new Promise((resolve, reject) => {
        if(inp1.value == age ){
            resolve('урра вы угадали')
        }else{
         reject('вы не угадали')
        }

    }).then((res) => alert(res))
    .catch((rej) => alert(rej))
    prom()
})


check2.addEventListener('click', () => {
    let prom2 = new Promise((resolve,reject) => {
        if(inp2.value == word.length) {
            resolve("Ты угадал")
        }else{
            reject("ты не угадал")
        }
    }).then((res) => alert(res))
    .catch((rej) => alert(rej))
})
