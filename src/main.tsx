import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { WeatherProvider } from './context/weatherContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<WeatherProvider>
		<App />
	</WeatherProvider>
);
