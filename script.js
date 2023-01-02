let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let itemList = document.querySelector("li");
let delAll = document.getElementById("delAll");

//checks length of the Input
function inputLength() {
	return input.value.length;
}

//create new list item with delete button
function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	//cross out items when clicked
	li.addEventListener("click", function () {
		li.classList.toggle("done");
	  });
	
	// this is the delete button
	let deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteButton);	
	deleteButton.addEventListener("click", removeParent);
}

//function to delete de item from the list(remove method)
function removeParent(item){
	item.target.parentNode.remove();
} 

//removes all list items with button
function removeAllChildNodes() {
    while(ul.firstChild) ul.removeChild(ul.firstChild); 
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

delAll.addEventListener("click", removeAllChildNodes);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);