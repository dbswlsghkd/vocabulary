import World from './World';

// 이벤트 처리
// const showName = () => {
//     console.log('Mike');
// };

// const showAge = (age) => {
//     console.log(age);
// };

// const Hello = () => {
//     return (
//         <div>
//             <h1>Hello</h1>
//             <button onClick={showName}>Show name</button>
//             <button
//                 onClick={() => {
//                     showAge(10);
//                 }}
//             >
//                 Show age
//             </button>
//         </div>
//     );
// };

import { useState } from 'react';
import UserName from './UserName';

export default function Hello(props) {
    // let name = 'Mike';
    const [name, setName] = useState('Mike');
    // props를 직접적으로 변경하는것은 불가능
    const [age, setAge] = useState(props.age);

    const msg = age > 19 ? '성인 입니다.' : '미성년자 입니다.';

    const changeName = () => {
        const newName = name === 'Mike' ? 'Jane' : 'Mike';
        setName(newName);
        setAge(age + 1);
        // console.log(name);
        // document.getElementById('name').innerText = name;
    };

    return (
        <div>
            <h1>state</h1>
            <h2 id="name">
                {name}({age}) : {msg}
            </h2>
            <UserName name={name}></UserName>
            <button onClick={changeName}>Change</button>
        </div>
    );
}
