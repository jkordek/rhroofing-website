import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
	<HelmetProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
			</Routes>
		</BrowserRouter>
	</HelmetProvider>
)