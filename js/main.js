//Remove and complete icons
var removeIcon = '<i class="far fa-trash-alt"></i>';
var completeIcon = '<i class="far fa-check-circle"></i>';

// User clicked on the add button
// if there is any text inside the task field, add that task to the list
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('task').value;
    if (value) {
        addTodoItem(value);
        document.getElementById('task').value = '';
    }
});

//Adds a new item to the todo list
function addTodoItem(text) {
var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeIcon;

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}