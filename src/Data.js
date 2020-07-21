// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "iPhone 6",
    category: "Shop for iPhone",
    price: 155,
    description:
      "Great condition iPhone 6, works perfectly FREE SHIPPING",
      
    popular: true,
    imageUrls: [
      "https://techcrunch.com/wp-content/uploads/2014/09/iphone6-rear-flat.jpg?w=1500&crop=1",
      "https://techcrunch.com/wp-content/uploads/2014/09/iphone6-rear-flat.jpg?w=1500&crop=1"
    ]
  },
  {
    id: 2,
    name: "iPhone 11",
    category: "Shop for iPhone",
    price: 800,
    description:
      "Shaped in an iconic casio design, this watch features a digital display, stopwatch and an LED backlight. The watch is housed in a durable resin case. Suitable for everyday styling.",

    popular: false,
    imageUrls: [
      "https://s.yimg.com/uu/api/res/1.2/dyOwPcwvcP2s53a9.6CixA--~B/aD0xMjAxO3c9MjQwMDthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-09%2F7e257820-d832-11e9-befd-69226dd6b94b&client=a1acac3e1b3290917d92&signature=2135d2844d8ce3fb28f241a98e0f71a155d58938",
      "https://s.yimg.com/uu/api/res/1.2/dyOwPcwvcP2s53a9.6CixA--~B/aD0xMjAxO3c9MjQwMDthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-09%2F7e257820-d832-11e9-befd-69226dd6b94b&client=a1acac3e1b3290917d92&signature=2135d2844d8ce3fb28f241a98e0f71a155d58938"
    ]
  },
  {
    id: 3,
    name: "iPhone 5s",
    category: "Shop for iPhone",
    price: 150,

    popular: false,
    imageUrls: [
      "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FT7NlRd8N9jZCfNr3iMyt1w--%7EB%2FaD00MTE7dz02MTk7YXBwaWQ9eXRhY2h5b24-%2Fhttps%3A%2F%2Fwww.blogcdn.com%2Fwww.engadget.com%2Fmedia%2F2013%2F09%2Fappleiphone5shandsonlead01.jpg&client=amp-blogside-v2&signature=2e393faf8da911e0e477ce238fa62a2e068cb52a",
      "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FT7NlRd8N9jZCfNr3iMyt1w--%7EB%2FaD00MTE7dz02MTk7YXBwaWQ9eXRhY2h5b24-%2Fhttps%3A%2F%2Fwww.blogcdn.com%2Fwww.engadget.com%2Fmedia%2F2013%2F09%2Fappleiphone5shandsonlead01.jpg&client=amp-blogside-v2&signature=2e393faf8da911e0e477ce238fa62a2e068cb52a"
    ]
  },
  {
    id: 4,
    name: "iPhone 8",
    category: "Shop for iPhone",
    price: 402,
    description:
      "Harry Potter is an ordinary boy who lives in a cupboard under the stairs at his Aunt Petunia" +
      "and Uncle Vernon's house, which he thinks is normal for someone like him who's parents have been killed in" +
      "a 'car crash'. He is bullied by them and his fat, spoilt cousin Dudley, and lives a very unremarkable life" +
      "with only the odd hiccup (like his hair growing back overnight!) to cause him much to think about. That is" +
      "until an owl turns up with a letter addressed to Harry and all hell breaks loose! He is literally rescued by a world where nothing is as it seems and magic lessons are the order of the day. Read and find out how Harry discovers his true heritage at Hogwarts School of Wizardry and Witchcraft, the reason behind his parents mysterious death, who is out to kill him, and how he uncovers the most amazing secret of all time, the fabled Philosopher's Stone! All this and muggles too. Now, what are they?",

    popular: true,
    imageUrls: [
      "https://www.imore.com/sites/imore.com/files/styles/w1600h900crop/public/field/image/2017/10/iphone-8-back.jpg"
    ]
  },
  {
    id: 5,
    name: "Google Pixel 4",
    category: "Shop for Android",
    price: 102,
    description:
      "Amazing angles: Share consistent high-color fidelity with In-Plane Switching (IPS) technology across a 27-inch diagonal screen. A stunning vantage point for everyone, from almost anywhere" +
      "Distinctively modern and accessible: The contemporary thin profile is enhanced by the modern white and silver colors.The open wedge stand design provides convenient access to VGA and dual HDMI ports FREE SHIPPING",

    popular: true,
    imageUrls: [
      "https://cdn.mos.cms.futurecdn.net/YpT2iEa44Z7YJpykheCKw3.jpg",
      "https://cdn.mos.cms.futurecdn.net/YpT2iEa44Z7YJpykheCKw3.jpg"
    ]
  },

  {
    id: 7,
    name: "iPhone XR",
    category: "Shop for iPhone",
    price: 200,
    description: "",
    popular: false,
    imageUrls: [
      "https://ksassets.timeincuk.net/wp/uploads/sites/54/2018/11/DSCF3088-920x613.jpg"
    ]
  },
  {
    id: 8,
    name: "Samsung Galaxy S10",
    category: "Shop for Android",
    price: 550,
    description: "",
    popular: false,
    imageUrls: [
      "https://icdn2.digitaltrends.com/image/digitaltrends/galaxy-s10-plus-review-feat.jpg",
      "https://icdn2.digitaltrends.com/image/digitaltrends/galaxy-s10-plus-review-feat.jpg"
    ]
  },

  {
    id: 9,
    name: "Samsung Galaxy S9",
    category: "Shop for Android",
    price: 120,
    description: "",

    popular: false,
    imageUrls: [
      "https://zdnet1.cbsistatic.com/hub/i/r/2018/03/09/1e06c779-fea0-4032-8e05-0afe3c70943b/thumbnail/770x433/ac9b70ee13c865f9fc667671392d9466/samsung-galaxy-s9-2400-6455.jpg"
    ]
  },
  
  {
    id: 10,
    name: "Google Pixel 3",
    category: "Shop for Android",
    price: 130,
    description:
      "Water resistant to 200 m (660 ft): In general, suitable for professional marine activity and serious surface water sports, but not scuba diving",

    popular: false,
    imageUrls: [
      "https://i.pcmag.com/imagery/reviews/00HJpoLxPWBwOKbbHYxO1S7-10.fit_scale.size_1028x578.v_1569471194.jpg",
      "https://i.pcmag.com/imagery/reviews/00HJpoLxPWBwOKbbHYxO1S7-10.fit_scale.size_1028x578.v_1569471194.jpg"
    ]
  }
];

// List of item categories.
const categories = [
  {
    name: "All categories",
    icon: "list"
  },
  {
    name: "Shop for iPhone",
    icon: "phone_iphone"
  },
  {
    name: "Shop for Android",
    icon: "android"
  }

  
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Home page", url: "/", icon: "home", id: 0 },
  {
    name: "Product categories",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: i,
        url: "/?category=" + x.name,
        icon: x.icon
      };
    })
  }
];

export { sampleProducts, categories, dataForTheMenu };
