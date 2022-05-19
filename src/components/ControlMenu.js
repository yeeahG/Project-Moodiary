import React from 'react'
import './DiaryList.css';

const ControlMenu = (  {value, onChange, optionList} ) => {
  return (
    <div>
        <select className='control__container'
            value={value} 
            onChange={(e) => onChange(e.target.value)}
        >
            {optionList.map((it, idx) => 
            <option value={it.value} key={idx}>
                {it.name}
            </option>
            )}
        </select>
    </div>
  )
}

export default ControlMenu