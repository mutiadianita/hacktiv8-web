


var arrTodos = JSON.parse(localStorage.getItem("todos"));
if (arrTodos == null) arrTodos = [];

function randomNumberID() {
  return Math.floor(Math.random() * (100000000002 - 1 + 1)) + 1;
}

function addTodos() {
  var todo = $('#todos').val();
  var todos = {
    "id": randomNumberID(),
    "name": todo
  }
  arrTodos.push(todos);
  if (typeof (Storage) !== 'undefined') {
    localStorage.setItem('todos', JSON.stringify(arrTodos))
  }
  else {
    alert('Maaf, browser anda tidak support local storage');
  }
}

function deleteTodos(id) {
  for (var i = 0; i < arrTodos.length; i++) {
    var obj = arrTodos[i];

    if (obj.id === id) {
      arrTodos.splice(i, 1);
    }
    localStorage.setItem('todos', JSON.stringify(arrTodos));
  }
}

function getTodos() {
  arrTodos.forEach(function (todos) {
    $('#todoslist').append('<div class="my-3">'
      + todos.name + ' <button class="btn btn-danger btn-sm" onclick="deleteTodos(\'' + todos.id + '\')">X</button></div>');
  });
}
getTodos();