function setCookies() {
    const firstnameInput = document.getElementById('firstname');
    const emailInput = document.getElementById('email');

    const firstname = firstnameInput.value;
    const email = emailInput.value;
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



        // Get the current date
        let now = new Date();

        // Calculate the expiration date 10 days from now
        let expirationDate = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000); // 10 days in milliseconds

        // Convert expiration date to UTC string format
        let expires = "expires=" + expirationDate.toUTCString();

        // Set the cookies with expiration date
        document.cookie = `firstname=${firstname}; ${expires}; path=/`;
        document.cookie = `email=${email}; ${expires}; path=/`;
    }
    paragraph.innerHTML = paragraph.innerHTML.slice(0, -2);
    document.body.appendChild(paragraph);
}
