var myMoviesApp = angular.module('myMovies', ['ngSanitize']);
myMoviesApp.controller('moviesCtrl', ['$scope', function($scope) {
    $scope.movies = [
	{name:'ANH', title: 'A New Hope', desc: 'Star Wars Episode IV - A New Hope', desc2: 'George Lucas\'s 1977 classic', desc3:'See R2 and C3PO join Luke, Han, Leia, ObiWan against Vader', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'ESB', title: 'The Empire Strikes Back', desc: 'Star Wars Episode IV - The Empire Strikes Back', desc2:'The best sequel ever?', desc3:'Watch as the our heroes get separated through the film', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'ROTJ', title: 'Return of the Jedi', desc: 'Star Wars Episode VI - Return of the Jedi', desc2: 'Anakin\'s journey is complete', desc3:'The team is reunited to deal the Dark Side a fatal blow', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'DKR', title: 'The Dark Knight Returns', desc: 'The Dark Knight Returns', desc2:'Christopher Nolan\'s dark saga ends', desc3:'Bane is not all he seems', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'BR', title: 'Blade Runner', desc: 'Ridley Scott\'s Blade Runner', desc2:'Ridley Scott\'s noir masterpiece', desc3:'Who is human, who is replicant?', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'RLA', title: 'Raiders of the Lost Ark', desc: 'Raiders of the Lost Ark', desc2:'Spielberg and Lucas have never been better', desc3:'Every detail of all the character\'s movements - except the melting face!', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'DUN', title: 'Dune', desc: 'Dune', desc2:'David Lynch\'s adaptation', desc3:'Surreal and superb', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'FCL', title: 'Fight Club', desc: '', desc2:'Pitt and Norton in Fincher\'s best?', desc3:'Do you know the first rule of Fight Club?', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'FOTR', title: 'The Fellowship of the Ring', desc: 'Frodo and friends begin their dangerous journey', desc2:'Will the fellowhip stay together?', desc3:'See all the interaction in Perter Jackson\'s epic', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'GDF', title: 'The Godfather', desc: 'Coppola\'s 1972 classic', desc2:'The ultimate Mafia movie', desc3:'', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'INC', title: 'The Incredibles', desc: 'Your favourite family of supers', desc2:'Incredible family', desc3:'Incredible soundtrack', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'INCP', title: 'Inception', desc: 'Corporate theft re-imagined', desc2:'Christopher Nolan\'s dream play', desc3:'Watch how the characters appear in multiple locations', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'JAW', title: 'Jaws', desc: 'Spielberg\'s classic thriller', desc2:'You\'ll never go into the water again', desc3:'The classic soundtract printed in the footer', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'MAT', title: 'The Matrix', desc: 'Blue or Red pill?', desc2:'Neo in Bullet-Time', desc3:'The Wachowski Brothers on a career high', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'POA', title: 'The Prisoner of Azkaban', desc: 'See Harry and his friends save the day', desc2:'Time travelling Harry Potter', desc3:'What do our heroes find out about their past and future?', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'T2', title: 'Terminator 2', desc: 'Cameron\'s groundbreaking movie', desc2:'Seminal CGI in this smart apocalyptic warning', desc3:'Arnie IS back!', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'},
	{name:'PUL', title: 'Pulp Fiction', desc: 'Zed is Dead. Vince vega lives - or does he?', desc2:'All the twisted plot you will ever need', desc3:'Even if Vince dies in the film, he is still to be seen in the last few scenes - trace his journey on this movie-map', link: 'http://www.imdb.com/title/tt0076759/', large:'40', extraLarge:'65'}
        
    ];

    $scope.palettes = [
	{name:'ANH', title: 'A New Hope', desc: 'Star Wars Episode IV - A New Hope', desc2: 'George Lucas\'s 1977 classic', desc3:'See R2 and C3PO join Luke, Han, Leia, ObiWan against Vader', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'ESB', title: 'The Empire Strikes Back', desc: 'Star Wars Episode IV - The Empire Strikes Back', desc2:'The best sequel ever?', desc3:'Watch as the our heroes get separated through the film', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'ROTJ', title: 'Return of the Jedi', desc: 'Star Wars Episode VI - Return of the Jedi', desc2: 'Anakin\'s journey is complete', desc3:'The team is reunited to deal the Dark Side a fatal blow', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'DKR', title: 'The Dark Knight Returns', desc: 'The Dark Knight Returns', desc2:'Christopher Nolan\'s dark saga ends', desc3:'Bane is not all he seems', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'BR', title: 'Blade Runner', desc: 'Ridley Scott\'s Blade Runner', desc2:'Ridley Scott\'s noir masterpiece', desc3:'Who is human, who is replicant?', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'RLA', title: 'Raiders of the Lost Ark', desc: 'Raiders of the Lost Ark', desc2:'Spielberg and Lucas have never been better', desc3:'Every detail of all the character\'s movements - except the melting face!', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'DUN', title: 'Dune', desc: 'Dune', desc2:'David Lynch\'s adaptation', desc3:'Surreal and superb', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'FCL', title: 'Fight Club', desc: '', desc2:'Pitt and Norton in Fincher\'s best?', desc3:'Do you know the first rule of Fight Club?', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'FOTR', title: 'The Fellowship of the Ring', desc: 'Frodo and friends begin their dangerous journey', desc2:'Will the fellowhip stay together?', desc3:'See all the interaction in Perter Jackson\'s epic', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'GDF', title: 'The Godfather', desc: 'Coppola\'s 1972 classic', desc2:'The ultimate Mafia movie', desc3:'', link: 'http://www.imdb.com/title/tt0076759/'},
	{name:'INC', title: 'The Incredibles', desc: 'Your favourite family of supers', desc2:'Incredible family', desc3:'Incredible soundtrack', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'INCP', title: 'Inception', desc: 'Corporate theft re-imagined', desc2:'Christopher Nolan\'s dream play', desc3:'Watch how the characters appear in multiple locations', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'JAW', title: 'Jaws', desc: 'Spielberg\'s classic thriller', desc2:'You\'ll never go into the water again', desc3:'The classic soundtract printed in the footer', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'MAT', title: 'The Matrix', desc: 'Blue or Red pill?', desc2:'Neo in Bullet-Time', desc3:'The Wachowski Brothers on a career high', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'POA', title: 'The Prisoner of Azkaban', desc: 'See Harry and his friends save the day', desc2:'Time travelling Harry Potter', desc3:'What do our heroes find out about their past and future?', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'T2', title: 'Terminator 2', desc: 'Cameron\'s groundbreaking movie', desc2:'Seminal CGI in this smart apocalyptic warning', desc3:'Arnie IS back!', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name:'PUL', title: 'Pulp Fiction', desc: 'Zed is Dead. Vince vega lives - or does he?', desc2:'All the twisted plot you will ever need', desc3:'Even if Vince dies in the film, he is still to be seen in the last few scenes - trace his journey on this movie-map', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'},
	{name: 'WALL', title: 'WALL-E', desc: 'Delightful cnd colourful classic', desc2:'Will warm the coldest of hearts', desc3:'', link: 'http://www.imdb.com/title/tt0076759/', small:'10', large: '20', extraLarge: '50'}
        
    ];

    $scope.scanography = [
                 	{name:'ANH', hidden: 'STR', title: 'A New Hope - Stormtrooper', desc: 'Star Wars Episode IV - A New Hope', desc2: 'George Lucas\'s 1977 classic', desc3:'See R2 and C3PO join Luke, Han, Leia, ObiWan against Vader', link: 'http://www.imdb.com/title/tt0076759/', large:'30', extraLarge:'60'},
                 	{name:'ANH', hidden: 'VADER', title: 'A New Hope - Darth Vader', desc: 'Star Wars Episode IV - A New Hope', desc2: 'George Lucas\'s 1977 classic', desc3:'See R2 and C3PO join Luke, Han, Leia, ObiWan against Vader', link: 'http://www.imdb.com/title/tt0076759/', large:'30', extraLarge:'60'}
	];
    
    $scope.loc = location.search.substring(location.search.indexOf("=")+1);
    $scope.menuPath = location.pathname;
    $scope.cartQty = window.simpleCart.quantity();
}]);
