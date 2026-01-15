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
        switch (status){        //HUOM SWITCH!!!
            case 200:
                console.log('OK!');
                break;        //ALWAYS REMEMBER BREAK!!!
            case 400:
            case 500:
                console.log('Error');
                break
            default:            // HUOM default = else!
                console.log('Unknown value');
                break;
        }
        
Episode 28/51: JS mahdollistaa '' string ja !true sekoituksilla kikkailua. Kannattaa pyrkiä aina true! HUOM! 'error' === 'ERROR' PAITSI toUpperCase === 'ERROR'   
Episode 29/51: Array = lista tai joukko arvoja. Jokaisella arvolla on indeksi (numero arvo), joka edustaa taulukon (array) arvoa. Taulukon pituuden voi tarkistaa arrayName.length

    let arrayLength = 5;
    let arr1 = [];
    let arr2 = Array(arrayLength);
    console.log(arr1length);       --> 0
    console.log(arr2.lengthg);     --> 5
    
Episode 30/51: Eli voi taulukon pituus pitää määrittää etukäteen! Taulukon pituuden voi määrittää yllä olevien esimerkkien tavalla!  
Episode 31/51: Taulukkoon voi lisätä tuetoa kun se luodaan tai luomisen jälkeen. Jos haluaa päästä taulukon tietoon käsiksi niin kannattaa viitata indeksiin!

    let arr1 = ["A", true, 2];
    console.log(arr1[0]);    --> "A"
    console.log(arr1[1]);    --> true
    
Episode 32/51: Taulukot (Arrays)

    - Jos indeksissä ei ole vielä tietoa ja koittaa console.log(arr[i]); niin tulee "undefined"
    - console.log(arr[arr1.length -1]); //tulostaa viimesen arvon!
    
Episode 33/51: Array methods:

    array.push(values) lisää yksi tai useampi luku taulukon loppuun ja palauttaa uuden pituuden
    array.pop() poistaa arvon lopusta ja palauttaa poistetun arvon

    array.shift() poistaa arvon taulukon alusta ja palauttaa poistetun arvon
    array.unshift(values) lisää yhden tai useamman arvon taulukon alkuun ja palauttaa uuden taulukon pituuden

    Concat --> yhdistää kaksi arraytä uudeksi yhdeksi

    PUSH ja POP
    let arr1 = ["A", true, 2];
    console.log(arr1.push("new value"));    --> 4  
    console.log(arr1);                      --> ["A", true, 2, "new value"]
    console.log(arr1.pop());                --> "new value"
    console.log(arr1);                      --> ["A", true, 2]

    SHIFT ja UNSHIFT
    let arr1 = ["A", true, 2];
    console.log(arr1.unshift("new value"));    --> 4
    console.log(arr1);                         --> ["new value", "A", true, 2]
    console.log(arr1.shift());                 --> "new value"
    console.log(arr1);                         --> ["A", true, 2]

    CONCAT
    let arr1 = ["A", true, 2];
    let arr2 = ["B", false, 3];
    let newArr = arr1.concat(arr2)
    let newArr2 = arr2.concat([1,2,3])
    console.log(newArr);                    --> ["A", true, 2, "B", false, 3]
    console.log(newArr2);                   --> ["B", false, 3, 1, 2, 3]
    
