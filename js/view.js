import addTodo from "./add-todo.js";



export default class View{
	constructor(){
		this.model=null;
		this.table=document.getElementById('table');
		this.addTodoForm = new addTodo();

		this.addTodoForm.onClick((title, description) => this.addTodo(title, description));
		
	}
	
	setModel(model){
		this.model=model;
	}


	
	addTodo(title, description){
		const tOdO = this.model.addTodo(title, description);
		this.createRow(tOdO);
	}

	toggleCompleted(id){

		this.model.toggleCompleted(id);
	}

removeTodo(id){
	this.model.removeTodo(id);
	document.getElementById(id).remove();
	
}

	createRow(tOdO){
		
		const row = table.insertRow();
		row.setAttribute('id', tOdO.id);
		row.innerHTML =  `
		<td>${tOdO.title}</td>
		<td>${tOdO.description}</td>
		<td class="text-center">
		  
		</td>
		<td class="text-right">
		<button class="btn btn-primary mb-1">
		  <i class="fa fa-pencil"></i>
		</button>
		</td>
	`;

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.checked = tOdO.completed;
	checkbox.onclick = () => this.toggleCompleted(tOdO.id);
	row.children[2].appendChild(checkbox);
		
	
	const removeBtn = document.createElement('button');
	removeBtn.classList.add('btn','btn-danger', 'mb-1', 'ml-1');
	removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
	removeBtn.onclick = () => this.removeTodo(tOdO.id);
	
	row.children[3].appendChild(removeBtn);
		
	}
}
