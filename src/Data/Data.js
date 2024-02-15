// Sidebar imports
import {
  UilChart,
  UilClipboardAlt,
  UilEstate,
  UilPackage,
  UilUsersAlt
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilMoneyWithdrawal, UilUsdSquare } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";


// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    href: '/dashboard'
  },
  {
    icon: UilClipboardAlt,
    heading: "Manager",
    href: '/manager'
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
    href: "/customers"
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Buys",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: "..",
    value: "...",
    png: UilUsdSquare,
    series: [
      {
        name: "Buys",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Sells",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: "..",
    value: "...",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Sells",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: "..",
    value: "...",
    png: UilClipboardAlt,
    series: [
      {
        name: "Revenue",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Phan",
    noti: "has saved ...",
    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Kang",
    noti: "has received ...",
    time: "30 minutes ago",
  },
  {
    img: img1,
    name: "Min",
    noti: "has buyer ...",
    time: "2 hours ago",
  },
];
