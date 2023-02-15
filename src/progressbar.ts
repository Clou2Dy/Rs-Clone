export default function progress(){
    document.querySelector('.disa').addEventListener('click', function(){
        document.querySelectorAll('.backImg').forEach((el:HTMLDListElement)=>{
            if(el.classList.contains('backBlock')){
                document.querySelector('.progress').insertAdjacentHTML('afterbegin', `<div class="${el.id}Progress" role="progressbar" style="width: 15%; background-color: ${el.classList[el.classList.length - 2]}; color: black" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">${el.id}</div>`)
            }
        })
    })
}