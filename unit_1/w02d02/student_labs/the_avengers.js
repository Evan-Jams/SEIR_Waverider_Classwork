// console.log('hi');

const ironMan = {
    regularName: 'Anthony Edward "Tony" Stark',
    abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
    marvelMovieAppearances: {
        ironMan: true,
        theHulk: true,
        ironManTwo: true,
        thor: false,
        captainAmerica: false,
        theAvengers: true,
        ironManThree: true,
        thorTwo: false,
        captainAmericaTwo: false,
        guardiansOfTheGalaxy: false,
        avengersTwo: true,
        antMan: false,
        captainAmericaThree: true,
        doctorStrange: false,
        guardiansOfTheGalaxyTwo: false,
        spiderManHomecoming: false,
        thorThree: false,
        blackPanther: false,
        avengersThree: true
    },
    jarvisAreYouThere: () => {
       console.log('At your service, sir')
    }
}
// console.log(ironMan.abilities[2]);

const ironManCapabilities = () => {
  for (let ability of ironMan.abilities) {
    console.log(ability);
  }
}
// ironManCapabilities()

// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);

ironMan.marvelMovieAppearances.spiderManHomecoming = true

// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);

// ironMan.jarvisAreYouThere()
// const sayPhrase = () => {
//   return('I can do this all day')
// }
const createCaptain = () => {
  return {
    aliases: {
      superheroName: 'Captain America'
    },
    abilities: ['quickness', 'whit', 'peak human strength'],
    sayPhrase: () => {
      return('I can do this all day')
    },
  }

}
//
//
//
//
// console.log(createCaptain().aliases.superheroName);
// console.log(createCaptain().abilities[2]);
console.log(createCaptain().sayPhrase());













const garmonbozia = {
  meltedFace: true,
  wobblyArms: true,
  mysteryMeats: [
    'Schlimmbinooks',
    'blangs',
    { place: 'Akrotiri', treasures: ['Minoan temples', 'volcanoes'] },
    { type: 'Yuck-tops', deliverables: [
      'Nevermind',
      { zone: 'safety-zone' },
      { zone: false, true: true },
      () => {
        return () => {
          return () => {
            return () => {
              return () => {
                return { website: 'Gossipcop.com', what: {
                  offering: 'creamed corn', location: 'dark'
                }
                }
              }
            }
          }
        }
      }
     ]
    }
  ]
}
