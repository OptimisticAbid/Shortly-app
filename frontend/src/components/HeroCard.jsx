import React from 'react'

const HeroCard = (props) => {
  return (
        <div  className='flex-1 bg-card px-4 py-10 mx-2 my-6 border border-solid border-border relative rounded-xl text-center shadow-lg'>
            <h2 className='text-card-foreground font-semibold'>{props.title}</h2>
            <p className='text-card-foreground mt-2 inline-block'>{props.description}</p>
        </div>
  )
}
// bg-brand-gray-100
// const getIcon = (title) => {
//     switch(title) {
//       case "Analytics that matters":
//         return (
//           <svg className="w-16 h-16 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M21 21H3V3h2v16h16v2zm-7-4h2V7h-2v10zm-4 0h2v-6h-2v6zm8-10h2v14h-2V7z"/>
//           </svg>
//         );
//       case "Customizable links":
export default HeroCard