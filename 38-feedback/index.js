/**
[Event Bubbling] 
- to not have to add an event listner on each element.
- take advantage of event bubbling and event propagation.
 */

const $ratings = document.querySelectorAll('.rating')
const $sendButton = document.querySelector('#send')
const $panel = document.querySelector('#panel')

let selectedRating = 'Satisfied'

const setEvent = () => {
    $panel.addEventListener('click', (e) => {
        if (e.target.parentNode.classList.contains('rating')) {
            removeActive()
            e.target.parentNode.classList.add('active')
            selectedRating = e.target.nextElementSibling.innerHTML
            console.log(selectedRating);
        }
    })

    $sendButton.addEventListener('click', () => {
        $panel.innerHTML = /* html */ `
			<i class="fas fa-heart"></i>
			<strong>Thank you!</strong>
			<br/>
			<strong>Feedback: ${selectedRating}</strong>
			<p>We'll use your feedback to improve our service.</p>
			`
    })

    const removeActive = () => {
        $ratings.forEach(($ratings) => $ratings.classList.remove('active'))
    }

}


setEvent()