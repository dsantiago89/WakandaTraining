﻿var pregunta;pregunta = 1;//pregunta = 2;//pregunta = 3;//hghghg//BARZO DANIEL if (pregunta === 1) {			var prueba = new ds.Pruebas();	prueba.fechaInicio = new Date(2013,2,5,13,0);	prueba.fechaFinal = new Date(2013,2,5,15,0);	prueba.numero = 20;		prueba.aspirante = ds.Candidatos.find("nombre = :1 AND apellidos = :2","Daniel","Santiago Gómez");	prueba.empresa = ds.Empresas.find("nombre = :1","Apple");	prueba.save();	prueba;}if (pregunta === 2) {		var prueba = new ds.Pruebas();	prueba.fechaInicio = new Date(2013,2,6,15,0);	prueba.fechaFinal = new Date(2013,2,6,16,0);	prueba.numero = 8;		prueba.aspirante = ds.Candidatos.find("nombre = :1 AND apellidos = :2","Francisco","Larrote Alaya");	prueba.empresa = ds.Empresas.find("nombre = :1","Sonic");	prueba.save();	prueba;	}if (pregunta === 3) {		var prueba = new ds.Pruebas();	prueba.fechaInicio = new Date(2013,2,6,11,30);	prueba.fechaFinal = new Date(2013,2,6,13,0);	prueba.numero = 14;		prueba.aspirante = ds.Candidatos.find("nombre = :1 AND apellidos = :2","Jose","Piqueras Fernandez");	prueba.empresa = ds.Empresas.find("nombre = :1","Indra");	prueba.save();	prueba;		//MaelleGrassitsanothertestthe05/03/2013at11h30amfor4D,thetest lasts 1h30 and she gets a 14.}