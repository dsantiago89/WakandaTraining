﻿var pregunta;pregunta = 1;//pregunta = 2;//pregunta = 3;if(pregunta === 1) {	// Tests sat by attendee born after 1980	var result = ds.Pruebas.query('candidato.fechaNacimiento > 1980/01/01 AND order by ID desc');	result;}if(pregunta === 2) {	// Companies based in a 'rue' and order by ascendant city.	var result = ds.Empresas.query('direccion %% "calle" order By ciudad asc');	result;}if(pregunta === 3) {	// Display Tests by Array	var result = ds.Pruebas.all();	result.toArray('empresa.nombre, fechaInicio, candidato.nombre, candidato.apellidos, candidato.fechaNacimiento, candidato.email');}