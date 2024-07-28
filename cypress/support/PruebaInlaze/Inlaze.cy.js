//Inicializacion de variables
let t = 1000

class Inlaze{

    visitPage(){

        beforeEach(()=>{
            cy.visit("https://test-qa.inlaze.com/auth/sign-in")
            cy.title().should("eq","Inlaze - QA Test Front")
            cy.wait(t)
        })
    }

    newUser(fullName, email, pass, rPass){
        
        //Ingreso de datos
        cy.xpath("//a[@href='/auth/sign-up']").should('be.visible').click()
        cy.xpath("//input[contains(@id,'full-name')]").should('be.visible').type(fullName)
        cy.xpath("//input[contains(@id,'email')]").should('be.visible').type(email)
        cy.xpath("//input[@id='password']").should('be.visible').type(pass)
        cy.xpath("//input[contains(@id,'confirm-password')]").should('be.visible').type(rPass)
        cy.wait(t)
        cy.screenshot("Creación usuario contraseña corta")
        if(pass == rPass){
            //Click Sing Up
            cy.xpath("//button[@type='submit'][contains(.,'Sign up')]").should('be.visible').click()
            cy.xpath("//div[@class='ml-3 text-sm font-normal'][contains(.,'Successful registration!')]").should('be.visible')            
            cy.wait(t)
            cy.xpath("//span[@class='sr-only']").contains("Close").click({force:true})
        }else{
            //Validación de mensaje de contraseña no coincide
            cy.xpath("//span[contains(@class,'label-text-alt text-error')]").should('be.visible')
            
        }    
        
    }

    signIn(userMail, pass){

        //Ingreso de datos
        cy.xpath("//input[contains(@id,'email')]").should('be.visible').type(userMail)
        cy.xpath("//input[contains(@id,'password')]").should('be.visible').type(pass)        
        cy.xpath("//button[@type='submit'][contains(.,'Sign in')]").should('be.visible').click()
        cy.wait(t)
        cy.xpath("//h2[contains(.,'Welcome to Lorem')]").should('be.visible')
        cy.wait(t)
    }

    logOut(){
        cy.xpath("//img[@src='/assets/rengoku.webp']").should('be.visible').click()
        cy.wait(t)
        cy.xpath("//a[contains(.,'Logout')]").click()
    }

}//FIN

export default Inlaze;