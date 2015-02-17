
var $DTSOURCE;

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var button5 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$DTSOURCE = sources.empresas;
		sources.empresas.all({
			onSuccess:function(){
				
			}
		});
	
		
		
		
		
		
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		debugger
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
// @endregion
};// @endlock