Episode 34/51: Arrayn muokkaukseen on käytössä pop, push, shift ja unshift. Jos kaksi taulukkoa halutaan yhdistää niin tulee käyttää concat toimintoa!  
Episode 35/51: Looppeja käytetään listan iterointiin ja while something is true -periaatteella.

    WHile LOOPS (Funktioiden kutsumiseen!)
    const names = ['Justin', 'Sarah', 'Christopher'];

    let index = 0;                        //kertoo mistä aloitetaan JS
    while (index < names.length) {        //suorita niin kauan kuin tämä on oikein
        const name = names[index];
        console.log(name);
        index++;                          //Kriittistä mennä indexeissä eteenpäin!
    }

    For LOOPS (Looppaamaan known number of times!)
    const names = ['Justin', 'Sarah', 'Christopher'];

    for (let index = 0; index < names.length; index++) {
        const name = names[index];
        console.log(name);
    }

    For ... of loops (vrt. C# foreach loop) (taulukoihin tai kokoelmiin!)
    const names = ['Justin', 'Sarah', 'Christopher'];

    for (let name of names) {            //Ei tarvitse inkrementoida huomioida arvoja!
        console.log(name);
    }

Episode 36/51: VSCodessa kirjoita for, jonka jälkeen se alkaa ehdottamaan asioita! For ... of on hyvä listojen läpikäymiseen! Const sisällä toimii vaikka normaalisti sitä ei voisi vaihtaa (const = pysyvä)!   
Episode 37/51: Funktio on osa koodia, joka suorittaa rutiinitehtäviä käyttämällä sarjoja ohhjeita. Tekee koodista lyhyempää ja huollettavampaa. Käytä {} merkkejä!

    function computePrice(cost, discount) {
        let reduction = cost*discount;
        console.log("You saved $"+reduction);
        return cost-reduction;
        
Episode 38/51: Funkioiden käyttö:

    function printHello(){
        console.log("Hello world!");
    }
    console.log(typeof printHello);

    printHello();                        //Pitää kutsua funktiota, jotta se toimii!


    function printHello(name){
        console.log("Hello " +name);
    }
    //console.log(typeof printHello);

    printHello("Microsoft!");             --> Hello Microsoft!


    function printHello(name){
        console.log("Hello " +name);
    }
    //console.log(typeof printHello);

    printHello();             --> Hello undefined


    function printHello(name){
        console.log("Hello " +name);
        return "ma,e "+" hello!";
    }

    let result = printHello("Microsoft !");
    console.log(result);

Episode 39/51: Fat arrow funktio => , muuttaa to the this context. Pitää assignaa muuttujalle tai heti käyttää! 

    const add = (a, b) => a + b;
    console.log(add(1, 2));         //3

    const subtract = (a, b) => {
        return a - b;
    };
    console.log(subtracy(2, 1));    //1

    this     context
        - Periytyy parent scopelta
        - Ei voi muuttaa
        - Huolletaan kun funktio siirretään referensille

Episode 40/51: Ei tarvitse käyttää return parametriä jos (a, b) 0> a + b! Block sisään (a, b) => {}  
Episode 41/51: JOSN:

    - "tietoformaatti"
    - Käyttää key value paireja

    // Object format
    const book = {
        title: "1984", 
        author: "George Orwell",
        isAvailable: false
    };

    // Converted to JSON
    const bookJSON = JSON.stringify(bookObj);
    console.log(bookJSON);                            --> {"title":"1984","author":"George Orwell","isAvailable":false};

    {
        "title":"Becoming",
        "author":"Michelle Obama",
        "isAvailable":false
    };


    var json = JSON.stringify(book);                
    console.log(json);

    --> {
            "title":"Becoming",
            "author":"Michelle Obama",
            "isAvailable":false
        };


    var copies = [book, book];
    var json = JSON.stringify(copies);
    console.log(json);

    [
        {"title":"1984","author":"George Orwell","isAvailable":false};
        {"title":"Becoming","author":"Michelle Obama","isAvailable":false};
    ]

    JSON.parse()

    //json text
    var jsonObj = '{"title":"1984","author":"George Orwell","isAvailable":false}';

    // to object 
    var book = JSON.parse(jsonObj);
    console.log(book.title);        //1984


    var jsonArray = 
    '[{"title":"1984"},{"title":"Becoming"}]';

    var books = JSON.parse(jsonArrau);
    console.log(books[1].title);
    
Episode 42/51: Eli vain kaksi metodia stringify ja parse. Hyvä viesti formaatti!  
Episode 43/51: Objektit:
    - koostuu attribuuteista eli name-value paireista
    - JS kutsutaan properties (var, eli muuttujat) ja methods (funktiot)

        const book = {
            title: "1984",                    //properties = title
            author:"George Orwell",           //properties = author
            isAvailable:false                 //properties = isAvailable
    
            checkIn: function(){                //method
                this.isAvailable=true;
            },
            checkOut: function(){               //method
                this.isAvailable=false;
            }
        };
        console.log(typeof book);



        const book = new Object();
        book.title: "1984",                    //properties = title
        book.author:"George Orwell",           //properties = author
        book.isAvailable:false                 //properties = isAvailable

        book.checkIn: function(){                //method
            this.isAvailable=true;
        };
        book.checkOut: function(){               //method
            this.isAvailable=false;
        };
        
        console.log(typeof book);



        - Dot notation: book.title antaa "1984"
        - Bracket notation: book[title] antaa "1984"

        Metodiin pääseminen: 
            - book.chekIn antaa [Funktion: checkIn] ja book["CheckIn"] antaa [Funktion: checkIn]

        Metodin suorittaminen
            - book.chekIn() suorittaa ja book["CheckIn"]() suorittaa



        "this" Keyword access to runtime context

        function checkIn(){
            returne this;
        }
        console.log( checkIn() );        --> tulostaa globaalin objektin
    
Episode 44/51: Objekteja voidaan luoda hyödyntäen konstruktorjea. JSON on const, mutta siinä on useita key-value paireja! Globaali objekti joka on metodin ulkopuolella ja metodin sisäpuolella oleva book.Object eli sidottu omistajaan. globalThis voi standardoidusti kutsua globaaleja funktioita sekä node että browser. Globaali objeckti sama kuin default object.  
Episode 45/51: Modernit app hyödyntävät sovelluksen ulkopuolisia palveluita, kuten tietokannat, REST kutsut, yms. Callback, jos asiassa kestää:

    function callback (){
        console.log('Timeout completed');
    }

    setTimeout(callback, 3000); // wait 3 seconds



    - monista callbackeista voi tulla ongelmia! --> promises ratkaisu (common dev pattern)

    function promiseTimeout(ms) {
        return new Promise ((resolve, reject) => {
            setTimeout(resolve, ms);
        });
    }

    promiseTimeout(2000)
        .then(() => {
            console.log('done');
            return Promise.resolve(42);
        })
        .then((response) => {
            console.log(response);
        });
        catch(() => {
            console.log('cool error handling');
        })
    
Episode 46/51: setTimeout on JS funktio! .then, .then, .then kun haluaa käydä mitä tapahtuu jonkun jälkeen asynkronisissa operaatioissa.  
Episode 47/51: Async/await saa koodin näyttämään muulta, mutta on oikeasti asynkronista. --> Käytät callbackeja myös tässäkin.

    function promiseTimeout(ms) {
        return new Promise ((resolve, reject) => {
            setTimeout(resolve, ms);
        });
    }

    async function simulateLongOperation() {
        await promiseTimeout(1000);                    //ilmoittaa että koodi on paussilla kunnes operaatio suoritetaan
        return 42;
    }

    async function run() {
        const answer = await simulateLongOperation();
        console.log(answer);
    }

    run();
    
Episode 48/51: Await ei voi käyttää, jos ei käytä async function. Jos ei käytä await tulostuu Promise { 42 }.  
Episode 49/51:  
Episode 50/51:  
Episode 51/51:  
