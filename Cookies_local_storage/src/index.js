// src/index.js

function setCookies() {
    const firstnameInput = document.getElementById('firstname');
    const emailInput = document.getElementById('email');

    const firstname = firstnameInput.value;
    const email = emailInput.value;

    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
}

function showCookies() {
    const cookies = document.cookie.split('; ');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Cookies: ';

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        if (cookie.startsWith('firstname=') || cookie.startsWith('email=')) {
            paragraph.innerHTML += cookie.split('=')[1] + ', ';
        }
    }

    paragraph.innerHTML = paragraph.innerHTML.slice(0, -2);
    document.body.appendChild(paragraph);
}
