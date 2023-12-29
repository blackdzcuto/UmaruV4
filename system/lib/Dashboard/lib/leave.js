let idinpro;
let restarts = 0;
function changeTheme(e) {
  let n = e == "light" ? "light" : "dark";
  let o = {
    data: tokenizer,
    mode: n
  };
  let s = JSON.stringify(o);
  document.cookie = "key=" + s + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  restarts += 1;
  if (restarts >= 3) {
    window.location.href = "/leave.html";
  }
  document.getElementById("UmaruTheme").href = e == "light" ? "lib/light.css" : "lib/dark.css";
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
        let s = document.createElement("link");
        s.href = e == "light" ? "lib/light.css" : "lib/dark.css";
        s.rel = "stylesheet";
        s.id = "UmaruTheme";
        document.head.appendChild(s);
        if (e == "light") {
          document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
          document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
        } else {
          document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
          document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
        }
        document.getElementById("changeTheme").setAttribute("data-bs-theme", o);
        let a = document.getElementById("pageLoader");
        await new Promise(e => setTimeout(e, 1000));
        for (let e = 9; e >= 0; e--) {
          a.style.opacity = "0." + e;
          await new Promise(e => setTimeout(e, 20));
        }
        a.style.display = "none";
        document.getElementById("content").style.display = "block";
      }
      document.getElementById("socialmedia").innerHTML += t.sc;
      document.getElementById("allright").innerHTML += t.allright;
    }).catch(e => {});
  }
};
const extensions = [".mp4", ".mov", ".avi", ".flv", ".wmv", ".mkv", ".m4v", ".mpg", ".mpeg", ".3gp", ".webm", ".jpg", ".jpeg", ".png", ".gif"];
const videoExtensions = [".mp4", ".mov", ".avi", ".flv", ".wmv", ".mkv", ".m4v", ".mpg", ".mpeg", ".3gp", ".webm"];
let welcome = document.getElementById("addons_welcome");
let reason1 = document.getElementById("reason1");
let reason2 = document.getElementById("reason2");
let configs = {};
function saveAndRestart() {
  configs.Addons.Leave.goodbye = welcome.value;
  configs.Addons.Leave.left = reason1.value;
  configs.Addons.Leave.remove = reason2.value;
  welcome.value = configs.Addons.Leave.goodbye;
  reason1.value = configs.Addons.Leave.left;
  reason2.value = configs.Addons.Leave.remove;
  fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: tokenizer,
      tokenizer: "configuration",
      type: "save",
      data: configs
    })
  }).then(e => e.json()).then(t => {
    if (t.success == 1) {
      Swal.fire("Operation successful", "The operation was successful", "success");
    }
  }).catch(e => {});
}
function ResetToDefault() {
  Swal.fire({
    title: "Are you sure?",
    text: "You can't undo this action",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, reset it"
  }).then(t => {
    if (t.isConfirmed) {
      configs.Addons.Leave.goodbye = "Goodbye {name}.\n\nReason: {reason}";
      configs.Addons.Leave.left = "Left the group";
      configs.Addons.Leave.remove = "Kicked by Administrator";
      welcome.value = configs.Addons.Leave.goodbye;
      reason1.value = configs.Addons.Leave.left;
      reason2.value = configs.Addons.Leave.remove;
      fetch("/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: tokenizer,
          tokenizer: "configuration",
          type: "save",
          data: configs
        })
      }).then(e => e.json()).then(e => {
        if (e.success == 1) {
          Swal.fire("Operation successful", "The operation was successful", "success");
        }
      }).catch(e => {});
    }
  });
}
function getDatas(e, t) {
  fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: tokenizer,
      tokenizer: "getleavepic",
      type: e
    })
  }).then(e => e.json()).then(o => {
    let a = document.getElementById(t);
    a.innerHTML = "";
    for (const n in o.image) {
      console.log(n);
      let i;
      let c = n.split("/");
      let r = c[c.length - 1];
      if (!n.endsWith(".mp4.jpg") && (t != "getPicture" || [".jpg", ".jpeg", ".png"].some(e => n.endsWith(e)))) {
        if (t == "getPicture") {
          if (n.endsWith(".leave2.jpg") || n.endsWith(".leave.jpg")) {
            continue;
          }
          i = "\n            <div id=\"" + ("leave_" + n + "_canvas") + "\" class=\"carousel slide\" data-bs-ride=\"carousel\">\n              <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                  <img src=\"" + n + "\" style=\"height: 130px; max-width: 262px; margin-top: 10px;\" onclick=\"window.open('" + n + "', '_blank')\">\n                  </div>\n                  <div class=\"carousel-item\">\n                    <img src=\"" + (n + ".leave.jpg") + "\" style=\"height: 130px; max-width: 262px; margin-top: 10px;\" onclick=\"window.open('" + (n + ".leave.jpg") + "', '_blank')\">\n                    </div>\n                    <div class=\"carousel-item\">\n                      <img src=\"" + n + ".leave2.jpg\" style=\"height: 130px; max-width: 262px; margin-top: 10px;\" onclick=\"window.open('" + (n + ".leave2.jpg") + "', '_blank')\">\n                      </div>\n                      </div>\n                      <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#" + ("leave_" + n + "_canvas") + "\" data-bs-slide=\"prev\">\n                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"visually-hidden\">Previous</span>\n                        </button>\n                        <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#" + ("leave_" + n + "_canvas") + "\" data-bs-slide=\"next\">\n                          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                          <span class=\"visually-hidden\">Next</span>\n                          </button>\n                          </div>\n            ";
        } else if (t == "getPictures") {
          if (n.endsWith(".leave2.gif") || n.endsWith(".leave.gif")) {
            continue;
          }
          i = "\n            <div id=\"" + ("leave_" + n + "_canvas") + "\" class=\"carousel slide\" data-bs-ride=\"carousel\">\n              <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                  <img src=\"" + n + "\" style=\"height: 130px; max-width: 262px; margin-top: 10px;\" onclick=\"window.open('" + n + "', '_blank')\">\n                  </div>\n                  <div class=\"carousel-item\">\n                    <img src=\"" + (n + ".leave.gif") + "\" style=\"height: 130px; max-width: 262px; margin-top: 10px;\" onclick=\"window.open('" + (n + ".leave.gif") + "', '_blank')\">\n                    </div>\n                    <div class=\"carousel-item\">\n                      <img src=\"" + (n + ".leave2.gif") + "\" style=\"height: 130px; max-width: 262px; margin-top: 10px;\" onclick=\"window.open('" + n + ".leave2.gif', '_blank')\">\n                      </div>\n                      </div>\n                      <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#" + ("leave_" + n + "_canvas") + "\" data-bs-slide=\"prev\">\n                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"visually-hidden\">Previous</span>\n                        </button>\n                        <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#" + ("leave_" + n + "_canvas") + "\" data-bs-slide=\"next\">\n                          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                          <span class=\"visually-hidden\">Next</span>\n                          </button>\n                          </div>\n            ";
        } else {
          i = "<img src=\"" + (videoExtensions.some(e => n.endsWith(e)) ? n + ".jpg" : n) + "\" style=\"max-height: 130px;  min-height: 130px; max-width: 262px; margin-top: 10px;\" onclick=\"window.open('" + n + "', '_blank')\"></img>";
        }
        if (o.image[n] == 1) {
          a.innerHTML += "\n            <div class=\"col\" id=\"items\">\n          <div class=\"mostItem\">\n            " + i + "\n            <p style=\"margin-top: 10px;\">" + (r.length >= 25 ? r.substring(0, 25) + "..." : r) + "</p>\n            <div class=\"form-check form-switch\">\n              <button type=\"button\" class=\"btn btn-danger\" style=\"float: left; margin-left: 5px;\" onClick=\"deleteThis('" + n + "', '" + e + "')\"><i class=\"fa-solid fa-trash\"></i><span style=\"margin-left: 10px;\">Delete</span></button>\n              <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"" + n + "\" style=\"float: right; margin-right: 47px;  font-size: 1.6em;\" onchange=\"switchData('" + n + "', '" + e + "')\" checked>\n              </div>\n              <div class=\"mostItemPadding\">\n            <div>\n          </div>\n        </div>\n            ";
          document.getElementById(n).checked = true;
        } else {
          a.innerHTML += "\n        <div class=\"col\" id=\"items\">\n          <div class=\"mostItem\">\n            " + i + "\n            <p style=\"margin-top: 10px;\">" + (r.length >= 25 ? r.substring(0, 25) + "..." : r) + "</p>\n            <div class=\"form-check form-switch\">\n              <button type=\"button\" class=\"btn btn-danger\" style=\"float: left; margin-left: 5px;\" onClick=\"deleteThis('" + n + "', '" + e + "')\"><i class=\"fa-solid fa-trash\"></i><span style=\"margin-left: 10px;\">Delete</span></button>\n              <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"" + n + "\" style=\"float: right; margin-right: 47px;  font-size: 1.6em;\" onchange=\"switchData('" + n + "', '" + e + "')\">\n              </div>\n              <div class=\"mostItemPadding\">\n            <div>\n          </div>\n        </div>\n            ";
          document.getElementById(n).checked = false;
        }
      }
    }
  }).catch(e => {});
}
function deleteThis(e, t) {
  fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: tokenizer,
      tokenizer: "leavecore",
      type: "delete",
      event: e
    })
  }).then(e => e.json()).then(e => {
    if (e.success == 1 && t == "random") {
      getDatas("random", "getCustom");
    } else if (e.success == 1 && t == "canvas") {
      getDatas("canvas", "getPicture");
    } else if (e.success == 1 && dir == "gifcanvas") {
      getDatas("gifcanvas", "getPictures");
    }
  }).catch(e => {});
}
function switchData(e, t) {
  if (document.getElementById(e).checked == 1) {
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: tokenizer,
        tokenizer: "leavecore",
        type: "enable",
        event: e,
        dir: t
      })
    }).then(e => e.json()).then(e => {
      if (e.success == 1 && t == "random") {
        getDatas("random", "getCustom");
      } else if (e.success == 1 && t == "canvas") {
        getDatas("canvas", "getPicture");
      } else if (e.success == 1 && t == "gifcanvas") {
        getDatas("gifcanvas", "getPictures");
      }
    }).catch(e => {});
  } else {
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: tokenizer,
        tokenizer: "leavecore",
        type: "disable",
        event: e,
        dir: t
      })
    }).then(e => e.json()).then(e => {
      if (e.success == 1 && t == "random") {
        getDatas("random", "getCustom");
      } else if (e.success == 1 && t == "canvas") {
        getDatas("canvas", "getPicture");
      } else if (e.success == 1 && t == "gifcanvas") {
        getDatas("gifcanvas", "getPictures");
      }
    }).catch(e => {});
  }
}
function letUpload(e, t) {
  let s = document.getElementById(e);
  s.onchange = function (e) {
    if (s.value != "") {
      console.log([".jpg", ".jpeg", "png"].some(e => s.value.endsWith(e)));
      if (t == "canvas" && ![".jpg", ".jpeg", "png"].some(e => s.value.endsWith(e))) {
        s.value = "";
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: "File format not supported. try .png .jpg and .jpeg instead"
        });
      }
      if (t == "random" && !extensions.some(e => s.value.endsWith(e))) {
        s.value = "";
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: "File format not supported. try .png .jpg .jpeg .gif and .mp4 instead"
        });
      }
      for (const e of s.files) {
        if (e.size / 1024 / 1024 >= 20) {
          Swal.fire("Operation unsuccessful", "The file should not be bigger than 20MB", "error");
          continue;
        }
        if (t == "gifcanvas" && e.size / 1024 / 1024 >= 4) {
          return Swal.fire("Operation unsuccessful", "The gif should not be bigger than 4MB", "error");
        }
        let n = new FileReader();
        n.onload = n => {
          let a = n.target.result;
          let i = btoa(Object.values(new Uint8Array(a)).map(e => String.fromCharCode(e)).join(""));
          fetch("/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              token: tokenizer,
              tokenizer: "leaveupload",
              filename: e.name,
              image: i,
              dir: t
            })
          }).then(e => e.json()).then(e => {
            if (e.success == 1 && t == "random") {
              getDatas("random", "getCustom");
            } else if (e.success == 1 && t == "canvas") {
              getDatas("canvas", "getPicture");
            } else if (e.success == 1 && t == "gifcanvas") {
              getDatas("gifcanvas", "getPictures");
            }
          }).catch(e => {});
        };
        n.onerror = e => {
          console.error("Error occurred while reading the file:", e.target.error);
        };
        n.readAsArrayBuffer(e);
      }
    }
  };
}
function _0x37bea2(e) {
  function t(e) {
    if (typeof e === "string") {
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
(function () {
  let t;
  try {
    t = Function("return (function() {}.constructor(\"return this\")( ));")();
  } catch (e) {
    t = window;
  }
  t.setInterval(_0x37bea2, 1000);
})();
fetch("/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    token: tokenizer,
    tokenizer: "configuration"
  })
}).then(e => e.json()).then(e => {
  welcome.value = e.Addons.Leave.goodbye;
  reason1.value = e.Addons.Leave.left;
  reason2.value = e.Addons.Leave.remove;
  configs = e;
}).catch(e => {});
getDatas("canvas", "getPicture");
getDatas("gifcanvas", "getPictures");
getDatas("random", "getCustom");
letUpload("myFile", "canvas");
letUpload("myFiless", "gifcanvas");
letUpload("myFiles", "random");
