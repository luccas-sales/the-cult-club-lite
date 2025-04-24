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
      title: "Harry Potter and the Philosopher's Stone",
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
        'A brilliant but troubled hacker is recruited by an underground group to take down corrupt corporations. As he battles inner demons and digital threats, reality begins to fracture in a mind-bending game of control.',
      creator: 'Sam Esmail',
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
        'A gifted FBI profiler forms a dark bond with a charming psychiatrist—who secretly hides a monstrous appetite. As murder cases unfold, their twisted connection threatens to consume them both in a psychological spiral.',
      creator: 'Bryan Fuller',
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
        'A charming bookstore clerk hides a deadly obsession, using technology and manipulation to get close to the ones he desires. As love turns to fixation, nothing—and no one—is safe from his deadly devotion.',
      creator: 'Greg B. • Sera G.',
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
        'After a deadly virus wipes out most of Scandinavia, two siblings emerge from a bunker into a deserted world. As they search for safety and answers, they join other survivors in a journey filled with danger and hope.',
      creator: 'Jannik T. M. • Esben T. J. • Christian P.',
      duration: '35-50',
      imdb: 6.3,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088719/theRain_ms7g2p.jpg',
      imdbLink: 'https://www.imdb.com/title/tt6656238/',
    },
    {
      title: 'The Big Bang Theory',
      year: '2007-2019',
      synopsis:
        'A group of brilliant but socially awkward scientists see their world upended when a free-spirited neighbor moves in. Through science, sarcasm, and sitcom mayhem, friendships evolve in the quirkiest ways imaginable.',
      creator: 'Chuck L. • Bill P.',
      duration: '18-25',
      imdb: 8.1,
      image:
        'https://res.cloudinary.com/thecultclub/image/upload/w_1080,h_1080,c_fill,f_auto,q_auto:best,e_sharpen,e_auto_contrast/v1744088763/theBigBangTheory_tamhjp.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0898266/',
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
            <img class="mouse-touch-icon">
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
                : data.creator
                ? `<div class="add-info"><span>creator</span> <span class="creator">${data.creator}</span></div>`
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
