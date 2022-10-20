/* --------------------------------- Clases --------------------------------- */

class Browser {
	// Atributos.
	articles: Article[];
	searchKey: string;

	// Métodos.
	search(): void {
		console.log(`Buscando con la clave ${this.searchKey}`);
	}
}

class Article {
	tittle: string;
	author: string;
	price: number;
}

/* ------------------------------- Interfaces ------------------------------- */

interface Product {
	id: number;
	name: string;
}

/* -------------------------------- Procesos -------------------------------- */

const product: Product = {
	id: 1,
	name: 'Coca Cola'
};

buy(product);

/* -------------------------------- Funciones ------------------------------- */

function buy(prod: Product): void {}
