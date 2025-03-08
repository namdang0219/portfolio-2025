import Button from "@/components/Button";
import ProductList from "@/components/list/ProductList";
import Magnet from "@/components/Magnet";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const ProductSection = () => {
	return (
		<div id="product" className="scroll-m-10 container">
			<SectionTitle title="作成したもの" subTitle="Product" />

			{/* product list  */}
			<ProductList products={Array(4).fill(null)} />

			<div className="mt-24 flex justify-center">
				<Magnet>
					<Button text="すべてみる" href="/product" />
				</Magnet>
			</div>
		</div>
	);
};

export default ProductSection;
