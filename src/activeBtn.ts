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
// export let val = +document.querySelector<HTMLInputElement>('.inpMoney').value;

export function moneyCount (){
    if(localStorage.getItem('itogo')){
        document.querySelector('.itogoMoney').textContent = localStorage.getItem('itogo')
        if(+document.querySelector('.itogoMoney').textContent > 0 ){
            document.querySelector<HTMLElement>('.itogoMoney').style.color = 'green'
            }else if (+document.querySelector('.itogoMoney').textContent < 0 ){
            document.querySelector<HTMLElement>('.itogoMoney').style.color = 'red'
            }else{
            document.querySelector<HTMLElement>('.itogoMoney').style.color = 'white'
            }
    }
    if(localStorage.getItem('spent')){
        document.querySelector('.spentMoney').textContent = localStorage.getItem('spent')
    }

    document.querySelector<HTMLButtonElement>('.disa').addEventListener('click', ()=>{
    let spent:number = +document.querySelector('.spentMoney').textContent
    // let earned:number = +document.querySelector('.earnedMoney').textContent
    let itogo:number = +document.querySelector('.itogoMoney').textContent
    let val = +document.querySelector<HTMLInputElement>('.inpMoney').value;
    // document.querySelector('.itogoMoney').textContent = String(itogo)
    document.querySelector('.spentMoney').textContent = String(spent+val)
    // document.querySelector('.earnedMoney').textContent = String(earned+val)
    if(document.querySelector('.paragraphIncomeActive')){
    document.querySelector('.itogoMoney').textContent = String(itogo+val)
    console.log(itogo+val)
    }else{
    document.querySelector('.itogoMoney').textContent = String(itogo-val)
    console.log(itogo-val);
    }
    if(+document.querySelector('.itogoMoney').textContent > 0 ){
    document.querySelector<HTMLElement>('.itogoMoney').style.color = 'green'
    }else if (+document.querySelector('.itogoMoney').textContent < 0 ){
    document.querySelector<HTMLElement>('.itogoMoney').style.color = 'red'
    }else{
    document.querySelector<HTMLElement>('.itogoMoney').style.color = 'white'
    }
    localStorage.setItem('itogo', document.querySelector('.itogoMoney').textContent)
    localStorage.setItem('spent', document.querySelector('.spentMoney').textContent)
    })
       
    }
