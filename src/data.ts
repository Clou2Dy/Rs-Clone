import * as moment from "moment"

export default function data(){
    let year:any = {year: 'numeric'}
    let day = new Date()
    let form = ('DD.MM.YYYY')
    let form1 = ('MMMM.YYYY')
    document.querySelector('#month')?.addEventListener('click', ()=>{
        document.querySelector('.interval')!.textContent = moment().date(0).format(form1)
    })
    document.querySelector('#day')?.addEventListener('click', ()=>{
        document.querySelector('.interval')!.textContent = 'Сегодня, ' + moment().year()
    })
    document.querySelector('#year')?.addEventListener('click', ()=>{
        document.querySelector('.interval')!.textContent = day.toLocaleString('ru-US', year,)
    })
    document.querySelector('#week')?.addEventListener('click', ()=>{
        let form = ('DD.MM.YYYY')
        let str = moment().startOf('w').format(form).toString()
        let end = moment().endOf('w').format(form).toString()
        document.querySelector('.interval')!.textContent = str +'-'+end
        
    })
    document.querySelector('.expensesDay')!.textContent ='Сегодня '  + moment().day(0).format(form)
    document.querySelector('.expensesTom')!.textContent ='Вчера '  + moment().day(-1).format(form)
    document.querySelector('.expensesLast')!.innerHTML = 'Позавчера ' + moment().day(-2).format(form)
}