import React, { useState } from 'react'; 
import data from "./data.json"; 
import './App.css';


//components
import Header from "./Header"; 
import ToDoList from "./ToDoList"; 
import ToDoForm from "./ToDoForm.js"; 
import AddToDoList from "./AddToDoList.js"; 



function App() {
const [toDoList, setToDoList] = useState(data); 

    //determine the number of lists. not pretty but can be refactored later 
    let uniqueList = [];
    
    for (let i = 0; i < toDoList.length; i++)
    {
        if (!uniqueList.includes(toDoList[i].listname))
        {
            uniqueList.push(toDoList[i].listname); 
        }
    }

   
const addTask = (userInput, nameoflist) => {
  let copy = [...toDoList]; 
  copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false, listname: nameoflist}]; 
  setToDoList(copy);
}

const addList = (e) => {
  let copy = [...toDoList]; 
  copy = [...copy, {id: toDoList.length + 1, task: '', complete: false, listname: e }] ;
  console.log(copy);
  setToDoList(copy);
}

const handleToggle = (id) => {
 
  let mapped = toDoList.map(task => {
    return task.id === Number(id) ?  {...task, complete : !task.complete } : {...task};
  });
  setToDoList(mapped); 
} 

const handleFilter = () => {
  let filtered = toDoList.filter( taskParam => {
    return !taskParam.complete && taskParam.task !== ''; 
  });
  setToDoList(filtered); 
}

  return (
    <div className="App"> 
    <Header /> 
    <div className = "categories"> 
        {createElements(uniqueList, toDoList, handleToggle, addTask)}
        <AddToDoList addList={addList}/>
      </div>
      <button style={{margin: '20px'}} onClick = {handleFilter}>Clear Completed</button>
    </div>
  );
}


function createElements(uniqueTitles, toDoitem, handleToggleitem, addTaskitem)
{

  var buffer = []; 
  var elements = []; 
  var final = []; 

  let copy = groupBy(toDoitem, 'listname'); 


  for (let i=0; i <uniqueTitles.length; i++)
  {

    buffer.push(<h2>{uniqueTitles[i]}</h2>); 
    buffer.push(<ToDoList toDoList={copy[uniqueTitles[i]]} handleToggle={handleToggleitem} listname={uniqueTitles[i]}/>);
    buffer.push(<ToDoForm addTask={addTaskitem} listname={uniqueTitles[i]}/>)
    

  }
  for (let v=0; v <= buffer.length-3; v = v + 3)
  {
    elements.push([buffer[v], buffer[v+1], buffer[v+2]]); 
  }

  for (let k = 0; k < elements.length; k++)
  {
    final.push(<div className="lists">{elements[k]}</div>)
  }

  return final; 
}

//helper function i found on the internet
function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []; }
    memo[x[property]].push(x);
    return memo;
  }, {});
}
export default App;
