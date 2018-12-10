/* 
Déclarations de variables
*/
    let userName = `Julien Noyer`
    const birthDate = 1979
    let user = {
        name: `Julien`,
        skills: [ 'HTML', 'CSS', 'JS' ],

        sayHello: function(){
            console.log('Hello')
        }
    }
//

/* 
Templating ES6
*/
    let firstName = `Julien`
    let lastName = `Noyer`

    // Version ES5
    console.log( "Bonjour " + firstName + " " + lastName )

    // Version ES6
    console.log( `
        <section>
            Bonjour ${firstName} ${lastName}
        </section>
    ` )
//

/* 
Fonctions
*/
    // Version ES5
    function testOne(){
        return "Test one"
    }

    var testTwo = function(){
        return "Test two"
    }

    // Version ES6
    const testThree = () => {
        return "Test three"
    }

    // Simplification
    const testFour = () => `Test four`
    const testFive = user => `Hello ${user}`

    // Valeur par defaut d'un paramètre
    const testSix = (userName = 'Julien') => {
        console.log(`Hello ${userName}`)
    }

    testSix() // "Hello Julien"
    testSix('Pierre') // "Hello Pierre"

    // Rest parametor
    const testSeven = (user, ...skills) => {
        console.log(user)
        console.log(skills)

        // Le Rest parametor place les variables dans un tableau
        skills.map( skill => console.log(skill) )
    }

    testSeven('Robert', 'JS', 'HTML', 'CSS', 'Cuisine')
//


/* 
Spread operator
*/
    let myUsers = [ 'Robert', 'Peter', 'Bunny' ]
    let usersSkills = [ 'CSS', 'JS', 'HTML' ]

    // Spread Operator ES6
    let all = [ ...myUsers, ...usersSkills ]

    // Concat ES6
    let global = [].concat(myUsers).concat(usersSkills)
//