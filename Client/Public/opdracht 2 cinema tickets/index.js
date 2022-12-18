//! DATA ARRAY's
let movieArray = [];
let shoppingCart = [];

//! MOVIE CLASS
let movieId = 0;
class Movie {
    constructor(movieName, movieDescription, moviePrice, movieDuration, movieImage) {
        this.MovieId = movieId;
        this.MovieName = movieName;
        this.MovieDescription = movieDescription;
        this.MoviePrice = moviePrice;
        this.MovieDuration = movieDuration;
        this.MovieImage = movieImage;
        movieId++;
    }

    render() {
        const htmlString = //html
            `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${this.MovieImage}" alt="${this.MovieName}" height="400">
                <div class="card-body">
                    <h5 class="card-title">${this.MovieName}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">€${this.MoviePrice}</h6>
                    <p class="card-text">Duration : ${this.MovieDuration} minutes</p>
                    <a id='addMovie${this.MovieId}' class="btn btn-primary myBtn">Buy</a>
                </div>
            </div>`
        return htmlString;
    }

    static generateCurrentMovies() {
        const movies = [];
        const movieNames = [
            `BLACK PANTHER: WAKANDA FOREVER`,
            `AVATAR: THE WAY OF WATER`,
            `DE GELAARSDE KAT 2: DE LAATSTE WENS`,
            `ZILLION`,
            `VIOLENT NIGHT`,
            `ONZE NATUUR, DE FILM`
        ];
        const movieDescriptions = [
            `In Marvel Studios' "Black Panther: Wakanda Forever", vechten koningin Ramonda (Angela Bassett), Shuri (Letitia Wright), M'Baku, Okoye en de Dora Milaje, om hun natie te beschermen tegen de tussenkomst van wereldmachten in de nasleep van de dood van koning T'Challa. Terwijl het volk van Wakanda probeert hun volgende hoofdstuk te aanvaarden, moeten de helden zich verenigen met de hulp van War Dog Nakia (Lupita Nyong'o) en Everett Ross (Martin Freeman) en een nieuw pad uitstippelen voor het koninkrijk Wakanda.`,
            `15 jaar na de gebeurtenissen uit het eerste deel is er een hoop veranderd voor Jake en Neytiri, die ondertussen hun plekje hebben gevonden in het regenwoud van Pandora dat ze thuis kunnen noemen. De twee hebben samen drie Na'vi kinderen en een geadopteerd vierde mensenkind genaamd Spider. Jake en Neytiri doen er alles aan om dit gezin bij elkaar te houden, maar wanneer ze opnieuw bedreigd worden door RDA-mijnwerkers zijn ze gedwongen hun thuis te verlaten. Zo komen ze terecht in een geheel andere omgeving bij een rif, waar de Metkayina clan woont. Deze omgeving komt echter niet zonder gevaar, zeker niet wanneer blijkt dat het gezin van Jake en Neytiri zich bevindt in een cultuur die ze niet kennen.`,
            `Dit najaar keert onze geliefde, melk drinkende, roekeloze, onbevreesde katachtige terug. Voor het eerst in ruim tien jaar presenteert DreamWorks Animation weer een nieuw avontuur in het Shrek-universum. De dappere, vogelvrije Gelaarsde Kat komt erachter dat zijn passie voor gevaar en zijn minachting voor veiligheid hun tol hebben geëist. Hoewel hij zelf de tel is kwijtgeraakt, blijkt hij acht van zijn negen levens te hebben verspeeld. Om die levens terug te krijgen begint hij aan zijn grootste avontuur tot nu toe. De voor een Oscar® genomineerde Antonio Banderas keert terug als de stem van de beruchte Kat die op een legendarische reis door het Zwarte Woud gaat om de mythische Wensster te vinden en zijn verloren levens terug te krijgen. Aangezien hij nog maar één leven heeft, moet hij zijn trots opzij zetten en de hulp inschakelen van zijn voormalige partner en aartsvijand, de innemende Kitty Poezelpootje (de voor een Oscar® genomineerde Salma Hayek). Op hun tocht worden de Gelaarsde Kat en Kitty, tegen beter weten in, bijgestaan door het sjofele, praatgrage, altijd opgewekte mormel Perro (Harvey Guillén, What We Do in the Shadows). De drie helden worden op de hielen gezeten door de misdadigers Goudhaartje (de voor een Oscar® genomineerde Florence Pugh, Black Widow) en de drie beren, “Big” Jack Horner (Emmy-winnaar John Mulaney, Big Mouth) en de angstaanjagende premiejager de Grote Boze Wolf (Wagner Moura, Narcos).`,
            `1997. Computergenie Frank Verstraeten is klein van gestalte, zijn ambities des te groter. Met megadiscotheek Zillion bouwt hij in Antwerpen de place to be voor uitgaand Vlaanderen en ver daarbuiten. Frank paradeert er met Vanessa, de mooiste vrouw van België terwijl partner in crime en pornokoning Dennis Black Magic voor de pikante acts zorgt. Frank wordt even beroemd en berucht als z'n discotheek, maar trapt daarbij al te vaak op de verkeerde tenen.`,
            `Een ‘stille nacht’ kun je wel vergeten. VIOLENT NIGHT is een film van 87North, het productiehuis van actiefilms als Nobody, John Wick, Atomic Blonde, Deadpool 2 en Fast & Furious: Hobbs & Shaw. Het is een duistere kerstthriller met een duidelijke boodschap: zet altijd in op rood. Een team huurlingen breekt op kerstavond in bij een rijke familie en neemt iedereen in huis in gijzeling. Maar ze hebben niet gerekend op de aanwezigheid van de kerstman (David Harbour, Black Widow, serie Stranger Things). Ze komen er snel achter dat de lieve kindervriend ook een heel andere kant heeft. In de film spelen verder ook Emmy-winnaar John Leguizamo (John Wick), Edi Patterson (The Righteous Gemstones), Cam Gigandet (Without Remorse), Alex Hassell (Cowboy Bebop), Alexis Louder (The Tomorrow War) en Beverly D’Angelo (National Lampoon’s Vacation-franchise). VIOLENT NIGHT wordt geregisseerd door de vlijmscherpe Noorse regisseur Tommy Wirkola (Hansel & Gretel: Witch Hunters, Dead Snow-franchise) en geproduceerd door Kelly McCormick, David Leitch en Guy Danella van 87North. Het scenario is geschreven door Pat Casey en Josh Miller, de schrijvers van Sonic the Hedgehog.`,
            `Onze Natuur, De Film is een spannende en vertederende familiefilm, die iedereen onderdompelt in de prachtige wereld van onze natuur. Het is het hoopvolle verhaal van de versnipperde natuur in België die onder druk staat, maar toch weet te overleven. Het vertelt het verhaal van de overwinnaars, de opportunisten, de uitvreters, de vechters, de slimmeriken en de bazen. Maar ook dat van de verliezers, de soorten die we over een paar jaar misschien niet meer tegenkomen...`
        ];
        const moviePrices = [13.65, 16.15, 12.65, 13.65, 12.65, 12.65];
        const movieDurations = [161, 192, 101, 138, 111, 84];
        const movieImages = [
            `https://tickets.kinepolis.be/Booking/GetImg?film=hH%2FmdvYllrw3ovAe05lraQ%3D%3D`,
            `https://tickets.kinepolis.be/Booking/GetImg?film=U83Nel50iCA829QuplX7%2FQ%3D%3D`,
            `https://tickets.kinepolis.be/Booking/GetImg?film=6ztwLPoODcStNkEmGXGi5Q%3D%3D`,
            `https://tickets.kinepolis.be/Booking/GetImg?film=LNvF3SakrUCGJtUdxnCztQ%3D%3D`,
            `https://tickets.kinepolis.be/Booking/GetImg?film=SbFcAWY1oX%2BycR4XplBDng%3D%3D`,
            `https://tickets.kinepolis.be/Booking/GetImg?film=DbSDuSDC9Ui4SYQVcP7G%2Bg%3D%3D`
        ];

        for (let i = 0; i < movieNames.length; i++) {
            movies.push(new Movie(movieNames[i], movieDescriptions[i], moviePrices[i], movieDurations[i], movieImages[i]));
        }

        return movies
    }
}

