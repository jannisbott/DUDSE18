({
    getAccount: function (component, accountName) {
        var params = {
            'accountName': accountName
        };
        this.callApex(component, "c.getAccountByName", params, this.accountSuccessCallback);
    },
    getContact: function (component, contactEmail) {
        var params = {
            'contactEmail': contactEmail
        };
        this.callApex(component, "c.getContactByName", params, this.contactSuccessCallback);
    },
    callApex: function (component, methodName, params, callback) {

        var action = component.get(methodName);
        action.setParams(params);

        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                callback(component, response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +
                            errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
    accountSuccessCallback: function (component, responseValue) {
        if(responseValue.success == true){
            component.set("v.account", responseValue.data);
        }
    },
    contactSuccessCallback: function (component, responseValue) {
        if(responseValue.success == true){
            component.set("v.contact", responseValue.data);
        }
    },
    clearSelected: function(component){
            component.set("v.account", "");
            component.set("v.contact", "");
    }
})