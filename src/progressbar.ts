export default function progress(){
    // console.log(document.querySelector<any>('.disa').getAttribute('style'));
    
    document.querySelector('.disa').addEventListener('click', function(){       
        document.querySelectorAll('.backImg').forEach((el:HTMLEmbedElement)=>{   
            if(el.classList.contains('backBlock')){
                document.querySelector('.progress').insertAdjacentHTML('afterbegin', `<div class="${el.id}Progress" role="progressbar" style="width: ${document.querySelector('.spentMoney').textContent == String(0) ? '100%' : Math.round((+document.querySelector<any>('.inpMoney').value / +document.querySelector('.spentMoney').textContent) * 100)+'%'}; background-color: ${el.classList[el.classList.length - 2]}; color: black" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">${el.id}</div>`)
                             
            }
        })
    })
}