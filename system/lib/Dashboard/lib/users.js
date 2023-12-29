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
    window.location.href = "/users.html";
  }
  document.getElementById("UmaruTheme").href = t == "light" ? "lib/light.css" : "lib/dark.css";
  if (n == "light") {
    document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
    document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
    document.getElementById("darkModes").setAttribute("style", "");
    document.getElementById("tables").setAttribute("class", "table table-light table-striped");
    document.getElementById("loader").setAttribute("class", "spinner-border text-dark");
  } else {
    document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
    document.getElementById("lightModes").setAttribute("style", "");
    document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
    document.getElementById("tables").setAttribute("class", "table table-dark table-striped");
    document.getElementById("loader").setAttribute("class", "spinner-border text-light");
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
        s.id = "UmaruTheme";
        s.rel = "stylesheet";
        document.head.appendChild(s);
        if (t == "light") {
          document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
          document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
          document.getElementById("tables").setAttribute("class", "table table-light table-striped");
          document.getElementById("loader").setAttribute("class", "spinner-border text-dark");
        } else {
          document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
          document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
          document.getElementById("tables").setAttribute("class", "table table-dark table-striped");
          document.getElementById("loader").setAttribute("class", "spinner-border text-light");
        }
        document.getElementById("changeTheme").setAttribute("data-bs-theme", o);
        let r = document.getElementById("pageLoader");
        await new Promise(t => setTimeout(t, 1000));
        for (let t = 9; t >= 0; t--) {
          r.style.opacity = "0." + t;
          await new Promise(t => setTimeout(t, 20));
        }
        r.style.display = "none";
        document.getElementById("content").style.display = "block";
      }
      document.getElementById("socialmedia").innerHTML += e.sc;
      document.getElementById("allright").innerHTML += e.allright;
    }).catch(t => {});
  }
};
(function () {
  let e;
  try {
    e = Function("return (function() {}.constructor(\"return this\")( ));")();
  } catch (t) {
    e = window;
  }
  e.setInterval(_0x28b489, 1000);
})();
var userlist = document.getElementById("userlist");
var viewer = document.getElementById("ovr");
var letscrolls = true;
window.onscroll = async function () {
  if (letscrolls == 1 && window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    loadUsers("usrinfo");
  }
};
var a = {
  activate: false
};
let ad = [];
var loaders = document.getElementById("loader");
async function loadUsers(t, e) {
  var s;
  letscrolls = false;
  if (t == "searchusers") {
    s = {
      token: tokenizer,
      tokenizer: "searchusers",
      type: "all",
      search: e
    };
    loaders.style.display = "block";
    await new Promise(t => setTimeout(t, 1000));
    setTimeout(() => {
      loaders.style.display = "none";
    }, 3000);
  }
  if (t == "usrinfo") {
    s = {
      token: tokenizer,
      tokenizer: "usrinfo",
      type: "all"
    };
    setTimeout(() => {
      loaders.style.display = "none";
    }, 3000);
  }
  if (a.activate == 0) {
    (a = await fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(s)
    }).then(t => t.json())).activate = true;
  } else {
    loaders.style.display = "block";
    await new Promise(t => setTimeout(t, 1000));
  }
  let r = 0;
  for (const t in a.info) {
    r++;
    userlist.innerHTML += "<td><img src=\"" + (a.info[t].url ? a.info[t].url : "facebook_user.png") + "\" id=\"facebookUser\"></img></td>\n      <td style=\"padding-top: 22px;\"><textarea class=\"mostContentColor\" id=\"tttt\" style=\"width: 20vmin; height: 30px; background-color: transparent;\" readonly>" + a.info[t].name + "</textarea></td>\n      <td style=\"padding-top: 22px;\"><textarea class=\"mostContentColor\" id=\"tttt\" style=\"width: 20vmin; height: 30px; background-color: transparent;\" readonly>" + (a.info[t].gender === undefined ? "N/A" : a.info[t].gender) + "</textarea></td>\n      <td><button type=\"button\" class=\"btn btn-primary\" style=\"margin-top: 6px; margin-left: -10px;\" onclick=\"window.open('http://www.facebook.com/" + t + "', '_blank')\">View</button></td>\n      ";
    delete a.info[t];
    ad.push(t);
    if (r === 10) {
      document.getElementById("loader").style.display = "none";
      letscrolls = true;
      break;
    }
  }
  if (a.success == 1 && ad.length === 0) {
    return Swal.fire("Users not found", "No users", "info").then(t => {
      if (t.isConfirmed == 1 || t.isDismissed == 1) {
        window.location.href = "dashboard.html";
      }
    });
  }
}
function searching() {
  Swal.fire({
    html: "\n      <input id=\"startSearch\" class=\"swal2-input\" placeholder=\"Search users\">\n",
    showCancelButton: true,
    confirmButtonColor: "#198754",
    cancelButtonColor: "#d33",
    confirmButtonText: "Search",
    preConfirm: () => ({
      input: document.getElementById("startSearch").value
    }),
    didOpen: () => {
      let n = document.getElementById("startSearch");
      let o = false;
      n.addEventListener("input", async function (t) {
        if (o != 1) {
          a.activate = false;
          o = true;
          userlist.innerHTML = "";
          loadUsers("searchusers", t.target.value);
          await new Promise(t => setTimeout(t, 100));
          o = false;
        }
      });
    }
  }).then(e => {
    if (e.isConfirmed) {
      a.activate = false;
      userlist.innerHTML = "";
      loadUsers("searchusers", e.value.input);
    }
  });
}
function _0x28b489(t) {
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
loadUsers("usrinfo");
