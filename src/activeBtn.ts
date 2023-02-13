export function butt(){
    document.addEventListener('click', function(el:any){
        let day =  document.querySelector('.expensesDay')
        let tom = document.querySelector('.expensesTom')
        let last = document.querySelector('.expensesLast')
        document.querySelector('.expensesDay')?.addEventListener('click', ()=>{
            document.querySelector<HTMLElement>('.expensesDay')!.classList.toggle('back')
        })
    })
    
}
export function disabledButt (){
    let butt:any = document.querySelector('.disa')
    let val:any = document.querySelector('.inpMoney')
    butt.setAttribute('disabled', true)
    function checkInp(){
        if(val!.value.length <= 1){
            butt.setAttribute('disabled', true)
        }else {
            butt.removeAttribute('disabled')
        }
        setInterval(checkInp, 1000)
    }
    checkInp()
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
// function rgb(arg0: number, arg1: number, arg2: number): string {
//     throw new Error("Function not implemented.")
// }
