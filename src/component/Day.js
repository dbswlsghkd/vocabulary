import { useParams } from 'react-router-dom';
import Word from './Word';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Day() {
    const { day } = useParams();
    const days = useFetch('http://localhost:3001/days');
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}

            <table>
                <div style={{ float: 'left' }}>
                    <Link
                        className="button"
                        to={`/day/${
                            Number(day) === 1 ? days.length : Number(day) - 1
                        }`}
                    >
                        Prev
                    </Link>
                </div>
                <div style={{ float: 'right' }}>
                    <Link
                        className="button"
                        to={`/day/${
                            Number(day) === days.length
                                ? Number(1)
                                : Number(day) + 1
                        }`}
                    >
                        Next
                    </Link>
                </div>
                <tbody>
                    {words.map((word) => (
                        <Word word={word} key={word.id}></Word>
                    ))}
                </tbody>
            </table>
        </>
    );
}
