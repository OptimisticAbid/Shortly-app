import React, { useState } from 'react'
import { FiCommand, FiSearch } from 'react-icons/fi'
import { CommandMenu } from './CommandMenu'

const Search = () => {
    const [open, setOpen] = useState(false)

  return (
    <>
        <div className='bg-stone-100 shadow  relative rounded-xl border flex items-center px-2 py-1.5 text-sm '>
            <FiSearch className='mr-2'/>

           <input 
           onFocus={(e) => {
            e.target.blur();
            setOpen(true) ;
           }}
           type='text'
           placeholder='Search'
           className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
           />

           <span className='text-xs p-1 rounded-xl bg-stone-100 flex gap-0.5 items-center absolute right-1 shadow-2xl '
           ><FiCommand/> K</span>
        </div>

        <CommandMenu 
        open = {open}
        setOpen = {setOpen}
         />
    </>
  )
}

export default Search