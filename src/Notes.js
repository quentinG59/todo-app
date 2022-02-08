import React from 'react';
import TodoList from './Todo-list';
import App from './App';

const Notes = ({item, removeTodo, modifTodo}) => {

  return (
      <div>{item.map((note) => {
        const {id, desc, userInput,} = note
        
        return (
        
        
            <div className='result' key={id}>
                <h4>{userInput}</h4>
                <p>{desc}</p>
                <button onClick={() => removeTodo(id)} className='btn'><i className="far fa-trash-alt"></i></button>
            <button onClick={() => modifTodo(id)} className='btn'><i className="fas fa-pencil-alt"></i></button>
            </div>
            
        )
  })}</div>
      
  )
};

export default Notes;
