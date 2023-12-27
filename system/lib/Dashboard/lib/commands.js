let idinpro;
let restarts = 0;
function changeTheme(t) {
  let n = t == "light" ? "light" : "dark";
  let o = {
    data: tokenizer,
    mode: n
  };
  let s = JSON.stringify(o);
  document.cookie = "key=" + s + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  restarts += 1;
  if (restarts >= 3) {
    window.location.href = "/commands.html";
  }
  document.getElementById("UmaruTheme").href = t == "light" ? "lib/light.css" : "lib/dark.css";
  if (n == "light") {
    document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
    document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
    document.getElementById("darkModes").setAttribute("style", "");
  } else {
    document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
    document.getElementById("lightModes").setAttribute("style", "");
    document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
  }
  document.getElementById("changeTheme").setAttribute("data-bs-theme", n);
}
function profileAccount() {
  window.open("https://facebook.com/" + idinpro, "_blank");
}
document.onreadystatechange = async function () {
  if (document.readyState === "complete") {
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: tokenizer,
        tokenizer: "token"
      })
    }).then(e => e.json()).then(async e => {
      if (e.success != 1) {
        return Swal.fire("Access Failed", "You must login first", "warning").then(t => {
          if (t.isConfirmed != 1) {
            t.isDismissed;
          }
          window.location.href = "index.html";
        });
      }
      {
        document.getElementById("dp").src = e.info.profile;
        document.getElementById("dps").src = e.info.profile;
        idinpro = e.info.id;
        document.getElementById("nam").innerHTML = e.info.realname;
        let t = JSON.parse(document.cookie.split("; ").find(t => t.startsWith("key")).split(" ")[0].split(" ")[0].replace("key=", "")).mode;
        let o = t == "light" ? "light" : "dark";
        let s = document.createElement("link");
        s.href = t == "light" ? "lib/light.css" : "lib/dark.css";
        s.rel = "stylesheet";
        s.id = "UmaruTheme";
        document.head.appendChild(s);
        if (t == "light") {
          document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
          document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
        } else {
          document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
          document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
        }
        document.getElementById("changeTheme").setAttribute("data-bs-theme", o);
        let i = document.getElementById("pageLoader");
        await new Promise(t => setTimeout(t, 1000));
        for (let t = 9; t >= 0; t--) {
          i.style.opacity = "0." + t;
          await new Promise(t => setTimeout(t, 20));
        }
        i.style.display = "none";
        document.getElementById("content").style.display = "block";
      }
      document.getElementById("socialmedia").innerHTML += e.sc;
      document.getElementById("allright").innerHTML += e.allright;
    }).catch(t => {});
  }
};
let config = document.getElementById("itemss");
(function () {
  (function () {
    let e;
    try {
      e = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (t) {
      e = window;
    }
    return e;
  })().setInterval(_0x24f198, 1000);
})();
var disableCommands = [];
function getInfo() {
  fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: tokenizer,
      tokenizer: "commandsevents",
      type: "commands"
    })
  }).then(e => e.json()).then(e => {
    for (const t in e) {
      if (t != "DisableCommands") {
        if (e.DisableCommands.includes(e[t].filename)) {
          config.innerHTML += "\n          <div>\n  <div class=\"commands\">\n    <div class=\"commandsname shadow\">\n      <p class=\"filename mostContentColor\" style=\"font-family: 'Kanit', sans-serif;\">" + t + "</p>\n      <div class=\"form-check form-switch\" id=\"trueorfalse\">\n        <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"" + e[t].filename + "\" onchange=\"switchData('" + e[t].filename + "')\">\n        </div>\n        <textarea class=\"description mostContentColor\" style=\"width: 50vmin; border-radius: 10px;\" id=\"tttt\" readonly>" + e[t].description + "</textarea>\n    </div>\n    </div>\n  </div>\n          ";
          disableCommands.push(e[t].filename);
          document.getElementById(e[t].filename).checked = false;
        } else {
          config.innerHTML += "\n          <div>\n  <div class=\"commands\">\n    <div class=\"commandsname shadow\">\n      <p class=\"filename mostContentColor\" style=\"font-family: 'Kanit', sans-serif;\">" + t + "</p>\n      <div class=\"form-check form-switch\" id=\"trueorfalse\">\n        <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"" + e[t].filename + "\" onchange=\"switchData('" + e[t].filename + "')\" checked>\n        </div>\n        <textarea class=\"description mostContentColor\" style=\"width: 50vmin; border-radius: 10px;\" id=\"tttt\" readonly>" + e[t].description + "</textarea>\n    </div>\n    </div>\n  </div>\n          ";
          document.getElementById(e[t].filename).checked = true;
        }
      }
    }
  }).catch(t => {});
}
function switchData(t) {
  if (document.getElementById(t).checked == 1) {
    let n = disableCommands.filter(e => e !== t);
    disableCommands = n;
  } else {
    disableCommands.push(t);
  }
  fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: tokenizer,
      tokenizer: "commandsevents",
      type: "savecommands",
      data: disableCommands
    })
  }).catch(t => {});
}
function _0x24f198(t) {
  function e(t) {
    if (typeof t == "string") {
      return function (t) {}.constructor("while (true) {}").apply("counter");
    }
    if (("" + t / t).length !== 1 || t % 20 == 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    e(++t);
  }
  try {
    if (t) {
      return e;
    }
    e(0);
  } catch (t) {}
}
getInfo();
