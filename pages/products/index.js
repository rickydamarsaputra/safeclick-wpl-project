import Head from 'next/head';

import LoginNavbar from '../../components/LoginNavbar';
import Footer from '../../components/Footer';
import CardProduct from '../../components/CardProduct';

export default function products() {
	return (
		<>
			<Head>
				<title>List Products | Warga Peduli Lingkungan</title>
			</Head>
			{/* header */}
			<header>
				<LoginNavbar />
			</header>
			{/* header */}

			{/* main content */}
			<main className="container mb-5">
				<h1 className="h3 fw-bold">List Product</h1>
				<div className="d-flex flex-column flex-lg-row gap-3 mt-5">
					<button type="button" class="btn btn-primary-700 rounded-pill px-4">
						All
					</button>
					<button type="button" class="btn btn-outline-primary-700 rounded-pill px-4">
						Furnitures
					</button>
					<button type="button" class="btn btn-outline-primary-700 rounded-pill px-4">
						Tools
					</button>
					<button type="button" class="btn btn-outline-primary-700 rounded-pill px-4">
						Clothes
					</button>
				</div>
				<div className="row mt-4">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
						return <CardProduct />;
					})}
				</div>
			</main>
			{/* main content */}

			{/* footer */}
			<Footer />
			{/* footer */}
		</>
	);
}
