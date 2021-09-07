//Grab the entire form element from the DOM
const form = document.querySelector("#create-task-form");
const taskUl = document.querySelector("#tasks");
//Add an event listener onto this form element
form.addEventListener("submit", gatherFormInfo);

//We want to stop the default behavior of the form/submit event, so we use e.preventDefault() to tell that bitch to not run its bullshit
function gatherFormInfo(e) {
  e.preventDefault();
  const toDoDescription = e.target["new-task-description"].value;

  createToDoLi(toDoDescription);
  e.target.reset(); //This is to clear the form after, and we're calling this inside the submit form as a whole
}
//As simple as the above function is, it's done what I've asked of it.

function createToDoLi(todo) {
  const li = document.createElement("li");
  li.textContent = `${todo} `;
  taskUl.appendChild(li);

  const button = document.createElement("button");
  button.textContent = "FOH";
  li.appendChild(button);

  button.addEventListener("click", () => {
    li.remove();
  })
}