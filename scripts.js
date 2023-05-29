const defaultSetting = {
    parent: "container",
    img: "https://images.pexels.com/photos/15985573/pexels-photo-15985573/free-photo-of-wood-landscape-water-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Test",
    text: "Subtext for the text.",
  };
  
  const settings = [{ ...defaultSetting }];
  const elms = {
    card: (object) => {
      /* safety net */
      const safety = { ...defaultSetting };
      const obj = { ...safety, ...object };

      /* elements */
      const parent = document.getElementById(obj.parent);
      const elm = document.createElement("div");
      const caption = document.createElement("h2");
      const text = document.createElement("p");

      /* classes */
      elm.classList.add("card");
      caption.classList.add("title");
      text.classList.add("subtext");

      /* modifications */
      elm.style.backgroundImage = `url(${obj.img})`;
      caption.innerText = obj.caption;
      text.innerText = obj.text;

      /* add & return */
      parent.appendChild(elm);
      elm.appendChild(caption);
      elm.appendChild(text);

      return elm;
    },
  };

  settings.forEach((setting) => elms.card(setting));