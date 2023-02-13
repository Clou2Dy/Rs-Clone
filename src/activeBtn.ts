export function butt(){
    document.addEventListener('click', function(el:any){
        let day =  document.querySelector('.expensesDay')
        let tom = document.querySelector('.expensesTom')
        let last = document.querySelector('.expensesLast')
        document.querySelector('.expensesDay')!.addEventListener('click', ()=>{
            document.querySelector<HTMLElement>('.expensesDay')!.classList.toggle('back')
        })
    })
    
}
export function disabledButt (){
    let butt:any = document.querySelector('.disa')
    let val:any = document.querySelector('.inpMoney')
    butt.setAttribute('disabled', true)
    butt.addEventListener('click', ()=>{
        console.log( document.querySelector('.money'));
        let suma = Number(val!.value)
        let dox:any = Number(document.querySelector('.money')!.textContent) 
        let mon =+ suma
        // let mon = dox
        console.log(suma);
        console.log(dox);
        document.querySelector('.money')!.textContent = mon.toString()
        // console.log(mon);
        
        
    })
}

export function checkInp(){
   document.querySelector('.inpMoney').addEventListener('input',function(){
    if(document.querySelector<HTMLInputElement>('.inpMoney').value.length === 0){
        document.querySelector<HTMLButtonElement>('.disa').disabled = true 
    }else{
        document.querySelector<HTMLButtonElement>('.disa').disabled = false
    }
   })  
}

