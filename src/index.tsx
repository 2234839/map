import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import { Map } from './pages/map/map';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<main className="min-h-screen">
			<Header />
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
					<Route path="/map" component={Map} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
