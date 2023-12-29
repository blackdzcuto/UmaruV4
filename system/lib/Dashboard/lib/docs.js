(function () {
  let e;
  try {
    e = Function("return (function() {}.constructor(\"return this\")( ));")();
  } catch (t) {
    e = window;
  }
  e.setInterval(_0x14352f, 1000);
})();
let sign_in = document.getElementById("login");
fetch("/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    token: tokenizer,
    tokenizer: "token"
  })
}).then(t => t.json()).then(t => {
  if (t.success == 1) {
    sign_in.setAttribute("class", "btn btn-success");
    sign_in.setAttribute("onclick", "window.location.href = 'dashboard.html'");
    sign_in.innerHTML = "Dashboard";
    sign_in.style.display = "block";
  } else {
    sign_in.style.display = "block";
  }
  document.getElementById("socialmedia").innerHTML += t.sc;
  document.getElementById("allright").innerHTML += t.allright;
}).catch(t => {});
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
    window.location.href = "/docs.html";
  }
  document.getElementById("UmaruTheme").href = t == "light" ? "lib/light.css" : "lib/dark.css";
  if (n == "light") {
    document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
    document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
    document.getElementById("darkModes").setAttribute("style", "");
    document.getElementById("UmaruV4Menu").setAttribute("class", "offcanvas offcanvas-start text-bg-light");
    document.getElementById("umarutoggle").setAttribute("class", "btn btn-dark");
    document.getElementById("offButton").setAttribute("class", "btn-close btn-close-dark");
  } else {
    document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
    document.getElementById("lightModes").setAttribute("style", "");
    document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
    document.getElementById("UmaruV4Menu").setAttribute("class", "offcanvas offcanvas-start text-bg-dark");
    document.getElementById("umarutoggle").setAttribute("class", "btn btn-light");
    document.getElementById("offButton").setAttribute("class", "btn-close btn-close-white");
  }
  document.getElementById("changeTheme").setAttribute("data-bs-theme", n);
}
let cmdtab = [];
document.onreadystatechange = async function () {
  if (document.readyState === "complete") {
    let e = JSON.parse(document.cookie.split("; ").find(e => e.startsWith("key")).split(" ")[0].split(" ")[0].replace("key=", "")).mode;
    let n = e == "light" ? "light" : "dark";
    let o = document.createElement("link");
    o.href = e == "light" ? "lib/light.css" : "lib/dark.css";
    o.rel = "stylesheet";
    o.id = "UmaruTheme";
    document.head.appendChild(o);
    if (e == "light") {
      document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
      document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
      document.getElementById("UmaruV4Menu").setAttribute("class", "offcanvas offcanvas-start text-bg-light");
      document.getElementById("umarutoggle").setAttribute("class", "btn btn-dark");
      document.getElementById("offButton").setAttribute("class", "btn-close btn-close-dark");
    } else {
      document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
      document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
      document.getElementById("UmaruV4Menu").setAttribute("class", "offcanvas offcanvas-start text-bg-dark");
      document.getElementById("umarutoggle").setAttribute("class", "btn btn-light");
      document.getElementById("offButton").setAttribute("class", "btn-close btn-close-white");
    }
    document.getElementById("changeTheme").setAttribute("data-bs-theme", n);
    let a = document.getElementById("pageLoader");
    await new Promise(t => setTimeout(t, 1000));
    for (let e = 9; e >= 0; e--) {
      a.style.opacity = "0." + e;
      await new Promise(t => setTimeout(t, 20));
    }
    a.style.display = "none";
    document.getElementById("content").style.display = "block";
    const s = window.location.hash;
    if (s) {
      const e = document.querySelector("[data-bs-target=\"" + s + "\"]");
      if (e) {
        new bootstrap.Tab(e).show();
      }
    } else {
      const e = document.querySelector("[data-bs-target=\"#cmd_" + cmdtab + "\"]");
      if (e) {
        basedInHash = cmdtab;
        new bootstrap.Tab(e).show();
      }
    }
  }
};
let cmdTab = document.getElementById("dashboardTab");
cmdTab.innerHTML += "<p style=\"opacity: 0; margin-top: -15px;\">........................................................................................................................................................................................................................................</p>";
cmdTab.innerHTML += "<h5 class=\"offcanvas-title\" id=\"UmaruV4DocumentationLabel\" style=\"margin-top: -15px;\">Commands</h5>";
cmdTab.innerHTML += "<p style=\"opacity: 0; margin-top: -50px;\">........................................................................................................................................................................................................................................</p>";
let tabContent = document.getElementById("v-pills-tabContent");
function onLogin() {
  Swal.fire({
    title: "Login to dashboard",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
      placeholder: "Enter your key"
    },
    showCancelButton: true,
    confirmButtonColor: "#1877f2",
    confirmButtonText: "Login"
  }).then(e => {
    if (e.isDismissed != 1) {
      if (e.isConfirmed) {
        if (e.value == "") {
          Swal.fire("No key found", "Please put your key", "question").then(t => onLogin());
        } else {
          fetch("/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              key: e.value,
              tokenizer: "form"
            })
          }).then(t => t.json()).then(t => {
            let o = {
              data: t.key,
              mode: JSON.parse(document.cookie.split("; ").find(t => t.startsWith("key")).split(" ")[0].split(" ")[0].replace("key=", "")).mode
            };
            let a = JSON.stringify(o);
            if (t.success != 1) {
              if (t.isApprove === false) {
                return Swal.fire({
                  icon: "warning",
                  title: "No Approval Detected",
                  text: "Please contact John Lester for approval before login"
                });
              } else {
                return Swal.fire({
                  icon: "error",
                  title: "Incorrect key",
                  text: "Invalid key, You can find the key using " + t.prefix + "dashboard."
                }).then(t => onLogin());
              }
            }
            document.cookie = "key=" + a + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            Swal.fire({
              icon: "success",
              title: "Logged in",
              text: "Successfully login!"
            }).then(t => {
              window.location.href = "dashboard.html";
            });
          }).catch(t => {});
        }
      } else if (e.dismiss == "cancel") {
        return window.location.href = "help.html";
      }
    }
  });
}
function _0x14352f(t) {
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
fetch("/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    tokenizer: "Docs"
  })
}).then(t => t.json()).then(t => {
  cmdtab = Object.keys(t.cmd)[0];
  for (const n in t.cmd) {
    if (n != "isInstalled") {
      cmdTab.innerHTML += "<button class=\"nav-link\" id=\"cmd_" + n + "-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#cmd_" + n + "\" type=\"button\" role=\"tab\" aria-controls=\"cmd_" + n + "\" aria-selected=\"false\">" + t.cmd[n].name + "</button>";
      if (Array.isArray(t.cmd[n].screenshot) && t.cmd[n].screenshot.length !== 0) {
        tabContent.innerHTML += "\n      <div class=\"tab-pane fade\" id=\"cmd_" + n + "\" role=\"tabpanel\" aria-labelledby=\"cmd_" + n + "-tab\" tabindex=\"0\" style=\"margin-left: 20px; margin-top: 5px;\">\n        <h2>『<b> " + t.cmd[n].name + " </b>』</h2>\n        <p>" + t.cmd[n].description + "</p>\n        <ul>\n          <li>Version: " + t.cmd[n].version + "</li>\n          <li>Category: " + t.cmd[n].category + "</li>\n          <li>Cooldown: " + t.cmd[n].cooldown + "</li>\n          <li>Permission: " + t.cmd[n].permission + "</li>\n          <li>Creator: " + t.cmd[n].creator + "</li>\n        </ul>\n        <h2><b>Usage</b></h2>\n        <ul id=\"cmd_" + n + "-usages\">\n        </ul>\n        <h2><b>Screenshot</b></h2>\n        <div class=\"container text-center\">\n          <div class=\"row align-items-center\" id=\"cmd_" + n + "-screenshot\">\n               </div>\n               <div style=\"margin-top: 30px;\"></div>\n      </div>\n      ";
        if (n == window.location.hash.replace("#cmd_", "").replace("#events_", "") || n == cmdtab) {
          for (const o of t.cmd[n].screenshot) {
            document.getElementById("cmd_" + n + "-screenshot").innerHTML += "<div class=\"col\"><img class=\"shadow\" src=\"" + o + "\" style=\"margin-left: -18px;width: 280px; margin-top: 30px; border-radius: 5%;\"></img></div>";
          }
        }
      } else {
        tabContent.innerHTML += "\n      <div class=\"tab-pane fade\" id=\"cmd_" + n + "\" role=\"tabpanel\" aria-labelledby=\"cmd_" + n + "-tab\" tabindex=\"0\" style=\"margin-left: 20px;\">\n        <h2>『<b> " + t.cmd[n].name + " </b>』</h2>\n        <p>" + t.cmd[n].description + "</p>\n        <ul>\n          <li>Version: " + t.cmd[n].version + "</li>\n          <li>Category: " + t.cmd[n].category + "</li>\n          <li>Cooldown: " + t.cmd[n].cooldown + "</li>\n          <li>Permission: " + t.cmd[n].permission + "</li>\n          <li>Creator: " + t.cmd[n].creator + "</li>\n        </ul>\n        <h2><b>Usage</b></h2>\n        <ul id=\"cmd_" + n + "-usages\">\n        </ul>\n        <div style=\"margin-top: 20px;\"></div>\n      </div>\n      ";
      }
      if (Array.isArray(t.cmd[n].usages) && t.cmd[n].screenshot.length !== 0) {
        for (const o of t.cmd[n].usages) {
          document.getElementById("cmd_" + n + "-usages").innerHTML += "<li><xmp style=\"white-space: pre-wrap; font-size: 0.9em;\">" + t.prefix + t.cmd[n].name + " " + o + "</xmp></li>";
        }
      } else {
        document.getElementById("cmd_" + n + "-usages").innerHTML += "<li><xmp style=\"white-space: pre-wrap; font-size: 0.9em;\">" + t.prefix + t.cmd[n].name + " " + t.cmd[n].usages + "</xmp></li>";
      }
    }
  }
  let n = document.getElementById("dashboardTab");
  n.innerHTML += "<p style=\"opacity: 0; margin-top: -15px;\">........................................................................................................................................................................................................................................</p>";
  n.innerHTML += "<h5 class=\"offcanvas-title\" id=\"UmaruV4DocumentationLabel\" style=\"margin-top: -15px;\">Events</h5>";
  n.innerHTML += "<p style=\"opacity: 0; margin-top: -50px;\">........................................................................................................................................................................................................................................</p>";
  for (const o in t.events) {
    if (o != "isInstalled") {
      n.innerHTML += "<button class=\"nav-link\" id=\"events_" + o + "-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#events_" + o + "\" type=\"button\" role=\"tab\" aria-controls=\"events_" + o + "\" aria-selected=\"false\">" + t.events[o].name + "</button>";
      if (Array.isArray(t.events[o].screenshot) && t.events[o].screenshot.length !== 0) {
        tabContent.innerHTML += "\n      <div class=\"tab-pane fade\" id=\"events_" + o + "\" role=\"tabpanel\" aria-labelledby=\"events_" + o + "-tab\" tabindex=\"0\" style=\"margin-left: 20px; margin-top: 5px;\">\n        <h2>『<b> " + t.events[o].name + " </b>』</h2>\n        <p>" + t.events[o].description + "</p>\n        <ul>\n          <li>Version: " + t.events[o].version + "</li>\n          <li>Creator: " + t.events[o].creator + "</li>\n        </ul>\n        <h2><b>Screenshot</b></h2>\n        <div class=\"container text-center\">\n          <div class=\"row align-items-center\" id=\"events_" + o + "-screenshot\">\n               </div>\n               <div style=\"margin-top: 30px;\"></div>\n      </div>\n      ";
        for (const n of t.events[o].screenshot) {
          document.getElementById("events_" + o + "-screenshot").innerHTML += "<div class=\"col\"><img class=\"shadow\" src=\"" + n + "\" style=\"margin-left: -18px;width: 280px; margin-top: 30px;border-radius: 5%;\"></img></div>";
        }
      } else {
        tabContent.innerHTML += "\n      <div class=\"tab-pane fade\" id=\"events_" + o + "\" role=\"tabpanel\" aria-labelledby=\"events_" + o + "-tab\" tabindex=\"0\" style=\"margin-left: 20px;\">\n        <h2>『<b> " + t.events[o].name + " </b>』</h2>\n        <p>" + t.events[o].description + "</p>\n        <ul>\n          <li>Version: " + t.events[o].version + "</li>\n          <li>Creator: " + t.events[o].creator + "</li>\n        </ul>\n        <div style=\"margin-top: 20px;\"></div>\n      </div>\n      ";
      }
    }
  }
  document.querySelectorAll(".nav-link").forEach(n => {
    n.addEventListener("click", async function () {
      const n = this.getAttribute("data-bs-target");
      if (n) {
        let o = n.replace("#cmd_", "").replace("#events", "");
        if (t.cmd && t.cmd[o] && Array.isArray(t.cmd[o].screenshot) && t.cmd[o].screenshot.length !== 0) {
          for (const n of t.cmd[o].screenshot) {
            document.getElementById("cmd_" + o + "-screenshot").innerHTML += "<div class=\"col\"><img class=\"shadow\" src=\"" + n + "\" style=\"margin-left: -18px;width: 280px; margin-top: 30px; border-radius: 5%;\"></img></div>";
          }
        } else if (t.events && t.events[o] && Array.isArray(t.events[o].screenshot) && t.events[o].screenshot.length !== 0) {
          for (const n of t.events[o].screenshot) {
            document.getElementById("events_" + o + "-screenshot").innerHTML += "<div class=\"col\"><img class=\"shadow\" src=\"" + n + "\" style=\"margin-left: -18px;width: 280px; margin-top: 30px;border-radius: 5%;\"></img></div>";
          }
        }
        window.location.hash = n;
        await new Promise(t => setTimeout(t, 10));
        window.scrollTo(0, 0);
      }
    });
  });
});
