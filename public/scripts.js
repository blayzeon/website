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
function deactivate(queryElm) {
  const elm = queryElm ? queryElm : document.querySelector(".active");
  if (!elm) {
    return;
  }
  elm.classList.remove("active");
  elm.classList.add("display-none");
}

function activate(queryElm) {
  const elm = queryElm ? queryElm : document.querySelector(".active");
  if (!elm) {
    return;
  }
  elm.classList.add("active");
  elm.classList.remove("display-none");
}

const showHideDivs = document.querySelectorAll("[data='info-set']");
showHideDivs.forEach((div) => {
  div.addEventListener("click", (e) => {
    const clicked = e.target;
    const parent = clicked.parentNode;
    const sets = document.querySelectorAll(".set");

    sets.forEach((set) => {
      const toggleElm = set.lastElementChild;

      // hide the elm if the button is pressed more than once
      if (toggleElm.classList.contains("active")) {
        if (clicked.classList.contains("toggle-button")) {
          deactivate(toggleElm);
          return;
        }
      }

      // show the element when clicked
      if (set === parent) {
        activate(toggleElm);
        return;
      }
    });
  });
});

// hide the elm if the user clicks something unrelated

// mouse compatibility
window.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("set")) {
    return;
  } else {
    deactivate();
  }
});

// keyboard support
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    //Esc key was pressed
    deactivate();
  }
});

function submitEmailForm(form) {
  var obj = new XMLHttpRequest();
  obj.onreadystatechange = function () {
    if (obj.readyState == 4) {
      if (obj.status == 200) {
        var res = JSON.parse(obj.responseText);
        console.log(res.message);
      } else {
        console.log("XMLHttp status " + obj.status + ": " + obj.statusText);
      }
    }
  };
  obj.open("post", form.action, true);
  obj.setRequestHeader("Content-Type", "application/json"); // NOTICE: "application/json"
  const EMPTY = "not provided";

  // to do - format the date
  const date1 = form.date1.value ? form.date1.value : EMPTY;
  const date2 = form.date2.value ? form.date2.value : EMPTY;

  obj.send(
    JSON.stringify({
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value ? form.phone.value : EMPTY,
      date: `from the date ${date1} to the date ${date2}`,
      unit: form.unit.value ? form.unit.value : EMPTY,
      message: form.message.value,
      bot: form.username.value ? true : false,
    })
  );
  return false;
}
