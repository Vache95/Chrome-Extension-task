const body = document.querySelector("body");
const child = body.firstElementChild;
const create = document.createElement('span')

create.textContent = 'Welcome';
create.classList.add('word');
child.prepend(create);
