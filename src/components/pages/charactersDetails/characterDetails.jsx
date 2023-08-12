import React from 'react'
import './characterDetails.css'

const CharacterDetails = ({ character, onClose }) => {
    if (!character) {
        return null;
    }

    const description = () => {
        return `It's a ${character.species} that meets ${character.status.toLowerCase()} and gender ${character.gender.toLowerCase()}. He has appeared in ${character.episode.length} episodes.`
    }

    return (
        <div className="characters_details">
            <div className='character_details'>
                <div className='img_details'>
                    <img src={character.image} alt={character.name} />
                </div>
                <div className='character_info'>
                    <h1>{character.name}</h1>
                    <p>{description()}</p>
                </div>
                <span onClick={onClose} className='alerta_boton'>
                    <box-icon name='x-circle' type='solid' color='#00ffff'></box-icon>
                </span>
            </div>
        </div>
    )
}

export default CharacterDetails
