import Header from './Components/Header/Header';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import TypeList from './Components/TypeList/TypeList';
function App() {
  return (
    <div className="App">
        
        <Router>
        <Header/>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='/movie/:id' element={<h1>This is Movie Detail</h1>}/>
            <Route path='/movies/:type' element={<TypeList/>}/>
            <Route path='/*' element={<h1>Errorous Page</h1>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
