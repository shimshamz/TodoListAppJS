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

function removeTodoItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;

    parent.removeChild(item);
}

function completeTodoItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    // Check if the item should be added to completed
    // or be added to the todo list
    var target = (id == 'todo') ? document.getElementById('completed'):document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

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

    //Add click event for removing item
    remove.addEventListener('click', removeTodoItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeIcon;

    //Add click event for completing item
    complete.addEventListener('click', completeTodoItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}