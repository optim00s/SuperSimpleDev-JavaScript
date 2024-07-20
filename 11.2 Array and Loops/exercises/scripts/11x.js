//empty array
const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
const todoListPage = JSON.parse(localStorage.getItem('todoListPage')) || [];
const todoListWithDate = JSON.parse(localStorage.getItem('todoListWithDate')) || [];

//practice 1
console.log(todoList);

function addToDo() {
    //js-input elementini JSdə təyin edirik
    const inputElement = document.querySelector('.js-input');

    //inputElementin dəyərini, variable daxilində saxlayırıq
    const todoName = inputElement.value;

    //arrayin sonuna dəyəri əlavə edirik
    todoList.push(todoName);

    //localStorage ə arrayin son vəziyyətini təyin edirik
    localStorage.setItem('todoList', JSON.stringify(todoList));

    //inputu resetləyirik
    inputElement.value = '';

    //console-da arrayin son halını göstəririk
    console.log(todoList);
}

//practice 2
renderToDoList();

function addToDoPage() {
    const inputElement = document.querySelector('.js-input-2');

    const todoName = inputElement.value;

    todoListPage.push(todoName);

    localStorage.setItem('todoListPage', JSON.stringify(todoListPage));

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
    
    const todoDiv = document.querySelector(`.js-todo-list`);
    
    todoDiv.innerHTML = todoListHTML;
}

//practice 3
renderToDoListWithDate();

function addToDoPage3() {
    const inputElement = document.querySelector('.js-input-3');

    const name = inputElement.value;

    const dateInputElement =  document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;

    /*
       shorthand property syntax

       objectdə, property və variable adı 
       eynidirsə bir dəfə yaza bilərik
    */
    todoListWithDate.push({name, dueDate});

    //localStorage ə arrayin son vəziyyətini təyin edir
    updateLocalStorage();

    inputElement.value = '';

    renderToDoListWithDate();
}

function updateLocalStorage() {
    localStorage.setItem('todoListWithDate', JSON.stringify(todoListWithDate));
}

function renderToDoListWithDate() {
    let todoListHTML = '';

    /*
      bu texnika Generating the HTML 
      adlanır
    */
    for(let i = 0; i < todoListWithDate.length; i++) {
        const todoObject = todoListWithDate[i];
        /*
          const name = todoObject.name;
          destructuring

          const { name } = todoObject;
          name variabli yaradaraq, todoObject daxilindəki
          name propertysinin dəyərini qoyur

          bu qısayolda, çoxlu propertylərdən istifadə 
          edə bilərik
        */
        const { name, dueDate } = todoObject;
        /*
          splice() methodu, iki dəyər alır.
          birinci dəyər silmək istədiymiz indeksdir
          ikinci dəyər silmək istədiyimiz dəyərlərin sayıdır

          div elementi istifadə etməyimizin səbəbi
          default stylingi olmamasıdır
        */
        const html = `
            <div>
                ${name} 
            </div>
            <div>
                ${dueDate}
            </div>
            <button onclick = "
                todoListWithDate.splice(${i}, 1);
                renderToDoListWithDate();
                updateLocalStorage();
            "
            class = "delete-button"
            >Delete</button>
        `;
    
        todoListHTML += html;
    }
    
    const todoDiv = document.querySelector('.js-todo-date-list');
    
    todoDiv.innerHTML = todoListHTML;
}
