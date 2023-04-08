import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
// import Home from './pages';
import About from './pages/about';
import Profile from './pages/profile';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		{/* <Route exact path='/' exact element={<Home />} /> */}
		<Route path='/about' element={<About/>} />
    <Route path='/profile' element={<Profile/>} />
	</Routes>
	</Router>
);
}

export default App;
