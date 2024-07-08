let titleInput = document.getElementById('title');
let descriptionInput = document.getElementById('description');
let dueDateInput = document.getElementById('date');
let priority = document.getElementById('priority');

let ol = document.querySelector('ol');
// get values from inputs and add to the 'project' object
function assignValues() {
    project = {
        title: titleInput.value,
        description: descriptionInput.value,
        dueDate: dueDateInput.value,
        priority: document.querySelector('input[name = priority]:checked').value,
    }
}
// add task to list
function updateHTML() {
            let {title, description, dueDate, priority} = project;
            let list = document.createElement('li');
            ol.appendChild(list);
            list.innerHTML = `Your Task '${title}' with the description '${description}'
            is due on '${dueDate}'. ${priority}`;
            
            switch (priority) {
                case 'high':
                    list.style.color = 'red';
                    break;
                case 'medium':
                    list.style.color = 'yellow';
                    break;
                case 'low':
                    list.style.color = 'green';
                    break;
                default:
                    list.style.color = 'black'; // default color
            }
          
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            list.appendChild(deleteButton);
            deleteButton.addEventListener('click', function() {
                list.remove();
            })
        }


// clear the input area after the task has been added
function clear() {
    titleInput.value = '';
    descriptionInput.value = '';
    dueDateInput.value = '';
    priority.checked = false;
}

// assign colors following priority



// add to your list
let button = document.getElementById('addToList');
button.onclick = () => {
    assignValues();
    updateHTML();
    clear();
    console.log(project);
}
