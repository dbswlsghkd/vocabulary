import './App.css';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
import UpdateWord from './component/UpdateWord';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

function App() {
    return (
        <BrowserRouter>
            <div className="index">
                <Header></Header>
                <Routes>
                    <Route path="/" exact element={<DayList></DayList>}></Route>
                    <Route path="/day/:day" exact element={<Day></Day>}></Route>
                    <Route path="*" element={<EmptyPage></EmptyPage>}></Route>
                    <Route
                        path="/create_word"
                        element={<CreateWord></CreateWord>}
                    ></Route>
                    <Route
                        path="/create_day"
                        element={<CreateDay></CreateDay>}
                    ></Route>
                    <Route
                        path="/update_word/:id"
                        element={<UpdateWord></UpdateWord>}
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
