/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductItem from "../item/ProductItem";

const ProductList = ({ products }: { products: any[] }) => {
	return (
		<div className="grid grid-cols-2 gap-14">
			{products.length > 0 &&
				products.map((_, index) => <ProductItem key={index} />)}
		</div>
	);
};

export default ProductList;
