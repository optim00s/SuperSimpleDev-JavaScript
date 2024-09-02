//empty array
const todoList = [];
const todoListPage = [];
const todoListWithDate = [];

const button1 = document.querySelector('.js-add-button-1');
const button2 = document.querySelector('.js-add-button-2');
const button3 = document.querySelector('.js-add-button-3');

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addToDo();
    }
});

button1.addEventListener('click', () => addToDo());

button2.addEventListener('click', () => addToDoPage());

button3.addEventListener('click', () => addToDoPage3());

// practice 1
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

// practice 2
renderToDoList();

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

    inputElement.value = '';

    renderToDoListWithDate();
}

function renderToDoListWithDate() {
    let todoListHTML = '';

    /*
        mörtərizə daxilinə, hər bir to-do işə düşəcək
        funksiyanı yazırıq.

        ilk parameter, arrayin hər bir dəyərini 
        təmsil edir

        ikinci parameter, arrayin hər bir indexsini 
        təmsil edir

        (propertyi ilə eyni adlı variable yaratmağın qısa yolu)
        const name = todoObject.name; 
        
        yerinə,

        const { name } = todoObject;

        destructuring assignment 
        name variabli yaradaraq, todoObject daxilindəki
        name propertysinin dəyərini yeni yaranmış variable təyin edir.

        bu qısayolda, çoxlu propertylərdən istifadə edə bilərik
    */
    todoListWithDate.forEach((todoObject, index) => {

        const { name, dueDate } = todoObject;

        const html = `
            <div>
                ${name} 
            </div>
            <div>
                ${dueDate}
            </div>
            <button class = "delete-button js-delete-button">
                Delete
            </button>
        `;

        todoListHTML += html;
    });
    
    const todoDiv = document.querySelector('.js-todo-date-list');
    
    todoDiv.innerHTML = todoListHTML;

    const deleteButton = document.querySelectorAll('.js-delete-button');

    deleteButton.forEach((deleteButtonElement, index) => {
        deleteButtonElement.addEventListener('click', () => {
            todoListWithDate.splice(index, 1);
            renderToDoListWithDate();
        });
    });


}