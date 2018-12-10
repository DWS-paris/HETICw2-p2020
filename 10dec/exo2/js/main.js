/* 
Variables
*/
    const mainTag = document.querySelector('main')
//


/* 
Méthodes
*/
    // Fonction $ jQuery
    const $ = selector => document.querySelector(selector)

    // Fonction fetch pour charger le content.html
    const getContent = () => {

        // Requête sur le fichier HTML
        fetch( './partials/content.html' )
        .then( rawContent => {
            console.log(rawContent)

            // Convertir en TEXT
            return rawContent.text()
        })
        .then( textContent => {
            console.log(textContent)

            // Ajouter le contenu dans le DOM
            mainTag.innerHTML = textContent

            return 'Fin de la requête'
        })
        .then( msg => console.log(msg) )
        .catch( fetchError => {
            console.error(fetchError)
        })

    }
//


/* 
Lancer le programme
*/
    getContent()
//