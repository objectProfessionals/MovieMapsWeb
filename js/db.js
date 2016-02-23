var movies = {
'ANH' : {title: 'A New Hope', desc: 'Star Wars Episode IV - A New Hope', desc2: 'George Lucas\'s 1977 classic', desc3:'See R2 and C3PO join Luke, Han, Leia, ObiWan against Vader', link: 'http://www.imdb.com/title/tt0076759/', length :'100', ar: '2.35'},
'ESB' : {title: 'The Empire Strikes Back', desc: 'Star Wars Episode IV - The Empire Strikes Back', desc2:'The best sequel ever?', desc3:'Watch as the our heroes get separated through the film', link: 'http://www.imdb.com/title/tt0076759/'},
'ROTJ' : {title: 'Return of the Jedi', desc: 'Star Wars Episode VI - Return of the Jedi', desc2: 'Anakin\'s journey is complete', desc3:'The team is reunited to deal the Dark Side a fatal blow', link: 'http://www.imdb.com/title/tt0076759/'},
'DKR' : {title: 'The Dark Knight Returns', desc: 'The Dark Knight Returns', desc2:'Christopher Nolan\'s dark saga ends', desc3:'Bane is not all he seems', link: 'http://www.imdb.com/title/tt0076759/'},
'BR' : {title: 'Blade Runner', desc: 'Ridley Scott\'s Blade Runner', desc2:'Ridley Scott\'s noir masterpiece', desc3:'Who is human, who is replicant?', link: 'http://www.imdb.com/title/tt0076759/'},
'RLA' : {title: 'Raiders of the Lost Ark', desc: 'Raiders of the Lost Ark', desc2:'Spielberg and Lucas have never been better', desc3:'Every detail of all the character\'s movements - except the melting face!', link: 'http://www.imdb.com/title/tt0076759/'},
'DUN' : {title: 'Dune', desc: 'Dune', desc2:'David Lynch\'s adaptation', desc3:'Surreal and superb', link: 'http://www.imdb.com/title/tt0076759/'},
'FCL' : {title: 'Fight Club', desc: '', desc2:'Pitt and Norton in Fincher\'s best?', desc3:'Do you know the first rule of Fight Club?', link: 'http://www.imdb.com/title/tt0076759/'},
'FOTR' : {title: 'The Fellowship of the Ring', desc: 'Frodo and friends begin their dangerous journey', desc2:'Will the fellowhip stay together?', desc3:'See all the interaction in Perter Jackson\'s epic', link: 'http://www.imdb.com/title/tt0076759/'},
'GDF' : {title: 'The Godfather', desc: 'Coppola\'s 1972 classic', desc2:'The ultimate Mafia movie', desc3:'', link: 'http://www.imdb.com/title/tt0076759/'},
'INC' : {title: 'The Incredibles', desc: 'Your favourite family of supers', desc2:'Incredible family', desc3:'Incredible soundtrack', link: 'http://www.imdb.com/title/tt0076759/'},
'INCP' : {title: 'Inception', desc: 'Corporate theft re-imagined', desc2:'Christopher Nolan\'s dream play', desc3:'Watch how the characters appear in multiple locations', link: 'http://www.imdb.com/title/tt0076759/'},
'JAW' : {title: 'Jaws', desc: 'Spielberg\'s classic thriller', desc2:'You\'ll never go into the water again', desc3:'The classic soundtract printed in the footer', link: 'http://www.imdb.com/title/tt0076759/'},
'MAT' : {title: 'The Matrix', desc: 'Blue or Red pill?', desc2:'Neo in Bullet-Time', desc3:'The Wachowski Brothers on a career high', link: 'http://www.imdb.com/title/tt0076759/'},
'POA' : {title: 'The Prisoner of Azkaban', desc: 'See Harry and his friends save the day', desc2:'Time travelling Harry Potter', desc3:'What do our heroes find out about their past and future?', link: 'http://www.imdb.com/title/tt0076759/'},
'T2' : {title: 'Terminator 2', desc: 'Cameron\'s groundbreaking movie', desc2:'Seminal CGI in this smart apocalyptic warning', desc3:'Arnie IS back!', link: 'http://www.imdb.com/title/tt0076759/'},
'PUL' : {title: 'Pulp Fiction', desc: 'Zed is Dead. Vince vega lives - or does he?', desc2:'All the twisted plot you will ever need', desc3:'Even if Vince dies in the film, he is still to be seen in the last few scenes - trace his journey on this movie-map', link: 'http://www.imdb.com/title/tt0076759/'}
}
var palettes = {
'ANH' : {title: 'A New Hope', desc: 'Star Wars Episode IV - A New Hope', desc2: 'George Lucas\'s 1977 classic', desc3:'See R2 and C3PO join Luke, Han, Leia, ObiWan against Vader', link: 'http://www.imdb.com/title/tt0076759/', length :'100', ar: '2.35'},
'ESB' : {title: 'The Empire Strikes Back', desc: 'Star Wars Episode IV - The Empire Strikes Back', desc2:'The best sequel ever?', desc3:'Watch as the our heroes get separated through the film', link: 'http://www.imdb.com/title/tt0076759/'},
'ROTJ' : {title: 'Return of the Jedi', desc: 'Star Wars Episode VI - Return of the Jedi', desc2: 'Anakin\'s journey is complete', desc3:'The team is reunited to deal the Dark Side a fatal blow', link: 'http://www.imdb.com/title/tt0076759/'},
'DKR' : {title: 'The Dark Knight Returns', desc: 'The Dark Knight Returns', desc2:'Christopher Nolan\'s dark saga ends', desc3:'Bane is not all he seems', link: 'http://www.imdb.com/title/tt0076759/'},
'BR' : {title: 'Blade Runner', desc: 'Ridley Scott\'s Blade Runner', desc2:'Ridley Scott\'s noir masterpiece', desc3:'Who is human, who is replicant?', link: 'http://www.imdb.com/title/tt0076759/'},
'RLA' : {title: 'Raiders of the Lost Ark', desc: 'Raiders of the Lost Ark', desc2:'Spielberg and Lucas have never been better', desc3:'Every detail of all the character\'s movements - except the melting face!', link: 'http://www.imdb.com/title/tt0076759/'},
'DUN' : {title: 'Dune', desc: 'Dune', desc2:'David Lynch\'s adaptation', desc3:'Surreal and superb', link: 'http://www.imdb.com/title/tt0076759/'},
'FCL' : {title: 'Fight Club', desc: '', desc2:'Pitt and Norton in Fincher\'s best?', desc3:'Do you know the first rule of Fight Club?', link: 'http://www.imdb.com/title/tt0076759/'},
'FOTR' : {title: 'The Fellowship of the Ring', desc: 'Frodo and friends begin their dangerous journey', desc2:'Will the fellowhip stay together?', desc3:'See all the interaction in Perter Jackson\'s epic', link: 'http://www.imdb.com/title/tt0076759/'},
'GDF' : {title: 'The Godfather', desc: 'Coppola\'s 1972 classic', desc2:'The ultimate Mafia movie', desc3:'', link: 'http://www.imdb.com/title/tt0076759/'},
'INC' : {title: 'The Incredibles', desc: 'Your favourite family of supers', desc2:'Incredible family', desc3:'Incredible soundtrack', link: 'http://www.imdb.com/title/tt0076759/'},
'INCP' : {title: 'Inception', desc: 'Corporate theft re-imagined', desc2:'Christopher Nolan\'s dream play', desc3:'Watch how the characters appear in multiple locations', link: 'http://www.imdb.com/title/tt0076759/'},
'JAW' : {title: 'Jaws', desc: 'Spielberg\'s classic thriller', desc2:'You\'ll never go into the water again', desc3:'The classic soundtract printed in the footer', link: 'http://www.imdb.com/title/tt0076759/'},
'MAT' : {title: 'The Matrix', desc: 'Blue or Red pill?', desc2:'Neo in Bullet-Time', desc3:'The Wachowski Brothers on a career high', link: 'http://www.imdb.com/title/tt0076759/'},
'POA' : {title: 'The Prisoner of Azkaban', desc: 'See Harry and his friends save the day', desc2:'Time travelling Harry Potter', desc3:'What do our heroes find out about their past and future?', link: 'http://www.imdb.com/title/tt0076759/'},
'T2' : {title: 'Terminator 2', desc: 'Cameron\'s groundbreaking movie', desc2:'Seminal CGI in this smart apocalyptic warning', desc3:'Arnie IS back!', link: 'http://www.imdb.com/title/tt0076759/'},
'PUL' : {title: 'Pulp Fiction', desc: 'Zed is Dead. Vince vega lives - or does he?', desc2:'All the twisted plot you will ever need', desc3:'Even if Vince dies in the film, he is still to be seen in the last few scenes - trace his journey on this movie-map', link: 'http://www.imdb.com/title/tt0076759/'}

,
'WALL' : {title: 'WALL-E', desc: 'Delightful cnd colourful classic', desc2:'Will warm the coldest of hearts', desc3:'', link: 'http://www.imdb.com/title/tt0076759/'}
}
