export function incomeExpensesBoreder(){
    document.addEventListener('click', function(el: any){
        if(el.target.classList[0] == 'underline' && el.target.classList[1] != 'categorySecurity'){
            Array.from(document.querySelectorAll('.underline')).forEach(function(elem:HTMLElement){
                elem.style.border = 'none'              
            })
            el.target.style.border = '2px solid #b9c6d1'        
        }
    })
}