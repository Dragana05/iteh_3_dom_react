import { useEffect, useState } from 'react'

function Top50() {

    const [filmovi, setFilmovi] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6b5a7ee7e7mshba47d4fd777dba3p12c933jsn7b1139b00a53',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
            .then(response => response.json())
            .then(response => setFilmovi(response))
            .catch(err => console.error(err));

    }, []);


    return (
        <div className="top50">
        </div>
    )
}

export default Top50;