export function butt(){
    // document.addEventListener('click', function(el:any){
    //     let day =  document.querySelector('.expensesDay')
    //     let tom = document.querySelector('.expensesTom')
    //     let last = document.querySelector('.expensesLast')
    //     document.querySelector('.expensesDay')!.addEventListener('click', ()=>{
    //         document.querySelector<HTMLElement>('.expensesDay')!.classList.toggle('back')
    //     })
    // })
    
}

export function checkInp(){
    document.querySelector<HTMLButtonElement>('.disa').disabled = true 
    document.querySelector('.inpMoney').addEventListener('input',function(){
        if(!Array.from(document.querySelectorAll('.backImg')).some((el)=> el.classList.contains('backBlock')) || document.querySelector<HTMLInputElement>('.inpMoney').value.length === 0){
            document.querySelector<HTMLButtonElement>('.disa').disabled = true 
        }else{
            document.querySelector<HTMLButtonElement>('.disa').disabled = false
        } 
    })  
}

export function moneyCount (){
    document.querySelector<HTMLButtonElement>('.disa').addEventListener('click', ()=>{
        let money:number = +document.querySelector('.spentMoney').textContent
        let val:number = +document.querySelector<HTMLInputElement>('.inpMoney').value
        document.querySelector('.spentMoney').textContent = String(money+val)
    })
}
