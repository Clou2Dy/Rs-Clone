import { butt, disabledButt, checkInp } from "./activeBtn"
export  function addSpending (){
    document.querySelector('.addExpenses')?.addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.changeMoney')!.style.display = 'block'
        document.querySelector<HTMLElement>('.zatemFon')!.style.display = 'block'
    })
    document.querySelector('.left')?.addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.changeMoney')!.style.display = 'none'
        document.querySelector<HTMLElement>('.zatemFon')!.style.display = 'none'
    })
    document.querySelector('.disa')!.addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.changeMoney')!.style.display = 'none'
        document.querySelector<HTMLElement>('.zatemFon')!.style.display = 'none'
        
    })
    butt()
    disabledButt()
    checkInp()
}


export  function addUnd() {
    document.addEventListener('click',(el:any)=>{
        if (el.target.classList.contains('date') === true){
            document.getElementById('expensesDay')!.classList.remove('back')
            document.getElementById('expensesTom')!.classList.remove('back')
            document.getElementById('expensesLast')!.classList.remove('back')
            document.getElementById(el.target.id)!.classList.add('back')

        }       
    })
    document.addEventListener('click',(el:any)=>{ 
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
