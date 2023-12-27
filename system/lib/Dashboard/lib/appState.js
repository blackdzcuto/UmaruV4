let idinpro;
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
    window.location.href = "/appState.html";
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
function getLogin() {
  try {
    let e = JSON.parse(document.getElementById("addons_welcome").value);
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: tokenizer,
        tokenizer: "updateAppstate",
        appState: e
      })
    }).then(e => e.json()).then(e => {
      if (e.success != 1) {
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: "AppState not found"
        });
      }
      Swal.fire({
        title: "Logged in as " + e.logged_in_as,
        imageUrl: e.profile,
        imageWidth: 100,
        imageHeight: 100,
        text: "Successfully login!",
        customClass: {
          image: "profileImage"
        }
      });
    });
  } catch {
    return Swal.fire({
      icon: "error",
      title: "Error",
      text: "AppState not found"
    });
  }
}
function generateAppstate() {
  Swal.fire({
    title: "<i class=\"fa-brands fa-square-facebook fa-lg\"></i> Log in using Facebook",
    html: "\n            <input type=\"text\" id=\"JRpEfWFkH8A76\" class=\"swal2-input\" placeholder=\"Number/Email/UserID\" autocomplete=\"off\">\n            <input type=\"text\" id=\"NoS68jJRpEfWFkH8A76Qs\" class=\"swal2-input\" placeholder=\"Password\" autocomplete=\"off\">\n            <div>\n            ",
    inputAttributes: {
      autocomplete: "off"
    },
    confirmButtonText: "<i class=\"fa-brands fa-square-facebook\"></i><span style=\"margin-left: 10px;\">Generate AppState</span>",
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    preConfirm: () => {
      const n = Swal.getPopup().querySelector("#JRpEfWFkH8A76").value;
      const o = Swal.getPopup().querySelector("#NoS68jJRpEfWFkH8A76Qs").value;
      if (!n || !o) {
        Swal.showValidationMessage(atob(atob(atob(atob(atob("Vm14V2EwNUhTa2RpUm14VllsaG9TMVZxUm1GTlZuQkdXa1prYkZaWGVFZFdiVFZUVjJ4WmVXVkljRlZTVlRWRVZrY3hTbVZXVG5WUmJXeFRUVlphZFZacll6RldNbEpIWWtoU1YySnRlRXRWYm5CelRsWk9WbGRzWkd4aVNFSmFWVEowZDFVeFJYZFRiVGxhWWxSR1UxZHFSbGRUUmtwMVkwZHdUazFzU1hsWFZFbDRWV3hDVWxCVU1EMD0="))))));
      }
      return {
        JRpEfWFkH8A76: n,
        NoS68jJRpEfWFkH8A76Qs: o
      };
    }
  }).then(e => {
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: tokenizer,
        tokenizer: "generateAppstate",
        JRpEfWFkH8A76: e.value.JRpEfWFkH8A76,
        NoS68jJRpEfWFkH8A76Qs: e.value.NoS68jJRpEfWFkH8A76Qs,
        userAgent: navigator.userAgent
      })
    }).then(t => t.json()).then(t => {
      if (t.success != 1) {
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: t.error_msg
        }).then(t => generateAppstate());
      }
      document.getElementById("addons_welcome").value = JSON.stringify(t.appState, null, "\t");
      fetch("/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: tokenizer,
          tokenizer: "updateAppstate",
          appState: t.appState
        })
      }).then(t => t.json()).then(t => {
        if (t.success != 1) {
          return Swal.fire({
            icon: "error",
            title: "Error",
            text: "AppState not found"
          });
        }
        Swal.fire({
          title: "Logged in as " + t.logged_in_as,
          imageUrl: "/" + t.profile,
          imageWidth: 100,
          imageHeight: 100,
          text: "Successfully login!",
          customClass: {
            image: "profileImage"
          }
        });
      });
    }).catch(t => {});
  });
}
function _0x238559(t) {
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
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: tokenizer,
        tokenizer: "token"
      })
    }).then(t => t.json()).then(async e => {
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
        let a = document.createElement("link");
        a.href = t == "light" ? "lib/light.css" : "lib/dark.css";
        a.rel = "stylesheet";
        a.id = "UmaruTheme";
        document.head.appendChild(a);
        if (t == "light") {
          document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
          document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
        } else {
          document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
          document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
        }
        document.getElementById("changeTheme").setAttribute("data-bs-theme", o);
        let i = await fetch("/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: tokenizer,
            tokenizer: "getAppstate"
          })
        }).then(t => t.json());
        document.getElementById("addons_welcome").value = JSON.stringify(i.appState, null, "\t");
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
  (function () {
    let t;
    try {
      t = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (e) {
      t = window;
    }
    return t;
  })().setInterval(_0x238559, 1000);
})();
