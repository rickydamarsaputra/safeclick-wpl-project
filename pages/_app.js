import { useEffect } from 'react';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap');
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
