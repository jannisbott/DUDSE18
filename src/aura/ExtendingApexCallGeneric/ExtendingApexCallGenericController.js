({
    getSampleAccount: function(component, event, helper){
        helper.clearSelected(component);
        var accountName = component.find("accountName").get("v.value");
        helper.getAccount(component, accountName);
    },
    getSampleContact: function(component, event, helper){
        helper.clearSelected(component);
        var contactEmail = component.find("contactEmail").get("v.value");
        helper.getContact(component, contactEmail);
    }
})