({
    getErrorAlert: function(component, event, helper){
        var params = event.getParams().arguments;
        helper.getErrorAlert(component, params.alertKey);
    },
    closeToast: function(component, event, helper){
        component.set("v.message", undefined);    
    }
})