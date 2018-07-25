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