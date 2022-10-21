import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Navigation from './parts/Navigation/Navigation';
import Footer from './parts/Footer/Footer';
// import pageRoutes from "./routes"; TODO: create path obj

import './styles/app.scss';

function App() {
	return (
		<React.Fragment>
			<Navigation />

			<main>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/portfolio" element={<Portfolio />} />
					</Routes>
				</BrowserRouter>
			</main>
			
			<Footer />
		</React.Fragment>
	);
}

export default App;
