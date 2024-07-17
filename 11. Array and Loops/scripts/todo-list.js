//empty array
const todoList = [];
const todoListPage = [];

function addToDo() {
    //js-input elementini JSdə təyin edirik
    const inputElement = document.querySelector('.js-input');

    //inputElementin dəyərini, variable daxilində saxlayırıq
    const todoName = inputElement.value;

    //arrayin sonuna dəyəri əlavə edirik
    todoList.push(todoName);

    //inputu resetləyirik
    inputElement.value = '';

    //console-da arrayin son halını göstəririk
    console.log(todoList);
}


function addToDoPage() {
    const inputElement = document.querySelector('.js-input-2');

    const todoName = inputElement.value;

    todoListPage.push(todoName);

    inputElement.value = '';

    renderToDoList();
}


function renderToDoList() {
    let todoListHTML = '';

    /*
      bu texnika Generating the HTML 
      adlanır
    */
    for(let i = 0; i < todoListPage.length; i++) {
        const todoText = todoListPage[i];
        const html = `<p>${todoText}</p>`;
    
        todoListHTML += html;
    }
    
    console.log(todoListHTML);
    console.log(typeof todoListHTML);

    const todoDiv = document.querySelector('.js-todo-list');
    
    todoDiv.innerHTML = todoListHTML;
}

