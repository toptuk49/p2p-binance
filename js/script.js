function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


let currencies = document.querySelectorAll('.currency-item');
let card = document.querySelectorAll('.card-container');

for (let i = 0; i < currencies.length; i++) {
    currencies[i].addEventListener('click', function() {
        for (let a = 0; a < currencies.length; a++) {
            if (currencies[a].classList.contains('selected')) {
                currencies[a].classList.remove('selected');
            }
        }

        currencies[i].classList.add('selected');

        for (let a = 0; a < currencies[i].childNodes.length; a++) {
            let currency = currencies[i].childNodes[a];
            if (currency.tagName === 'SPAN') {
                let currency_name = currency.innerHTML;

                if (currency_name === 'USDT') {
                    for (let b = 0; b < card.length; b++) {
                        card[b].style.display = 'flex';
                    }
                } else {
                    for (let b = 0; b < card.length; b++) {
                        card[b].style.display = 'none';
                    }
                }
            }
        }
    });
}