/*localStorage.setItem('name,bob')
console.log(localStorage.getItem('name'))
sessionStorage.setItem('name','john')
sessionStorage.removeItem('name')*/

document.cookie='name=Kyle; expires='+new Date(2020,0,1).toUTCString()
console.log(document.cookie)