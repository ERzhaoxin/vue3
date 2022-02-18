import { Nav } from '../../types/nav'
const navList: Nav[] = [
  {
    name: "Home",
    path: "home",
  },
  // {
  //   name: "Admin",
  //   path: "Admin",
  // },
  {
    name: "Gallery",
    path: "gallery",
  },
  {
    name: "Account",
    path: "Account",
  },
  {
    name: "Claim",
    path: "Claim",
  },
  {
    name: "Pools",
    path: "Pools",
  },
  {
    name: "Help",
    path: "Help",
    http: true,
    url: "https://doc.1kpixel.io/",
  },
];

export default navList;