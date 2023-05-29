const defaultSetting = {
  parent: "container",
  img: false,
  caption: false,
  text: "This is default subtext",
  subStyle: "subtext",
  id: false,
};

const settings = [
  {
    caption: "Company Name",
    text: "Here is a small blurb about the company.",
    img: "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg",
    id: "home",
  },
  {
    caption: "Product #1",
    text: "Whatever this is, you need it.",
    img: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
    id: "products",
  },
  {
    caption: "Product #2",
    text: "Whatever this is, you need it.",
    img: "https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_1280.jpg",
  },
  {
    caption: "Product #3",
    text: "Whatever this is, you need it.",
    img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg",
  },
  {
    caption: "Call to Action",
    text: "Sign up now.",
    img: "https://cdn.pixabay.com/photo/2012/03/04/00/11/arid-21799_1280.jpg",
    id: "order",
  },
];
const elms = {
  navItems: [],
  populateNav: (navId) => {
    /* create and append nav links */
    const container = document.getElementById(navId);
    elms.navItems.forEach((item) => {
      const elm = document.createElement("a");
      elm.setAttribute("href", `#${item.id}`);
      elm.innerText = item.id;
      container.appendChild(elm);
    });
  },
  card: (object) => {
    /* safety net */
    const safety = { ...defaultSetting };
    const obj = { ...safety, ...object };

    /* elements */
    const parent = document.getElementById(obj.parent);
    const scrim = document.createElement("div");
    const elm = document.createElement("div");
    const caption = document.createElement("h2");
    const text = document.createElement("p");

    /* classes */
    scrim.classList.add("scrim");
    elm.classList.add("card");
    caption.classList.add("title");

    if (obj.subStyle) {
      text.classList.add(obj.subStyle);
    }

    /* modifications */
    if (obj.id) {
      elm.setAttribute("id", obj.id);
    }

    if (obj.img) {
      elm.style.backgroundImage = `url(${obj.img})`;
    } else {
      elm.style.backgroundColor = "var(--bgc)";
    }

    if (obj.caption) {
      caption.innerText = obj.caption;
      scrim.appendChild(caption);
    }
    if (obj.text) {
      text.innerText = obj.text;
      scrim.appendChild(text);
    }

    parent.appendChild(elm);
    elm.appendChild(scrim);

    return elm;
  },
};

settings.forEach((item) => {
  if (item.id) {
    elms.navItems.push(item);
  }
});

elms.populateNav("nav");

settings.forEach((setting) => elms.card(setting));
