///////////////////////////////////
Para ejecutar las pruebas

1. Descargar del repositorio el proyecto

git clone git@github.com:danferca/PruebaInlaze.git

2. Entrar a la carpeta del proyecto desde VSC(Visual Studio Code) y ejecutar desde la terminal

npm i

3. Ahora ejecutar desde la terminal

npx cypress open

se abrirá el ejecutable de cypress, será necesario elegir e2e y el navegador chrome

NOTA: si las pruebas no corren por el xpath, detener desde la terminal y correr el siguiente comando

	npm install -D cypress-xpath
	
	luego volver a correr el npx cypress open

4. Las pruebas estan desarroladas desde 

cypress\e2e\3-prueba-inlaze\pruebaInlaze.cy.js

NOTA: Cada prueba esta dentro una función "it", en caso de querer reproducir una sola, se deberá modificar el nombre de la fucnión agregando al 
      .only inmediatamente despues del it, asi:
	it.only(....), de esta manera solo se ejecutaran las pruebas que tengan .only

