/* 
Variables
*/
    const mainTag = document.querySelector('main')
//


/* 
Méthodes
*/
    const jsonFetch = () => {
        fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-10&sortBy=publishedAt&apiKey=558b63db8d7d46e8934c954fbd98bd3f`)
        .then( rawData => rawData.json() )
        .then( jsonData => mainTag.innerHTML = JSON.stringify(jsonData.articles) )
        .catch( fetchError => console.error(fetchError) )
    }
//



/* 
Lancer le programme
*/
    jsonFetch()
//