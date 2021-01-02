import React from 'react';
import './App.css';


const List=({list})=>list.map(item=><p key={item.id}>{item.id} {item.title}</p>);

//const Input=()=>


const App = ()=> {
	

	const [todoList,settoDoList]=React.useState([]);

	
	const [newItem,setNewItem]=React.useState('');



	const headleInput=event=>setNewItem(event.target.value);


	const addToList=()=>{
	settoDoList([...todoList,{title:newItem,flag:0,id:(todoList.length+1)}]);
	setNewItem('');
	};
	


return (
	<div className="App">
            <h1>Todo  App</h1>
	     <input id="add" placeholder="Type new Item" type='text' value={newItem}  onChange={headleInput} />
	      
	<button  onClick={addToList}>ADD</button>
      <List list={todoList}/>

    </div>
  );
}

export default App;
