var pregunta;
//pregunta = 1;
//pregunta = 2;
//pregunta = 3;
//pregunta = 4;
//pregunta = 5;
//pregunta = 6;
//pregunta = 7;
//pregunta = 8;


if (pregunta === 1) {
	// Aspirantes cuyo nombre es Daniel
	var result = ds.Candidatos.query('nombre === "Daniel"');
	result;
}
if (pregunta === 2) {
	// Aspirantes cuyo nombre empieza por Daniel
	var result = ds.Candidatos.query('nombre == "Daniel*"');
	result;
}
if (pregunta === 3) {
	// Aspirantes cuyo nombre es Daniel o Jose
	var result = ds.Candidatos.query('nombre === "Daniel" OR nombre === "Jose"');
	result;
}
if (pregunta === 4) {
	// Aspirantes cuyo nombreCompleto contiene la palabra Daniel
	var result = ds.Candidatos.query('nombreCompleto == "*Daniel*"');
	result;
}
if (pregunta === 5) {
	// Applicantes with the last name Martinez and the first name Evan.
	// Paso 1
	var result = ds.Aspirantes.query('apellidos === "Martinez"');
	result;

	//Paso 2
	//result = ds.Applicant.query('apellidos === "Santiago" AND NOT nombre === "Daniel"');
	//result;
}
if (pregunta === 6) {
	// Empresas cuyo ID sea menor o igual a 3
	var result = ds.Empresas.query('ID <= 3');
	result;
}
if (pregunta === 7) {
	// Empresas cuya ciudad sea Madrid
	// Paso 1
	var result = ds.Empresas.query('ciudad === "Madrid"');
	result;

	//Paso 2
	//result = ds.Empresas.query('ciudad === "Madrid" AND NOT numero === "1"');
	//result;
}
if (pregunta === 8) {
	// Empresas cuya direccion contiene la palabra Calle
	var result = ds.Empresas.query('direccion %% "Calle"');
	result;
}

