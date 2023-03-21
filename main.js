console.log('link')

// UKOL 1
const car = document.getElementById('car')

const handleKey = (event) => {

    console.log(event)

    if (event.key === 'ArrowRight') {
        car.classList.add('margin-left')
    }
    if (event.key === 'ArrowLeft') {
        car.classList.remove('margin-left')
    }
}

document.addEventListener('keydown', handleKey)



