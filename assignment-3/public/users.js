const addUserBtn = document.querySelector('#add-user');
const usersList = document.querySelector('#users-list');

addUserBtn.addEventListener('click', () => {
    usersList.innerHTML += `<li>User ${usersList.children.length + 1}</li>`;
})