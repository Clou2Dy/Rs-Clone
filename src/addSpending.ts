import { butt, disabledButt } from "./activeBtn"
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
}


export  function addUnd() {
    document.addEventListener('click',(el:any)=>{
        let id = el.target.id 
        if(el.target.classList.contains('back') == true){
            // document.getElementById(id)!.classList.remove('back')
        }else if (el.target.classList.contains('date') == true){
            document.getElementById('expensesDay')!.classList.remove('back')
            document.getElementById('expensesTom')!.classList.remove('back')
            document.getElementById('expensesLast')!.classList.remove('back')
            document.getElementById(id)!.classList.add('back')
            // document.querySelectorAll('.date')
        }       
    })
    document.addEventListener('click',(el:any)=>{ 
        let id = el.target.id 
        if(el.target.classList.contains('backImg') == true){
            document.getElementById(id)!.classList.add('backBlock')
            console.log(id);
            
        }
        // else if (el.target.classList.contains('date') == true){
        //     document.getElementById('expensesDay')!.classList.remove('back')
        //     document.getElementById('expensesTom')!.classList.remove('back')
        //     document.getElementById('expensesLast')!.classList.remove('back')
        //     document.getElementById(id)!.classList.add('back')
        //     // document.querySelectorAll('.date')
        // }       
    })
}
