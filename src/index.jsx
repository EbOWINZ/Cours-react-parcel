/**
 * React avec l'outil Parcel
 * 
 * quelques commandes utiles :
 * npm init -y (permet d'initialiser notre projet en creéant un fichier package.json)
 * npm install react react-dom (pour installer les librairies react et react-dom)
 * npm install -D parcel-bundler (-D : permet d'installer une dépendence en mode développement)
 * npx : Node Package eXecute
 * npx -v (voir la version de npx)
 * 
 * npx parcel public/index.html "Permet de lancer le serveur de dévelopement"
 * npx parcel build public/index.html "Permet de compresser tout les fichiers en un seul fichier executable"
 * 
 * dans package.json on peut créer des raccourcies de commande d'exécution dans la clé "scripts" :
 * "start" : "parcel public/index.html" // lancer le serveur => npm start
 * "build" : "parcel build public/index.html" // compresser tous les fichiers => npm run build
 * 
 */
import React, {Component} from "react";
import {render} from "react-dom";
import "./style.css"
class ParcelHome extends Component{
    render(){
        return <>
        <div>
            <h1>Parcel Home: First Parcel Test with React</h1>
            <h4>Hello Univers</h4>
        </div>
        </>
}
}

render(<ParcelHome/>, document.getElementById("root"))