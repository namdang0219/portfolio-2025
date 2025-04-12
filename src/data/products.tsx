import { ProductType } from "@/types/ProductType";
import { myMovies } from "./products/MyMovies.product";
import { rekiteku } from "./products/Rekiteku.product";
import { morimoriWebApp } from "./products/MorimoriWebApp.product";
import { morimoriMobileApp } from "./products/MorimoriMobileApp.product";

export const products: ProductType[] = [
	myMovies,
	rekiteku,
	morimoriMobileApp,
	morimoriWebApp,
];
