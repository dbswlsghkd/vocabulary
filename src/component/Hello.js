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

export default function Hello() {
    // let name = 'Mike';
    const [name, setName] = useState('Mike');

    const changeName = () => {
        const newName = name === 'Mike' ? 'Jane' : 'Mike';
        setName(newName);
        // console.log(name);
        // document.getElementById('name').innerText = name;
    };

    return (
        <div>
            <h1>state</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    );
}
