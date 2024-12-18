// Selecionando elementos
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Função para adicionar tarefa
addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Adicionando funcionalidade de marcar tarefa como concluída
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Adicionando botão de excluir
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function(e) {
            e.stopPropagation(); // Impede o evento de clique no li
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = ''; // Limpar o campo de entrada
    }
});

// Permitir pressionar "Enter" para adicionar a tarefa
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addButton.click();
    }
});
