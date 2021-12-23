let buttons = document.getElementsByName('addToCart');

for(let button of buttons){
    button.addEventListener('click', (e)=>{
    addToCart(e.target.attributes['id'].value);
    });
}

function addToCart(id){
    let current_number = Number(document.getElementsByClassName('counter')[0].innerHTML) || 0;
    current_number++;      
    
    let counterElement = document.getElementsByClassName('counter')[0];
    counterElement.innerHTML = current_number;
    counterElement.classList.remove('zero');
}
