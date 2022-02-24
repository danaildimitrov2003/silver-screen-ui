import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Switch} from "react-router-dom";
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import MyList from './components/MyList/MyList';
import Login from './components/Login/Login';
import Notifications from './components/Notifications/Notifications';
import MovieInfo from './components/MovieInfo/MovieInfo';
import Register from './components/Register/Register';
import FriendsList from './components/FriendsList/FriendsList';
import AddFriend from './components/AddFriend/AddFriend';
import AdministrationPage from './components/AdministrationPage/AdministrationPage';
function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/movieInfo" element={<MovieInfo />} />
        <Route path="/friendslist" element={<FriendsList />} />
        <Route path="/addfriend" element={<AddFriend />} />
        <Route path="/administrationPage" element={<AdministrationPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
