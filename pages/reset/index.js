import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/pages/auth/forgot_and_reset_password.module.css';

import LoginNavbar from '../../components/LoginNavbar';

function reset() {
	return (
		<>
			<Head>
				<title>Reset Password | Warga Peduli Lingkungan</title>
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
									<h1 className={`text-center mt-4 ${styles.heading}`}>Reset Password</h1>
									<p className={`text-center ${styles.sub_heading}`}>Change your password with the new password</p>
									<form>
										<div className="mb-3">
											<label htmlFor="password" className="form-label fw-bold">
												Password
											</label>
											<input type="password" className="form-control py-2" id="password" placeholder="Input your password" />
										</div>
										<div className="mb-3">
											<label htmlFor="confirm_password" className="form-label fw-bold">
												Confirm Password
											</label>
											<input type="password" className="form-control py-2" id="confirm_password" placeholder="Retype your password" />
										</div>
										<div className="d-grid mt-5">
											<button className="btn btn-primary-700 fw-bold rounded-pill py-2" type="submit">
												Change Password
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

export default reset;
