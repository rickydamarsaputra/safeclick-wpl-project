import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './LoginNavbar.module.css';

function LoginNavbar() {
	return (
		<header>
			<nav className="navbar navbar-expand-lg bg-white py-lg-3">
				<div className="container">
					<a className="navbar-brand" href="#">
						<Image src="/assets/wpl-logo.png" className={styles.header_logo} priority width="300" height="60" alt="warga peduli lingkungan logo" />
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav ms-auto w-100 d-flex justify-content-between gap-3 mt-4 mt-lg-0">
							<form action="" className="position-relative flex-fill">
								<svg className="position-absolute" style={{ top: '0.75rem', left: '0.50rem' }} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M13.5 12H12.71L12.43 11.73C13.055 11.0039 13.5117 10.1487 13.7676 9.22559C14.0234 8.30243 14.0721 7.33413 13.91 6.38998C13.44 3.60998 11.12 1.38997 8.32 1.04997C7.33562 0.925441 6.33579 1.02775 5.39703 1.34906C4.45827 1.67038 3.60545 2.20219 2.90384 2.90381C2.20222 3.60542 1.67041 4.45824 1.34909 5.397C1.02778 6.33576 0.925471 7.33559 1.05001 8.31997C1.39001 11.12 3.61001 13.44 6.39001 13.91C7.33416 14.072 8.30246 14.0234 9.22562 13.7675C10.1488 13.5117 11.004 13.0549 11.73 12.43L12 12.71V13.5L16.25 17.75C16.66 18.16 17.33 18.16 17.74 17.75C18.15 17.34 18.15 16.67 17.74 16.26L13.5 12ZM7.50001 12C5.01 12 3.00001 9.98997 3.00001 7.49997C3.00001 5.00997 5.01 2.99997 7.50001 2.99997C9.99001 2.99997 12 5.00997 12 7.49997C12 9.98997 9.99001 12 7.50001 12Z"
										fill="#4B4B4B"
										fill-opacity="0.3"
									/>
								</svg>
								<input type="text" className="form-control rounded-pill" placeholder="Search your needs here" style={{ padding: '0.5rem 2rem' }} />
							</form>
							<div className="d-flex flex-column flex-lg-row gap-3">
								<a className={`btn btn-outline-primary-700 text-primary-700 rounded-pill fw-semibold px-3 py-2 ${styles.header_button}`} href="#">
									Sign In
								</a>
								<a className={`btn btn-outline-primary-700 text-primary-700 rounded-pill fw-semibold px-3 py-2 ${styles.header_button}`} href="#">
									Sign Up
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default LoginNavbar;
