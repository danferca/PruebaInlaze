///////////////////////////////////
Para ejecutar las pruebas

1. Descargar del repositorio el proyecto

git clone git@github.com:danferca/PruebaInlaze.git

2. Entrar a la carpeta del proyecto desde VSC(Visual Studio Code) y ejecutar

npm i

3. Ahora ejecutar

npx cypress open

NOTA: si las pruebas no corren por el xpath, correr en la consola

	npm install -D cypress-xpath
	
	luego volver a correr el npx cypress open

4. Las pruebas estan desarroladas desde 

cypress\e2e\3-prueba-inlaze\pruebaInlaze.cy.js

