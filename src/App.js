import React, { useEffect, useState } from 'react'
import Characters from './components/Characters'
import Header from './components/Header'
import Search from './components/Search'

const App = () => {

    const [data, setData] = useState([])
    const [searchRes, setSearchRes] = useState('')

    useEffect(() => {
        console.log({searchRes});
        async function fetchData() {
            const response = await fetch(`https://breakingbadapi.com/api/characters?name=${searchRes}`)
            const data = await response.json()
            setData(data)
        }
        fetchData()
    }, [searchRes])

    return (
        <>
            <Header />
            <Search getCharName={(charName) => setSearchRes(charName)}/>
            <Characters data={data}/>
        </>
    )
}

export default App