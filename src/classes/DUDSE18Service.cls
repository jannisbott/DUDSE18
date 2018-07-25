public with sharing class DUDSE18Service {
    @AuraEnabled
    public static Account getSampleAccount() {
        Map<String, Object> response = getAccountByName('Sydney Salesforce Developer Group');
        return (Account) response.get('data');
    }

    @AuraEnabled
    public static Map<String, Object> getAccountByName(String accountName) {

        Map<String, Object> responseMap = new Map<String, Object>();

        List<Account> accounts = [
                SELECT Name,
                        BillingStreet,
                        BillingState,
                        BillingCity,
                        BillingPostalCode,
                        BillingCountry,
                        Type,
                        Industry
                FROM Account
                WHERE Name = :accountName
        ];

        if (accounts.size() > 0) {
            responseMap.put('success', true);
            responseMap.put('data', accounts[0]);
        } else {
            responseMap.put('success', false);
            responseMap.put('message', 'No account with this name was found.');
        }

        return responseMap;
    }

    @AuraEnabled
    public static Map<String, Object> getContactByName(String contactEmail) {

        Map<String, Object> responseMap = new Map<String, Object>();

        List<Contact> contacts = [
                SELECT FirstName,
                        LastName,
                        Email,
                        MailingStreet,
                        MailingState,
                        MailingCity,
                        MailingPostalCode,
                        MailingCountry,
                        MobilePhone,
                        Title
                FROM Contact
                WHERE Email = :contactEmail
        ];

        if (contacts.size() > 0) {
            responseMap.put('success', true);
            responseMap.put('data', contacts[0]);
        } else {
            responseMap.put('success', false);
            responseMap.put('message', 'No account with this name was found.');
        }

        return responseMap;
    }

    @AuraEnabled
    public static Map<String, Object> getAlert(String alertName){
        Map<String, Object> responseMap = new Map<String, Object>();

        List<Alert__c> alerts = [
                SELECT Message__c,
                        Type__c
                FROM Alert__c
                WHERE Name = :alertName 
        ];

        if (alerts.size() > 0) {
            responseMap.put('success', true);
            responseMap.put('data', alerts[0]);
        } else {
            responseMap.put('success', false);
            responseMap.put('message', 'No alert with this name was found.');
        }

        return responseMap;
    }
}