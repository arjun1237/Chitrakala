const movies = [
  {
    "id": 1,
    "title": "Gladiator",
    "language": "English",
    "image": "https://resizing.flixster.com/qSn3URCqJD51J_KJL9GKQ0E6tBY=/206x305/v1.bTsxMTE2ODk0NDtqOzE4NTc5OzEyMDA7ODAwOzEyMDA",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "director": "Ridley Scott",
    "cast": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    "locationsAll": true,
    "locations": [],
    "comments": [
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
    ],
    "rating": [2, 3, 4, 5, 5]
  },
  {
    "id": 2,
    "title": "Harry Potter",
    "language": "English",
    "image": "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "director": "David Yates",
    "cast": ["Daniel Radcliffe", "Emma Watson"],
    "locationsAll": true,
    "locations": [],
    "comments": [
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
    ],
    "rating": [2, 3, 4, 5, 5]
  },
  {
    "id": 3,
    "title": "Pokiri",
    "language": "Telugu",
    "image": "https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2020/04/26/Superstar-Mahesh-Babu-s-Pokiri-Movie-14th-Anniversary-Common-DP-.png?quality=90&zoom=1&ssl=1",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "director": "Puri Jagannadh",
    "cast": ["Mahesh Babu", "Illeana D'Cruz"],
    "locationsAll": true,
    "locations": [],
    "comments": [
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
    ],
    "rating": [1, 1, 4, 5, 1]
  },
  {
    "id": 4,
    "title": "Ulidavaru Kandante",
    "language": "Kannada",
    "image": "https://i.pinimg.com/originals/aa/1f/92/aa1f92bfa7a05deaa3302591fa148216.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "director": "Rakshit Shetty",
    "cast": ["Rakshit Shetty", "Yagna Shetty"],
    "locationsAll": true,
    "locations": [],
    "comments": [
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
    ],
    "rating": [5, 5, 4, 5, 5]
  },
  {
    "id": 5,
    "title": "Dil Bechara",
    "language": "Hindi",
    "image": "https://m.media-amazon.com/images/M/MV5BNmI0MTliMTAtMmJhNC00NTJmLTllMzQtMDI3NzA1ODMyZWI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "director": "Mukesh Chhabra",
    "cast": ["Sushant", "Sanjana"],
    "locationsAll": true,
    "locations": [],
    "comments": [
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
    ],
    "rating": [2, 3, 4, 5, 5]
  },
  {
    "id": 6,
    "title": "Gully Boy",
    "language": "Hindi",
    "image": "https://pbs.twimg.com/media/Dv4DwdGUYAYxhq6.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "director": "Zoya Akhtar",
    "cast": ["Ranveer Singh", "Alia Bhat"],
    "locationsAll": true,
    "locations": [],
    "comments": [
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
    ],
    "rating": [2, 3, 4, 5, 5]
  },
  {
    "id": 7,
    "title": "Sairat",
    "language": "Marathi",
    "image": "https://static.toiimg.com/thumb/imgsize-81617,msid-52804185,width-400,resizemode-4/52804185.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "director": "Nagraj Manjule",
    "cast": ["Rinku", "Akash"],
    "locationsAll": true,
    "locations": [],
    "comments": [
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
    ],
    "rating": [2, 3, 4, 5, 5]
  },
  {
    "id": 8,
    "title": "Avane Srimannarayana",
    "language": "Kannada",
    "image": "https://m.media-amazon.com/images/M/MV5BMzJmNDBlMzUtMjJjMy00YjRjLTliY2MtNjcwMmExODYzYTZmXkEyXkFqcGdeQXVyOTMxMTk2MTc@._V1_.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "director": "Sachin Ravi",
    "cast": ["Rakshit", "Shanvi"],
    "locationsAll": true,
    "locations": [],
    "comments": [
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
    ],
    "rating": [2, 3, 4, 5, 5]
  },
  {
    "id": 9,
    "title": "Deadpool",
    "language": "english",
    "image": "https://images-na.ssl-images-amazon.com/images/I/81rI-POmpmL._SL1500_.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "director": "Tim Miller",
    "cast": ["Ryan Reynolds", "Morena"],
    "locationsAll": true,
    "locations": [],
    "comments": [
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
    ],
    "rating": [2, 3, 4, 5, 5]
  },
  {
    "id": 10,
    "title": "Black Panther",
    "language": "English",
    "image": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "director": "Ryan Coogler",
    "cast": ["Micheal Jordan", "Chadwick"],
    "locationsAll": true,
    "locations": [],
    "comments": [
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
    ],
    "rating": [2, 3, 4, 5, 5]
  }
]

export default movies