import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function UpdateWord() {
    const days = useFetch('http://localhost:3001/days');
    const wordID = useParams().id;
    const words = useFetch(`http://localhost:3001/words/${wordID}`);
    // console.log(words);

    const [ueng, setEng] = useState('');
    const [ukor, setKor] = useState('');
    const [uday, setDay] = useState('');

    //dom에 접근이 가능함
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    useEffect(() => {
        if (words) {
            setEng(words.eng || '');
            setKor(words.kor || '');
            setDay(words.day || '');
        }
    }, [words]);

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!isLoading) {
            setIsLoading(true);
            fetch(`http://localhost:3001/words/${words.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    day: uday,
                    eng: ueng,
                    kor: ukor,
                }),
            })
                .then((res) => {
                    // console.log(res, 'res');
                    if (res.ok) {
                        alert('수정이 완료 되었습니다.');
                        navigate(`/day/${uday}`);
                    } else {
                        alert('수정에 실패했습니다.');
                    }
                })
                .catch(() => {
                    alert('네트워크 오류가 발생했습니다.');
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input
                    type="text"
                    placeholder="computer"
                    ref={engRef}
                    value={ueng}
                    onChange={(event) => {
                        setEng(event.target.value);
                    }}
                ></input>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input
                    type="text"
                    placeholder="컴퓨터"
                    ref={korRef}
                    value={ukor}
                    onChange={(event) => {
                        setKor(event.target.value);
                    }}
                ></input>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select
                    value={uday}
                    onChange={(event) => {
                        setDay(event.target.value);
                    }}
                    ref={dayRef}
                >
                    {days.map((day) => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button disabled={isLoading}>
                {isLoading ? 'Saving...' : '저장'}
            </button>
        </form>
    );
}
