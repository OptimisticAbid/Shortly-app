import React from 'react'

const Table = ({links}) => {
    
  return (
    <>
        
        <table className='m-4 border-2 rounded-lg'>
            <thead>
                <tr>
                    <th className='p-4'>Short Links</th>
                    <th className='p-4'>Destination</th>
                    <th className='p-4'>Clicks</th>
                    <th className='p-4'>Created at</th>
                </tr>
            </thead>

            <tbody>
                {links.map(link => (
                <tr key= {link.id} >
                    <td>
                        <a href={link.shortUrl} target="_blank" rel="noreferrer">
                            {link.shortUrl}
                        </a>    
                    </td>
                    <td className="p-4">{link.clicks}</td>
                    <td className="p-4">{link.createdAt}</td>
                    <td className="p-4 text-center cursor-pointer">•••</td>

                </tr>
                ))}
                
            </tbody>
        </table>
        
    </>
  )
}

export default Table