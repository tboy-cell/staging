class bankingservices{

bankingservicesfield = "//a[@href='/banking-services']//*[name()='svg']" //xpath
virtualaccounttab = "//span[normalize-space()='Virtual Accounts']" //xpath
addvirtualaccount = "//span[normalize-space()='Add Virtual Account']" //xpath
firstnametab = "#first_name"
name = "theophilus"
lastnamebtn = "#last_name"
names = "oriloye"
emailtab = "#email"
email = "theophilusoriloye@gmail.com"
phonenumbertab = "#mobile_no"
number = "07042275924"
bvntab = "#bvn"
bvn = "	22244868771"
createaccount = "button[type='submit']"


bankingservicesfield = "//a[@href='/banking-services']//*[name()='svg']" //xpath
transfertab = "//span[normalize-space()='Transfers']" //xpath
transferfundtab = "//span[normalize-space()='Transfer Funds']" //xpath
singletransfer = "//p[normalize-space()='Single Transfer']" //xpath
currencyfield = "#currency"
currency = "NGN"
transfertype = "#type"
type = "//div[contains(text(),'Transfer to Saved Beneficiary')]" //xpath
beneficiarytab = "//span[normalize-space()='Select Beneficiary']" //xpath
beneficiary = "div[aria-selected='true']"
amounttab = "#amount"
amount = "1000"
narrationtab = "#narration"
narration = "testing"
transferfundbox = "button[type='submit']"
continue = "//button[normalize-space()='Yes, Continue']"




addvirtual() {
    cy.xpath(this.bankingservicesfield).click()
cy.xpath(this.virtualaccounttab).click({ force: true })
cy.xpath(this.addvirtualaccount).click()
cy.get(this.firstnametab).type(this.name)
cy.get(this.lastnamebtn).type(this.names)
cy.get(this.emailtab).type(this.email)
cy.get(this.phonenumbertab).type(this.number)
cy.get(this.bvntab).type(this.bvn)
cy.get(this.createaccount).click()



}

createtransfer() {
 cy.xpath(this.bankingservicesfield).click()
 cy.xpath(this.transfertab).click()
 cy.xpath(this.transferfundtab).click()
 cy.xpath(this.singletransfer).click()
 cy.get(this.currencyfield).type(this.currency)
 const currency = 'NGN';
cy.get(`[data-value="${currency}"]`).click();
  cy.get(this.transfertype).click()
  cy.xpath("//div[contains(text(),'Transfer to Saved Beneficiary')]")
  .should('be.visible')
  .click();

  cy.xpath(this.beneficiarytab).click()
  cy.get(this.beneficiary).click()
 cy.get('body', { timeout: 10000 }).should('have.css', 'pointer-events', 'auto');
   cy.get('#amount').type('1000');


 cy.get(this.narrationtab).type(this.narration)
 cy.get(this.transferfundbox).click()
cy.xpath(this.continue).click()





}







}

export default bankingservices