let restarts = 0;
function changeTheme(t) {
  let n = t == "light" ? "light" : "dark";
  let o = {
    data: tokenizer,
    mode: n
  };
  let a = JSON.stringify(o);
  document.cookie = "key=" + a + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  restarts += 1;
  if (restarts >= 3) {
    window.location.href = "/dashboard.html";
  }
  document.getElementById("UmaruTheme").href = t == "light" ? "lib/light.css" : "lib/dark.css";
  if (n == "light") {
    document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
    document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
    document.getElementById("darkModes").setAttribute("style", "");
    document.getElementById("tables").setAttribute("class", "table table-light table-striped");
    document.getElementById("tablesBottom").setAttribute("style", "background-color:#dddddd;");
    document.getElementById("gagi").setAttribute("style", "margin-left: -6%; margin-top: 10%; filter: invert(100%);");
    document.getElementById("gagis").setAttribute("style", "margin-right: -6%; margin-top: 10%; filter: invert(100%);");
  } else {
    document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
    document.getElementById("lightModes").setAttribute("style", "");
    document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
    document.getElementById("tables").setAttribute("class", "table table-dark table-striped");
    document.getElementById("tablesBottom").setAttribute("style", "background-color:#212529;");
    document.getElementById("gagi").setAttribute("style", "margin-left: -6%; margin-top: 10%;");
    document.getElementById("gagis").setAttribute("style", "margin-right: -6%; margin-top: 10%;");
  }
  document.getElementById("changeTheme").setAttribute("data-bs-theme", n);
}
let idinpro;
let changingTheme = JSON.parse(document.cookie.split("; ").find(t => t.startsWith("key")).split(" ")[0].split(" ")[0].replace("key=", "")).mode;
let modings = changingTheme == "light" ? "light" : "dark";
let hahas = document.createElement("link");
function profileAccount() {
  window.open("https://facebook.com/" + idinpro, "_blank");
}
hahas.href = changingTheme == "light" ? "lib/light.css" : "lib/dark.css";
hahas.id = "UmaruTheme";
hahas.rel = "stylesheet";
document.head.appendChild(hahas);
fetch("/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    token: tokenizer,
    tokenizer: "token"
  })
}).then(t => t.json()).then(async t => {
  if (t.success != 1) {
    return Swal.fire("Access Failed", "You must login first", "warning").then(t => {
      if (t.isConfirmed != 1) {
        t.isDismissed;
      }
      window.location.href = "index.html";
    });
  }
  {
    document.getElementById("dp").src = t.info.profile;
    document.getElementById("dps").src = t.info.profile;
    idinpro = t.info.id;
    document.getElementById("nam").innerHTML = t.info.realname;
    if (changingTheme == "light") {
      document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
      document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
      document.getElementById("tables").setAttribute("class", "table table-light table-striped");
      document.getElementById("tablesBottom").setAttribute("style", "background-color:#ffffff;");
      document.getElementById("gagi").setAttribute("style", "margin-left: -6%; margin-top: 10%; filter: invert(100%);");
      document.getElementById("gagis").setAttribute("style", "margin-right: -6%; margin-top: 10%; filter: invert(100%);");
    } else {
      document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
      document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
      document.getElementById("tables").setAttribute("class", "table table-dark table-striped");
      document.getElementById("tablesBottom").setAttribute("style", "background-color:#212529;");
      document.getElementById("gagi").setAttribute("style", "margin-left: -6%; margin-top: 10%;");
      document.getElementById("gagis").setAttribute("style", "margin-right: -6%; margin-top: 10%;");
    }
    document.getElementById("changeTheme").setAttribute("data-bs-theme", modings);
    let n = document.getElementById("pageLoader");
    await new Promise(t => setTimeout(t, 1000));
    for (let t = 9; t >= 0; t--) {
      n.style.opacity = "0." + t;
      await new Promise(t => setTimeout(t, 20));
    }
    n.style.display = "none";
    document.getElementById("content").style.display = "block";
  }
}).catch(t => {});
fetch("/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    token: tokenizer,
    tokenizer: "token"
  })
}).then(t => t.json()).then(async t => {
  if (t.success == 1) {
    document.getElementsByClassName("admin")[0].innerHTML = t.info.name;
    document.getElementsByClassName("admin")[1].innerHTML = t.info.name;
    document.getElementById("PreFix").innerHTML = t.info.prefix;
    document.getElementById("numUsr").innerHTML = t.info.usr;
    document.getElementById("numTd").innerHTML = t.info.tid;
  }
  document.getElementById("socialmedia").innerHTML += t.sc;
  document.getElementById("allright").innerHTML += t.allright;
}).catch(t => {
  console.log(t);
});
let pingDown = performance.now();
function onFull() {
  document.getElementById("consoles").requestFullscreen().catch(e => {
    console.log("Error toggling fullscreen:", e);
  });
}
function onFulls() {
  document.getElementById("shells").requestFullscreen().catch(e => {
    console.log("Error toggling fullscreen:", e);
  });
}
function _0x49c76c(t) {
  function e(t) {
    if (typeof t === "string") {
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
setInterval(() => {
  const e = performance.now();
  axios.post("/graphql", {
    token: tokenizer,
    tokenizer: "sysinfo"
  }, {
    timeout: 2000
  }).then(n => {
    document.getElementsByClassName("os")[0].innerHTML = n.data.info.os;
    document.getElementsByClassName("ram")[0].innerHTML = n.data.info.ram + " MB";
    document.getElementsByClassName("ping")[0].innerHTML = Math.floor(performance.now() - e) + " ms";
    document.getElementsByClassName("upt")[0].innerHTML = n.data.info.uptime;
    pingDown = performance.now();
  }).catch(e => {
    document.getElementsByClassName("ping")[0].innerHTML = Math.floor(performance.now() - pingDown) + " ms";
  });
  document.getElementsByClassName("time")[0].innerHTML = new Date().toLocaleTimeString();
}, 1000);
setInterval(() => {
  document.getElementsByClassName("time")[0].innerHTML = new Date().toLocaleTimeString();
}, 1000);
(function () {
  (function () {
    let e;
    try {
      e = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (t) {
      e = window;
    }
    return e;
  })().setInterval(_0x49c76c, 1000);
})();
