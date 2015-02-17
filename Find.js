var pregunta;
pregunta = 1;
//pregunta = 2;

var result;


if (pregunta === 1) {
	// La empresa 4D
	result = ds.Empresas.find('nombre === "Apple"');
	result.nombre;
}


if (pregunta === 2) {
	// El Candidato Daniel
	result = ds.Candidatos.find('nombre === "Daniel"');
	result;
}

