import React, { useEffect, useState } from 'react'
import Characters from './components/Characters'
import Header from './components/Header'
import Search from './components/Search'

const App = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://breakingbadapi.com/api/characters')
            const data = await response.json()
            setData(data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <Header />
            <Search />
            <Characters data={data}/>
        </div>
    )
}

export default App