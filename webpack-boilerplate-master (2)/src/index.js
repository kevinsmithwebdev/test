import 'styles/index.css'
import { incrementCounter, decrementCounter } from 'actions'
// import 'reducers/index' // wowsers



const $counterBtns = document.querySelectorAll('.btn-counter')

for (let $btn of $counterBtns) {
  $btn.addEventListener('click', function(event) {
    switch (this.name) {
      case 'inc':
        console.log('incrementing...')
        break
      case 'dec':
        console.log('decrementing...')
        break
      default:
    }

  })
}