import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import GoogleFontLoader from 'react-google-font-loader';
import { HelmetProvider } from 'react-helmet-async';

// Components
import EthersProvider from './store/EthersProvider';
import MessageNet from './store/MessageNet';
import Navigation from './components/pages/_layouts/Navigation';
import NotFound from './components/pages/NotFound/NotFound';


// Styles & Fonts
import fontLists from './data/fonts/google/fontList';
import './styles/main.scss';

function App() {

	return (
		<HelmetProvider>
			<MessageNet>
				<EthersProvider>
					<GoogleFontLoader fonts={fontLists} />
					<Router>
						<Navigation />
						<Switch>
							<Route path="/" element={<Navigate to="/invasion" />} />
							<Route path="/invasion" element={<Staking />} />
							<Route path="*" element={<NotFound />} />
						</Switch>
					</Router>
				</EthersProvider>
			</MessageNet>
		</HelmetProvider>
	);
}

export default App;
