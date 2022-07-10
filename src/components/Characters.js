import React from 'react'

const Characters = ({data}) => {
    return (
        <>
            {data.map(char => (
                    <div key={char.char_id} className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <img src={char.img} className='char-images'></img>
                            </div>
                            <div className='flip-card-back'>
                                <p>Character: {char.name}</p>
                                <p>Actor: {char.portrayed}</p>
                                <p>Nickname: {char.nickname}</p>
                                <p>Status: {char.status} </p>
                                <p>Birthday: {char.birthday}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default Characters