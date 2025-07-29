class login {
emailfield = "#email"
passwordfield = "#password"
loginbtn = "button[type='submit']"
email = "endurance+1000@blusalt.net"
password = "Ekundayo9189@@"
  

logintest() {
cy.wait(1000)
cy.get(this.emailfield).type(this.email)
cy.get(this.passwordfield).type(this.password)
cy.get(this.loginbtn).click()

}}

export default login