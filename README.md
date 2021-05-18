## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.




## HTML
1) Three radio buttons
2) Button
3) Three img tags


## JavaScript
1) create pokemon objects / array
2) on LOAD, we're:
    - rendering three pokemon
        - in a renderPokemon function:
            - going into our pokedex and using our math.random to generate three random ones
            - (we're storing these three choices in let variables) this will be when we're rendering the page
3) when a user selects a pokemon, and clicks submit button:
    - storing their choice in localStorage
    - catching the one they selected
    - matching what they selected with the ID in our pokedex
    - remembering (in localStorage) which pokemon they've seen



    findById function
    - when rendering pokemon, we're searching thru for a match
    - arguments: pokedex array, and an ID
    - if a match is found by doing array.id, return that pokemon's whole object
    - if pokemon in pokedex, pokemon.id === selected.id, if it's true, return that object, return pokemon
    - if it doesn't find a thing, return null
    DONE

    capturePokemon function
        - selection, pokedex are the parameters
        - matches selection and pokedex with findById
        - captured++
        - calls setPokedex to put what the function just did into localStorage

    encounterPokemon function
        - grab pokedex!
        - it takes in the pokedex and the displayed pokemon
        - matches stuff with findById
        - with an if/else statement, check to see if the currently encountered pokemon are already in our CART, if so, encouter++
        - else: create it! with pokedex.push {id: selectedID, captured: 0, encountered: 1}
        - setPokedex to update the CART

    setPokedex function
        - putting the CART into localStorage
        - we need to stringify whatever is in our CART

    getPokedex function
        - parses stringy thing
        - sets it equal to a constant
        - returning a CART

    
    in an app.js file:
        - on LOAD:
            - we want to have three random pokemon appear with math.random * the length of the pokedex (math.floor this)
            - we'll put that in 3 lets
            - getPokedex function, return it to a CART
            - setPokedex function, stringify whatever is in CART
            - encounterPokemon function
            - so, while pokemon1.id === || pokemon2.id === pokemon2.id: the three lets get math.randomed again

        - button!!!
            - on click!!!
            - on click, we call capturePokemon in which we are putting in the pokedex and the user selection
