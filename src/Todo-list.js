import React from 'react';

const TodoList = ({desc, handleSubmit, userInput, setUserInput, setDesc, toggleSubmit}) => {
    
  return(
<article>
    <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <input 
    id='userInput' 
    name='userInput' 
    onChange={(e) => setUserInput(e.target.value)} 
    value={userInput} className='form-input' type="text" placeholder='Renseigner un item' />
        <textarea 
    value={desc}
    onChange={(e) => setDesc(e.target.value)}
    className='form-textarea' 
    name="desc" 
    id="desc" 
    cols="30" rows="10"></textarea>
    {
        toggleSubmit ?<button className='btn' type='submit'>Add item</button> :         <button className='btn' type='submit'>modfier item</button>


    }
    </form>
</article>

  )
};

export default TodoList
