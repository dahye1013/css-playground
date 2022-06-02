/**
 * @description
 * note app 
 * - using mark down library 
 * @see {@link https://marked.js.org/}
 */

const $addBtn = document.getElementById('add');
const $noteContainer = document.getElementById('note-container')

const storage = {
    set: () => {
        const $notes = document.querySelectorAll('textarea')
        const notes = [];
        $notes.forEach($note => notes.push($note.value));
        localStorage.setItem('notes', JSON.stringify(notes));
    },
    get: () => JSON.parse(localStorage.getItem('notes'))
}


const addNewNote = (text = '') => {
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = /* html */ `
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? '' : 'hidden'}"></div>
            <textarea class="${text? 'hidden' : ''}"></textarea>
    `

    const $main = note.querySelector('.main');
    const $delBtn = note.querySelector('.delete');
    const $editBtn = note.querySelector('.edit');
    const $textArea = note.querySelector('textarea');

    $main.innerHTML = marked.parse(text);
    $textArea.value = text;

    const remove = () => {
        note.remove();
        storage.set();
    }
    const edit = () => {
        $main.classList.toggle('hidden');
        $textArea.classList.toggle('hidden');
    };

    const input = (e) => {
        const { value } = e.target;
        $main.innerHTML = marked.parse(value);
        storage.set();
    }

    $delBtn.addEventListener('click', remove)
    $editBtn.addEventListener('click', edit)
    $textArea.addEventListener('input', input)

    $noteContainer.append(note);
}


const init = () => {
    $addBtn.addEventListener('click', () => addNewNote());
    const notes = storage.get();

    if (notes) {
        notes.forEach(note => addNewNote(note))
    }
}

init()