import React from 'react';
import './App.css';

const List=({list,onRemoveItem})=>
	list.map(item=><div style={{display:'flex',alignItem:'left',justifyContent: 'flex-start',color:'darkblue'}}><p style={{fontWeight: 'bold'}} key={item.id}>{item.id+'. '}{item.title.toUpperCase()} 

<button style={{marginLeft:10,backgroundColor:'red',color:'#ffffff'}} type="button" onClick={()=> onRemoveItem(item) }>Remove</button>
	</p></div>);

const App = ()=> {
	
	const [todoList,settoDoList]=React.useState(JSON.parse(localStorage.getItem('saveList'))||[]);

	React.useEffect(()=>{

	localStorage.setItem('saveList',JSON.stringify(todoList));
	},[todoList]);
	
	const [newItem,setNewItem]=React.useState('');



	const headleInput=event=>setNewItem(event.target.value);


	const addToList=()=>{

	if(!newItem)return;

	settoDoList([...todoList,{title:newItem,flag:0,id:(todoList.length+1)}]);
	setNewItem('');
	};

	const handleRemoveItem=item=>{ 

		const newItemList=todoList.filter(todo=>item.id!==todo.id);
settoDoList(newItemList);
	};
	


return (
	<div className="App" style={{background:'lightyellow',display:'flex',flexDirection: 'column',padding:20}}>
            <h1>Kya-kya?</h1>
<div style={{flexDirection:'row',display:'flex'}}>
	     <input style={{padding:15,fontSize:15}} id="add" placeholder="Type new Item" type="text" value={newItem}  onChange={headleInput} />
	      
	<button style={{backgroundColor:'orange',color:'#ffffff',marginLeft:5,padding:15}}onClick={addToList}>Add</button></div>
      <List list={todoList} onRemoveItem={handleRemoveItem}/>

    </div>
  );
}

export default App;
