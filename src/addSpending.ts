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
        let parent = document.getElementById('rashod').children 
        if(el.target.classList.contains('backImg') === true || el.target.classList.contains('fon') === true){
            // let back = el.target.classList
            // for(let i = 0; i < parent.length; i++){
            //     parent[i].classList.remove('backBlock')
            // }
            document.querySelector(el.target.children).classList.add('backBlock')
            console.log(el.target.children);
            
        }else{
            return console.log('None');
            
        }   
    })
}
