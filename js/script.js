const formButton = document.querySelector('.search-button')
const form = document.querySelector('.search-form')
const formClose = document.querySelector('.form-close')
const formOpen = document.querySelector('.form-open')
const inputDate = document.querySelector('.input-date')
const inputNumber = document.querySelector('.input-number')

const dateIn = document.querySelector('#date-in')
const dateOut = document.querySelector('#date-out')
const numberAdults = document.querySelector('#number-adults')
const numberKids = document.querySelector('#number-kids')


formButton.addEventListener('click', function (evt) {
  if (form.classList.contains('form-open')) {
    evt.preventDefault()
    form.classList.add('form-close')
    form.classList.remove('form-open')
  } else {
    evt.preventDefault()
    form.classList.remove('form-close')
    form.classList.add('form-open')
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (form.classList.contains('form-open')) {
      evt.preventDefault()
      form.classList.add('form-close')
      form.classList.remove('form-open')
    } 
  }
});

form.addEventListener('submit', function (evt) {
  evt.preventDefault()
  dateIn.classList.remove('form-error')
  dateOut.classList.remove('form-error')
  numberAdults.classList.remove('form-error')
  numberKids.classList.remove('form-error')
})

form.addEventListener('submit', function (evt) {
  if (!dateIn.value || !dateOut.value || !numberAdults.value || !numberKids.value) {
    evt.preventDefault()
    dateIn.offsetWidth = dateIn.offsetWidth;
    dateIn.classList.add('form-error')
    dateOut.classList.add('form-error')
    numberAdults.classList.add('form-error')
    numberKids.classList.add('form-error')
    console.log('Не отправлено')
  } else {
    localStorage.setItem('number', numberAdults.value)
    localStorage.setItem('number', numberKids.value)
    console.log('Отправлено')
  }
})




// Другой вариант 

// formButton.addEventListener('click', function (evt) {
//   if (form.classList.contains('form-open')) {
//     evt.preventDefault()
//     form.classList.add('form-close')
//     form.classList.remove('form-open')
//   } else {
//     evt.preventDefault()
//     form.classList.remove('form-close')
//     form.classList.add('form-open')
//   }
// })

// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     if (form.classList.contains('form-open')) {
//       evt.preventDefault()
//       form.classList.add('form-close')
//       form.classList.remove('form-open')
//     } 
//   }
// });

// form.addEventListener('submit', function (evt) {
//   evt.preventDefault()
//   inputNumber.classList.remove('form-error')
//   inputDate.classList.remove('form-error')
// })

// form.addEventListener('submit', function (evt) {
//   if (!inputDate.value || !inputNumber.value) {
//     evt.preventDefault()
//     inputNumber.offsetWidth = inputNumber.offsetWidth;
//     inputNumber.classList.add('form-error')
//     inputDate.classList.add('form-error')
//     console.log('Не отправлено')
//   } else {
//     localStorage.setItem('number', inputNumber.value)
//     console.log('Отправлено')
//   }
// })


