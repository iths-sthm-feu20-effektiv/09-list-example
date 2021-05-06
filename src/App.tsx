import React, { useState } from 'react';
import './App.css';

interface Song {
    id: number,
    artist: string,
    title: string,
    spotifyUrl?: string
}

function App() {
    const dataList: Song[] = [
        { id: 1, artist: 'Kraftwerk', title: 'Das Model', spotifyUrl: 'example' },
        { id: 2, artist: 'Brian Eno', title: 'Dune Prophecy theme' },
        { id: 3, artist: 'Bob Dylan', title: 'Hurricane' },
        { id: 4, artist: 'Slagsmålsklubben', title: 'Destiny' },
        { id: 5, artist: 'Peaches', title: 'Rosa helikopter' },
        { id: 6, artist: 'Move D', title: "To the Disco '77" },
        { id: 7, artist: 'Mohamed Ramadan', title: 'Ya Habibi' },
        { id: 8, artist: 'Slagsmålsklubben', title: 'Ovningskora' },
        { id: 9, artist: 'Don David', title: 'Matrix: Main title' },
        { id: 10, artist: 'Pixies', title: 'Debaser' },
        { id: 11, artist: 'Lazertown', title: 'Into the Moons Orbit' },
        { id: 12, artist: 'Machinae Supremacy', title: "Theme from: Jets 'n' Guns" },
    ]

    const [selectedId, setSelectedId] = useState(-1)

    // Exempel: skapa en state-variabel som har en tom lista som default-värde
    // const [array, setArray] = useState<string[]>([])


    // ==  <- compare with automatic type conversion
    // === <- compare, no type conversion
    let selectedSong = dataList.find(song => song.id === selectedId)
    let selectedMessage = 'No song selected.'
    if( selectedSong ) {
        selectedMessage = 'You selected ' + selectedSong.title + '.'
    }


    const renderedList = dataList.map(song => (
        <li key={song.id}
            onClick={() => setSelectedId(song.id)}
            className={song.id === selectedId ? 'selected' : ''}>
            {song.title} by {song.artist}
        </li>
    ))
    // Motsvarande kod i Vue:
    // <li v-for="song in dataList" :key="song.id">
    //     {{ song.title }} by {{ song.artist }}
    // </li>


    return (
        <main className="App">
            <h1> Coding songs </h1>
            <ul className="song-list">
                {renderedList}
            </ul>
            <p> {selectedMessage} </p>
        </main>
    );
}
// Listor i Vue:
// <span v-for="x in dataList" :key="x"> {{ x }} </span>

export default App;
