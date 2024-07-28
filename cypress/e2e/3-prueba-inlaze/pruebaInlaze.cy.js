import Inlaze from '../../support/PruebaInlaze/Inlaze.cy.js'

//para que funcionen los comandos
///<reference types="cypress"/>
require('cypress-xpath')

describe("Prueba Inlaze", () =>{

   const inlaze = new Inlaze()
   inlaze.visitPage()
   
//PRUEBAS DE REGISTRO DE USUARIOS NUEVOS
    it("Registro Usuario Nuevo - OK", () =>{
       
       inlaze.newUser("Nombre1A Nombre1B", "nombre1a@correo.com", "passNombre1+", "passNombre1+")
       //inlaze.newUser("Nombre2A Nombre2B", "nombre2a@correo.com", "passNombre2+", "passNombre2+")
       //inlaze.newUser("Nombre3A Apellido3A", "nombre3a@correo.com", "passNombre3+", "passNombre3+")
       
    })

    it("Registro Usuario Nuevo - Solo nombre", () =>{
       
        inlaze.newUser("Nombre3A", "nombre3a@correo.com", "passNombre3+", "passNombre3+")
        
     })

    it("Registro Usuario Nuevo - Correo inválido1", () =>{
       
        inlaze.newUser("Nombre3A", "nombre3a@correo", "passNombre3+", "passNombre3+")
                
     })

     it("Registro Usuario Nuevo - Correo inválido2", () =>{
       
        inlaze.newUser("Nombre6A Apellido6A", "sitio.com", "passNombre6+", "passNombre6+")
        
     })

    it("Registro Usuario Nuevo - Correo repetido", () =>{
       
        inlaze.newUser("Nombre3A Apellido3A", "nombre1a@correo.com", "passNombre3+", "passNombre3+")
        inlaze.signIn("nombre1a@correo.com", "passNombre3+")
        
     })
     

     it("Registro Usuario Nuevo - Contraseña repetida incorrecta", () =>{
       
        inlaze.newUser("Nombre4A Apellido4A", "nombre4a@correo", "passNombre4+", "passNombre4")
        
     })

     it("Registro Usuario Nuevo - Contraseña corta", () =>{
       
        inlaze.newUser("Nombre4A Apellido4A", "nombre4a@correo", "N4", "N4")
        
     })

     it("Registro Usuario Nuevo - Contraseña solo minúscilas menos de 8 caracteres", () =>{
       
        inlaze.newUser("Nombre4A Apellido4A", "nombre4a@correo", "nombre", "nombre")
        
     })

     it("Registro Usuario Nuevo - Contraseña solo minúscilas mas de 8 caracteres", () =>{
       
        inlaze.newUser("Nombre4A Apellido4A", "nombre4a@correo", "nombre123", "nombre123")
        
     })

     it("Registro Usuario Nuevo - Datos incompletos1", () =>{
       
        inlaze.newUser(" ", "nombre4a@correo", "passNombre4+", "passNombre4+")
        
     })

     it("Registro Usuario Nuevo - Datos incompletos2", () =>{
       
        inlaze.newUser("Nombre4A Apellido4A", " ", "passNombre4+", "passNombre4+")
        
     })

//PRUEBAS LOGIN DE USUARIO
    it("Ingreso Usuario Nuevo - OK", () =>{
       
        inlaze.signIn("nombre1a@correo.com", "passNombre1+")
        cy.xpath("//h2[@class='font-bold']").should('be.visible').contains("Nombre1A Nombre1B")
        
     })

     it("Ingreso Usuario - falta email", () =>{
       
        inlaze.signIn(" ", "passNombre1+")
        //cy.xpath("//h2[@class='font-bold']").should('be.visible').contains("Nombre1A Nombre1B")
        
     })

     it("Ingreso Usuario - falta password", () =>{
       
        inlaze.signIn("nombre1a@correo.com", "")
        //cy.xpath("//h2[@class='font-bold']").should('be.visible').contains("Nombre1A Nombre1B")
        
     })

     it("Cerrar sesión - OK", () =>{
       
        inlaze.signIn("nombre1a@correo.com", "passNombre1+")
        cy.xpath("//h2[@class='font-bold']").should('be.visible').contains("Nombre1A Nombre1B")
        inlaze.logOut()
        
     })



})//Cierre describe cypress open
