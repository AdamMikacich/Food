const lorem = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'.split('.').join();

for (let name of lorem.split(' ')) {
  let li = document.createElement('li');
  li.innerHTML = name;
  document.getElementById('attendees').appendChild(li);
}

const view = document.getElementById('view');
const content = document.getElementsByClassName('content')[0];
const info = document.getElementsByClassName('info')[0];
const attendees = document.getElementsByClassName('attendees')[0];

let toggle = false;

view.addEventListener('click', () => {
  toggle = !toggle;
  content.classList.add('hide');
  setTimeout(() => {
    if (toggle) {
      view.innerHTML = 'View Info';
      info.style.display = 'none';
      attendees.style.display = 'block';
    } else {
      view.innerHTML = 'View List';
      attendees.style.display = 'none';
      info.style.display = 'block';
    }
    content.classList.remove('hide');
  }, 300);
});