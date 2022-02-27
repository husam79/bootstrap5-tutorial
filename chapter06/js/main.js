export function saveItem(item) {
    let key = Object.keys(localStorage)
                .find(e => e === String(item.id));

    if(key){
        let tmp = JSON.parse(localStorage.getItem(key));
        tmp.push(item);
        localStorage.setItem(item.id, JSON.stringify(tmp));
    }
    else{
        localStorage.setItem(item.id, JSON.stringify([item]));
    }
}

export function getItem(id) {
    return window.localStorage.getItem(item.id);
}

export function getAllItems(){
    const keys = Object.keys(window.localStorage);
    let entries = [];

    for(let key of keys){
        entries.push(JSON.parse(localStorage.getItem(key)))
    }

    return entries;
}

export function updateShoppingCartList(){
    let shoppingCartContent = document.getElementById('shoppingCartContent');
    let counter = 1;
    let total_products = 0;
    let amount_due = 0;

    for (let group of getAllItems()) {
        const div = document.createElement('div');

        div.className = 'row shopping-cart-item';

        div.innerHTML = `
            <div class="col-1">
                <span>${counter}</span>
            </div>
            <div class="col-6">
                <span>${group[0].course_name}</span>
            </div>
            <div class="col-1">
                <span>${group.length}</span>
            </div>
            <div class="col-1">
                <span>$${group[0].price}</span>    
            </div>
            <div class="col-1">
                <span>$${group.length * group[0].price}</span>    
            </div>
            `;

        shoppingCartContent.appendChild(div);
        
        amount_due += group.length * group[0].price;
        counter++;
        total_products += group.length;
    }

    document.getElementById('amountDue').innerHTML = '$' + amount_due;
}

export function updateCartLabel(){
    const counterElement = document.getElementsByClassName('counter')[0];
    let count = 0;

    count = getAllItems().reduce( (acc, group) => acc + group.length, 0)

    if(count > 0){
        counterElement.innerHTML = count;
        counterElement.classList.remove('zero');
    }
}