//! FUNCTIONS
const getData = () => {
    if (movieArray.length === 0) {
        movieArray = Movie.generateCurrentMovies();
    }
    console.log('movies: ', movieArray);
    generateInterface();
}

const generateInterface = () => {
    movieContainer.innerHTML = "";
    movieArray.forEach(movie => {
        movieContainer.innerHTML += movie.render();
    });
    generateEventListeners();
}

const generateEventListeners = () => {
    movieArray.map(movie => {
        document.querySelector(`#addMovie${movie.MovieId}`).addEventListener('click', () => {
            addToCart(movie);
        });
    });
}

const addToCart = (movie) => {
    let notFound = true;
    shoppingCart.map((cartItem) => {
        if (cartItem.movie.MovieName === movie.MovieName) {
            cartItem.amount++;
            notFound = false;
        }
    });
    if (notFound === true) {
        let item = { "movie": movie, "amount": 1 }
        shoppingCart.push(item);
    }
    calculateShoppingCartTotal();
}

const calculateShoppingCartTotal = () => {
    let totalPrice = 0;
    shoppingCart.map((cartItem, i) => {
        totalPrice += cartItem.amount * cartItem.movie.MoviePrice;
    })

    let htmlString = //html
        `<section><b>Totaal: </b>€${totalPrice.toFixed(2)}</section > `;
    shoppingCartTotalPrice.innerHTML = htmlString;
    renderShoppingCart();
}

const renderShoppingCart = () => {
    shoppingCartContainer.innerHTML = "";
    shoppingCart.forEach(cartItem => {
        let htmlString = //html
            `<div class="d-flex align-items-center justify-content-between">
                <p>${cartItem.amount}</p>
                <p>${cartItem.movie.MovieName}</p>
                <p>${cartItem.movie.MoviePrice}</p>
            </div>`;
        shoppingCartContainer.innerHTML += htmlString
        console.log(htmlString)
    });
}



//! Start of the application
const movieContainer = document.querySelector('#movies');
const shoppingCartContainer = document.querySelector('#shoppingCartContent');
const shoppingCartTotalPrice = document.querySelector('#shoppingCartTotalPrice');
getData();