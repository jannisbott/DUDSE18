({
    callApex: function(component, event, helper){
        var params = event.getParams().arguments;
        var sourceComponent = params.sourceComponent;
        var methodName = params.methodName;
        var actionParameters = params.actionParameters;
        var callbackFunction = params.callbackFunction;
        helper.callApex(sourceComponent, methodName, actionParameters, callbackFunction);
    }
})