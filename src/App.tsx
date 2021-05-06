import React, { useState } from 'react';
import './App.css';

interface Song {
    id: number,
    artist: string,
    title: string
}

function App() {
    const dataList: Song[] = [
        { id: 1, artist: 'Kraftwerk', title: 'Das Model' },
        { id: 2, artist: 'Brian Eno', title: 'Dune Prophecy theme' },
        { id: 3, artist: 'Bob Dylan', title: 'Hurricane' },
        { id: 4, artist: 'Slagsmålsklubben', title: 'Destiny' },
        { id: 5, artist: 'Peaches', title: 'Rosa helikopter' }
    ]

    const [selectedId, setSelectedId] = useState(-1)

    const renderedList = dataList.map(song => (
        <li key={song.id}
            onClick={() => setSelectedId(song.id)}>
            {song.title} by {song.artist}
        </li>
    ))
    // Motsvarande kod i Vue:
    // <li v-for="song in dataList" :key="song.id">
    //     {{ song.title }} by {{ song.artist }}
    // </li>

    // TODO
    // visa titel på klickad låt
    // CSS ska visa att det går att klicka på ett element
    // .selected, animera CSS
    // (lägga till fler sånger)


    return (
        <main className="App">
            <h1> Coding songs </h1>
            <ul className="song-list">
                {renderedList}
            </ul>
            <p> You selected: {selectedId}.</p>
        </main>
    );
}
// Listor i Vue:
// <span v-for="x in dataList" :key="x"> {{ x }} </span>

export default App;
