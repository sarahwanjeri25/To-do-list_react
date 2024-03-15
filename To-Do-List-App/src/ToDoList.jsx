import React,{userState} from "react"



function ToDoList(){

//Here we will have two state variables. ! Const and tasks-tasks will be an array
const[tasks,setTasks]= userState(["Go to school", "Do Exams","Go Home"]);
const[newTask,setNewTask]= userState("");

//next we will creat a list of functions we will need throughout the program

/*1. we will need a function to hande input change
this function will be used by the text box we will use to input tasks*/

function handleInputChange(event){
    setNewTask(event.target.value)

}

//next function is for adding the task
function addTask(){

    //here we will now code the logic that is going to help a user insert a task...
    //in the if block we will be checking for blank enties thus a user cannot insert or add a blank task

    if(newTask.trim() !==""){
        setTasks(t =>[...t,newTask]);
        setNewTask("")
    }

}

//next function to delete task... here we will need to get the array item by index

function deleteTask(index){

    const updateTasks= tasks.filter((element,i) => i !== index);
    setTasks(updateTasks)

}

//next we will need a function to move task up.aslso here we will need to get item by index
function moveTaskUp(index){
    if(index>0){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index-1]] = 
        [updatedTasks[index-1],updatedTasks[index]];

        setTasks(updatedTasks);
    }

}
//next we will need a function to move task down.aslso here we will need to get item by index
function moveTaskDown(index){
    if(index<tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index-1]] = 
        [updatedTasks[index-1],updatedTasks[index]];

        setTasks(updatedTasks);
    }
}
    return(
    //We will add html elements here
    <div className="to-do-list">

        <h1>To-Do-List</h1>

        <div>
            /* this input  element will help us insert tasks to be added on our List
            for readability we'll have the attributes be put on seperate lines*/
            <input type="text" 

            //placeholde to provide a hint to a user
            placeholder="Enter a Task..."

            //here we set the value of this textbox to be javascript const we declared earlier "newtask"
            value={newTask}

            //When we type within the new element we will use the onChange event Handler and it will be equal to a callback of a function we created earlier function handleInputChange
             onChange={handleInputChange}/>

             // we add a button to handle the adding of tatsks to the list
             <button className="add-button"
             onClick={addTask}>
                Add
             </button>
        </div>

        <ol>
            //here we will embed some javascript
            {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>

                //This button will delete a task
                <button className="delete-button"
                onClick={ ()=> deleteTask(index)}>
                    Delete
                </button>

              //This button will move a task up
                <button className="move-button"
                onClick={ ()=> deleteTask(index)}>
                    ☝️
                </button>

                //This button will move a task down
                <button className="move-button"
                onClick={ ()=> deleteTask(index)}>
                    👇
                </button>
            </li>
            )}
        </ol>
    </div>);

}

export default ToDoList