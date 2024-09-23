import World from './World';

const showName = () => {
    console.log('Mike');
};

const showAge = (age) => {
    console.log(age);
};

const Hello = () => {
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button
                onClick={() => {
                    showAge(10);
                }}
            >
                Show age
            </button>
        </div>
    );
};

export default Hello;
