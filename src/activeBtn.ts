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
export let val = +document.querySelector<HTMLInputElement>('.inpMoney').value;

export function moneyCount (){
    document.querySelector<HTMLButtonElement>('.disa').addEventListener('click', ()=>{
        let money:number = +document.querySelector('.spentMoney').textContent
        let itogo:number = +document.querySelector('.itogoMoney').textContent
        document.querySelector('.spentMoney').textContent = String(money+val)
        // if()
        document.querySelector('.itogoMoney').textContent = String(itogo-val +'Br')
    })
}
