import { butt, moneyCount, checkInp } from "./activeBtn"
let img:string 
let text:string
export  function addSpending (){
    document.querySelector('.addExpenses')!.addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.changeMoney')!.style.display = 'block'
        document.querySelector<HTMLElement>('.zatemFon')!.style.display = 'block'
    })
    document.querySelector('.left')!.addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.changeMoney')!.style.display = 'none'
        document.querySelector<HTMLElement>('.zatemFon')!.style.display = 'none'
    })
    butt()
    moneyCount()
    checkInp()
    document.querySelector('.disa').addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.changeMoney').style.display = 'none'
        document.querySelector<HTMLElement>('.zatemFon').style.display = 'none'
        document.querySelector<HTMLButtonElement>('.disa').disabled = true
        document.querySelector<HTMLInputElement>('.inpMoney').value = ''
        document.querySelectorAll('.backImg').forEach(element => {
            element.classList.remove('backBlock')
        })
    })
}
export  function addUnd():any {
    document.addEventListener('click',(el:any)=>{
        if (el.target.classList.contains('date') === true){
            document.getElementById('expensesDay')!.classList.remove('back')
            document.getElementById('expensesTom')!.classList.remove('back')
            document.getElementById('expensesLast')!.classList.remove('back')
            document.getElementById(el.target.id)!.classList.add('back')
      
        }       
    })
    document.addEventListener('click',(el:any) =>{ 
        if(el.target.classList.contains('backImg') || el.target.className === 'imgName' || 'imgBlock' === el.target.className){
            img = el.target.closest(".backImg").children[0].getAttribute('src')
            // text = el.target.closest(".backImg").children[1].texContent
            if(el.target.find('imgName')){

                console.log('yes');
            }
        }
        
        document.querySelectorAll('.backImg').forEach(element => {
            element.classList.remove('backBlock')
        })
        if(el.target.classList.contains('backImg')){
            el.target.classList.add('backBlock') 
            
       }else if(el.target.className === 'imgName' || 'imgBlock' === el.target.className){
           el.target.parentElement.classList.add('backBlock')
        }
    }) 
}
export function block(){
    let i = 0
    document.querySelector('.disa')!.addEventListener('click', ()=>{
        i++
        const blockSpending = `<div class='blockContent'> <div class='imgDiv'><img src = ${img}></div></div> <div class='nameSpanding'></div> <div class='procent'></div> <div class='rasxoMoney'></div> </div>`
        let block = document.createElement('div')
        block.classList.add(`block${i}`, `block`)
        block.innerHTML = blockSpending
        document.querySelector('.spending')!.appendChild(block)
    })  
}

