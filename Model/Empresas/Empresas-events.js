﻿model.Empresas.direccion.onGet = function() {	return this.numero + " " + this.calle + " " + this.codigoPostal + " " + this.ciudad;};model.Empresas.direccion.onSet = function(value) {	value = this.numero + " " + this.calle + " " + this.codigoPostal + " " + this.ciudad;};