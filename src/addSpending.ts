import * as moment from "moment"
// import val fr
let img:string 
var text:any
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
            text = el.target.closest(".backImg").children[1].textContent
        }
        document.querySelectorAll('.backImg').forEach(element => {
            if(el.target.closest('.categoriExpenses')){
                element.classList.remove('backBlock')
            }
        })
        if(el.target.classList.contains('backImg')){
            el.target.classList.add('backBlock')
            
       }else if(el.target.className === 'imgName' || 'imgBlock' === el.target.className){
            document.querySelectorAll('.backImg').forEach(element => {
                element.classList.remove('backBlock')
            })
           el.target.parentElement.classList.add('backBlock')
        }
    }) 

    addEventListener('click', (el:any)=>{
        if(el.target.className === 'delete'){
            document.querySelector(`.${el.target.closest(".block").classList[1]}`).remove()
        }
    })
}

export function block(){
    let i = 0
    let form  = ('DD.MM.YYYY'+' '+'HH:mm'+"")
    let time = moment().format(form)
    let blo:string
    let link:HTMLElement
    addEventListener('click', (el:any)=>{
        if(el.target.closest(".paragraphExpensesActive")){
            blo = `ExpensesActive`
            link = document.querySelector('.spending')
        }
        if(el.target.closest(".paragraphIncomeActive")){
            blo = `IncomeActive` 
            link = document.querySelector('.income')
        }
    })
    
    document.querySelector('.disa').addEventListener('click', ()=>{
        i++
        if(blo === undefined){
            blo = `ExpensesActive`
            link = document.querySelector('.spending')
        }
        const blockSpending = `<div class='blockContent'> <div class='col imgDiv'><img src = ${img}></div> <div class='col nameSpending'>${text}</div> <div class='col rasxoMoney'>${document.querySelector<HTMLInputElement>('.inpMoney').value +' BYN'}</div> <div class='col procent'> ${document.querySelector('.spentMoney').textContent == String(0) ? '100%' : Math.round((+document.querySelector<any>('.inpMoney').value / +document.querySelector('.spentMoney').textContent) * 100)+'%'}</div> <div class='col expensesDateBlock'>${time}</div> <div class="col dropdown"><button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton"><li><a class="dropdown-item" href="#">${document.querySelector<HTMLInputElement>('.inpCom').value}</a></li></ul></div> <div class='delete'></div> </div>`
        let block = document.createElement('div')
        block.classList.add(`row`, `block${i}`, `block`, `${blo}`)
        block.innerHTML = blockSpending
        link.appendChild(block)
    })
}