import { useEffect, useState } from 'react'
import Nav from '../komponente/Nav';
import Tabela from "../komponente/Tabela";

function Top50() {

    const [filmovi, setFilmovi] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b044c03b9amshd0d2c3a3355470cp192338jsn2b5104da4842',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
            .then(response => response.json())
            .then(response => setFilmovi(response.slice(0, 50)))
            .catch(err => console.error(err));
    }, []);


    return (
        <div className="top50">

            <Nav />
            <Tabela filmovi={filmovi} />

        </div>
    )
}

export default Top50;