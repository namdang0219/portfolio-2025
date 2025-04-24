/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductItem from "../item/ProductItem";

const ProductList = ({ products }: { products: any[] }) => {
	return (
		<div className="grid grid-cols-2 gap-14 sm:grid-cols-1">
			{products.length > 0 ? (
				products.map((item, index) => (
					<ProductItem key={index} item={item} />
				))
			) : (
				<div className="text-gray-400">データアップデート中...</div>
			)}
		</div>
	);
};

export default ProductList;
