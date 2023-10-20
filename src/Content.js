import React, { useRef, useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";


const Content = ({items, handleCheck, handleDelete}) => {

  return (
      <main className='content'>
        {(items.length) ?
          (<ul className='Listitems'>
              {items.map((item)=> (
                  <li className='Item' key={item.id}>
                      <input type="checkbox" 
                        checked = {item.checked}
                        onChange={()=>handleCheck(item.id)}
                      />
                      <label style={(item.checked) ? {textDecoration:"line-through"} : null }>
                          {item.item}
                      </label>
                      <FaTrashAlt 
                          role="button"
                          tabIndex="0"
                          onClick={()=>handleDelete(item.id)}
                      />
                  </li>
              ))}
          </ul>) : <p style={{marginTop: "1rem"}}>No Task...</p>
        }
        
      </main>
  )
}

export default Content