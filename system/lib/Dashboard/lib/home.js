let sign_in = document.getElementById("login");
let isA = false;
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
    isA = true;
  }
  document.getElementById("socialmedia").innerHTML += t.sc;
  document.getElementById("allright").innerHTML += t.allright;
}).catch(t => {});
(function () {
  (function () {
    let e;
    try {
      e = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (t) {
      e = window;
    }
    return e;
  })().setInterval(_0xb80bc1, 1000);
})();
let restarts = 0;
function changeTheme(t) {
  let n = t == "light" ? "light" : "dark";
  let o = {
    data: tokenizer,
    mode: n
  };
  let i = JSON.stringify(o);
  document.cookie = "key=" + i + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  restarts += 1;
  if (restarts >= 3) {
    window.location.href = "/";
  }
  document.getElementById("UmaruTheme").href = t == "light" ? "lib/light.css" : "lib/dark.css";
  if (n == "light") {
    document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
    document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
    document.getElementById("darkModes").setAttribute("style", "");
    particlesJS.load("particles-js", "lib/lightparticle.json", function () {});
  } else {
    document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
    document.getElementById("lightModes").setAttribute("style", "");
    document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
    particlesJS.load("particles-js", "lib/darkparticle.json", function () {});
  }
  document.getElementById("changeTheme").setAttribute("data-bs-theme", n);
}
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
            let i = JSON.stringify(o);
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
            document.cookie = "key=" + i + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
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
async function logoo() {
  var n = document.getElementById("logo2");
  for (let e = 0; e < 9; e++) {
    n.style.opacity = "0." + e;
    await new Promise(t => setTimeout(t, 30));
  }
  n.style.opacity = "1";
}
function _0xb80bc1(t) {
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
document.onreadystatechange = async function () {
  if (document.readyState === "complete") {
    let e;
    try {
      e = JSON.parse(document.cookie.split("; ").find(e => e.startsWith("key")).split(" ")[0].split(" ")[0].replace("key=", "")).mode;
    } catch {
      e = "dark";
      window.location.href = "/contact.html";
    }
    let n = e == "light" ? "light" : "dark";
    let o = document.createElement("link");
    o.href = e == "light" ? "lib/light.css" : "lib/dark.css";
    o.rel = "stylesheet";
    o.id = "UmaruTheme";
    document.head.appendChild(o);
    if (e == "light") {
      document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
      document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
    } else {
      document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
      document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
    }
    document.getElementById("changeTheme").setAttribute("data-bs-theme", n);
    let i = document.getElementById("pageLoader");
    await new Promise(t => setTimeout(t, 1000));
    for (let e = 9; e >= 0; e--) {
      i.style.opacity = "0." + e;
      await new Promise(t => setTimeout(t, 20));
    }
    i.style.display = "none";
    document.getElementById("content").style.display = "block";
    if (n == "light") {
      particlesJS.load("particles-js", "lib/lightparticle.json", function () {});
    } else {
      particlesJS.load("particles-js", "lib/darkparticle.json", function () {});
    }
  }
};
logoo();
