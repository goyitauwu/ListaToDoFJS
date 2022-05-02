export default class Model{
	constructor(){
		this.view=null;
		this.todos = [];
		this.currentId = 1;
	}
	
	setView(view){
		this.view=view;
	}
	
	getTodos(){
		return this.todos;
	}


	findTOdO(id){
  return this.tOdOs.findIndex((tOdO)=> tOdO.id === id);

	}
	toggleCompleted(id){

	const index = this.findTOdO(id);
	const tOdO = this.tOdOs[index];
	tOdO.completed = !tOdO.completed;
	console.log(this.tOdOs);

	}
	
	addTodo(title,description){
		const tOdO={
    
			id:this.currentId++,
            title,
		    description,
			completed: false,


		}
		this.todos.push(tOdO);
		console.log(this.todos);

		return{...tOdO};

}
 removeTOdO(id){

	const index = this.findTOdO(id);
	this.tOdOs.splice(index,1)
}
}