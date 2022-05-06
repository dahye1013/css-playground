const $button = document.getElementById('button');
const $toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message two',
  'Message three',
  'Message four',
  'Message five',
];
const message_type = ['info', 'error', 'success'];

const createNotification = (message = 'message', type = 'info') => {
  const $notification = document.createElement('div');
  $notification.classList.add('toast');
  $notification.classList.add(type);
  $notification.innerText = message;

  $toasts.appendChild($notification);

  setTimeout(() => {
    $notification.remove();
  }, 3000);
};

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};
const getRandomType = () => {
  return message_type[Math.floor(Math.random() * message_type.length)];
};

$button.addEventListener('click', () => {
  createNotification(getRandomMessage(), getRandomType());
});
