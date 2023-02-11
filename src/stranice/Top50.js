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
            .then(response => setFilmovi(response.slice(0, 50)))
            .catch(err => console.error(err));
    }, []);


    return (
        <div className="top50">

            <table id="tabletop50" className="table table-bordered">

                <thead>
                    <tr className="table-warning">
                        <th>Rank</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Year</th>
                        <th>Rating</th>
                    </tr>
                </thead>

                <tbody>
                    {filmovi.map(film => {
                        return (
                            <tr className='text-white' key={film.rank}>
                                <td>{film.rank}</td>
                                <td>{film.title}</td>
                                <td>{film.genre[0]}</td>
                                <td>{film.year}</td>
                                <td>{film.rating}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Top50;