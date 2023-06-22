const adventures = [
  {
    id: 1,
    title: "Kayaking",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at viverra cursus euismod est nec at. Sociis id non ac duis mauris luctus id arcu. Turpis non felis, vitae egestas at 
    condimentum. Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus`,
    image:
      "https://images.unsplash.com/photo-1620903669944-de50fbe78210?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtheWFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 2,
    title: "Canoeing",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at viverra cursus euismod est nec at. Sociis id non ac duis mauris luctus id arcu. Turpis non felis, vitae egestas at 
    condimentum. Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus`,
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_1280/primary/dhpc3bur94tqiusuwzjp",
  },
  {
    id: 3,
    title: "Sky Diving",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at viverra cursus euismod est nec at. Sociis id non ac duis mauris luctus id arcu. Turpis non felis, vitae egestas at 
    condimentum. Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus`,
    image:
      "https://media.istockphoto.com/photos/paragliding-picture-id1284592293?b=1&k=20&m=1284592293&s=170667a&w=0&h=fJ4JcL0T49uvi5NagDiyPAghM2Htqs9iqGuoeZDixOg=",
  },
  {
    id: 4,
    title: "Bungee Jump",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at viverra cursus euismod est nec at. Sociis id non ac duis mauris luctus id arcu. Turpis non felis, vitae egestas at 
    condimentum. Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus`,
    image: `https://images.unsplash.com/photo-1629256168693-600e1d7a0618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVuZ2VlJTIwanVtcGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80`,
  },
  {
    id: 5,
    title: "Skiing",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at viverra cursus euismod est nec at. Sociis id non ac duis mauris luctus id arcu. Turpis non felis, vitae egestas at 
    condimentum. Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus`,
    image:
      "https://images.unsplash.com/photo-1596473537047-50758f115d04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 6,
    title: "Cage Diving",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at viverra cursus euismod est nec at. Sociis id non ac duis mauris luctus id arcu. Turpis non felis, vitae egestas at 
    condimentum. Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus`,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sharks_outside_cage.jpg/1200px-Sharks_outside_cage.jpg",
  },
  {
    id: 7,
    title: "Surfing",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at viverra cursus euismod est nec at. Sociis id non ac duis mauris luctus id arcu. Turpis non felis, vitae egestas at 
    condimentum. Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus`,
    image:
      "https://media.istockphoto.com/photos/surfer-and-big-wave-picture-id1326407314?b=1&k=20&m=1326407314&s=170667a&w=0&h=gKyvB_eyZyoFFfJaMobsZt5uSNLfaoj4gP3BhRsN4Ag=",
  },
  {
    id: 8,
    title: "Boat Cruise",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at viverra cursus euismod est nec at. Sociis id non ac duis mauris luctus id arcu. Turpis non felis, vitae egestas at 
    condimentum. Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus`,
    image:
      "https://media.istockphoto.com/photos/3d-cruise-ship-vacation-holiday-summer-illustration-concept-picture-id599881398?b=1&k=20&m=599881398&s=170667a&w=0&h=8gbyigz_NcFgi_h1JqK0Ug1nw3Jos7vo0ZEeYU2sDZ8=",
  },
  {
    id: 9,
    title: "High Lining",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at viverra cursus euismod est nec at. Sociis id non ac duis mauris luctus id arcu. Turpis non felis, vitae egestas at 
    condimentum. Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus`,
    image:
      "https://slackline.us/wp-content/uploads/2016/09/Yosemite-Taft-Point-Dana-Felthauser.jpg",
  },
  {
    id: 10,
    title: "Cave Diving",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at viverra cursus euismod est nec at. Sociis id non ac duis mauris luctus id arcu. Turpis non felis, vitae egestas at 
    condimentum. Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus`,
    image: "https://miro.medium.com/max/1400/1*q1fVoJ6Z3e1v7n1X1ukJcQ.jpeg",
  },
  {
    id: 11,
    title: "Hang Gliding",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at viverra cursus euismod est nec at. Sociis id non ac duis mauris luctus id arcu. Turpis non felis, vitae egestas at 
    condimentum. Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus`,
    image:
      "https://cdn2.civitatis.com/brasil/rio-de-janeiro/ala-delta-rio-janeiro-grid.jpg",
  },
  {
    id: 12,
    title: "Volcano Board",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at viverra cursus euismod est nec at. Sociis id non ac duis mauris luctus id arcu. Turpis non felis, vitae egestas at 
    condimentum. Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus`,
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/07/10/cerro-negro-volcano-2.jpg?quality=75&width=982&height=726&auto=webp",
  },
];

export default adventures;