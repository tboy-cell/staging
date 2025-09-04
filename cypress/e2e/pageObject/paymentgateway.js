import { faker } from '@faker-js/faker';

class paymentgateway{

transactiontab = "//span[normalize-space()='Transactions']" //xpath
disputetab = "//span[normalize-space()='Disputes']" //xpath
createdispute = "//span[normalize-space()='Create Dispute']" //xpath
disputetitle = "#title"
title = "test"
descriptionfield = "#description"
description = "testing"
disputetype =  "#type"
type = "div[id='radix-:r44:']"
paymentreference = "#payment_reference"
reference = "tbody tr:nth-child(1) td:nth-child(1) div:nth-child(1) span:nth-child(1)"
categoryfield = "#category"
category = "div[id='radix-:r60:']"
imagetab = "div[role='presentation']"
createdisputes = "button[type='submit']"





paymentlinktab = "//span[normalize-space()='Payment Links']" //xpath
createpaymentlink = "//span[normalize-space()='Create Payment Link']" //xpath
linktitle = "#name"
title = "tunde"
linkdescription = "#description"
description = "testing"
amountfield = "#amount"
amount = "500"
referencefield = "#reference"
reference = "tesyyy"
expirytab = "#expire"
createlink = "button[type='submit']"
successfulcreation = "p[class='mb-2 text-[18px] font-semibold']"

paymentpagetab = "//span[normalize-space()='Payment Pages']" //xpath
createpaymentpage = "//span[normalize-space()='Create Payment Page']" //xpath
basicpage = "//form[@id='create-payment-page-form-one']//button[.//p[text()='Basic Page']]" //xpath
pagetitle = "#name"
title = "john"
pagedescription = "#description"
description = "testing"
currencyfield = "#currency"
currency = "NGN"
amountfield = "#amount"
amount = "500"
nextbtn = "button[type='submit']"
expirybox = "#expire"
createpage = "button[type='submit']"
successfulcreation = "p[class='mb-2 text-[18px] font-semibold']"


splitpaymenttab = "//span[normalize-space()='Split Payments']" //xpath
createsplitgroup = "//span[normalize-space()='Create Split Group']" //xpath
splitgroupname = "#name"
name = "eri"
addsubaccountinformation = "#sub_accounts"
accountname = "john Doe"
valuefield = "input[id='sub_accounts.[0].split_value']"
value = "1000"
creategroup = "button[type='submit']"

qrcodetap = "//span[normalize-space()='QR Codes']" //xpath
createqrcode = "//span[normalize-space()='Create QR Code']" //xpath
dynamicpage = "//span[normalize-space()='Create a simple QR Code page']" //xpath
qrcodetitle = "#name"
title = "john"
codedescription = "#description"
description = "testing"
amountbox = "#amount"
amount = "500"
expirydatebox = "#expire"
createqrcode = "button[type='submit']"

subscriptiontab = "//span[@class='inline-flex text-nowrap'][normalize-space()='Subscriptions']" //xpath
createsubscription = "//span[normalize-space()='Create Subscription']" //xpath
plandropdown =  "#plan"
walletdropdown = "button[id='wallet']"
createsubscriptions = "button[type='submit']"

invoicingtab = "//span[normalize-space()='Invoicing']" //xpath
createinvoice = "//span[normalize-space()='Create Invoice']" //xpath
customerdropdown = "#customer"
expirydatedropdown = "input[placeholder='Pick Expiry Date']"
date = "button[aria-label='Sunday, June 29th, 2025']"
descriptionfield = "#description"
description = "test"
itemsdropdown = "button[id='line_items.[0]']"
qualitytab = "input[id='line_items[0].quantity']"
quality = "7"
createinvoices = "//span[@class='hidden lg:block'][normalize-space()='Create Invoice']" //xpath
closetab = "//button[normalize-space()='Close']" //xpath

commercetab = "//span[normalize-space()='Commerce']" //xpath
producttab = "//span[@class='min-w-16 text-center'][normalize-space()='Products']" //xpath
addproductfield = "//span[normalize-space()='Add Product']" //xpath
productname = "#name"
name = "john"
unitcost = "#price"
price = "500"
comparecost = "#comparePrice"
cost = "1000"
categorybox = "button[id='category'] span[class='truncate font-light text-gray-two']"
descriptionfield = "#description"
description = "test"
productstock = "#stocks"
stock = "5"
taxbox = "#tax"
rewardbox = "#reward"
imagebox = "body div[id='root'] div[class='flex h-screen w-screen min-w-[320px]'] div[class='relative flex flex-1 flex-col'] main[class='grid w-full flex-1 grid-cols-1 overflow-y-auto overflow-x-hidden p-3 md:px-5 md:py-4'] section[class='flex h-[calc(100vh-94px)] flex-col md:h-[calc(100vh-102px)]'] form[id='create-single-product-form'] div[class='grid gap-4 md:grid-cols-2'] div[class='flex flex-col gap-5'] div:nth-child(3) div:nth-child(1) div:nth-child(1) div:nth-child(1)"
addproducts = "button[type='submit']"
viewproduct = "button[class='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold transition-all duration-300 ease-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-65 border bg-gray-four text-primary [&_svg_path]:stroke-primary h-10 px-4 py-2']"


checkoutrewardstab = "//span[normalize-space()='Checkout Rewards']" //xpath
rewardstab = "//span[@class='min-w-16 text-center'][normalize-space()='Rewards']" //xpath
createreward = "//span[normalize-space()='Create Reward']" //xpath
namefield = "#rewardName"
name = "john"
categoryfield = ".truncate.font-light.text-gray-two"
pointstab = "#rewardPoints"
point = "500"
startdatetab = "#startDate"
date = "button[aria-label='Today, Thursday, July 24th, 2025']"
endatebox = "#endDate"
datefield = "button[aria-label='Wednesday, July 30th, 2025']"
userlimit = "#userLimit"
limit = "500"
createrewards = "button[type='submit']"


productbtn = "//span[@class='inline-flex text-nowrap'][normalize-space()='Products']" //xpath
productbox = "//span[normalize-space()='Add Product']"
productnamefield = "#name"
name = "jush"
descriptionbox = "#description"
description = "testing"
unitcostbox = "#amount"
amount = "500"
taxtab = "#TaxId"
taxname = "div[id='radix-:r462:']"
productimage = "div[role='presentation']"
addproducts = "button[type='submit']"

createDispute() {
  cy.wait(3000)
cy.xpath(this.transactiontab).click()
cy.xpath(this.disputetab).click()
cy.xpath(this.createdispute).click()
cy.get(this.disputetitle).type(this.title)
cy.get(this.descriptionfield).type(this.description)
cy.get(this.disputetype).click()
cy.get('[role="option"]', { timeout: 10000 })
  .should('have.length.greaterThan', 0)
  .then($items => {
    const index = Math.floor(Math.random() * $items.length);
    cy.wrap($items[index]).click();
  }); 
cy.get(this.paymentreference).type(this.reference)
cy.get(this.categoryfield).click()
cy.get('[role="option"]', { timeout: 10000 })
  .should('have.length.greaterThan', 0)
  .then($items => {
    const index = Math.floor(Math.random() * $items.length);
    cy.wrap($items[index]).click();
  });
cy.get('input[type="file"]').attachFile('sample-image.jpg');
cy.get(this.createdisputes).click()



}


createpaymentlinks(){
cy.xpath(this.paymentlinktab).click({ force: true })
cy.xpath(this.createpaymentlink).click({ force: true })
cy.get(this.linktitle).type(this.title)
cy.get(this.linkdescription).type(this.description)
cy.get(this.amountfield).type(this.amount)
cy.get('button') 
  .then(($buttons) => {
    const randomIndex = Math.floor(Math.random() * $buttons.length);
    cy.wrap($buttons).eq(randomIndex).click({ force: true }); 
  });


cy.get(this.expirytab).click({ force: true })
cy.get(this.createlink).click()
cy.get(this.successfulcreation).click()

}

createpaymentpages(){
cy.xpath(this.paymentpagetab).click({ force: true })
cy.xpath(this.createpaymentpage).click({ force: true })
cy.xpath(this.basicpage).click()
cy.get(this.pagetitle).type(this.title)
cy.get(this.pagedescription).type(this.description)
cy.get(this.currencyfield).type(this.currency)
const currency = 'NGN';
cy.get(`[data-value="${currency}"]`).click();

cy.get(this.amountfield).type(this.amount)
cy .get(this.nextbtn).click()
cy.get(this.expirybox).click()
cy.get(this.createpage).click()
cy.get(this.successfulcreation).click()


}



createsplit(){
cy.xpath(this.splitpaymenttab).click({ force: true })
cy.xpath(this.createsplitgroup).click({ force: true })
cy.get(this.splitgroupname).type(this.name)
cy.get(this.addsubaccountinformation).type(this.accountname)
cy.get('[role="listbox"] [role="option"]').first().click({ force: true });
cy.get('input[name="sub_accounts.[0].split_value"]').type('20', { force: true });



cy.get(this.valuefield).type(this.value)
cy.get(this.creategroup).click()

  
}
  createqr() {
  cy.xpath(this.qrcodetap).click({ force: true });
  cy.contains('button', 'Create QR Code').click({ force: true });
  cy.xpath(this.dynamicpage).click({ force: true });
  cy.get(this.qrcodetitle).type(this.title);
  cy.get(this.codedescription).type(this.description);
  cy.get(this.amountbox).type(this.amount);
  cy.get(this.expirydatebox).click();
  cy.get(this.createqrcode).click();
}

createsub(){
  cy.wait(4000)
cy.xpath(this.subscriptiontab).click({ force: true })
cy.wait(4000)
cy.xpath(this.createsubscription).click()
cy.get(this.plandropdown).click();
// Step 1: Open the dropdown
cy.get('button#plan').click({ force: true });
cy.get('[role="option"]', { timeout: 10000 })
  .should('have.length.greaterThan', 0)
  .then($items => {
    const index = Math.floor(Math.random() * $items.length);
    cy.wrap($items[index]).click();
  }); 
  
cy.get(this.walletdropdown).click({ multiple: true})

cy.get('[role="option"]', { timeout: 10000 }) // Wait until options load
  .should('have.length.greaterThan', 0)
  .then($items => {
    const index = Math.floor(Math.random() * $items.length);
    cy.wrap($items[index]).click();
  });

cy.get(this.createsubscriptions).click()
}

createin(){
cy.xpath(this.invoicingtab).click()
cy.xpath(this.createinvoice).click({ force: true })
cy.get(this.customerdropdown).click({ force: true })
cy.get('[role="option"]', { timeout: 10000 })
  .should('have.length.greaterThan', 0)
  .then($items => {
    const index = Math.floor(Math.random() * $items.length);
    cy.wrap($items[index]).click();
  }); 
cy.get(this.expirydatedropdown).first().click(); 
cy.get(this.date).click()
cy.get(this.descriptionfield).type(this.description)
cy.get(this.itemsdropdown).click()
cy.get('[role="option"]', { timeout: 10000 })
  .should('have.length.greaterThan', 0)
  .then($items => {
    const index = Math.floor(Math.random() * $items.length);
    cy.wrap($items[index]).click();
  }); 
cy.get(this.qualitytab).type(this.quality)
cy.wait(3000)
cy.xpath(this.createinvoices).click()
cy.xpath(this.closetab).click()

}


addpro(){
cy.wait(1000)
cy.xpath(this.commercetab).click({ force: true })
cy.xpath(this.producttab).click()
cy.xpath(this.addproductfield).click()
cy.get(this.productname).type(this.name)
cy.get(this.unitcost).type(this.price)
cy.get(this.comparecost).type(this.cost)
cy.get(this.categorybox).click()
cy.get('[role="option"]', { timeout: 10000 })
  .should('have.length.greaterThan', 0)
  .then($items => {
    const index = Math.floor(Math.random() * $items.length);
    cy.wrap($items[index]).click();
  }); 
cy.get(this.descriptionfield).type(this.description)
cy.get(this.productstock).type(this.stock)
cy.get(this.taxbox).click()
cy.get('[role="option"]', { timeout: 10000 })
  .should('have.length.greaterThan', 0)
  .then($items => {
    const index = Math.floor(Math.random() * $items.length);
    cy.wrap($items[index]).click();
  }); 
cy.get(this.rewardbox).click()
cy.get('[role="option"]', { timeout: 10000 })
  .should('have.length.greaterThan', 0)
  .then($items => {
    const index = Math.floor(Math.random() * $items.length);
    cy.wrap($items[index]).click();
  }); 
cy.get('input[type="file"]').attachFile('sample-image.jpg');

cy.get(this.addproducts).click({ multiple: true })
cy.get("button[class*='text-primary']").first().click();



}


createre(){
cy.xpath(this.checkoutrewardstab).click()
cy.xpath(this.rewardstab).click()
cy.xpath(this.createreward).click()
cy.get(this.namefield).type(this.name)
cy.get(this.categoryfield).click()
cy.get('[role="option"]', { timeout: 10000 })
  .should('have.length.greaterThan', 0)
  .then($items => {
    const index = Math.floor(Math.random() * $items.length);
    cy.wrap($items[index]).click();
  }); 
cy.get(this.pointstab).type(this.point)
cy.get(this.startdatetab).click()
cy.get(this.date).click()
cy.get(this.endatebox).click()
cy.wait(500);
cy.get(this.datefield).click({ multiple: true })
cy.get('#userLimit').type('10', { force: true });
cy.get(this.userlimit).type(this.limit)
cy.get(this.createrewards).click()

}
 
createpro() {
   const productName = faker.commerce.productName();

cy.xpath(this.productbtn).click({ force: true })
cy.xpath(this.productbox).click()
cy.get(this.productname).type(productName)
cy.get(this.descriptionfield).type(this.description)
cy.get(this.unitcostbox).type(this.amount)
cy.get(this.taxtab).click()
cy.get('[role="option"]', { timeout: 10000 })
  .should('have.length.greaterThan', 0)
  .then($items => {
    const index = Math.floor(Math.random() * $items.length);
    cy.wrap($items[index]).click();
  }); 

cy.get('input[type="file"]').attachFile('sample-image.jpg');
cy.get(this.addproducts).click()




}




}
export default paymentgateway