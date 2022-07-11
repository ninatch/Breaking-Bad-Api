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
                                <p><strong>Character:</strong> {char.name}</p>
                                <p><strong>Actor:</strong> {char.portrayed}</p>
                                <p><strong>Nickname:</strong> {char.nickname}</p>
                                <p><strong>Status:</strong> {char.status} </p>
                                <p><strong>Birthday:</strong> {char.birthday}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default Characters