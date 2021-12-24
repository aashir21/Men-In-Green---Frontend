import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Players from './components/Players';
import T20Player from './components/T20Player';
import {Route,Link,Routes,Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import ODIPlayer from './components/ODIPlayer';
import TestPlayer from './components/TestPlayer';
import News from './components/News';
import Article from './components/Article';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/players' element={<Players/>}/>
      <Route exact path= '/t20player/:playerId/' element={<T20Player/>}></Route>
      <Route exact path='/odiplayer/:playersId' element={<ODIPlayer/>}></Route>
      <Route exact path='/testplayer/:pId' element={<TestPlayer/>}></Route>
      <Route exact path='/news' element={<News/>}></Route>
      <Route exact path='/article/:articleId/' element={<Article/>}></Route>
    </Routes>
    </>
  );
}

export default App;
