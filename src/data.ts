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
    let options = { weekday: 'long'};
    document.querySelector('.expensesDay')!.textContent ='Today, '  + moment().subtract(0, 'days').format('DD.MM.YYYY'); 
    document.querySelector('.expensesTom')!.textContent ='Yesterday, '  + moment().subtract(1, 'days').format('DD.MM.YYYY');
    document.querySelector('.expensesLast')!.innerHTML = 'Day before yesterday, ' + moment().subtract(2, 'days').format('DD.MM.YYYY');
}