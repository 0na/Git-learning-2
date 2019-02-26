"use script"


var movies = [{
        id: 1,
        title: 'Django Unchained',
        desc: 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner,',
        image: "images/django.jpg",
    },
    {
        id: 2,
        title: 'Shutter Island',
        desc: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.',
        image: "images/shutter.jpg",
    },
    {
        id: 3,
        title: 'Inglourious Basterds',
        desc: 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owners vengeful plan for the same.',
        image: "images/bastards.jpg",
    },
    {
        id: 4,
        title: 'Intouchables',
        desc: 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.',
        image: "images/intouchables.jpg",
    }, {
        id: 5,
        title: 'Pulp Fiction',
        desc: 'The lives of two mob hitmen, a boxer, a gangsters wife and a pair of diner bandits intertwine in four tales of violence and redemption.',
        image: "images/pulp.jpg"
    }
];
//metoda .map(), która przyjmuje jako parametr funkcję, przez którą przechodzi każdy z elementów tablicy (czyli każdy film), który następnie jest mapowany do postaci ReactElementu korzystającego z informacji o filmie (movie.title i movie.desc)
//Za pomocą metody createElement tworzymy obiekt
var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id //trzeba uywać ''key" zeby nie przeladowywac calej strony a tylko zmienione rzeczy
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {
            src: movie.image,
        }) // w {} src jako atrybut
    );
});
//odpowiednie umieszczenie powyższych elementów w liście:
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Best of the movies'),
        React.createElement('ul', {}, moviesElements)
    );

//Za pomocą metody createElement tworzymy obiekt
ReactDOM.render(element, document.getElementById('app')); //mamy już gotowy element, możemy wyrenderować go w odpowiednim miejscu w drzewie DOM. Tym właśnie zajmuje się metoda render, która jako parametry przyjmuje: ReactElement (np. ten który stworzyliśmy linijkę wyżej),węzeł drzewa DOM, do którego element ma się "wpiąć".

//WZóR: ReactDOM.render(element, container[, callback])