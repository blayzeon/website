// create menu links for each header
const navMenu = document.querySelector("#nav-menu");
const h2s = [...document.querySelectorAll("h2")];
h2s.forEach((header) => {
  if (!header.id) {
    return;
  }
  const li = document.createElement("li");
  const a = document.createElement("a");
  li.appendChild(a);
  a.innerText = header.id;
  a.setAttribute("href", `#${header.id}`);
  navMenu.appendChild(li);
});

// functionality for show/hide buttons
function deactivate(elm) {
  elm.classList.remove("active");
  elm.lastElementChild.classList.add("display-none");
}

function isSet(e) {
  const active = document.querySelector(".active");
  const parent = e.target.parentNode;
  if (parent.classList.contains("set")) {
    return true;
  } else {
    if (active) {
      deactivate(active);
    }

    return;
  }
}

// mouse compatibility
window.addEventListener("click", (e) => {
  isSet(e);
});

// touch compatibility
window.addEventListener("ontouchstart", (e) => {
  isSet(e);
});

// keyboard support
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    //Esc key was pressed
    const active = document.querySelector(".active");
    deactivate(active);
  }
});

const showHideDivs = document.querySelectorAll("[data='info-set']");
showHideDivs.forEach((div) => {
  div.addEventListener("click", (e) => {
    const parent = e.target.parentNode;

    const sets = document.querySelectorAll(".set");
    sets.forEach((set) => {
      deactivate(set);
      if (set === parent) {
        set.classList.add("active");
        set.lastElementChild.classList.remove("display-none");
        return;
      }
    });
  });
});
