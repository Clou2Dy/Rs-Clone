import {moneyCount, checkInp } from "./activeBtn"
export default function addSpending (){
    document.querySelector('.addExpenses').addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.changeMoney').style.display = 'block'
        // document.querySelector<HTMLElement>('.zatemFon').style.display = 'block'
    })
    document.querySelector('.left').addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.changeMoney').style.display = 'none'
        // document.querySelector<HTMLElement>('.zatemFon').style.display = 'none'
    })
    document.querySelector('.disa').addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.changeMoney').style.display = 'none'
        // document.querySelector<HTMLElement>('.zatemFon').style.display = 'none'
        
    })
    document.querySelector('.categoryExpenses').addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.spending').style.display = 'block'
        document.querySelector<HTMLElement>('.income').style.display = 'none'
    })
    document.querySelector('.categoryIncome').addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.income').style.display = 'block'
        document.querySelector<HTMLElement>('.spending').style.display = 'none'
    })
    document.querySelector('.categorySecurity').addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.security-page').style.display = 'block'
    })
    document.querySelector('.paragraphExpenses').addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.paragraphExpenses').classList.add('paragraphExpensesActive')
        document.querySelector<HTMLElement>('.paragraphIncome').classList.remove('paragraphIncomeActive')
    })
    document.querySelector('.paragraphIncome').addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.paragraphIncome').classList.add('paragraphIncomeActive')
        document.querySelector<HTMLElement>('.paragraphExpenses').classList.remove('paragraphExpensesActive')
    })
    moneyCount()
    checkInp()
}