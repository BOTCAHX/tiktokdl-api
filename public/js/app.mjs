import { disabledButton } from "./disabledButton.mjs";
import { getUrl } from "./getUrl.mjs";

let app = document.getElementById('app');
let form = document.getElementById('form');
let content = document.getElementById('content');

disabledButton();

form.addEventListener('submit', e => {
    e.preventDefault();

    content.innerHTML = '<img src="./img/spinning-circles.svg" alt="loader" />';

    let url = e.target.url.value;
    let domain = url.split('/')[2];

    if(domain === 'www.tiktok.com' || domain === 'vm.tiktok.com' || domain === 'vt.tiktok.com'){
        getUrl(url);
    }else{
        content.innerHTML = '<h3 class="messageError">Error, The url is not a tiktok link!</h3>'
    }
    e.target.reset();
})

