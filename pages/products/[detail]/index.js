import Head from 'next/head';
import Image from 'next/image';

import LoginNavbar from '../../../components/LoginNavbar';
import Footer from '../../../components/Footer';
import CardProduct from '../../../components/CardProduct';

import styles from './DetailProduct.module.css';

export default function productDetail() {
	return (
		<>
			<Head>
				<title>Detail Product | Warga Peduli Lingkungan</title>
			</Head>
			{/* header */}
			<header>
				<LoginNavbar />
			</header>
			{/* header */}

			{/* main content */}
			<main className="container mb-5">
				<div className="row">
					<div className="col-lg-4 mb-4 mb-lg-0">
						<Image src="/assets/products/3.png" className={`rounded-5 ${styles.product_img}`} priority width="480" height="480" alt="product 3" />
					</div>
					<div className="col-lg">
						<h1 className="h3 fw-semibold">Half Rounded Hanging Lamp </h1>
						<div className="d-flex align-items-center gap-2">
							<Image src="/assets/Avatar.png" priority width="24" height="24" alt="avatar" />
							<p className="mb-0">Kadin Donin</p>
						</div>
						<div className="mt-5">
							<h1 className="h5 fw-semibold">Description</h1>
							<hr />
							<p>
								Lorem ipsum dolor sit amet consectetur. Interdum arcu cursus venenatis est semper quam mi praesent erat. Pretium id risus maecenas montes phasellus risus semper nullam nibh. Rhoncus tincidunt elementum quis tellus. Ut et nibh accumsan scelerisque pellentesque. Dignissim aliquam
								turpis dolor leo. Et sit risus pharetra nullam quis risus. Sed augue ornare curabitur aliquet at purus euismod sed. Velit faucibus lorem nunc euismod. Senectus pharetra non lorem ornare eget.
							</p>
							<div className="d-flex flex-column flex-lg-row gap-3">
								<a href="#" class="btn btn-outline-primary-700 rounded-pill px-4">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4.6665 12C3.93317 12 3.33984 12.6 3.33984 13.3334C3.33984 14.0667 3.93317 14.6667 4.6665 14.6667C5.39984 14.6667 5.99984 14.0667 5.99984 13.3334C5.99984 12.6 5.39984 12 4.6665 12ZM0.666504 2.00004C0.666504 2.36671 0.966504 2.66671 1.33317 2.66671H1.99984L4.39984 7.72671L3.49984 9.35337C3.01317 10.2467 3.65317 11.3334 4.6665 11.3334H11.9998C12.3665 11.3334 12.6665 11.0334 12.6665 10.6667C12.6665 10.3 12.3665 10 11.9998 10H4.6665L5.39984 8.66671H10.3665C10.8665 8.66671 11.3065 8.39338 11.5332 7.98004L13.9198 3.65337C13.976 3.55232 14.0048 3.43836 14.0035 3.32274C14.0021 3.20713 13.9705 3.09389 13.9119 2.99422C13.8533 2.89454 13.7697 2.8119 13.6694 2.75445C13.5691 2.69701 13.4555 2.66677 13.3398 2.66671H3.47317L3.0265 1.71337C2.97292 1.59958 2.88804 1.5034 2.78178 1.4361C2.67552 1.36881 2.55228 1.33317 2.4265 1.33337H1.33317C0.966504 1.33337 0.666504 1.63337 0.666504 2.00004V2.00004ZM11.3332 12C10.5998 12 10.0065 12.6 10.0065 13.3334C10.0065 14.0667 10.5998 14.6667 11.3332 14.6667C12.0665 14.6667 12.6665 14.0667 12.6665 13.3334C12.6665 12.6 12.0665 12 11.3332 12Z"
											fill="#1D58A6"
										/>
									</svg>
									<span className="ms-2">Add to Cart</span>
								</a>
								<a href="#" class="btn btn-primary-700 rounded-pill px-4">
									Loan Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
			{/* main content */}

			{/* list product */}
			<section>
				<div className="container mb-4">
					<h1 className="h3 fw-bold">You would like</h1>
					<div className="row">
						{[1, 2, 3, 4, 5].map((num, index) => {
							return <CardProduct key={index} />;
						})}
					</div>
				</div>
			</section>
			{/* list product */}

			{/* footer */}
			<Footer />
			{/* footer */}
		</>
	);
}
