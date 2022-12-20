import { getCategorias } from "services/api";
import { useState, useEffect } from "react";
import ICategorias from "types/ICategorias";
import Categoria from "../Categorias";

const ListaCategorias = () => {
	const [categorias, setCategorias] = useState<ICategorias[]>([]);

	useEffect(() => {
		getCategorias().then((api) => {
			setCategorias(api);
			return api;
		});
	});

	return (
		<>
			<section>
				{categorias?.map((item) => (
					<Categoria categoria={item} key={item.id} />
				))}
			</section>
		</>
	);
};

export default ListaCategorias;
