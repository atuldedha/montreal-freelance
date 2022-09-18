import { paradeYear } from "../components/untilLib/ParadeYear";
export default {
  nav: {
    home: "Home",
    information: "Information",
    group: "Group/Volunteer",
    history: "History",
    contact: "Contact Us",
    signIn: "Sign In",
  },
  hero: {
    title: "Montreal Canada Day Parade",
    subtitle: "For the people, not for profit",
    btn: "Donate Now",
  },
  aboutEvent: {
    title1: "About the ",
    title2: "Montreal Canada Day Parade ",
    title3: " Event",
    options: [
      {
        title: "Family Friendly",
        description:
          "Bring your whole family to celebrate our great country's birthday!",
      },
      {
        title: "Multicultural",
        description:
          "Our country’s diversity is one of its main strength, come see the world colors",
      },
      {
        title: "Free Activities",
        description: "Free activities and shows for whole family",
      },
    ],
  },
  footer: {
    title: "We look forward to see you all",
    followText: "Follow Us for more updates",
    date: "July 1st ",
    copyright: `Copyright © ${new Date().getFullYear()} Montreal Canada Day Parade - All rights reserved`,
  },
  // INFORMATION PAGE CONTENT STARTS HERE
  information: {
    title: "Information",
    subtitle: "Montreal Canada Day Parade ",
    subtitle2: " Route",
    section1: {
      title: "How to get there ?",
      options: [
        "The STM is the most effective way to get to the downtown core of Montreal. Get off at the Peel or Guy-Concordia stations on the Green Line OR the Bonaventure station on the Orange Line.",
        `July 1st ${paradeYear()}  11:00AM, Starting at St.Catherine O. and du Fort and finishes at Place Du Canada`,
      ],
    },
    section2: {
      title: "Activities",
      options: [
        "Between 1:30PM and 3:30PM , there are cultural events in Place du Canada and a huge cake measuring 1.22 metres by 2.44 metres (4' by 8' ) is served. It is expected to feed 2,500 people",
        "Face painting and charicatures for kids on site",
        "Dance With Canada Day Ribbon Wands.",
      ],
    },
    downloadSection: {
      title: "Road Closures",
      subtitle: `Please click below to see the road closures for the ${paradeYear()} parade`,
      file: "Canada Day Street close pdf",
      btn: "Download",
    },
  },
  // GROUP PAGE CONTENT STARTS HERE
  group: {
    title: "Volunteers & Groups",
    subtitle: "A special opportunity awaits you",
    section1: {
      title:
        "Are you interested in strengthening your leadership skills, building new Friendships or simply haing fun while serving your community and country?",
      subtitle:
        "We aim to incorporate “your” needs to help make the parade a success",
    },
    section2: {
      title: "Opportunities for Volunteer",
      options: [
        "Distribution of small flags and pins to public",
        "Park and Route helper",
        "Parade Line Controller",
      ],
      text: "To assist the “Supervising Parade Line Controller” to ensure that the parade moves at a good pace and helps avoid gaps between entries.",
      note: "There are 2 Parade Line Controllers per section and a training session is given each june",
      btn: "Register as Volunteer",
    },
    section3: {
      title: "Participate in the parade as a group",
      options: [
        "A group can consit of walkers, cars or trucks (maximum length of 28 ft) in the parade",
        "Showcase your traditional culture by music, dress, dance, laughter and your Canadian flags.",
        "If you would like to participate in the parade to celebrate Canada Day with all of us, click the button below to register.",
      ],
      btn: "Register your group",
    },
  },
  // HISTORY PAGE CONTENT STARTS HERE
  history: {
    title: "History",
    subtitle: "The history of Montreal’s Canada Day Parade",
    text: "The Canada Day Parade in Montreal was born on July 1st , 1977. The founder, cardiologist Dr. Roopnarine Singh, with the help of dedicated people and the participation of the generous public, contributed to the growth of this beautiful parade. The constant expansion of the parade continues thanks to the tireless enthusiasm and pride of many ethnic communities and organizations in and around the Montreal area.",
  },
  // CONTACT PAGE CONTENT STARTS HERE
  contact: {
    title: "Contact",
    subtitle: "If you want to know anything just contact us",
    form: {
      heading: "For detailed Information Fill out the form",
      name: "Full Name",
      email: "Email",
      message: "Message",
      btn: "Submit",
    },
    options: [
      {
        title: "Partner",
        description:
          "You would like to become a partner? Contact the Main Organizer, Nicholas Cowen, by e-mail . I'll put a specific e-mail",
      },
      {
        title: "Press",
        description:
          "Are you part of the press and want additional information about the event? Contact managing director, Caroline Polcsak, by e-mail. I'll put a specific e-mail",
      },
    ],
  },
  // DONATE PAGE CONTENT STARTS HERE
  donate: {
    title: "Donate",
    subtitle: "Donate with us",
    form: {
      title1: "Donate for Montreal ",
      title2: "Canada Day ",
      title3: "Parade",
      subtitle:
        "Please Tell Us About yourself ? Are you a company or individual",
      company: "Company",
      individual: "Individual",
      companyNote:
        "If you donate 100$ then you can upload your company logo after donation that will be shown in sponsors section",
      name: "Name on Card",
      company: "Company Name",
      email: "Email",
      address: "Address",
      city: "City",
      zip: "Zip Code",
      anon: "Is Anonymous ?",
      custom: "Custom",
      cardInformation: "Card Information",
      cardNumber: "Card Number",
      btn: "Donate",
    },
  },
  // Thank you page content starts here
  thankYou: {
    title: "Thank You",
    form: {
      title: "Donation done successfully",
      subtitle: "Upload your company logo",
      dimensions: "Dimension",
      btn: "Save",
    },
  },
};
