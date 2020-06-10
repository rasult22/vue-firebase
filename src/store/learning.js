export default {
  state: {
    courses: [
      {
        name: '5S',
        title: 'Learning 5S',
        id: 1,
        slug: '5S',
        url: '/5S',
        lessonParts: [
          // Step 1
          {
            title: 'What is the 5S technology?',
            id: 1,
            paragraphs: [
              '5S - a system of organization and rationalization of the workplace (workspace), one of the tools of lean production. Designed in post-war Japan.',
              'The main point of the system is to reduce unnecessary movements. No waste of time sorting, cleaning, returning things to their place.',
              '5S methodology has expanded from manufacturing and is now being applied to a wide variety of industries including health care, education, and government. Visual management and 5S can be particularly beneficial in health care because a frantic search for supplies to treat an in-trouble patient (a chronic problem in health care) can have dire consequences. Although the origins of the 5S methodology are in manufacturing,it can also be applied to knowledge economy work, with information, software, or media in the place of physical product.',
              'There are five 5S phases. They can be translated from the Japanese as "sort", "set in order", "shine", "standardize", and "sustain".'
            ],
            images: [
              {
                url: 'Resource_corner_5S_Safety_Scanfil_Sieradz.jpg',
                caption: '5s-implementetated workplace'
              }
            ]
          },
          // Step 2
          {
            title: '1. Sort (seiri 整理)',
            id: 2,
            paragraphs: [
              'Seiri is sorting through all items in a location and removing all unnecessary items from the location.',
              'Goals: \n - Reduce time loss looking for an item by reducing the number of items. \n - Reduce the chance of distraction by unnecessary items. \n - Simplify inspection. \n - Increase the amount of available, useful space \n - Increase safety by eliminating obstacles.',
              'Implementation: \n - Arrange work stations in such a way that all tooling / equipment is in close proximity, in an easy to reach spot and in a logical order adapted to the work performed. Place components according to their uses, with the frequently used components being nearest to the workplace. \n - Arrange all necessary items so that they can be easily selected for use. Make it easy to find and pick up necessary items. \n - Assign fixed locations for items. Use clear labels, marks or hints so that items are easy to return to the correct location and so that it is easy to spot missing items. \n'
            ],
            images: [
              {
                url: 'Resource_corner_5S_Safety_Scanfil_Sieradz.jpg',
                caption: '5s-implementetated workplace'
              }
            ]
          },
          // Step 3
          {
            title: '2. Set in order (seiton 整頓)',
            id: 3,
            paragraphs: [
              'Seiri is sorting through all items in a location and removing all unnecessary items from the location.',
              'Goals: \n - Reduce time loss looking for an item by reducing the number of items. \n - Reduce the chance of distraction by unnecessary items. \n - Simplify inspection. \n - Increase the amount of available, useful space \n - Increase safety by eliminating obstacles.',
              'Implementation: \n - Arrange work stations in such a way that all tooling / equipment is in close proximity, in an easy to reach spot and in a logical order adapted to the work performed. Place components according to their uses, with the frequently used components being nearest to the workplace. \n - Arrange all necessary items so that they can be easily selected for use. Make it easy to find and pick up necessary items. \n - Assign fixed locations for items. Use clear labels, marks or hints so that items are easy to return to the correct location and so that it is easy to spot missing items. \n'
            ],
            images: [
              {
                url: 'Resource_corner_5S_Safety_Scanfil_Sieradz.jpg',
                caption: '5s-implementetated workplace'
              }
            ]
          },
          // Step 4
          {
            title: '3. Shine (seiso 清掃)',
            id: 4,
            paragraphs: [
              'Seiri is sorting through all items in a location and removing all unnecessary items from the location.',
              'Goals: \n - Reduce time loss looking for an item by reducing the number of items. \n - Reduce the chance of distraction by unnecessary items. \n - Simplify inspection. \n - Increase the amount of available, useful space \n - Increase safety by eliminating obstacles.',
              'Implementation: \n - Arrange work stations in such a way that all tooling / equipment is in close proximity, in an easy to reach spot and in a logical order adapted to the work performed. Place components according to their uses, with the frequently used components being nearest to the workplace. \n - Arrange all necessary items so that they can be easily selected for use. Make it easy to find and pick up necessary items. \n - Assign fixed locations for items. Use clear labels, marks or hints so that items are easy to return to the correct location and so that it is easy to spot missing items. \n'
            ],
            images: [
              {
                url: 'Resource_corner_5S_Safety_Scanfil_Sieradz.jpg',
                caption: '5s-implementetated workplace'
              }
            ]
          },
          // Step 5
          {
            title: '4. Standardize (seiketsu 清潔)',
            id: 5,
            paragraphs: [
              'Seiri is sorting through all items in a location and removing all unnecessary items from the location.',
              'Goals: \n - Reduce time loss looking for an item by reducing the number of items. \n - Reduce the chance of distraction by unnecessary items. \n - Simplify inspection. \n - Increase the amount of available, useful space \n - Increase safety by eliminating obstacles.',
              'Implementation: \n - Arrange work stations in such a way that all tooling / equipment is in close proximity, in an easy to reach spot and in a logical order adapted to the work performed. Place components according to their uses, with the frequently used components being nearest to the workplace. \n - Arrange all necessary items so that they can be easily selected for use. Make it easy to find and pick up necessary items. \n - Assign fixed locations for items. Use clear labels, marks or hints so that items are easy to return to the correct location and so that it is easy to spot missing items. \n'
            ],
            images: [
              {
                url: 'Resource_corner_5S_Safety_Scanfil_Sieradz.jpg',
                caption: '5s-implementetated workplace'
              }
            ]
          },
          // Step 6
          {
            title: '5. Smth',
            id: 6,
            paragraphs: [
              'Seiri is sorting through all items in a location and removing all unnecessary items from the location.',
              'Goals: \n - Reduce time loss looking for an item by reducing the number of items. \n - Reduce the chance of distraction by unnecessary items. \n - Simplify inspection. \n - Increase the amount of available, useful space \n - Increase safety by eliminating obstacles.',
              'Implementation: \n - Arrange work stations in such a way that all tooling / equipment is in close proximity, in an easy to reach spot and in a logical order adapted to the work performed. Place components according to their uses, with the frequently used components being nearest to the workplace. \n - Arrange all necessary items so that they can be easily selected for use. Make it easy to find and pick up necessary items. \n - Assign fixed locations for items. Use clear labels, marks or hints so that items are easy to return to the correct location and so that it is easy to spot missing items. \n'
            ],
            images: [
              {
                url: 'Resource_corner_5S_Safety_Scanfil_Sieradz.jpg',
                caption: '5s-implementetated workplace'
              }
            ]
          }
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getCourseBySlug: state => slug => {
      return state.courses.find(course => course.slug === slug)
    }
  }
}
