import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Word({ word: w }) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(w.isDone);
    const [word, setWord] = useState(w);

    const toggleShow = () => {
        setIsShow(!isShow);
    };

    const toggleDone = () => {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then((res) => {
            console.log(res, 'res');
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    };

    const del = () => {
        if (window.confirm('삭제 하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE',
            }).then((res) => {
                if (res.ok) {
                    setWord({ id: 0 });
                }
            });
        }
    };

    const update = () => {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then((res) => {
            console.log(res, 'res');
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    };

    if (word.id === 0) {
        return null;
    }

    return (
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={toggleDone}
                ></input>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>
                    뜻 {isShow ? '숨기기' : '보기'}
                </button>
                <Link to={`/update_word/${word.id}`} className="btn_upd">
                    수정
                </Link>
                <button onClick={del} className="btn_del">
                    삭제
                </button>
            </td>
        </tr>
    );
}
