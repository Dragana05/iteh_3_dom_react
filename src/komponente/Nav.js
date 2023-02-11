import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="nav">
            <Link to={'/'}><button className='btn btn-warning mt-2' id="top50link">IMDbTop50</button></Link>
            <Link to={'/genres'} id="genreslink" className='text-warning'>Genres</Link>
        </div>
    )
}

export default Nav;