import './App.css';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <DayList></DayList>
            <Day></Day>
        </div>
    );
}

export default App;
