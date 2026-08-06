import { Command } from 'cmdk'
import { useEffect, useState } from 'react'
import { IoAnalytics } from "react-icons/io5";

export const CommandMenu = ({
    open,
    setOpen
}) => {
    const [value, setvalue] = useState('')
  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <Command.Dialog 
        open={open} onOpenChange={setOpen} label="Global Command Menu"
        className='fixed inset-0 bg-stone-950/50'
        onClick={() => setOpen(false)}
    >
        <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white shadow-xl border max-w-lg mx-auto rounded-lg border-stone-300 overflow-hidden mt-12"
        >
            <Command.Input 
            value={value}
            onValueChange={setvalue}
            placeholder='What do you need?'
            className='relative border-b w-full p-3 text-lg placeholder:text-stone-400 focus:outline-none' />

            <Command.List className='px-1'>
                <Command.Empty>No results found for{" "}
                    <span className='text-violet-500'>"{value}"
                    </span>
                </Command.Empty>

                <Command.Group heading="Letters" className='text-sm text-stone-400 mb-2'>
                    <Command.Item className='text-stone-950 p-2 flex gap-2 items-center cursor-pointer text-sm hover:bg-stone-200 transition-colors'> 
                        a </Command.Item>
                    <Command.Item className='text-stone-950 p-2 flex gap-2 items-center cursor-pointer text-sm hover:bg-stone-200 transition-colors'>b</Command.Item>
                    <Command.Separator />
                    <Command.Item className='text-stone-950 p-2 flex gap-2 items-center cursor-pointer text-sm hover:bg-stone-200 transition-colors'>c</Command.Item>
                </Command.Group>
                <Command.Group heading="Features" className='text-sm text-stone-400 mb-2'>
                    <Command.Item className='text-stone-950 p-2  flex gap-2 items-center cursor-pointer text-sm hover:bg-stone-200 transition-colors '>
                        <IoAnalytics /> Analytics</Command.Item>
                    <Command.Item className='text-stone-950 p-2 flex gap-2 items-center cursor-pointer text-sm hover:bg-stone-200 transition-colors '>b</Command.Item>
                    <Command.Separator />
                    <Command.Item className='text-stone-950 p-2 flex gap-2 items-center cursor-pointer text-sm hover:bg-stone-200 transition-colors'>c</Command.Item>
                </Command.Group>

               
      </Command.List>
      </div>
    </Command.Dialog>
  )
}