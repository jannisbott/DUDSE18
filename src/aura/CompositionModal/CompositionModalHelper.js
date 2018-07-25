({
    getErrorAlert: function(component, key){
        var params = {
            'alertName': key
        };
        component.find("serviceCallComponent").doCallApex(component, "c.getAlert", params, this.alertSuccessCallback);
    },
    alertSuccessCallback: function(component, responseValue){
        if(responseValue.success == true){
            component.set("v.message", responseValue.data.Message__c);
            component.set("v.type", responseValue.data.Type__c.toLowerCase());
        }
    }
})