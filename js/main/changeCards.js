document.addEventListener('DOMContentLoaded', function () {
  const movies = [
    {
      title: 'The Fast and the Furious',
      year: '2001–2025',
      synopsis:
        'In the adrenaline-fueled world of underground street racing, loyalty, speed, and danger collide. When a cop infiltrates a crew of elite racers suspected of hijacking shipments, he’s torn between duty and friendship. Explosive chases, roaring engines, and high-stakes action launch a saga where family always comes first—no matter the cost.',
      actors: 'Vin D. • Paul W. • Michelle R.',
      duration: '106–145',
      imdb: 6.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088700/fastAndFurious_fhexxr.jpg',
      imdbLink: 'https://www.imdb.com/list/ls068935667/',
    },
    {
      title: 'Harry Potter',
      year: '2001–2011',
      synopsis:
        'A young boy discovers he’s a wizard and is swept into a magical world hidden from ordinary eyes. At Hogwarts, he finds friendship, danger, and a dark mystery tied to his past. As he unravels secrets, Harry begins a journey that will define the fate of the wizarding world.',
      actors: 'Daniel R. • Emma W. • Rupert G.',
      duration: '138–161',
      imdb: 7.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088703/harryPotter_tynxyj.jpg',
      imdbLink: 'https://www.imdb.com/list/ls005577156/',
    },
    {
      title: 'The Matrix',
      year: '1999–2021',
      synopsis:
        'When a computer hacker discovers reality is a simulation controlled by machines, he’s pulled into a rebellion against the system. With mind-bending visuals and philosophical depth, this cyberpunk epic redefines reality and action. Neo must choose: the illusion of safety or the truth of a world at war.',
      actors: 'Keanu R. • Laurence F. • Carrie-Anne M.',
      duration: '136–148',
      imdb: 8.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088716/theMatrix_qbaarh.jpg',
      imdbLink: 'https://m.imdb.com/list/ls025559572/',
    },
    {
      title: 'Black Swan',
      year: 2010,
      synopsis:
        'A committed ballerina lands the lead in Swan Lake, but the pressure of perfection drives her into a psychological spiral. As she battles her own reflection and the blurred line between reality and madness, beauty and horror intertwine. Art demands sacrifice—and sometimes, the cost is your sanity.',
      actors: 'Natalie P. • Mila K. • Vincent C.',
      duration: 108,
      imdb: 8.0,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088696/blackSwan_d45vg9.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0947798/',
    },
    {
      title: 'The Godfather',
      year: '1972–1990',
      synopsis:
        'In the heart of organized crime, power and family rule. When Don Vito Corleone’s empire is threatened, his reluctant son Michael is drawn into a world of betrayal, vengeance, and blood. What begins as protection of family honor becomes a transformation into something darker—an heir to a criminal dynasty.',
      actors: 'Marlon B. • Al P. • James C.',
      duration: '175–202',
      imdb: 9.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088702/godFather_bu579m.jpg',
      imdbLink: 'https://www.imdb.com/list/ls020767237',
    },
    {
      title: 'Edward Scissorhands',
      year: 1990,
      synopsis:
        "A gentle artificial man with scissors for hands is taken in by a suburban family, disrupting their pastel-perfect world. His haunting appearance hides a tender soul, but society's fear of difference turns admiration into suspicion. A gothic fairytale about love, isolation, and the pain of being beautifully incomplete.",
      actors: 'Johnny D. • Winona R. • Dianne W.',
      duration: 105,
      imdb: 7.9,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088699/edwardScissorHands_lsi4el.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0099487/',
    },
    {
      title: 'Malèna',
      year: 2000,
      synopsis:
        'In a quiet Sicilian town during World War II, a young boy becomes obsessed with Malèna, a stunning woman whose beauty isolates her. As gossip, jealousy, and war unravel her life, he silently witnesses her fall from grace. A poignant coming-of-age tale about desire, cruelty, and the power of memory.',
      actors: 'Monica B. • Giuseppe S. • Luciano F.',
      duration: 92,
      imdb: 7.4,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088707/malena_cyh1wi.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0213847/',
    },
    {
      title: 'Scarface',
      year: 1983,
      synopsis:
        'Tony Montana rises from Cuban exile to Miami drug kingpin with ruthless ambition and fiery temper. Driven by hunger for wealth and power, his empire grows—until paranoia and violence consume him. A brutal, iconic descent into excess where the American Dream turns bloody. Say hello to the dark side of success.',
      actors: 'Al P. • Steven B. • Michelle P.',
      duration: 165,
      imdb: 8.3,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088715/scarFace_a8dxwj.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0086250/',
    },
    {
      title: 'The Addams Family',
      year: 1991,
      synopsis:
        'Meet the delightfully macabre Addams clan, where creepy is charming and weird is wonderful. When a mysterious man claims to be a long-lost relative, chaos ensues in their ghoulish mansion. Blending dark humor with heart, this offbeat family proves being strange isn’t just okay—it’s something to be celebrated.',
      actors: 'Anjelica H. • Raul J. • Christopher L.',
      duration: 99,
      imdb: 6.9,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088704/addamsFamily_sishfc.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0101272/',
    },
    {
      title: 'Donnie Darko',
      year: 2001,
      synopsis:
        'A troubled teenager begins seeing visions of a giant rabbit who warns him the world will end in 28 days. As Donnie navigates time loops, existential dread, and mental instability, reality starts to fracture. A cult classic that blends sci-fi, horror, and teenage angst into a haunting exploration of fate and madness.',
      actors: 'Jake G. • Jena M. • Drew B.',
      duration: 113,
      imdb: 8.0,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088698/donnieDarko_onlbij.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0246578/',
    },
    {
      title: 'American Psycho',
      year: 2000,
      synopsis:
        'By day, Patrick Bateman is a wealthy investment banker; by night, he’s a deranged killer. Trapped in a shallow world obsessed with appearances, he spirals into violence and madness. A chilling satire on consumerism, vanity, and identity, this psychological horror asks: is the monster real, or just beneath the surface?',
      actors: 'Christian B. • Reese W. • Willem D.',
      duration: 102,
      imdb: 7.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088696/americanPsycho_d5hfz1.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0144084/',
    },
    {
      title: 'Kill Bill',
      year: '2003–2004',
      synopsis:
        'After surviving a brutal betrayal, a former assassin awakens from a coma with one mission—revenge. Armed with a katana and relentless fury, The Bride slices her way through a blood-soaked list of enemies. A stylish, action-packed tale of vengeance, honor, and the cost of unfinished business.',
      actors: 'Uma T. • David C. • Lucy L.',
      duration: '111–137',
      imdb: 8.1,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088706/killBill_k81afp.jpg',
      imdbLink: 'https://www.imdb.com/list/ls000271548/',
    },
    {
      title: 'Fight Club',
      year: 1999,
      synopsis:
        'An insomniac office worker meets a mysterious soap salesman, and together they form an underground fight club that spirals into an anti-corporate revolution. As identity blurs and chaos rises, he confronts the darkest parts of himself. This provocative story shreds modern masculinity, conformity, and the illusion of control.',
      actors: 'Brad P. • Edward N. • Helena B. C.',
      duration: 139,
      imdb: 8.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088701/fightClub_jks1gc.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0137523/',
    },
    {
      title: 'Joker',
      year: 2019,
      synopsis:
        'Arthur Fleck, a failed comedian in a fractured society, descends into madness and becomes Gotham’s infamous clown prince of crime. Shunned and broken, his transformation is both horrifying and tragic. A disturbing character study on mental illness, alienation, and the fine line between victim and villain.',
      actors: 'Joaquin P. • Robert D. • Zazie B.',
      duration: 122,
      imdb: 8.3,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088767/joker_nxgjzs.jpg',
      imdbLink: 'https://www.imdb.com/title/tt7286456/',
    },
    {
      title: 'John Wick',
      year: '2014–',
      synopsis:
        'After losing his wife and having his beloved dog killed, a retired hitman reawakens his lethal skills to exact revenge. In a world of secret assassins and sacred codes, John Wick becomes legend. Elegantly violent and emotionally charged, his rampage is as stylish as it is personal.',
      actors: 'Keanu R. • Ian M. • Lance R.',
      duration: '101–169',
      imdb: 7.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088763/johnWick_qoir5x.jpg',
      imdbLink: 'https://www.imdb.com/list/ls504690685/',
    },
    {
      title: 'Rocky',
      year: '1976–2006',
      synopsis:
        "A small-time boxer gets a once-in-a-lifetime shot at the world heavyweight title. With heart, grit, and unbreakable spirit, Rocky Balboa trains to prove he's more than just a neighborhood underdog. More than a fight, it’s a battle for respect, love, and self-worth. Sometimes going the distance is the real victory.",
      actors: 'Sylvester S. • Talia S. • Burt Y.',
      duration: '91–120',
      imdb: 7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088704/rockyBalboa_yyadyu.jpg',
      imdbLink: 'https://www.imdb.com/list/ls047442895/',
    },
    {
      title: 'The Wolf of Wall Street',
      year: 2013,
      synopsis:
        'Jordan Belfort climbs the financial ladder through fraud, excess, and pure charisma. Fueled by greed and wild ambition, his rise and fall is a whirlwind of drugs, parties, and power. A chaotic, hilarious, and shocking look into Wall Street’s darkest corners where money rules and morality disappears.',
      actors: 'Leonardo D. • Jonah H. • Margot R.',
      duration: 180,
      imdb: 8.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088809/theWolfOfWallStreet_xwpmtw.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0993846/',
    },
    {
      title: 'Shutter Island',
      year: 2010,
      synopsis:
        'Two U.S. Marshals investigate a mysterious disappearance at an asylum on a remote island. As the case unfolds, disturbing truths and hallucinations blur reality. Nothing is what it seems. A psychological thriller where madness, memory, and identity spiral into an unforgettable mind-bending finale.',
      actors: 'Leonardo D. • Mark R. • Ben K.',
      duration: 138,
      imdb: 8.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088705/shutterIsland_dli3dl.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1130884/',
    },
    {
      title: 'The Truman Show',
      year: 1998,
      synopsis:
        'Truman Burbank lives the perfect life—until he discovers it’s all a lie. His world is a massive TV set, and everyone around him is an actor. As he searches for truth, the walls of illusion close in. A brilliant satire on media, control, and the human desire for freedom.',
      actors: 'Jim C. • Laura L. • Ed H.',
      duration: 103,
      imdb: 8.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088795/trumanShow_dqqyb2.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0120382/',
    },
    {
      title: 'Bullet Train',
      year: 2022,
      synopsis:
        'Five assassins with conflicting missions board a speeding bullet train in Japan. What starts as a simple job turns into chaotic mayhem as their paths violently collide. With dark humor, stylish action, and twisty storytelling, this ride is fast, fun, and lethal. There’s no getting off until the end.',
      actors: 'Brad P. • Joey K. • Aaron T.',
      duration: 127,
      imdb: 7.3,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088697/bulletTrain_q5ruup.jpg',
      imdbLink: 'https://www.imdb.com/title/tt12593682/',
    },
    {
      title: 'Baby Driver',
      year: 2017,
      synopsis:
        'A getaway driver with tinnitus choreographs his heists to music, living life one track at a time. When he falls in love, he tries to leave crime behind—but the past won’t let go. A high-octane blend of rhythm, romance, and adrenaline, where every beat counts and escape is everything.',
      actors: 'Ansel E. • Lily J. • Kevin S.',
      duration: 113,
      imdb: 7.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088704/babyDriver_nbb4yt.jpg',
      imdbLink: 'https://www.imdb.com/title/tt3890160/',
    },
    {
      title: 'Inception',
      year: 2010,
      synopsis:
        'Dom Cobb steals secrets by infiltrating dreams, but his latest job demands the impossible—inception. As he leads a team into layered dream worlds, reality begins to slip. With time running out, the line between dream and waking life vanishes. A mind-bending thriller about guilt, memory, and the power of ideas.',
      actors: 'Leonardo D. • Joseph G. • Ellen P.',
      duration: 148,
      imdb: 8.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088699/inception_tftxvz.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1375666/',
    },
    {
      title: 'Taxi Driver',
      year: 1976,
      synopsis:
        'Travis Bickle, a lonely veteran, prowls the streets of New York in his cab, descending into violent disillusionment. Haunted by urban decay and social isolation, he seeks purpose through rage. A dark, disturbing portrait of alienation, obsession, and the slow unraveling of a man lost in the shadows.',
      actors: 'Robert D. • Jodie F. • Cybill S.',
      duration: 114,
      imdb: 8.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088707/taxiDriver_hugvub.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0075314/',
    },
    {
      title: 'The Batman',
      year: 2022,
      synopsis:
        'In a rain-soaked Gotham, a young Bruce Wayne embraces his second year as the masked vigilante. As he hunts a cryptic killer targeting the city’s elite, he uncovers deep corruption and buried trauma. Gritty, noir, and emotionally raw, this is Batman stripped to his darkest, most detective-driven form.',
      actors: 'Robert P. • Zoë K. • Paul D.',
      duration: 176,
      imdb: 7.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088713/theBatman_ijkysr.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1877830/',
    },
    {
      title: 'Whiplash',
      year: 2014,
      synopsis:
        'An ambitious jazz drummer faces psychological warfare under a ruthless instructor who believes greatness comes through pain. Practice becomes obsession, and the pursuit of perfection blurs into madness. Explosive, intense, and emotionally charged, it’s a symphony of passion, power, and the cost of excellence.',
      actors: 'Miles T. • J.K. S. • Paul R.',
      duration: 106,
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088708/whiplash_yb3tv3.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2582802/',
    },
    {
      title: 'Blade Runner',
      year: '1982–2017',
      synopsis:
        'In a dystopian future where synthetic humans called replicants are hunted, a weary blade runner is assigned to retire four fugitives. But as he chases them, the line between artificial and real begins to blur. A haunting meditation on identity, memory, and what it means to be human in a world without empathy.',
      actors: 'Harrison F. • Ryan G. • Ana de A.',
      duration: '117–164',
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088704/bladeRunner_nnstnm.jpg',
      imdbLink: 'https://www.imdb.com/list/ls091788578/',
    },
    {
      title: 'Interstellar',
      year: 2014,
      synopsis:
        'With Earth dying, a team of explorers travels through a wormhole seeking a new home for humanity. As time bends and sacrifices mount, they confront the limits of science and the power of love. A sweeping cosmic journey where hope lies in the stars—and in the heart’s deepest connection.',
      actors: 'Matthew M. • Anne H. • Jessica C.',
      duration: 169,
      imdb: 8.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088705/interestellar_oav8om.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0816692/',
    },
    {
      title: 'Goodfellas',
      year: 1990,
      synopsis:
        "Henry Hill grows up idolizing gangsters, and soon he's living the high life of crime, wealth, and danger. But loyalty only lasts so long in a world ruled by greed and violence. A slick, brutal, and unforgettable descent into the mafia lifestyle where betrayal is just part of the business.",
      actors: 'Robert D. • Ray L. • Joe P.',
      duration: 145,
      imdb: 8.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088699/goodfellas_js1am1.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0099685/',
    },
    {
      title: "The Devil's Advocate",
      year: 1997,
      synopsis:
        'A rising lawyer joins a prestigious New York firm, only to discover his boss may be the literal Devil. Temptation, vanity, and moral compromise twist his reality as dark forces close in. A seductive legal thriller blending horror, ambition, and the age-old battle between good and evil.',
      actors: 'Keanu R. • Al P. • Charlize T.',
      duration: 144,
      imdb: 7.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088698/devilAdvocate_w9rlyf.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0118971/',
    },
    {
      title: 'Some Other Woman',
      year: 2023,
      synopsis:
        'In this eerie psychological thriller, a woman begins to suspect her husband is not who he claims to be—then sees another version of herself living her life. Reality fractures as paranoia grows. A chilling exploration of identity, obsession, and the terrifying idea that someone else could be… you.',
      actors: 'Amanda C. • Joel D. M. • Aimee C.',
      duration: 85,
      imdb: 4.4,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088809/someOtherWoman_zverhx.png',
      imdbLink: 'https://www.imdb.com/title/tt15091524/',
    },
    {
      title: 'Pirates of the Caribbean',
      year: '2003–2017',
      synopsis:
        'Captain Jack Sparrow sails into trouble with cursed treasure, undead pirates, and unpredictable alliances. With wit, rum, and a compass that doesn’t point north, he navigates seas of danger and destiny. A swashbuckling adventure packed with magic, betrayal, and freedom on the high seas where legends are born.',
      actors: 'Johnny D. • Orlando B. • Keira K.',
      duration: '129–169',
      imdb: 7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088707/piratesOfTheCaribbean_ythguf.jpg',
      imdbLink: 'https://www.imdb.com/list/ls059602270/',
    },
    {
      title: 'Nightcrawler',
      year: 2014,
      synopsis:
        'A desperate loner discovers the dark world of crime journalism in Los Angeles. As he blurs the line between observer and participant, his ambition turns sinister. With a camera in hand and no moral brakes, he becomes a predator in a world that rewards sensationalism over truth.',
      actors: 'Jake G. • Rene R. • Riz A.',
      duration: 117,
      imdb: 7.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088702/nightCrowller_pzli0b.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2872718/',
    },
    {
      title: 'A Clockwork Orange',
      year: 1971,
      synopsis:
        'In a violent, dystopian future, a teenage delinquent is subjected to state-sponsored psychological conditioning. As free will is stripped away, questions of morality and control rise. Disturbing, provocative, and unforgettable, this controversial tale explores the cost of order and the terrifying consequences of forced reform.',
      actors: 'Malcolm M. • Patrick M. • Adrienne C.',
      duration: 136,
      imdb: 8.3,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088696/clockOrange_qtuuim.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0066921/',
    },
    {
      title: 'The Social Network',
      year: 2010,
      synopsis:
        'In dorm rooms and legal rooms, friendships are broken and empires are built. The story of Facebook’s controversial creation unfolds as ambition, betrayal, and genius collide. A sharp, fast-paced portrait of modern power, where innovation doesn’t come without enemies—and a “like” can come at a high price.',
      actors: 'Jesse E. • Andrew G. • Justin T.',
      duration: 120,
      imdb: 7.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088706/socialNetwork_pw1mjr.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1285016/',
    },
    {
      title: 'Project X',
      year: 2012,
      synopsis:
        'Three high school friends throw a party to make a name for themselves—but it quickly spirals into legendary chaos. As word spreads and the night explodes, consequences are forgotten in favor of total anarchy. A wild, found-footage comedy that turns suburbia into the ultimate no-rules playground.',
      actors: 'Thomas M. • Oliver C. • Jonathan D.B.',
      duration: 88,
      imdb: 6.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088703/projectX_ogmkmp.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1636826/',
    },
    {
      title: 'Constantine',
      year: 2005,
      synopsis:
        'John Constantine, a cynical exorcist with a foot in both Heaven and Hell, battles demons while seeking redemption for his past sins. Armed with arcane knowledge and sarcasm, he walks a razor-thin line between salvation and damnation. A supernatural noir where angels, devils, and lost souls collide in the shadows.',
      actors: 'Keanu R. • Rachel W. • Tilda S.',
      duration: 121,
      imdb: 7.0,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088697/constantine_rujohc.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0360486/',
    },
    {
      title: 'Django Unchained',
      year: 2012,
      synopsis:
        'A freed slave teams up with a German bounty hunter to rescue his wife from a brutal plantation owner. As Django hones his skills and unleashes vengeance, the South is turned upside down. A bold, bloody western that reclaims power, love, and justice at the end of a smoking barrel.',
      actors: 'Jamie F. • Christoph W. • Leonardo D.',
      duration: 165,
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088698/django_jycexo.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1853728/',
    },
    {
      title: 'War Dogs',
      year: 2016,
      synopsis:
        'Two childhood friends stumble into a $300 million Pentagon arms deal, supplying weapons for war they barely understand. What starts as fast money quickly spirals into danger, lies, and international chaos. Based on a true story, it’s a darkly funny look at ambition, corruption, and how far greed can go.',
      actors: 'Jonah H. • Miles T. • Ana d.A.',
      duration: 114,
      imdb: 7.1,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088709/warDogs_fbs1eq.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2005151/',
    },
    {
      title: 'Ford v Ferrari',
      year: 2019,
      synopsis:
        'An American car designer and a rebellious driver team up to take on Ferrari at Le Mans in the 1960s. With corporate pressure mounting, they build a car to defy expectations. A thrilling, high-octane drama about speed, friendship, and pushing limits for greatness—on and off the track.',
      actors: 'Matt D. • Christian B. • Caitriona B.',
      duration: 152,
      imdb: 8.1,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088701/fordVsFerrari_cikgjd.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1950186/',
    },
    {
      title: 'Pulp Fiction',
      year: 1994,
      synopsis:
        'A hitman duo, a boxer, and a gangster’s wife cross paths in a wild tangle of violence, dark humor, and redemption. Nonlinear storytelling and unforgettable dialogue define this cult classic. Cool, chaotic, and criminally brilliant, it’s a cinematic mosaic of the underworld’s strange and twisted moments.',
      actors: 'John T. • Samuel L.J. • Uma T.',
      duration: 154,
      imdb: 8.9,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088714/pulpFiction_vf4ueb.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0110912/',
    },
    {
      title: 'Superbad',
      year: 2007,
      synopsis:
        'Two awkward teens try to make the most of their final high school days with booze, girls, and epic failure. As one night spirals hilariously out of control, their friendship is tested in unexpected ways. A raunchy yet heartfelt comedy about growing up, letting go, and embracing the awkward.',
      actors: 'Jonah H. • Michael C. • Christopher M.',
      duration: 113,
      imdb: 7.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088711/superBad_gogplf.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0829482/',
    },
    {
      title: 'Ted',
      year: '2012–2015',
      synopsis:
        'A lonely kid’s childhood wish brings his teddy bear to life—and the bear never grows up. Years later, Ted’s crude humor and bad habits strain his best friend’s adult life and love. A hilariously inappropriate tale of friendship, responsibility, and a foul-mouthed stuffed animal who just won’t behave.',
      actors: 'Mark W. • Mila K. • Seth M.',
      duration: '106–115',
      imdb: 6.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088708/ted_ryxlga.jpg',
      imdbLink: 'https://www.imdb.com/list/ls524598272/',
    },
    {
      title: 'The Hangover',
      year: '2009–2013',
      synopsis:
        'After a wild bachelor party in Vegas, three friends wake up to a trashed hotel room, no memory, and a missing groom. As they retrace their steps, chaos, tigers, and surprises ensue. A wildly unpredictable comedy about friendship, regret, and the weirdest night you’ll never remember.',
      actors: 'Bradley C. • Ed H. • Zach G.',
      duration: '100–102',
      imdb: 6.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088729/theHangover_tb4xif.jpg',
      imdbLink: 'https://www.imdb.com/list/ls041505211/',
    },
    {
      title: 'Saw',
      year: '2004–2017',
      synopsis:
        'Strangers awaken in a deadly trap with one terrifying rule—play a twisted game or die. As time ticks and secrets unfold, survival depends on unthinkable choices. Gruesome, psychological, and morally haunting, this horror classic questions how far someone will go to stay alive.',
      actors: 'Tobin B. • Shawnee S. • Costas M.',
      duration: '90–103',
      imdb: 6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088785/saw_m97vqu.jpg',
      imdbLink: 'https://www.imdb.com/list/ls066621524/',
    },
    {
      title: 'No Country for Old Men',
      year: 2007,
      synopsis:
        'A hunter stumbles upon drug money, triggering a relentless pursuit by a cold-blooded killer. With fate, violence, and justice colliding, an aging sheriff watches the world slip beyond his understanding. A bleak, suspenseful thriller where silence is deadly and evil often wins.',
      actors: 'Tommy L. J. • Javier B. • Josh B.',
      duration: 122,
      imdb: 8.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088731/noCountryForOldMen_bvxm0q.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0477348/',
    },
    {
      title: 'Inglourious Basterds',
      year: 2009,
      synopsis:
        'A group of Jewish-American soldiers wages a brutal guerrilla war against the Nazis in occupied France. Meanwhile, a young cinema owner plots fiery revenge of her own. With explosive tension and twisted humor, this alternate-history epic blends pulp fiction flair with a ruthless rewrite of World War II.',
      actors: 'Brad P. • Christoph W. • Mélanie L.',
      duration: 153,
      imdb: 8.4,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088709/inglouriousBasterds_uzog9k.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0361748/',
    },
    {
      title: 'The Boy in the Striped Pajamas',
      year: 2008,
      synopsis:
        "Through a child’s innocent eyes, a forbidden friendship forms between a Nazi commander's son and a boy in a concentration camp. Unaware of the horrors surrounding them, their bond leads to a devastating conclusion. A haunting story of innocence, ignorance, and the tragic cost of war.",
      actors: 'Asa B. • Jack S. • Vera F.',
      duration: 94,
      imdb: 7.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088716/theBoyInTheStripedPajamas_ok52qb.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0914798/',
    },
    {
      title: 'Star Wars',
      year: '1977–2019',
      synopsis:
        'In a galaxy torn by tyranny, a young farm boy discovers his destiny as a Jedi. With rebels, droids, and a mysterious Force, he joins a fight against an evil empire. Lightsabers clash, legends rise, and hope ignites in a timeless battle between darkness and light.',
      actors: 'Mark H. • Harrison F. • Carrie F.',
      duration: '121–152',
      imdb: 7.4,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088706/starWarsEpisodeIvANewHope_l1fosw.jpg',
      imdbLink: 'https://www.imdb.com/list/ls029559286/',
    },
    {
      title: "Jennifer's Body",
      year: 2009,
      synopsis:
        'After a demonic ritual gone wrong, high school queen Jennifer becomes a man-eating succubus. As boys disappear, her quiet best friend must stop the horror consuming their town. A darkly funny, feminist twist on horror tropes—where popularity bites back and evil wears lip gloss.',
      actors: 'Megan F. • Amanda S. • Adam B.',
      duration: 102,
      imdb: 5.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088700/jennifersBody_a2acw5.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1131734/',
    },
    {
      title: 'The Amazing Spider-Man',
      year: '2012–2014',
      synopsis:
        'Peter Parker discovers hidden secrets about his parents and gains powers after a fateful spider bite. Balancing high school, romance, and responsibility, he becomes a masked hero. As new villains emerge, he swings into action—learning that being amazing comes with sacrifice, secrets, and strength beyond the surface.',
      actors: 'Andrew G. • Emma S. • Rhys I.',
      duration: '136–142',
      imdb: 6.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088712/theAmazingSpiderMan_app4ki.jpg',
      imdbLink: 'https://www.imdb.com/list/ls047442667/',
    },
  ];

  const series = [
    {
      title: 'Mr. Robot',
      year: '2015-2019',
      synopsis:
        'A brilliant but troubled hacker is recruited by an underground group to take down corrupt corporations. As his reality begins to blur, he struggles with identity, morality, and mental illness in a world of digital warfare and hidden agendas.',
      actors: 'Rami M. • Christian S. • Carly C.',
      duration: '40-45',
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088712/mrRobot_hx6no2.jpg',
      imdbLink: 'https://www.imdb.com/title/tt4158110/',
    },
    {
      title: 'Hannibal',
      year: '2013-2015',
      synopsis:
        'FBI profiler Will Graham partners with psychiatrist Dr. Hannibal Lecter to solve gruesome crimes, unaware Lecter is secretly a cannibalistic killer. A dark psychological game unfolds as their bond deepens in chilling and disturbing ways.',
      actors: 'Mads M. • Hugh D. • Laurence F.',
      duration: '40-45',
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088711/hannibal_tgr7eb.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2243973/',
    },
    {
      title: 'You',
      year: '2018-2025',
      synopsis:
        'A charming but dangerously obsessive man uses technology and manipulation to insert himself into the lives of the women he loves. As he spirals deeper into obsession, his twisted sense of romance leaves destruction in his wake.',
      actors: 'Penn B. • Victoria P. • Elizabeth L.',
      duration: '40-50',
      imdb: 7.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088718/you_phmfxq.jpg',
      imdbLink: 'https://www.imdb.com/title/tt7335184/',
    },
    {
      title: 'The Rain',
      year: '2018-2020',
      synopsis:
        'Years after a deadly virus carried by rainfall wipes out much of Scandinavia, two siblings join a group of survivors in search of safety. As they travel through a ravaged world, they uncover dark secrets about the virus and themselves.',
      actors: 'Alba A. • Lucas L. • Mikkel F.',
      duration: '40-50',
      imdb: 6.3,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088719/theRain_ms7g2p.jpg',
      imdbLink: 'https://www.imdb.com/title/tt6656238/',
    },
    {
      title: 'The Big Bang Theory',
      year: '2007-2019',
      synopsis:
        'A group of socially awkward scientists navigate friendships, relationships, and pop culture in hilarious ways. As they grow personally and professionally, their geeky antics and witty banter redefine the dynamics of modern sitcoms.',
      actors: 'Jim P. • Johnny G. • Kaley C.',
      duration: '20-22',
      imdb: 8.1,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088763/theBigBangTheory_tamhjp.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0898266/',
    },
    {
      title: 'Severance',
      year: '2022-',
      synopsis:
        'In a mysterious corporation, employees undergo a procedure that separates work memories from personal ones. When the lines between both worlds blur, a gripping mystery unfolds around identity, free will, and corporate control.',
      actors: 'Adam S. • Britt L. • Patricia A.',
      duration: '45-50',
      imdb: 8.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524220/severance_ftdvxr.jpg',
      imdbLink: 'https://www.imdb.com/title/tt11280740/',
    },
    {
      title: 'The Penguin',
      year: '2024',
      synopsis:
        "After Gotham descends into chaos, Oswald Cobblepot—better known as The Penguin—rises through the criminal ranks. In a gritty battle for power, he faces betrayal, ambition, and his own dark legacy in the wake of Batman's absence.",
      actors: 'Colin F. • Cristin M. • Clancy B.',
      duration: '50-60',
      imdb: 8.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524221/thePenguin_vhtwu5.jpg',
      imdbLink: 'https://www.imdb.com/title/tt15435876/',
    },
    {
      title: 'Peacemaker',
      year: '2022-',
      synopsis:
        'After the events of The Suicide Squad, Peacemaker joins a covert black ops team to maintain peace at any cost—even if it means killing for it. His journey challenges his beliefs as he confronts his past and questions his brutal methods.',
      actors: 'John C. • Danielle B. • Freddie S.',
      duration: '39-46',
      imdb: 8.3,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524219/peacemaker_toqswn.jpg',
      imdbLink: 'https://www.imdb.com/title/tt13146488/',
    },
    {
      title: 'The Sopranos',
      year: '1999-2007',
      synopsis:
        'Tony Soprano, a mob boss juggling criminal duties and family life, seeks therapy to cope with anxiety. As he navigates betrayal, violence, and power, his dual life threatens to collapse in this groundbreaking psychological crime drama.',
      actors: 'James G. • Edie F. • Lorraine B.',
      duration: '50-60',
      imdb: 9.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524221/theSopranos_rhhfwu.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0141842/',
    },
    {
      title: 'Breaking Bad',
      year: '2008-2013',
      synopsis:
        'A high school chemistry teacher turns to cooking meth after a cancer diagnosis. As he descends into the drug underworld, he transforms into a ruthless figure, risking everything for power, pride, and a twisted sense of legacy.',
      actors: 'Bryan C. • Aaron P. • Anna G.',
      duration: '45-50',
      imdb: 9.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524227/breakingBad_iirqzz.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0903747/',
    },
    {
      title: 'Better Call Saul',
      year: '2015-2022',
      synopsis:
        'Before he became Saul Goodman, Jimmy McGill was a small-time lawyer with big ambitions. This prequel to Breaking Bad explores his morally complex path, full of cons, heart, and tragedy, toward becoming the criminal lawyer we know.',
      actors: 'Bob O. • Rhea S. • Jonathan B.',
      duration: '45-55',
      imdb: 9.0,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524227/betterCallSaul_qu0xck.jpg',
      imdbLink: 'https://www.imdb.com/title/tt3032476/',
    },
    {
      title: 'Dune: Prophecy',
      year: '2024-',
      synopsis:
        'Set long before the rise of Paul Atreides, this series follows the origins of the Bene Gesserit. As political and spiritual tensions rise across the galaxy, the sisterhood’s secretive influence grows in a deadly quest for power.',
      actors: 'Emily W. • Olivia W. • Travis F.',
      duration: '50-60',
      imdb: 7.3,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524219/duneProphecy_etkawb.jpg',
      imdbLink: 'https://www.imdb.com/title/tt10466872/',
    },
    {
      title: 'Game of Thrones',
      year: '2011-2019',
      synopsis:
        'Noble families clash for control of the Iron Throne in a sprawling fantasy world where loyalty is fragile and winter is always coming. Dragons, betrayal, and ambition drive this epic saga of power, bloodlines, and destiny.',
      actors: 'Emilia C. • Kit H. • Peter D.',
      duration: '50-60',
      imdb: 9.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524219/gameOfThrones_ety8wm.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0944947/',
    },
    {
      title: 'The Last of Us',
      year: '2023-',
      synopsis:
        'After a fungal outbreak decimates humanity, a hardened survivor escorts a mysterious young girl across a post-apocalyptic America. Their bond deepens as they face monstrous threats and the haunting cost of survival.',
      actors: 'Pedro P. • Bella R. • Anna T.',
      duration: '45-60',
      imdb: 8.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524221/theLastOfUs_xucuic.jpg',
      imdbLink: 'https://www.imdb.com/title/tt3581920/',
    },
    {
      title: 'The Office',
      year: '2005-2013',
      synopsis:
        'A mockumentary about the mundane yet hilarious lives of office workers at Dunder Mifflin. With awkward romances, quirky coworkers, and absurd moments, it’s a heartwarming and comical dive into everyday corporate chaos.',
      actors: 'Steve C. • Rainn W. • John K.',
      duration: '22-25',
      imdb: 9,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524221/theOffice_h43yes.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0386676/',
    },
    {
      title: 'Cobra Kai',
      year: '2018-2025',
      synopsis:
        'Decades after the events of Karate Kid, Johnny Lawrence reopens Cobra Kai dojo, reigniting his rivalry with Daniel LaRusso. Old grudges and new students collide in a fierce battle of philosophies, legacy, and redemption.',
      actors: 'Ralph M. • William Z. • Xolo M.',
      duration: '30-40',
      imdb: 8.4,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524227/cobraKai_rasvs0.jpg',
      imdbLink: 'https://www.imdb.com/title/tt7221388/',
    },
    {
      title: 'Dark',
      year: '2017-2020',
      synopsis:
        'In a small German town, the disappearance of a boy uncovers a time-travel conspiracy spanning generations. Families are connected in haunting ways as past, present, and future collide in this mind-bending sci-fi thriller.',
      actors: 'Louis H. • Lisa V. • Andreas P.',
      duration: '45-55',
      imdb: 8.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524219/dark_mtqe1h.jpg',
      imdbLink: 'https://www.imdb.com/title/tt5753856/',
    },
    {
      title: 'Adolescence',
      year: '2025',
      synopsis:
        'A raw exploration of teenage life, where identity, love, trauma, and rebellion intertwine. As emotions intensify, the characters struggle to find meaning and belonging in a world that feels both intimate and overwhelming.',
      actors: 'Owen C. • Stephen G. • Erin D.',
      duration: '51–65',
      imdb: 8.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524227/adolescence_v4eae2.jpg',
      imdbLink: 'https://www.imdb.com/title/tt31806037/',
    },
    {
      title: 'Atlanta',
      year: '2016-2022',
      synopsis:
        "Earn and his cousin Paper Boi try to make it in Atlanta's rap scene, navigating fame, race, and surreal situations. The show blends sharp social commentary with dark humor, creating a unique and unpredictable cultural lens.",
      actors: 'Donald G. • Brian T. H. • Lakeith S.',
      duration: '25-35',
      imdb: 8.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524227/atlanta_diqvrk.jpg',
      imdbLink: 'https://www.imdb.com/title/tt4288182/',
    },
    {
      title: 'Cowboy Bebop',
      year: '2021',
      synopsis:
        'In a stylish space-western future, bounty hunters Spike, Jet, and Faye chase criminals across the solar system. Beneath their cool exteriors lie deep scars, as the crew of the Bebop confronts the pasts they can’t outrun.',
      actors: 'John C. • Mustafa S. • Daniella P.',
      duration: '35-45',
      imdb: 6.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524227/cowboyBebop_cawutq.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1267295/',
    },
    {
      title: 'Black Mirror',
      year: '2011-2019',
      synopsis:
        'A chilling anthology that explores the dark side of technology and human nature. Each standalone episode presents a near-future scenario where innovation collides with moral decay, often with shocking and thought-provoking results.',
      actors: 'Bryce D. • Jesse P. • Hayley A.',
      duration: '40-60',
      imdb: 8.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524227/blackMirror_pbybpe.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2085059/',
    },
    {
      title: 'Stranger Things',
      year: '2016-2024',
      synopsis:
        'When a boy vanishes, his friends uncover a government experiment, a telekinetic girl, and a parallel dimension called the Upside Down. With ‘80s nostalgia and supernatural terror, the town of Hawkins becomes ground zero for mystery.',
      actors: 'Millie B. • Finn W. • David H.',
      duration: '45-60',
      imdb: 8.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524220/strangerThings_fi1n0i.jpg',
      imdbLink: 'https://www.imdb.com/title/tt4574334/',
    },
    {
      title: 'Narcos',
      year: '2015-2017',
      synopsis:
        'Follow the real-life rise and fall of drug kingpins like Pablo Escobar in this gripping crime drama. As law enforcement races to stop the growing cartels, power, greed, and violence reshape the world of the drug trade.',
      actors: 'Wagner M. • Pedro P. • Boyd H.',
      duration: '45-55',
      imdb: 8.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524228/d12423e338722a169b879194bbd0d873_uqhede.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2707408/',
    },
    {
      title: 'The Witcher',
      year: '2019-',
      synopsis:
        'Geralt of Rivia, a monster hunter with a mysterious past, navigates a dark fantasy world filled with war, magic, and mutated beasts. Fate ties him to a powerful child and a sorceress as chaos threatens the Continent.',
      actors: 'Henry C. • Anya C. • Freya A.',
      duration: '45-60',
      imdb: 7.9,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524221/theWitcher_c00wii.jpg',
      imdbLink: 'https://www.imdb.com/title/tt5180504/',
    },
    {
      title: 'The Crown',
      year: '2016-2023',
      synopsis:
        'A dramatized chronicle of Queen Elizabeth II’s reign, revealing the personal and political challenges behind the British monarchy. As the world changes, the royal family grapples with duty, scandal, and the weight of tradition.',
      actors: 'Claire F. • Olivia C. • Imelda S.',
      duration: '50-60',
      imdb: 8.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524220/theCrown_ctw4tx.jpg',
      imdbLink: 'https://www.imdb.com/title/tt4786824/',
    },
    {
      title: 'Sherlock',
      year: '2010-2017',
      synopsis:
        'A modern twist on the classic detective, Sherlock Holmes uses brilliant deduction and tech-savvy methods to solve London’s toughest crimes. Alongside Dr. Watson, he faces deadly foes and unravels mind-bending mysteries.',
      actors: 'Benedict C. • Martin F. • Andrew S.',
      duration: '85-90',
      imdb: 9.1,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524220/sherlock_ep9tts.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1475582/',
    },
    {
      title: 'Fargo',
      year: '2014-2024',
      synopsis:
        'Inspired by the Coen Brothers’ film, each season delivers a new tale of crime and morality in the Midwest. Ordinary people are drawn into extraordinary violence, revealing how far they’ll go when pushed to the edge.',
      actors: 'Billy B. • Kirsten D. • Ewan M.',
      duration: '50-60',
      imdb: 8.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524219/fargo_wq7kuz.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2802850/',
    },
    {
      title: 'The Boys',
      year: '2019-',
      synopsis:
        'In a world where superheroes are corrupted by fame and power, a vigilante group known as The Boys fights to expose them. Brutal, satirical, and darkly funny, the show dismantles the myth of heroism one bloody punch at a time.',
      actors: 'Karl U. • Jack Q. • Antony S.',
      duration: '55-60',
      imdb: 8.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524220/theBoys_thihso.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1190634/',
    },
    {
      title: 'Loki',
      year: '2021-2023',
      synopsis:
        'After stealing the Tesseract, Loki finds himself caught by the Time Variance Authority. As timelines unravel, he faces alternate versions of himself and must confront who he is—and what kind of god he truly wants to be.',
      actors: 'Tom H. • Owen W. • Sophia D.M.',
      duration: '40-50',
      imdb: 8.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524219/loki_p1ro5m.jpg',
      imdbLink: 'https://www.imdb.com/title/tt9140554/',
    },
    {
      title: 'The Umbrella Academy',
      year: '2019-2024',
      synopsis:
        'Adopted by an eccentric billionaire, seven superpowered siblings reunite to stop an impending apocalypse. Dysfunctional and quirky, they face time travel, family trauma, and wild twists in this chaotic superhero tale.',
      actors: 'Elliot P. • Tom H. • Emmy R.L.',
      duration: '45-60',
      imdb: 7.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524221/theUmbrellaAcademy_w90cj4.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1312171/',
    },
    {
      title: 'La Casa de Papel',
      year: '2017-2021',
      synopsis:
        'A criminal mastermind recruits a team to execute a perfect heist on Spain’s Royal Mint. As the plan unfolds, loyalties are tested and emotions rise, turning the robbery into a high-stakes psychological and political drama.',
      actors: 'Álvaro M. • Úrsula C. • Pedro A.',
      duration: '40-50',
      imdb: 8.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524220/laCasaDePapel_wnlngw.jpg',
      imdbLink: 'https://www.imdb.com/title/tt6468322/',
    },
    {
      title: 'The Handmaid’s Tale',
      year: '2017-2025',
      synopsis:
        'In a dystopian future where fertility is rare, women are forced into servitude by a theocratic regime. Offred fights to survive and resist, clinging to hope, identity, and the memory of the life she once had.',
      actors: 'Elisabeth M. • Yvonne S. • Joseph F.',
      duration: '50-60',
      imdb: 8.3,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524220/theHandmaidsTale_semgrm.jpg',
      imdbLink: 'https://www.imdb.com/title/tt5834204/',
    },
    {
      title: 'Peaky Blinders',
      year: '2013-2022',
      synopsis:
        'After WWI, the Shelby crime family rises in Birmingham, England, led by the ambitious and ruthless Tommy Shelby. Power, betrayal, and violence define their journey as they build an empire in a volatile world.',
      actors: 'Cillian M. • Paul A. • Helen M.',
      duration: '55-60',
      imdb: 8.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524219/peakyBlinders_ugyikl.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2442560/',
    },
    {
      title: 'Dexter',
      year: '2006-2013',
      synopsis:
        'By day, Dexter is a forensic expert for Miami PD. By night, he’s a meticulous serial killer who targets other killers. Torn between his dark urges and a desire for normalcy, he walks a razor-thin moral line.',
      actors: 'Michael C. H. • Jennifer C. • David Z.',
      duration: '50-55',
      imdb: 8.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524219/dexter_a5dtqt.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0773262/',
    },
    {
      title: 'Pose',
      year: '2018-2021',
      synopsis:
        'Set in 1980s and ’90s New York, Pose explores the vibrant world of ballroom culture, highlighting LGBTQ+ communities and the impact of the AIDS crisis. It’s a powerful celebration of identity, resilience, and chosen family.',
      actors: 'Mj R. • Billy P. • Dominique J.',
      duration: '45-60',
      imdb: 8.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524219/pose_niqzbk.jpg',
      imdbLink: 'https://www.imdb.com/title/tt7562112/',
    },
    {
      title: 'The Punisher',
      year: '2017-2019',
      synopsis:
        'After his family is murdered, Frank Castle becomes the Punisher, waging a brutal war on crime. Driven by vengeance and haunted by trauma, he dismantles corrupt systems with lethal precision and unflinching resolve.',
      actors: 'Jon B. • Ben B. • Amber R.',
      duration: '50-55',
      imdb: 8.4,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524221/thePunisher_zt4iju.jpg',
      imdbLink: 'https://www.imdb.com/title/tt5675620/',
    },
    {
      title: 'Bates Motel',
      year: '2013-2017',
      synopsis:
        "A modern prequel to Psycho, the series explores Norman Bates' descent into madness. As he and his mother Norma navigate secrets, murder, and mental illness, a chilling transformation begins in their sleepy motel.",
      actors: 'Freddie H. • Vera F. • Max T.',
      duration: '40-45',
      imdb: 8.1,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524227/batesMotel_fnn4p6.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2188671/',
    },
    {
      title: 'WandaVision',
      year: '2021',
      synopsis:
        'Wanda Maximoff and Vision live an idyllic suburban life—until cracks appear in their reality. As their perfect world unravels, Wanda must confront grief, power, and the consequences of bending reality to her will.',
      actors: 'Elizabeth O. • Paul B. • Kathryn H.',
      duration: '30-40',
      imdb: 7.9,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524223/wandaVision_jj81rl.jpg',
      imdbLink: 'https://www.imdb.com/title/tt9140560/',
    },
    {
      title: 'Hilda Hurricane',
      year: '1998',
      synopsis:
        "Set in the turbulent world of 1950s Brazil, 'Hilda Hurricane' follows the life of Hilda, a young woman who rises from poverty to become a powerful figure in Rio de Janeiro’s nightlife. As she navigates love, betrayal, and ambition, Hilda grapples with the cost of her desires.",
      actors: 'Ana P. • Rodrigo S. • Stênio G.',
      duration: '45-50',
      imdb: 8.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1745524219/hildaHurricane_y09wjx.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0163450/',
    },
  ];

  const animes = [
    {
      title: 'Berserk',
      year: '1997-1998',
      synopsis:
        'A lone mercenary haunted by a cursed past battles his way through a world of war, demons, and betrayal. As he faces relentless enemies and inner torment, Guts forges his own fate with a massive sword and an unbreakable will.',
      studio: 'Oriental Light and Magic',
      duration: '20-25',
      imdb: 8.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088717/berserk_vdgwj5.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0318871/',
    },
    {
      title: 'One Piece',
      year: '1999-',
      synopsis:
        'A boy with a rubber body and a dream of becoming Pirate King sets sail in search of a legendary treasure. Alongside his quirky crew, Luffy braves vast seas, strange islands, and powerful foes in a journey of freedom and friendship.',
      studio: 'Toei Animation',
      duration: '20-25',
      imdb: 9,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088792/onePiece_p5ufme.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0388629/',
    },
    {
      title: 'Forest of Piano',
      year: '2018-2019',
      synopsis:
        'A gifted boy from a rough background finds solace in an abandoned piano deep in the woods. As his talent blooms, he enters a world of classical music where passion, rivalry, and his mysterious gift take center stage.',
      studio: 'Gaina',
      duration: '23-25',
      imdb: 7.3,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088735/forestOfPiano_aq1acl.jpg',
      imdbLink: 'https://www.imdb.com/title/tt8043492/',
    },
    {
      title: 'Devilman: Crybaby',
      year: '2018',
      synopsis:
        'When demons return to reclaim the Earth, a kind-hearted teen merges with a powerful devil to protect humanity. As chaos erupts, he battles monstrous threats and moral dilemmas, blurring the line between good and evil.',
      studio: 'Science SARU',
      duration: '23-25',
      imdb: 7.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088719/devilmanCrybaby_yqn9pw.jpg',
      imdbLink: 'https://www.imdb.com/title/tt6660498/',
    },
    {
      title: "Don't Toy With Me, Miss Nagatoro",
      year: '2021-',
      synopsis:
        'A shy student finds his quiet life turned upside down by a mischievous underclassman who loves teasing him. As their odd bond grows, beneath the taunts and blushes blooms a surprising connection neither expected.',
      studio: 'Telecom Animation Film • OLM',
      duration: '23-25',
      imdb: 7.1,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088792/nagatoro_gjzrv7.jpg',
      imdbLink: 'https://www.imdb.com/title/tt12635162/',
    },
    {
      title: 'Death Note',
      year: '2006-2007',
      synopsis:
        'A brilliant student discovers a notebook that kills anyone whose name is written in it. Driven by a god complex, he sparks a deadly cat-and-mouse game with a genius detective determined to stop his reign of terror.',
      studio: 'Madhouse',
      duration: '23-24',
      imdb: 8.9,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088720/deathNote_qaynvl.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0877057/',
    },
    {
      title: 'Tokyo Ghoul',
      year: '2014-2018',
      synopsis:
        'A shy college student becomes part-human, part-ghoul after a fateful encounter. Struggling between two worlds, he must adapt to a dark, violent underworld while holding onto the last pieces of his humanity.',
      studio: 'Studio Pierrot',
      duration: '23-24',
      imdb: 7.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088794/tokyoGhoul_mq08ui.jpg',
      imdbLink: 'https://www.imdb.com/title/tt3741634/',
    },
    {
      title: 'Dan Da Dan',
      year: '2024-',
      synopsis:
        'A skeptic boy and a girl who believes in the supernatural stumble into bizarre battles with aliens and ghosts. As they dive deeper into strange phenomena, their bond grows amid chaos, comedy, and wild adventures.',
      studio: 'Science SARU',
      duration: '23-24',
      imdb: 8.4,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088717/danDaDan_zsn9nl.jpg',
      imdbLink: 'https://www.imdb.com/title/tt30217403/',
    },
    {
      title: 'Bleach',
      year: '2004-2023',
      synopsis:
        'A teenager gains the powers of a Soul Reaper and is thrust into the duty of guiding souls and battling deadly spirits. As hidden realms unfold, Ichigo must protect the living and the dead while uncovering secrets of his power.',
      studio: 'Studio Pierrot',
      duration: '23-24',
      imdb: 8.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088762/bleach_t0ymlg.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0434665/',
    },
    {
      title: 'cyberpunk: Edgerunners',
      year: '2022',
      synopsis:
        'In a dystopian future, a street kid joins a crew of cyber-enhanced mercenaries to survive the brutal city of Night City. As he upgrades his body and dives into deadly jobs, the cost of ambition becomes dangerously high.',
      studio: 'Studio Trigger',
      duration: '23-25',
      imdb: 8.3,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088730/cyberpunkEdgerunners_jik4nv.jpg',
      imdbLink: 'https://www.imdb.com/title/tt12590266/',
    },
    {
      title: 'Akira',
      year: '1988',
      synopsis:
        'In a dystopian Neo-Tokyo, biker Kaneda gets drawn into a military secret when his friend Tetsuo gains destructive psychic powers. As chaos rises, Kaneda must confront both government conspiracies and the explosive force his friend becomes.',
      studio: 'Tokyo Movie Shinsha',
      duration: '124',
      imdb: 8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088732/akira_blckmp.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0094625/',
    },
    {
      title: 'Ghost in the Shell',
      year: '1995',
      synopsis:
        'Cyborg agent Major Kusanagi hunts a mysterious hacker known as the Puppet Master in a high-tech future. As the lines between human and machine blur, she questions her identity, purpose, and what it truly means to have a soul.',
      studio: 'Production I.G',
      duration: '23-24',
      imdb: 7.9,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088809/ghostInTheShell_e9t5hs.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0113568/',
    },
    {
      title: 'Cowboy Bebop',
      year: '1998-1999',
      synopsis:
        'A ragtag crew of bounty hunters—Spike, Jet, Faye, Ed, and Ein—drift through space on the Bebop chasing criminals and running from their pasts. Stylish, soulful, and packed with action, their journey is a mix of jazz and melancholy.',
      studio: 'Sunrise',
      duration: '23-24',
      imdb: 8.9,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088715/cowboyBebop_zex6np.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0213338/',
    },
    {
      title: 'Neon Genesis Evangelion',
      year: '1995-1996',
      synopsis:
        'Teenager Shinji is recruited to pilot a giant robot and protect Earth from monstrous beings known as Angels. But beneath the battles lie deep psychological trauma, religious symbolism, and humanity’s desperate struggle to survive.',
      studio: 'Gainax • Tatsunoko Production',
      duration: '23-24',
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088733/neonGenesisEvangelion_trcek5.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0112159/',
    },
    {
      title: "Jojo's Bizarre Adventure",
      year: '2012-',
      synopsis:
        'Generations of the Joestar family face supernatural foes using unique powers called Stands. From Victorian England to modern Japan, this epic saga blends flamboyant style, wild action, and dramatic family legacies.',
      studio: 'David Production',
      duration: '23-24',
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088731/jojosBizarreAdventure_ma8ilq.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2359704/',
    },
    {
      title: 'Naruto',
      year: '2002-2007',
      synopsis:
        'Naruto Uzumaki, a young ninja with a sealed demon fox inside him, dreams of becoming Hokage to gain the village’s respect. With determination and powerful bonds, he faces dangerous enemies and learns the true strength of friendship.',
      studio: 'Studio Pierrot',
      duration: '23-24',
      imdb: 8.4,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088733/naruto_ivmjis.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0409591/',
    },

    {
      title: 'Dragon Ball Z',
      year: '1996-2003',
      synopsis:
        "Earth's greatest warrior, Goku, defends the planet against powerful foes—from space tyrants to androids. With epic battles, Saiyan transformations, and fierce loyalty, DBZ redefined action anime for generations to come.",
      studio: 'Toei Animation',
      duration: '23-24',
      imdb: 8.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088719/dragonBallZ_jlp8iv.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0214341/',
    },

    {
      title: 'Jujutsu Kaisen',
      year: '2020-',
      synopsis:
        'Yuji Itadori swallows a cursed finger to save his friends, becoming host to a powerful demon. Enrolled in a secret sorcery school, he battles deadly curses while uncovering a dark world of magic, monsters, and moral complexity.',
      studio: 'MAPPA',
      duration: '23-24',
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088792/jujutsuKaisen_iz8hc0.jpg',
      imdbLink: 'https://www.imdb.com/title/tt12343534/',
    },

    {
      title: 'Castlevania',
      year: '2017-2021',
      synopsis:
        'Monster hunter Trevor Belmont, a sorceress, and a vampire forge an uneasy alliance to battle Dracula, who seeks revenge on humanity. Based on the video game, this gothic tale is bloody, emotional, and deeply atmospheric.',
      studio: 'Powerhouse Animation Studios',
      duration: '23-25',
      imdb: 8.3,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088729/castlevania_mz20dr.jpg',
      imdbLink: 'https://www.imdb.com/title/tt6517102/',
    },

    {
      title: 'Dr. Stone',
      year: '2019-',
      synopsis:
        'After humanity is mysteriously petrified, genius teen Senku wakes up thousands of years later. Using science and wit, he vows to rebuild civilization from scratch, one invention at a time, in a thrilling blend of brains and survival.',
      studio: 'TMS Entertainment',
      duration: '23-24',
      imdb: 8.1,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088762/drStone_xegpzt.jpg',
      imdbLink: 'https://www.imdb.com/title/tt9679542/',
    },

    {
      title: 'Hunter x Hunter',
      year: '2011-2014',
      synopsis:
        'Gon Freecss becomes a Hunter to find his absent father and explore the world. Alongside friends Killua, Leorio, and Kurapika, he faces dangerous trials, complex villains, and moral dilemmas that challenge what it means to be strong.',
      studio: 'Madhouse',
      duration: '23-24',
      imdb: 9.0,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088728/hunterXHunter_f8jee2.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2098220/',
    },

    {
      title: 'Demon Slayer',
      year: '2019-',
      synopsis:
        'After his family is slaughtered and his sister turned into a demon, Tanjiro joins the Demon Slayer Corps. With a burning will and blade in hand, he battles powerful demons to avenge his family and save his sister’s humanity.',
      studio: 'ufotable',
      duration: '23-24',
      imdb: 8.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088765/demonSlayer_hezs0q.jpg',
      imdbLink: 'https://www.imdb.com/title/tt9335498/',
    },

    {
      title: 'Mob Psycho 100',
      year: '2016-2022',
      synopsis:
        'Shigeo “Mob” Kageyama is a powerful psychic trying to live a normal life. But when emotions run high, so does his power. Torn between self-control and overwhelming force, Mob must discover who he truly wants to be.',
      studio: 'Bones',
      duration: '23-24',
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088764/mobPsycho100_bqq5dj.jpg',
      imdbLink: 'https://www.imdb.com/title/tt5897304/',
    },

    {
      title: 'Tenkû Shinpan',
      year: '2021',
      synopsis:
        'Trapped in a world of towering skyscrapers and masked killers, high schooler Yuri fights to survive. As she searches for her brother and the truth, she faces brutal choices in a deadly game ruled by chaos and control.',
      studio: 'Zero-G',
      duration: '23-24',
      imdb: 6.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088728/highRiseInvasion_cl7nn8.jpg',
      imdbLink: 'https://www.imdb.com/title/tt13352232/',
    },

    {
      title: 'One Punch Man',
      year: '2015-',
      synopsis:
        'Saitama’s unmatched strength lets him defeat any foe with a single punch—leaving him bored and unfulfilled. In a world full of monsters and heroes, he searches for meaning, excitement, and a true challenge worthy of his power.',
      studio: 'Madhouse • J.C.Staff',
      duration: '23-24',
      imdb: 8.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088734/onePunchMan_yfooqf.jpg',
      imdbLink: 'https://www.imdb.com/title/tt4508902/',
    },
    {
      title: 'Vinland Saga',
      year: '2019-2023',
      synopsis:
        'Thorfinn, a young Viking warrior, seeks revenge on the man who killed his father. Amid brutal battles and shifting allegiances, he grapples with the meaning of honor, vengeance, and the pursuit of a true paradise—Vinland.',
      studio: 'Wit Studio • MAPPA',
      duration: '23-24',
      imdb: 8.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088764/vinlandSaga_e7dr82.jpg',
      imdbLink: 'https://www.imdb.com/title/tt10233448/',
    },

    {
      title: 'Baki',
      year: '2016-2020',
      synopsis:
        'Baki Hanma trains relentlessly to surpass his monstrous father, the strongest fighter alive. Facing deadly martial artists from around the world, Baki battles through brutal underground matches fueled by pain, pride, and raw power.',
      studio: 'TMS Entertainment',
      duration: '23-24',
      imdb: 6.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088716/baki_c4kvhh.jpg',
      imdbLink: 'https://www.imdb.com/title/tt6357658/',
    },

    {
      title: 'Yu-Gi-Oh!',
      year: '2000-2006',
      synopsis:
        'Yugi, a shy teen, awakens the spirit of an ancient Pharaoh through a mystical puzzle. Together, they face shadow games and sinister opponents in high-stakes duels, where every card could mean victory—or total defeat.',
      studio: 'Studio Gallop',
      duration: '23-24',
      imdb: 7.3,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088794/yuGiOh_jw61vn.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0249327/',
    },

    {
      title: 'Pokémon',
      year: '1997-2023',
      synopsis:
        'Aspiring Pokémon Master Ash Ketchum travels the world with Pikachu and friends to catch creatures, win battles, and earn badges. Along the way, he learns about friendship, perseverance, and the heart behind every Poké Ball.',
      studio: 'OLM',
      duration: '23-24',
      imdb: 7.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088734/pokemon_kbfkd8.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0168366/',
    },

    {
      title: 'Black Clover',
      year: '2017-2021',
      synopsis:
        'In a world where magic defines everything, Asta is born without any. With sheer will and a mysterious anti-magic grimoire, he vows to become the Wizard King, defying fate in an epic tale of rivalry, power, and unbreakable dreams.',
      studio: 'Studio Pierrot',
      duration: '23-24',
      imdb: 8.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088718/blackClover_yj7lce.jpg',
      imdbLink: 'https://www.imdb.com/title/tt7441658/',
    },

    {
      title: 'My Hero Academia',
      year: '2016-',
      synopsis:
        'In a world where superpowers are the norm, Izuku Midoriya is born powerless—but dreams of becoming a hero. After inheriting a legendary Quirk, he joins U.A. High to train and fight alongside classmates against rising villain threats.',
      studio: 'Bones',
      duration: '23-24',
      imdb: 8.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088764/myHeroAcademia_pvocij.jpg',
      imdbLink: 'https://www.imdb.com/title/tt5626028/',
    },

    {
      title: 'Fire Force',
      year: '2019-',
      synopsis:
        'Spontaneous human combustion turns people into fire demons. Shinra, a pyrokinetic with a hero complex, joins Special Fire Force Company 8 to uncover the mystery behind these infernos and his family’s tragic past.',
      studio: 'David Production',
      duration: '23-24',
      imdb: 7.6,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088719/fireForce_nqziz2.jpg',
      imdbLink: 'https://www.imdb.com/title/tt9307686/',
    },

    {
      title: 'Tokyo Revengers',
      year: '2021-',
      synopsis:
        'Takemichi, a 26-year-old loser, travels back to his school days to save his ex-girlfriend from a deadly gang future. With each jump through time, he rewrites fate, fighting to change the dark path of Tokyo’s underworld.',
      studio: 'Liden Films',
      duration: '23-24',
      imdb: 7.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088762/tokyoRevengers_n6a8dn.jpg',
      imdbLink: 'https://www.imdb.com/title/tt13196080/',
    },

    {
      title: 'Samurai Champloo',
      year: '2004-2005',
      synopsis:
        'A brash samurai, a calm ronin, and a spunky waitress journey across Edo-era Japan in search of a samurai who smells of sunflowers. With hip-hop beats and slick swordfights, their wild adventure blends the old with the new.',
      studio: 'Manglobe',
      duration: '23-24',
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088793/samuraiChamploo_szunj8.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0423731/',
    },

    {
      title: 'Fullmetal Alchemist',
      year: '2003-2004',
      synopsis:
        'Brothers Edward and Alphonse Elric use forbidden alchemy to resurrect their mother—at a terrible cost. Now they seek the Philosopher’s Stone to restore their bodies, facing corruption, war, and deep truths about sacrifice.',
      studio: 'Bones',
      duration: '23-24',
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088735/fullmetalAlchemist_lkql9s.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0421357/',
    },
    {
      title: 'Initial D: First Stage',
      year: '1998',
      synopsis:
        'Takumi Fujiwara, a high schooler with unmatched drifting skills, unknowingly becomes a street racing legend. Behind the wheel of his father’s Toyota AE86, he conquers mountain passes and rivals in an adrenaline-fueled road saga.',
      studio: 'Gallop • Studio Comet',
      duration: '23-24',
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088729/initialD_pbv0ob.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0385426/',
    },

    {
      title: 'Sailor Moon',
      year: '1992-1997',
      synopsis:
        'Usagi Tsukino transforms into Sailor Moon to fight evil and protect the universe. With fellow Sailor Guardians, she battles dark forces, discovers her destiny, and embraces love and friendship in a magical girl classic.',
      studio: 'Toei Animation',
      duration: '23-24',
      imdb: 7.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088735/sailorMoon_junqlk.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0103369/',
    },

    {
      title: 'Hajime no Ippo',
      year: '2000-2002',
      synopsis:
        'Bullied teen Ippo finds confidence and purpose through boxing. Guided by passion and relentless training, he climbs the ranks of Japan’s boxing world, facing fierce opponents and discovering the true heart of the sport.',
      studio: 'Madhouse',
      duration: '23-24',
      imdb: 8.8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088727/hajimeNoIppo_a25rwe.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0481256/',
    },

    {
      title: 'Yu Yu Hakusho',
      year: '1992-1995',
      synopsis:
        'After dying saving a child, delinquent Yusuke Urameshi becomes a Spirit Detective, solving supernatural cases. With spirit energy and loyal friends, he fights demons and uncovers deadly plots across realms of the living and dead.',
      studio: 'Studio Pierrot',
      duration: '23-24',
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088767/yuYuHakusho_vpklq9.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0185133/',
    },

    {
      title: 'Hellsing Ultimate',
      year: '2006-2012',
      synopsis:
        'Vampire Alucard serves the Hellsing Organization to battle the undead and supernatural threats. As war erupts against Nazi vampires and ancient horrors, he unleashes terrifying power in a dark, blood-soaked fight for survival.',
      studio: 'Satelight • Madhouse • Graphinica',
      duration: '40-50',
      imdb: 8.2,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088766/hellsingUltimate_qtcgay.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0495212/',
    },

    {
      title: 'Inuyasha',
      year: '2000-2004',
      synopsis:
        'Kagome, a modern girl, falls into a well and ends up in feudal Japan, where she meets half-demon Inuyasha. Together, they search for shards of a sacred jewel, battling demons and unraveling a tragic, time-crossed love story.',
      studio: 'Sunrise',
      duration: '23-24',
      imdb: 7.9,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088765/inuyasha_mljdsj.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0290223/',
    },

    {
      title: 'Great Teacher Onizuka',
      year: '1999-2000',
      synopsis:
        'Eikichi Onizuka, a former gangster turned teacher, takes on the toughest class in school. Using unorthodox methods, he teaches life lessons with humor and heart, determined to connect with students no one else could reach.',
      studio: 'Studio Pierrot',
      duration: '23-24',
      imdb: 8.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088766/greatTeacherOnizuka_juemav.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0315008/',
    },

    {
      title: 'Perfect Blue',
      year: '1997',
      synopsis:
        'Mima, a pop idol turned actress, spirals into paranoia as a stalker and her own reflection blur fantasy and reality. This psychological thriller delves deep into identity, fame, and the terrifying cost of losing control.',
      studio: 'Madhouse',
      duration: '81',
      imdb: 8,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088792/perfectBlue_igxsxs.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0156887/',
    },

    {
      title: 'Tenshi no tamago',
      year: '1985',
      synopsis:
        'In a desolate, dreamlike world, a girl guards a mysterious egg. When a silent soldier appears, they journey through eerie ruins. With haunting visuals and minimal dialogue, this surreal tale explores faith, loss, and rebirth.',
      studio: 'Studio DEEN',
      duration: '71',
      imdb: 7.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088710/angelsEgg_b2b4vd.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0208502/',
    },

    {
      title: 'Mirai nikki',
      year: '2011-2013',
      synopsis:
        'Yukiteru gains a diary that predicts the future and is forced into a deadly survival game. Partnered with the obsessive and dangerous Yuno, he must outwit eleven other diary holders to become the new god of time and space.',
      studio: 'Asread',
      duration: '23-24',
      imdb: 7.4,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088761/miraiNikki_cf1983.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2069441/',
    },
    {
      title: 'Ano hi mita hana no namae o bokutachi wa mada shiranai',
      year: '2011',
      synopsis:
        'A group of childhood friends drifts apart after a tragic accident. Years later, the ghost of their lost friend appears, urging them to confront guilt, grief, and the bond they thought was broken forever.',
      studio: 'A-1 Pictures',
      duration: '23-24',
      imdb: 8.1,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088732/anoHana_q8oocu.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1913273/',
    },

    {
      title: 'Attack on Titan',
      year: '2013-2023',
      synopsis:
        'Humanity fights extinction behind massive walls, threatened by man-eating Titans. When Eren gains Titan powers, he and his friends uncover shocking truths that will change everything about their world and what it means to be free.',
      studio: 'Wit Studio • MAPPA',
      duration: '23-24',
      imdb: 9.1,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088736/attackOnTitan_twwbrs.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2560140/',
    },

    {
      title: 'Slam Dunk',
      year: '1993-1996',
      synopsis:
        'Delinquent Hanamichi Sakuragi joins his high school basketball team to impress a girl, only to discover a passion for the sport. Through fierce rivals and personal growth, he rises as a powerful player with raw potential.',
      studio: 'Toei Animation',
      duration: '23-24',
      imdb: 8.7,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088793/slamDunk_oalkd8.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0965547/',
    },

    {
      title: 'Black Lagoon',
      year: '2006',
      synopsis:
        'Rock, a businessman turned mercenary, joins the Lagoon Company—smugglers in Southeast Asia’s criminal underworld. With brutal action, moral ambiguity, and razor-sharp dialogue, this gritty anime dives deep into human darkness.',
      studio: 'Madhouse',
      duration: '23-24',
      imdb: 7.9,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088732/blackLagoon_bzwncw.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0962826/',
    },

    {
      title: 'Michiko to Hatchin',
      year: '2008-2009',
      synopsis:
        'Fugitive Michiko breaks out of prison to reunite with a girl named Hatchin. Chased by the law and haunted by their pasts, the duo embarks on a wild road trip across a vibrant, chaotic South American-inspired world.',
      studio: 'Manglobe',
      duration: '23-24',
      imdb: 7.5,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088791/michikoEHatchin_y4imrn.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1324968/',
    },
  ];

  function changeCards(dataList, list, type) {
    let currentCard = Math.floor(Math.random() * dataList.length);

    function showCard(index) {
      const data = dataList[index];

      const existingTitles = Array.from(
        document.querySelectorAll('.card-feedback h3')
      ).map((h3) => h3.textContent.trim());

      if (existingTitles.includes(data.title.trim())) {
        let nextIndex = (index + 1) % dataList.length;
        if (nextIndex === index) return;
        showCard(nextIndex);
        return;
      }

      const card = document.createElement('li');
      card.classList.add(`card-${type}`);

      card.innerHTML = `
          <div class="list-title"><h1>${type.toUpperCase()}S</h1></div>
          <div class="card-pic-${type}" style="background-image: url('${
        data.image
      }');">
          </div>
          <h2 class="name">${data.title}<span class="release-year">${
        data.year
      }</span></h2>
          <div class="info">
            <p class="synopsis">${data.synopsis}</p>
            <div class="add-info"><span>running time ${
              data.duration
            } MINUTES</span></div>
            ${
              data.actors
                ? `<div class="add-info"><span>starring</span> <span class="actors">${data.actors}</span></div>`
                : data.studio
                ? `<div class="add-info"><span>studio</span> <span class="studio">${data.studio}</span></div>`
                : ''
            }
            <a href="${data.imdbLink}" target="_blank">
              <div class="imdb-rating">${`<span class="imdb-star"></span>`.repeat(
                Math.round(data.imdb)
              )}</div>
            </a>
          </div>
          <div class="feedback-btns-container">
            <div class="feedback-btns">
              <button class="feedback-btn" id="like-button"><img src="https://res.cloudinary.com/thecultclub/image/upload/v1744088695/like-icon_g0ivt2.png" alt="Like Icon"></button>
              <p>|</p>
              <button class="feedback-btn" id="deslike-button"><img src="https://res.cloudinary.com/thecultclub/image/upload/v1744088694/deslike-icon_xs7fie.png" alt="Delike Icon"></button>
            </div>
          </div>
        `;

      list.innerHTML = '';
      list.appendChild(card);

      currentCard = index;

      const img = card.querySelector(`.card-pic-${type}`);
      img.addEventListener('click', () => {
        if (!list.classList.contains('selectedList')) return;
        let nextCard = Math.floor(Math.random() * dataList.length);
        if (nextCard === currentCard)
          nextCard = (nextCard + 1) % dataList.length;
        currentCard = nextCard;
        showCard(currentCard);
      });
    }

    showCard(currentCard);
  }

  changeCards(movies, document.querySelector('.movies-list'), 'movie');
  changeCards(series, document.querySelector('.series-list'), 'serie');
  changeCards(animes, document.querySelector('.animes-list'), 'anime');
});
