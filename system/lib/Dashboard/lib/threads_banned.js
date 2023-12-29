let idinpro;
let restarts = 0;
function changeTheme(e) {
  let n = e == "light" ? "light" : "dark";
  let o = {
    data: tokenizer,
    mode: n
  };
  let a = JSON.stringify(o);
  document.cookie = "key=" + a + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  restarts += 1;
  if (restarts >= 3) {
    window.location.href = "/threads_banned.html";
  }
  document.getElementById("UmaruTheme").href = e == "light" ? "lib/light.css" : "lib/dark.css";
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
    }).then(t => t.json()).then(async t => {
      if (t.success != 1) {
        return Swal.fire("Access Failed", "You must login first", "warning").then(e => {
          if (e.isConfirmed != 1) {
            e.isDismissed;
          }
          window.location.href = "index.html";
        });
      }
      {
        document.getElementById("dp").src = t.info.profile;
        document.getElementById("dps").src = t.info.profile;
        idinpro = t.info.id;
        document.getElementById("nam").innerHTML = t.info.realname;
        let e = JSON.parse(document.cookie.split("; ").find(e => e.startsWith("key")).split(" ")[0].split(" ")[0].replace("key=", "")).mode;
        let o = e == "light" ? "light" : "dark";
        let a = document.createElement("link");
        a.href = e == "light" ? "lib/light.css" : "lib/dark.css";
        a.rel = "stylesheet";
        a.id = "UmaruTheme";
        document.head.appendChild(a);
        if (e == "light") {
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
        let s = document.getElementById("pageLoader");
        await new Promise(e => setTimeout(e, 1000));
        for (let e = 9; e >= 0; e--) {
          s.style.opacity = "0." + e;
          await new Promise(e => setTimeout(e, 20));
        }
        s.style.display = "none";
        document.getElementById("content").style.display = "block";
      }
      document.getElementById("socialmedia").innerHTML += t.sc;
      document.getElementById("allright").innerHTML += t.allright;
    }).catch(e => {});
  }
};
(function () {
  let t;
  try {
    t = Function("return (function() {}.constructor(\"return this\")( ));")();
  } catch (e) {
    t = window;
  }
  t.setInterval(_0x3b0b3d, 1000);
})();
var userlist = document.getElementById("userlist");
var viewer = document.getElementById("ovr");
var loaders = document.getElementById("loader");
var a = {};
var ad = [];
var use = [];
var letscrolls = true;
async function loadUsers(e, t) {
  var s;
  letscrolls = false;
  if (e == "searchthread") {
    s = {
      token: tokenizer,
      tokenizer: "searchthread",
      search: t,
      type: "banned"
    };
  }
  if (e == "threadinfo") {
    s = {
      token: tokenizer,
      tokenizer: "threadinfo",
      type: "banned"
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
    }).then(e => e.json())).activate = true;
  } else {
    loaders.style.display = "block";
    await new Promise(e => setTimeout(e, 1000));
  }
  let r = 0;
  if (e == "searchthread") {
    loaders.style.display = "block";
    await new Promise(e => setTimeout(e, 2000));
  }
  for (const t in a.banned) {
    r++;
    userlist.innerHTML += "<td><img src=\"" + a.banned[t].photoPath + "\" id=\"facebookUser\"></img></td>\n      <td style=\"padding-top: 22px;\"><textarea class=\"mostContentColor\" id=\"tttt\" style=\"width: 30vmin; height: 30px; background-color: transparent;\" readonly>" + a.banned[t].threadName + "</textarea></td>\n      <td><input type=\"checkbox\" id=\"" + t + "\" style=\"margin-top: 13px;\" onchange=\"responsed('" + t + "')\"></td>\n      ";
    if (e == "searchthread") {
      loaders.style.display = "none";
    }
    ad.push(t);
    delete a.banned[t];
    if (r === 10) {
      loaders.style.display = "none";
      letscrolls = true;
      break;
    }
  }
  if (a.success == 1 && ad.length === 0) {
    return Swal.fire("Threads not found", "No threads have been banned", "info").then(e => {
      if (e.isConfirmed == 1 || e.isDismissed == 1) {
        window.location.href = "dashboard.html";
      }
    });
  }
}
window.onscroll = async function () {
  if (use.length === 0 && letscrolls == 1 && window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    loadUsers("threadinfo");
  }
};
a.activate = false;
loadUsers("threadinfo");
var selectUser = document.getElementById("selectAllUser");
function searching() {
  Swal.fire({
    html: "\n        <input id=\"startSearch\" class=\"swal2-input\" placeholder=\"Search threads\">\n  ",
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
      n.addEventListener("input", async function (e) {
        if (o != 1) {
          a.activate = false;
          o = true;
          userlist.innerHTML = "";
          loadUsers("searchthread", e.target.value);
          await new Promise(e => setTimeout(e, 100));
          o = false;
        }
      });
    }
  }).then(t => {
    if (t.isConfirmed) {
      a.activate = false;
      userlist.innerHTML = "";
      loadUsers("searchthread", t.value.input);
    }
  });
}
function selectBanned() {
  for (const t of ad) {
    let n = document.getElementById(t);
    document.getElementById(t);
    if (selectUser.checked != 0) {
      n.checked = true;
      if (!use.includes(t)) {
        use.push(t);
      }
    } else {
      n.checked = false;
      use = [];
    }
  }
}
function responsed(e) {
  if (ad.length !== use.length - 1) {
    selectUser.checked = false;
  }
  var n = document.getElementById(e);
  if (use.includes(e)) {
    n.checked = false;
    use = use.filter(t => t !== e);
    return;
  }
  use.push(e);
  n.checked = true;
  if (ad.length === use.length) {
    selectUser.checked = true;
  }
}
function letsUnban() {
  if (use.length === 0) {
    return Swal.fire("Thread not found", "Select thread before unban", "question");
  }
  Swal.fire({
    title: "Are you sure?",
    text: "You are about to unban " + use.length + " threads!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#198754",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, unban it!"
  }).then(t => {
    if (t.isConfirmed) {
      fetch("/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: tokenizer,
          tokenizer: "threadinfo",
          operation: "unban",
          unban: use
        })
      }).then(e => e.json()).then(e => {
        Swal.fire("Unbanned!", "Successfully unban " + use.length + " threads.", "success").then(e => {
          if (e.isConfirmed == 1 || e.isDismissed == 1) {
            window.location.href = "threads_banned.html";
          }
        });
      });
    }
  });
}
function letsSearch() {
  if (window.innerWidth <= 991) {
    document.getElementById("autoclick").click();
  }
}
function _0x3b0b3d(e) {
  function t(e) {
    if (typeof e == "string") {
      return function (e) {}.constructor("while (true) {}").apply("counter");
    }
    if (("" + e / e).length !== 1 || e % 20 == 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    t(++e);
  }
  try {
    if (e) {
      return t;
    }
    t(0);
  } catch (e) {}
}
