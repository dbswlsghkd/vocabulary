import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';

export default function Day() {
    const useP = useParams();
    const day = useP.day;
    const wordList = dummy.words.filter((word) => word.day === Number(day));

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map((word) => (
                        <Word word={word} key={word.id}></Word>
                    ))}
                </tbody>
            </table>
        </>
    );
}
