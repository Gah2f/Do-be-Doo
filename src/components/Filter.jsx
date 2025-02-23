import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterTodo, markAllCompleted } from '../redux/actions';

function Filter() {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.filter);
    const handleFilterChange = (filter) => {
        dispatch(filterTodo(filter));
    }
  return (
    <div className='flex space-x-4 items-center'>
        <select id='selectFilter' name='selectFilter'
         className='text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none' 
        value={currentFilter}
        onChange={(e)=> handleFilterChange(e.target.value)}>
            <option value="ALL">
                Default
            </option>
            <option value="COMPLETED">
                Completed
            </option>
            <option value="INCOMPLETED">
                Incompleted
            </option>
        </select>
        <button onClick={()=> dispatch(markAllCompleted())} 
        className='text-sm px-2 py-1 bg-[#00A6A6] text-white ml-2 rounded'>
            Mark All Completed
        </button>
    </div>
  )
}

export default Filter