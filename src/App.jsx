import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Homepage } from './pages/Homepage';
import { Chats } from './pages/Chats';
import { Chatpage } from './pages/Chatpage';
import { Profile } from './pages/Profile';
import { Notfound } from './pages/Notfound';
import { Layout } from './components/Layout/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='chats' element={<Chats />} />
          <Route path='chats/:id' element={<Chatpage />} />
          <Route path='profile' element={<Profile />} />
          <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
