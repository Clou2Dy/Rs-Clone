export default function income() {
    document.querySelector('.paragraphIncome').addEventListener('click',()=>{
        document.querySelector<HTMLElement>('.rashod').style.display = 'none'
        document.querySelector<HTMLElement>('.doxod').style.display = 'block'
    })
    document.querySelector('.paragraphExpenses').addEventListener('click',()=>{
        document.querySelector<HTMLElement>('.rashod').style.display = 'block'
        document.querySelector<HTMLElement>('.doxod').style.display = 'none'
    })
    
}