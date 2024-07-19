import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import TermsConditions from './terms_conditions';
import PrivacyPolicy from './privacy_policy';
import Home from './home';
import WeeklyPick from './weekly_pick';
import Top10 from './top_10';
import Categories from './categories';
import BookDetails from './BookDetails';
import Profile from './profile';
import EditProfile from './edit_profile';
import Search from './search';

function App() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);  
  const navigate = (newPath) => {
    window.history.pushState({}, '', newPath);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home onNavigate={navigate} />} />
          <Route path="/weekly-pick" element={<WeeklyPick onNavigate={navigate} />} />
          <Route path="/top10" element={<Top10 onNavigate={navigate} />} />
          <Route path="/categories" element={<Categories onNavigate={navigate} />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/profile" element={<Profile onNavigate={navigate} />} />
          <Route path="/edit-profile" element={<EditProfile onNavigate={navigate} />} />
          <Route path="/terms" element={<TermsConditions onNavigate={navigate} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy onNavigate={navigate} />} />
          <Route path="/search" element={<Search onNavigate={navigate} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
