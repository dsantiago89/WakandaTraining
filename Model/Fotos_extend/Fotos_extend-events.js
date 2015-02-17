

model.Fotos_extend.events.restrict = function(event) {
	var d = currentUser();
	return this.query("ID == 2");
};
