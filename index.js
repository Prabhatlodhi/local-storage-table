let form = document.querySelector('form');
let ls = localStorage.getItem('todo');
let todo = ls ? JSON.parse(ls) : [] ;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let inputData = form[0].value;
    todo.push(inputData);
    localStorage.setItem('todo', JSON.stringify(todo));
})