const $form = document.getElementById('form');
const $input = document.getElementById('input');
const $todosUL = document.getElementById('todos');

const App = () => {
  const loadTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (!todos) return;
    todos.forEach(todo => {
      addTodo(todo);
    });
  };

  const setEvent = () => {
    $form.addEventListener('submit', e => {
      e.preventDefault();
      addTodo();
    });
  };

  const saveTodo = () => {
    const todosEl = Array.from(document.querySelectorAll('li'));
    const todos = todosEl.reduce((acc, todoEl) => {
      acc.push({
        text: todoEl.innerText,
        completed: todoEl.classList.contains('completed'),
      });
      return acc;
    }, []);

    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const setTodoEvent = todoEl => {
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      saveTodo();
    });
    todoEl.addEventListener('contextmenu', e => {
      e.preventDefault();
      todoEl.remove();
      saveTodo();
    });
  };

  const addTodo = todo => {
    const todoText = todo ? todo.text : $input.value.trim();
    if (!todoText) return;

    const todoEl = document.createElement('li');
    todoEl.innerText = todoText;
    setTodoEvent(todoEl);

    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    $todosUL.appendChild(todoEl);
    input.value = '';
    saveTodo();
  };

  loadTodos();
  setEvent();
};

App();
