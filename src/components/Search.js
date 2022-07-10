import React, { useState } from 'react'

const Search = ({ getCharName }) => {
    const [inputText, setInputText] = useState('')

    console.log(inputText)

    const onChange = (charName) => {
        setInputText(charName)
        getCharName(charName)
    }

    return (
        <div className='search-bar'>
            <input 
                type='text'
                placeholder='Find Character'
                value={inputText}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
            />
        </div>
    )
}

export default Search