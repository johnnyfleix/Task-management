document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('taskForm').addEventListener('submit', function (e) {
        e.preventDefault();
    });

    document.getElementById('dueDate').min = new Date().toISOString().split('T')[0];

    document.getElementById('tasks').addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            // Handle task completion or other actions
            e.target.classList.toggle('completed');
        }
    });
});

function createTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    const task = document.createElement('li');
    task.innerHTML = `<strong>${title}</strong><br>${description}<br>Due Date: ${dueDate}<br><em style ="color: red;">Priority: ${priority}</em>`;
    
    document.getElementById('tasks').appendChild(task);

    // Clear form fields after task creation
    document.getElementById('taskForm').reset();
}
