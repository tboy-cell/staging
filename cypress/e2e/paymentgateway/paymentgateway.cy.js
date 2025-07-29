import login from "../pageObject/login";
import { Given, When, then } from "@badeball/cypress-cucumber-preprocessor";
import paymentgateway from "../pageObject/paymentgateway";


const gateway = new paymentgateway



When ('i create dispute', () => {

       gateway.createDispute()
});


When ('i create Payment link', () => {

       gateway.createpaymentlinks()

});


When ('i create payment page', () => {
       gateway.createpaymentpages()

});


When ('create split group', () => {
       gateway.createsplit();

});


When ('create qr code', () => {
       gateway.createqr()

});


When ('create sub', () => {
       gateway.createsub()

});

When ('create invoice', () => {
       gateway.createin()

});

When ('create product', () => {
       gateway.addpro()

});

When ('create reward', () => {
       gateway.createre()

});

When ('add product', () => {
       gateway.createpro()

});