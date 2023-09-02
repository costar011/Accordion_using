const tabButton = document.querySelectorAll('.tab__button');

tabButtons.forEach((e) => {
    e.addEventListener('click', (e) => {
        if(! e.target.classList.contains('tab__button-active')){
            e.target.classList.add('tab__button-active');
            e.target.nextElementSibling.style.height = '0px';
            e.target.nextElementSibling.classList.remove('tab__panel-active');
        }
    });
});