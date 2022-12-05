import Image from 'next/image';
import styles from './CardProduct.module.css';

export default function CardProduct() {
	return (
		<div className="col-lg mb-4">
			<div className="card border-0 overflow-hidden">
				<div className="card-body p-0">
					<Image src="/assets/products/1.png" className={styles.product_img} priority width="220" height="165" alt="product 1" />
					<h1 className="h5 fw-semibold mt-2">Green Aesthetic Sofa</h1>
					<div className="d-flex align-items-center gap-2">
						<Image src="/assets/Avatar.png" priority width="24" height="24" alt="avatar" />
						<p className="mb-0">Kadin Donin</p>
					</div>
				</div>
			</div>
		</div>
	);
}
