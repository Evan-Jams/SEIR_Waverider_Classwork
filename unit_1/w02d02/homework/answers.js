//===========================================//
//========= Data type refresher =============//
//===========================================//

// 1.
// const light = true
// // 2.
// const email = 'user@something.com'
// // 3.
// const spaceship = ['hull', 'laser blasters', 'tractor beam', 'warp drive']
// // 4.
// const classRoom = {
//      studentNames: ['John', 'Jamal', 'Ben',]
//    }
// // 5.
// const classRoom = {
//      studentNames: {
//        John: {
//          location: 'city'
//        },
//        Jamal: {
//          location: 'small town'
//        },
//        Ben: {
//          location: 'woods'
//        },
//      }
//    }
//
// //6.
// const classRoom = {
//      studentNames: [{
//        John: {
//           location: 'city',
//           favoriteShows: ['one', 'two', 'three']
//      },
//        Jamal: {
//           location: 'small town',
//           favoriteShows: ['one', 'two', 'three']
//      },
//        Ben: {
//           location: 'woods',
//           favoriteShows: ['one', 'two', 'three']
//      },
//      }
//    ]
//    }

//===========================================//
//============= Take it Easy ================//
//===========================================//

// 1.
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

// 2.
// console.log(rainbow[4]);

// 3.
const evanJames = {
  favoriteFood: 'Chicken Pot Pie',
  hobby: 'Snowboarding',
  residency: 'Gloucester',
  favoriteDataType: 'Function'
}

// 4.
// console.log(evanJames.hobby);

//===========================================//
//=========== Crazy Object ==================//
//===========================================//

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

// 1.
// console.log(crazyObject.taco[1].salsa[5]);

// 2.
// console.log(crazyObject.larry.quotes[0]);

// 3.
// console.log(crazyObject.larry.characters[2].favourtieHobby);

// 4.
// console.log(crazyObject.larry.nicknames[1])

// 5.
// console.log(crazyObject.larry.characters[1]);

// 6.
// crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk")
// console.log(crazyObject.larry.quotes);
