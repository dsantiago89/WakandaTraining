﻿var opcion;opcion = 2;if(opcion === 1){		var lineas = loadText(ds.getModelFolder().path + "Importacion/Candidatos.txt").split("\n");	//Obtengo un array de lineas del documento.		//ds.Candidatos.remove();		for(var i = 0; i < lineas.length ; i++){	    		if(lineas[i] != ""){						var columna = lineas[i].split("\t");			    			//Conseguir las columnas de la actual linea						var entity = ds.Candidatos.find("nombre = :1 and apellidos = :2", columna[0], columna[1]);			//Se busca la entidad que quieres importar		    		    //Si no se encuentra se inserta la entidad		    if(entity == null){		    			    	var 		    		fechaNacimiento = new Date(),		    		fechaNacimiento_arr = columna[2].split("/");		    			    	fechaNacimiento.setFullYear(fechaNacimiento_arr[2]);		    	fechaNacimiento.setMonth(fechaNacimiento_arr[1] - 1);		    	fechaNacimiento.setDate(fechaNacimiento_arr[0]);		    			    			        new ds.Candidatos( {		            nombre    		: columna[0],		            apellidos    	: columna[1],		            fechaNacimiento : fechaNacimiento,		            direccion 		: columna[3],		            codigoPostal 	: columna[4]		        }).save();		        		    }		}	    	}	ds.Candidatos.all();}if(opcion === 2){		ds.Empresas.remove();		var lineas = loadText(ds.getModelFolder().path + "Importacion/Empresas.txt").split("\n");	//Obtengo un array de lineas del documento.	for(var i = 0; i < lineas.length ; i++){	    		if(lineas[i] != ""){									var columna = lineas[i].split(",");   			//Conseguir las columnas de la actual linea						var entity = ds.Empresas.find("nombre = :1", columna[0]);			//Se busca la entidad que quieres importar		    		    //Si no se encuentra se inserta la entidad		    if(entity == null){		    			        new ds.Empresas( {		            nombre    		: columna[0],		            direccion    	: columna[1],		            codigoPostal    : columna[2],		            ciudad    		: columna[3],		            provincia    	: columna[4],		            telefono    	: columna[5],		            email    		: columna[6],		            web    			: columna[7],		            actividad    	: columna[8]		        }).save();		        		    }		}	    	}	ds.Empresas.all();}