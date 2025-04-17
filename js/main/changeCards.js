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
