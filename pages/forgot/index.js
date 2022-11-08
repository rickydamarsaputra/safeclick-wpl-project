import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/pages/auth/forgot_and_reset_password.module.css';

import LoginNavbar from '../../components/LoginNavbar';

function forgot() {
	return (
		<>
			<Head>
				<title>Forgot Password | Warga Peduli Lingkungan</title>
			</Head>
			<header>
				<LoginNavbar />
			</header>
			<main>
				<div className="container-fluid" style={{ backgroundColor: '#F4F7FB' }}>
					<div className="row vh-100 d-flex justify-content-center align-items-center">
						<div className="col-lg-4">
							<div className="card">
								<div className="card-body">
									<div className="d-flex justify-content-center">
										<Image src="/assets/forgot-reset-img.png" priority width="200" height="200" />
									</div>
									<h1 className={`text-center mt-4 ${styles.heading}`}>Forgot Your Password?</h1>
									<p className={`text-center ${styles.sub_heading}`}>Input your email to reset your password</p>
									<form>
										<div className="mb-3">
											<label htmlFor="email" className="form-label fw-bold">
												Email
											</label>
											<input type="email" className="form-control py-2" id="email" placeholder="e.g. johndoe@gmail.com" />
										</div>
										<div className="d-grid mt-5">
											<button className="btn btn-primary-700 fw-bold rounded-pill py-2" type="submit">
												Send Email
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default forgot;
