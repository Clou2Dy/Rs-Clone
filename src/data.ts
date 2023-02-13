import * as moment from "moment"

export default function data(){
    let year:any = {year: 'numeric'}
    let day = new Date()
    let form = ('DD.MM.YYYY')
    let form1 = ('MMMM.YYYY')
    document.querySelector('#month')!.addEventListener('click', ()=>{
        document.querySelector('.interval')!.textContent = moment().month('string').format(form1)
    })
    document.querySelector('#day')!.addEventListener('click', ()=>{
        document.querySelector('.interval')!.textContent = 'Today, ' + moment().year()
    })
    document.querySelector('#year')!.addEventListener('click', ()=>{
        document.querySelector('.interval')!.textContent = day.toLocaleString('ru-US', year)
    })
    document.querySelector('#week')!.addEventListener('click', ()=>{
        let form = ('DD.MM.YYYY')
        document.querySelector<any>('.interval')!.textContent = `${moment().day(1).format(form)} - ${moment().day(7).format(form)}`
    })
    document.querySelector('.expensesDay')!.textContent ='Today, '  + moment().day(1).format(form)
    document.querySelector('.expensesTom')!.textContent ='Yesterday, '  + moment().day(0).format(form)
    document.querySelector('.expensesLast')!.innerHTML = 'Day before yesterday, ' + moment().day(-1).format(form)
}