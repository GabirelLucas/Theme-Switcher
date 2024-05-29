const body = document.querySelector('body')
const ligth = document.querySelector('.ligth')
const dark = document.querySelector('.dark')
console.log(ligth)
function changeTheme () {
        body.classList.toggle('dark')
        body.classList.toggle('ligth')
}

