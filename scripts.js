const defaultSetting = {
  parent: "container",
  img: "https://images.pexels.com/photos/15985573/pexels-photo-15985573/free-photo-of-wood-landscape-water-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  caption: "Test",
  text: "Subtext for the text.",
  id: false,
};

const settings = [
  {
    caption: "Company Name",
    text: "Here is a small blurb about the company",
    id: "home",
  },
  { ...defaultSetting },
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
    text.classList.add("subtext");

    /* modifications */
    if (obj.id) {
      elm.setAttribute("id", obj.id);
    }

    elm.style.backgroundImage = `url(${obj.img})`;
    caption.innerText = obj.caption;
    text.innerText = obj.text;

    /* add & return */
    parent.appendChild(elm);
    elm.appendChild(scrim);
    scrim.appendChild(caption);
    scrim.appendChild(text);

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
