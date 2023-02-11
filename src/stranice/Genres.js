import Nav from '../komponente/Nav';
import Tabela from '../komponente/Tabela';
import { useEffect, useState } from 'react'


function Genres() {

    const [filmovi, setFilmovi] = useState([]);
    const [filterfilmovi, setFilterfilmovi] = useState([]);
    const [genreselect, setGenreselect] = useState('');

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

    function selectChange(e) {
        setGenreselect(e.target.value)
    }

    function genreFilter() {
        var filteredArray = filmovi.filter(film => film.genre[0] == genreselect)
        setFilterfilmovi(filteredArray)
    }


    return (
        <div className="genres">

            <Nav />

            <div className="filterdiv">
                <select id="select" className="form-select text-warning" onChange={selectChange}>
                    <option>Choose genre</option>
                    <option value='Action'>Action</option>
                    <option value='Adventure'>Adventure</option>
                    <option value='Biography'>Biography</option>
                    <option value='Crime'>Crime</option>
                    <option value='Comedy'>Comedy</option>
                    <option value='Drama'>Drama</option>
                    <option value='Horror'>Horror</option>
                </select>

                <button onClick={genreFilter} className="btn text-white" id="btnfilter">FILTER</button>
            </div>

            <Tabela filmovi={filterfilmovi.length > 0 ? filterfilmovi : filmovi} />

        </div>
    )
}

export default Genres;