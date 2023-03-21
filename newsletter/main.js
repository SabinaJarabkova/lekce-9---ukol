console.log('link')

// UKOL 3

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector('input');   
    console.log(email.value);
	form.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email.value}`;

})

const emailInput = document.querySelector('input')

emailInput.addEventListener('input', (event) => {
    event.preventDefault()
    
    if (event.target.value === '') {
        emailInput.classList.add('red')
    }

    if (event.target.value != '') {
        emailInput.classList.remove('red')
    }

    if (event.target.value.includes('@') === false) {
        emailInput.classList.add('red')
    }

    if (event.target.value.includes('@') === true) {
        emailInput.classList.remove('red')
    }    
})


