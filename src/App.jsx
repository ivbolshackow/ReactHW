import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Homepage } from './pages/Homepage';
import { Chat } from './components/Chat/chat'
import { Profile } from './pages/Profile';
import { Notfound } from './pages/Notfound';
import { Layout } from './components/Layout/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='chats' element={<Chat />} />
          <Route path='chats/:id' element={<Chat />} />
          <Route path='profile' element={<Profile />} />
          <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
