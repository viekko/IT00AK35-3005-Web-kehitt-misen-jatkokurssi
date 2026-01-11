Episode 1/51: Esittelivät videoiden tekoon osallistuvat. Olettavat että perus osaamista löytyy ohjelmoinnista  
Episode 2/51: Kertoo lyhyesti JS historiasta. Ei ole Java vaan C kaltainen kieli. Muuttujat tunnistetaan automaattisesti. JS on kaikkialla.   Voi lukea tiedostoja ja interact tietokannan kanssa. Käytetyin ohjelmointikieli. VSCode kirjoitettu JS.  
Episode 3/51: JS voi laittaa suoraan html sekaan, mutta ennemmin omalle tiedostolle. DOM malli. SRV puolella tarvii Node.js.  
Episode 4/51: Suositellaan VSCode asentamista ja eri laajennuksien. ESLint analysoi ja korjaa bugeja.   
Episode 5/51: Node.js asennus ja NVM (Node Version Manager). --> Asensin nvm:n itselleni Win11, koska kuulemma Node.js versioiden kanssa voi tulla paljon ongelmia.  
Episode 6/51: Tehdään ensimmäinen JS projekti 'Hello world!'. Voi käyttää "" tai '' quoteja JS:ssä. Voi laittaa emojeja.   

    
    console.log('Hello, World!');  
  
    const place = "Earth";  
    console.log("Welcome to " + place + "!");  
      
    console.log(`This is a message from ${place}.`);
      
    
Episode 7/51: Koodin kommentointi. //Single line ja /* multi line */. Milloin pitää kommentoida? Ei liikaa esim. joka riviä vaan ennemmin functioita ja ennemmin functioiden nimistä niiden toiminnallisuutta kuvaavia.  
Episode 8/51: Taas käytiin kommentointia läpi // ja /* --- */. Myös VSCodessa Cmc/Ctrl + / saa kommentoitua koko rivejä.   
Episode 9/51: Muuttujat: 

        
        var one = ;  //TÄTÄ (MELKEIN) TURHA KÄYTTÄÄ! Function-scoped → näkyvyys rajautuu funktioon, ei lohkoon. Voidaan uudelleen määritellä samassa scope:ssa.  
        let two = 2;  //KÄYTÄ TÄTÄ LOOPS! Block-scoped → näkyvyys rajoittuu siihen lohkoon {} missä se on määritelty. Ei voi uudelleen määritellä samassa scope:ssa (mutta arvoa voi muuttaa). 
        const three = 3;  //KÄYTÄ TÄTÄ DEFAULT! Block-scoped myös. Arvo täytyy määritellä heti, muuten syntyy virhe.     
        
        
Episode 10/51: Muuttujat:

    line 1        var hello = "Hello";
    line 2        console.log(hello);
    terminal          OUTPUT = Hello

    line 1        console.log(hello);
    line 2
    line 3        var hello = "Hello";
    terminal          OUTPUT = undefined

            if (true) {                                           if (true) {                                         
      OK        let world = "Hello World";            FALSE            let world = "Hello World";
                console.log(world);                               }
            }                                                     console.log(world);

        

    FALSE       const aaron = "Aaron";
                console.log(aaron);
                aaron = "Aaron Powell";
        

        
Episode 11/51:  Stringit edustaa kirjoitusta. String Concatenation:   

            let str1 = "Hello ";
            let str2 = "World";

            console.log(str1 + str2);
            console.log(str1 + "Big " + str2);

            let num1 = 1;
            let num2 = "1";

            console.log(num1 + num2);   --> tulostaa 11
            console.log(num1 + 1);      --> tulostaa 2
            
Episode 12/51: Pitää lisätä itse välejä stringeihin! Pitää huomioida olettaako JS onko kyseessä int vai string!  
Episode 13/51: Template literals:

            let str1 = "JavaScript";
            let str2 = "fun";

            console.log(`I am writing code in ${str1}`);                        --> I am writing code in JavaScript
            console.log(`Formatting strings in ${str1} is ${str2}!`);           --> Formatting string in JavaScript is fun!

            let bool1 = true;

            console.log(`1 + 1 is ${1 + 1}`);                                   --> 1 + 1 is 2
            console.log(`The opposite of true is ${!bool1}`);                   --> The opposite of true is false

            
Episode 14/51: Huomioi kun käytät template litteraleja ylläolevat säännöt! 

    HUOM bool = true, bool != false!!!  
    
Episode 15/51:  Tietorakenteet! 

    Simple type system:
        Number (float), string, boolean, date, function, array and object
    Special types
        NaN, null, undefined

    Checking type:
        typeof operator
        --> Returns a string of the data type primitive

        instanceof operator
        --> Returns a boolean of if a value matches the data type

    HUOM! Käytä joskus === operattoria!
        
Episode 16/51: Jos käyttää typeof arrayssä ja tulostaa niin se näyttää object! --> Kaikki muut tunnistetaan number, boolean, string...  Hyvä huomioida minkä tyypin tietoja kyseessä ja varmistaa aina testaamalla!

    Instaceof tulee käyttää const one = new Number(1);
    console.log(one instanceof Number);        --> true

    Eli vaatii konstruktoria!
    
Episode 17/51:  
Episode 18/51:  
Episode 19/51:  
Episode 20/51:  
Episode 21/51:  
Episode 22/51:  
Episode 23/51:  
Episode 24/51:  
Episode 25/51:  
Episode 26/51:  
Episode 27/51:  
Episode 28/51:  
Episode 29/51:  
Episode 30/51:  
Episode 31/51:  
Episode 32/51:  
Episode 33/51:  
Episode 34/51:  
Episode 35/51:  
Episode 36/51:  
Episode 37/51:  
Episode 38/51:  
Episode 39/51:  
Episode 40/51:  
Episode 41/51:  
Episode 42/51:  
Episode 43/51:  
Episode 44/51:  
Episode 45/51:    
Episode 46/51:  
Episode 47/51:  
Episode 48/51:  
Episode 49/51:  
Episode 50/51:  
Episode 51/51:  
