console.log('link')

// UKOL 2

const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

const form = document.querySelector('form')

const handleSubmit = (event) => {

    event.preventDefault()

    const emailInput = document.querySelector('#email')
    const email = emailInput.value

    const passwordInput = document.querySelector('#password')
    const password = passwordInput.value

    //const form = document.querySelector('form')

    const display = document.querySelector('h3')

    if (user.email === email && user.password === password) {
        form.textContent = `Přihlášený uživatel: ${user.name}`
    } else {
        //form.textContent = `Neplatné přihlašovací údaje`
        passwordInput.value = '';
        display.classList.remove('none')
    }

}

//const loginButton = document.querySelector('button')
//console.log(loginButton)
//loginButton.addEventListener('click', handleSubmit)

form.addEventListener('submit', handleSubmit)