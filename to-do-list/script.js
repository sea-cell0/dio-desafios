let btn = document.querySelector("button");
let cont = 1;

let checkboxesAmount = document.querySelectorAll("input[type='checkbox']");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let ToDoTask = document.querySelector("#task").value; // conteudo do input field
  let newDiv = document.createElement("div"); //
  let newTask = document.createElement("input"); //
  let newDesc = document.createElement("label"); // nova div
  let divID = "task" + cont;  // identificador da nova div

  newDiv.id = `task${cont}`;  // assimilando o id
  newDesc.id = `desc${cont}`
  newDiv.classList.add("tarefa");  // adicionando classe (flex)
  newTask.type = "checkbox";  // mudando o tipo do novo input p/ checkbox

  newDesc.innerHTML = ToDoTask; // conteudo do input field indo para o novo label

  document.querySelector("#container").appendChild(newDiv);
  document.querySelector(`#${divID}`).appendChild(newTask);
  document.querySelector(`#${divID}`).appendChild(newDesc);
  cont++;

});



