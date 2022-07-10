import React, { useState } from 'react'

const Search = () => {
    const [inputText, setInputText] = useState('')

    return (
        <div>
            <input 
                type='text'
                placeholder='Find Character'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                autoFocus
            />
        </div>
    )
}

export default Search