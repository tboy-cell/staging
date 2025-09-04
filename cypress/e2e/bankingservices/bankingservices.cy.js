import login from "../pageObject/login";
import { Given, When, then } from "@badeball/cypress-cucumber-preprocessor"
import bankingservices from "../pageObject/bankingservices";


const services = new bankingservices

When ('i add virtual account', () => {

    services.addvirtual() 
});

When ('i create transfer fund', () => {

    services.createtransfer()
});