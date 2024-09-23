import './App.css';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header></Header>
                <Routes>
                    <Route path="/" exact element={<DayList></DayList>}></Route>
                    <Route path="/day/:day" exact element={<Day></Day>}></Route>
                    <Route path="*" element={<EmptyPage></EmptyPage>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
