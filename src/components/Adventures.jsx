import React from 'react'
import "../styles/adventures.css"
import Adventure from './Adventure';
import Refresh from './Refresh';


const Adventures = ({ adventures, removeAdventure , refresh }) => {
    if (adventures.length === 0) {
        return <Refresh refresh = {refresh} />;
    }

    return (
        <div className='adventure-card'>
            {adventures.map((adventure) => {
                return <Adventure key={adventure.id} {...adventure}
                    removeAdventure={removeAdventure} />
            })}
        
        </div>
    );
};

export default Adventures