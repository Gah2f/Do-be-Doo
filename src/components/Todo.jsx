import React, { useState } from 'react'
import { MdOutlineAddBox } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import Filter from './Filter';
import ToDoList from './ToDoList';
import { addTodo, updateSearchTerm } from '../redux/actions';
function Todo() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // console.log(newTodo);
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodo.trim() !== '') {
      handleAddTodo(newTodo.trim());
      setSearchTerm('');
    }
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));

  }
  
  return (
    <div>
      <nav className='bg-teal-900 p-4 shadow-lg'>
        <h2 className='mt-3 mb-6 text-2xl font-bold text-center text-[#E7C7A1] uppercase'>Do-Be-Doo 🐶</h2>
      </nav>
    <div className="w-full mx-auto sm:mt-8 p-4  rounded">
 
        <div className="flex items-center mb-4  ">
          <input className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
                 type="text" 
                 name='text'
                 id='addTodoInput'
                 placeholder='Add your list'
                 value={newTodo} 
                 onChange={(e) => setNewTodo(e.target.value)}/>

                 <button onClick={handleAddTodoClick} className='ml-4 p-2 bg-[#00A6A6] text-white rounded hover:bg-blue-600 focus:outline-none'>
                  <MdOutlineAddBox size={24}/>
                 </button>
        </div>

        <div className='flex items-center justify-between'>
          <Filter/>
          <div className='flex items-center mb-4'>
            <input className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
            id='search'
            name='search'
            type="text"
            placeholder='Search here'
            value={searchTerm}
            onChange={(e)=> handleSearch(e.target.value)} />
              <button className='ml-4 p-2 bg-[#00A6A6] text-white rounded hover:bg-blue-600 focus:outline-none'>
              <IoSearchOutline /> 
              </button>
          </div>
        </div>
        <ToDoList/>
    </div>
    </div>
    
  )
}

export default Todo