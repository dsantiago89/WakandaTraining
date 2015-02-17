
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'comp1';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	
		console.log("data comp1",data);
	// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$DTSOURCE.select($DTSOURCE.getPosition() - 1);
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$DTSOURCE.select($DTSOURCE.getPosition() + 1);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
