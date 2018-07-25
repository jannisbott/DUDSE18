({
    getAccount: function (component, accountName) {
        var params = {
            'accountName': accountName
        };
        component.find("serviceCallComponent").doCallApex(component, "c.getAccountByName", params, this.accountSuccessCallback);
    },
    getContact: function (component, contactEmail) {
        var params = {
            'contactEmail': contactEmail
        };
        component.find("serviceCallComponent").doCallApex(component, "c.getContactByName", params, this.contactSuccessCallback);
    },
    accountSuccessCallback: function (component, responseValue) {
        if(responseValue.success == true){
            component.set("v.account", responseValue.data);
        } else {
            component.find("toastComponent").showAlert('DATA_NOT_FOUND');
        }
    },
    contactSuccessCallback: function (component, responseValue) {
        if(responseValue.success == true){
            component.set("v.contact", responseValue.data);
        } else {
            component.find("modalComponent").showAlert('DATA_NOT_FOUND');
        }
    },
    clearSelected: function(component){
        component.set("v.account", "");
        component.set("v.contact", "");
    }
})