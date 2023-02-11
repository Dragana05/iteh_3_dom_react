function Tabela(props) {
    return (
        <div>
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
                    {props.filmovi.map(film => {
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

export default Tabela;