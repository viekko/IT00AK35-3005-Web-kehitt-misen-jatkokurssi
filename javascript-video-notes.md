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
    
Episode 17/51: Matemaattisia funktioita:

    let num1 = 100;

    console.log(num1 + 25);    --> 125
    console.log(num1 - 100);    --> 0
    console.log(num1 * 100);    --> 10000
    console.log(num1 / 1500);    --> 0.0666666667

    console.log(num1 % 1500); //Remainder    --> 100
    console.log(++num1); //Increment    --> 101
    console.log(--num1); //Decrement    --> 99

    console.log(Math.PI); //Pi    --> 3.141592653589793
    console.log(Math.squrt(num1)); //Square root    --> 10

    
Episode 18/51: Perus laskutoimitukset toimivat kuten muissa ohjelmontikielissä. Huomio samanlailla Math objektit!   
Episode 19/51: Numeroiden muutokset stringeiksi parseInt() ja parseFloat() --> parseFloat() käytetään desimaalilukujen kanssa. toString() muuttaa numerot stringeiksi.

    console.log(parseInt('ABC'));    --> NaN
    console.log(parseInt('0xF')); //Heksanumero!    --> 15

    console.log(parseFloat('ABC'));    --> NaN
    console.log(parseInt('1,5'));    --> 1

    
Episode 20/51: parseInt on rakennettu suoraan JS! --> Ei tarvitse muuta kirjastoa. Template litteral arvioidaan siellä sisällä ennen kuin mitään muuta suoritetaan!  
Episode 21/51: Error = virhe koodissa, exception = missä virhe on! Throwing exception kertoo mikä virhe!

    Try = Block of code thta may throw exception
    Catch = Block of code that will run if an exception is thrown
    Finally = Optional part of code that will run after the try block or after catch block

    try{
        criticalCode();
    }
    catch(ex){
        console.log("Got an error");
        logError(ex);
    }
    finally{
        console.log("Code that always will run");
    }
    
Episode 22/51: Eli jos epäilee virhettä niin try, jos tulee virhe niin catch koodi sen perään, joka kertoo siitä. Lopuksi finally on koodia joka aina toimii!  
Episode 23/51: Aika on objekti jota voi manipuloida. Date sisltää sekä date and time! Aika on säilötty millisekunteina since 1 JAN 1970.

    const randomDate = new Date(2015, 3, 12, 6, 25, 58);    
    console.log(randomDate);     --> 2015-04-12T13:25:58.000Z

    const now = new Date();

    now.setMonth(3); //April (counting starts zero)
    
Episode 24/51: Kuukaudet lähtee 0, 1, 2, 3... = tammi, helmi, maalis, huhti...    0 = sunnuntai, 1 = maanantai, 2 = tiistai...  
Episode 25/51:

        Operaattorit:
            <
            <=
            >
            >=

            == checks the equality regardless of data type    --> '42' == 42 tests as true!
            === check for equal values and data types        --> '42' == 42 tests as false
            != (not data type)
            !== (data type!)


            const status = 200;
            if (status === 200) console.log('OK!'); // HUOM! Voi skipata {} sulkeet!

            // Ternary (instant)
            const message = (status === 200) ? 'OK' : 'Error';
            
Episode 26/51: Eli == tarkistaa vain syötteen, === tarkistaa myös int ja string! Vertailu: if, else if, else!  
Episode 27/51: Boolean notes:

        - Tyhjät strings test as false
        - Null or määrittelemättömät objektit test as false
        - Numbers: 0 tests as false

        const x = 0;
        if(!x) {
            console.log('x contains *NO* value');
        }

        (x & y)
        (x && y)
        (x | y)
        (x || y)

        const status = 200;
        switch (status){
            case 200:
                console.log('OK!');
                break;        //ALWAYS REMEMBER BREAK!!!
            case 400:
            case 500:
                console.log('Error');
                break
            default:
                console.log('Unknown value');
                break;
        }
        
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
