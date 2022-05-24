const $fill = document.querySelector('.fill');
const $empties = document.querySelectorAll('.empty');

function dragStart() {
    this.classList.add('hold');
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
}

/**
 * @description
 * [Drag Over]
 * - 🔥 stop default action (Reset the current drag operation to "none".) then append
 * -> if not, can't add drop event ㅠㅠ
 * - ref: https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event
 * @param {event} event
 */
function dragOver(event) {
    event.preventDefault();
}

function dragEnter() {
    this.classList.add('hovered');
}

function dragLeave() {
    this.classList.remove('hovered');
}

function dragDrop() {
    this.append($fill);
}

function setEvent() {
    $fill.addEventListener('dragstart', dragStart);
    $fill.addEventListener('dragend', dragEnd);

    $empties.forEach($empty => {
        $empty.addEventListener('dragover', dragOver);
        $empty.addEventListener('dragenter', dragEnter);
        $empty.addEventListener('dragleave', dragLeave);
        $empty.addEventListener('drop', dragDrop);
    });
}

setEvent();