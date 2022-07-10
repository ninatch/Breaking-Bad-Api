import React from 'react'

const Characters = ({data}) => {
    return (
        <>
            {data.map(char => (
                    <div className='card'>
                        <img src={char.img} style={{width:'200px'}}></img>
                        <p>Character: {char.name}</p>
                        <p>Actor: {char.portrayed}</p>
                        <p>Nickname: {char.nickname}</p>
                        <p>Status: {char.status} </p>
                        <p>Birthday: {char.birthday}</p>
                    </div>
                ))}
        </>
    )
}

export default Characters