import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SearchUser from './searchUser';
import Details from './details';
import Tablesort from './tableSort';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<SearchUser/>} />
            <Route exact path='/:names' element={<Details/>} />
            <Route exact path='/:names/tableSortPage' element={<Tablesort/>} />
        </Routes>
    </Router>
  );
}

export default App;
