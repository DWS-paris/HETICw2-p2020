/* 
Variables
*/
    const mainTag = document.querySelector('main')
    const mySelector = document.querySelector('#news-selector')
    const apiKey = '558b63db8d7d46e8934c954fbd98bd3f'
//


/* 
Méthodes
*/
    const getSources = () => {
        // Requête Fetch sur l'api 
        fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`)
        .then( rawData => rawData.json() ) // Convertir en JSON
        .then( jsonData => {
            console.log(jsonData.sources)
            
            // Boucle sur la collection de données
            mySelector.innerHTML = jsonData.sources.map( displaySource ).join('\n')

            return true
        })
        .then( () => {
            // Capter l'événement change sur le SELECT
            mySelector.addEventListener( 'change', event => {
                // Ajouter les articles dans le DOM
                getNews(event.target.value)
            })
        })
        .catch( fetchError => console.error(fetchError) )
    }

    // Fonction pour charger les news d'une source
    const getNews = source => {
        fetch( `https://newsapi.org/v2/everything?sources=${source}&language=fr&apiKey=${apiKey}` )
        .then( rawData => rawData.json() )
        .then( jsonData => {
            mainTag.innerHTML = jsonData.articles.map( displayNews ).join('\n')
        })
        .catch( fetchError => console.error(fetchError) )
    }

    // Fonction pour ajouter les sources dans le DOM
    const displaySource = source => {
        return `
            <option value="${source.id}">${source.name}</option>
        `
    }

    // Fonction pour afficher les news
    const displayNews = news => {
        return `
            <article>
                <figure>
                    <img src="${news.urlToImage}">
                    <figcaption>${news.title}</figcaption>
                </figure>
                <p>${news.description}</p>
                <a href="${news.url}" target="_blank">Lire la suite</a>
            </article>
        `
    }
//



/* 
Lancer le programme
*/
    getSources()
//