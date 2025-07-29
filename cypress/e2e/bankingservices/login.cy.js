import login from "../pageObject/login";
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const loginuser = new login

Given("open login", () => {
    cy.visit('/');
});

When("open homepage", () => {

loginuser.logintest()
});


            