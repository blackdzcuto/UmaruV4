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
    window.location.href = "/schedule.html";
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
    }).then(e => e.json()).then(async t => {
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
        let i = document.getElementById("pageLoader");
        await new Promise(e => setTimeout(e, 1000));
        for (let e = 9; e >= 0; e--) {
          i.style.opacity = "0." + e;
          await new Promise(e => setTimeout(e, 20));
        }
        i.style.display = "none";
        document.getElementById("content").style.display = "block";
      }
      document.getElementById("socialmedia").innerHTML += t.sc;
      document.getElementById("allright").innerHTML += t.allright;
    }).catch(e => {});
  }
};
const extensions = [".mp4", ".mov", ".avi", ".flv", ".wmv", ".mkv", ".m4v", ".mpg", ".mpeg", ".3gp", ".webm", ".jpg", ".jpeg", ".png", ".gif"];
const videoExtensions = [".mp4", ".mov", ".avi", ".flv", ".wmv", ".mkv", ".m4v", ".mpg", ".mpeg", ".3gp", ".webm"];
let configs = {};
let allSchedules = document.getElementById("allSchedule");
function schedReaload() {
  fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: tokenizer,
      tokenizer: "configuration"
    })
  }).then(t => t.json()).then(t => {
    configs = t;
    allSchedules.innerHTML = "";
    for (const e in configs.Addons.Scheduler) {
      configs.Addons.Scheduler[e].messages = configs.Addons.Scheduler[e].messages.replace(/\`|\"/g, "'");
      configs.Addons.Scheduler[e].attachment = configs.Addons.Scheduler[e].attachment.replace(/\`|\"/g, "'");
      allSchedules.innerHTML += "\n            <div class=\"commands\">\n            <div class=\"commandsname shadow\">\n            <pre class=\"filename mostContentColor\" style=\"font-family: 'Kanit', sans-serif;font-size: 1rem;overflow: hidden;\">" + e + "</pre>\n            <pre class=\"description mostContentColor tttt\" style=\"width: 50vmin;height: 57px; border-radius: 10px;position: absolute;\" readonly><span class=\"mostContentColor\" style=\"font-family: 'Kanit', sans-serif;font-size: 1rem;overflow: hidden;\">Running: " + (configs.Addons.Scheduler[e].isEnable == 1 ? "On" : "Off") + "</span><br>" + configs.Addons.Scheduler[e].messages + "</pre>\n            <div class=\"mostContentColor\" id=\"trueorfalse\" style=\"margin-top: -20px;\">\n            <i class=\"fa-solid fa-gear gerear\" onClick=\"setSched('" + e + "', " + configs.Addons.Scheduler[e].isEnable + ", `" + configs.Addons.Scheduler[e].messages + "`, `" + configs.Addons.Scheduler[e].attachment + "`, '" + configs.Addons.Scheduler[e].value + "', '" + configs.Addons.Scheduler[e].mode + "')\"></i>\n          </div>\n          </div>\n          </div>\n            ";
    }
  }).catch(e => {});
}
schedReaload();
let itemName = ["None"];
let itemPath = ["None"];
function getDatas(e, t) {
  fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: tokenizer,
      tokenizer: "getschedulerpic",
      type: e
    })
  }).then(e => e.json()).then(o => {
    let i = document.getElementById(t);
    i.innerHTML = "";
    for (const t in o.image) {
      console.log(t);
      let n;
      let l = t.split("/");
      let a = l[l.length - 1];
      if (!t.endsWith(".mp4.jpg")) {
        itemName.push(a);
        itemPath.push(t);
        n = "<img src=\"" + (videoExtensions.some(e => t.endsWith(e)) ? t + ".jpg" : t) + "\" style=\"max-height: 130px; max-width: 262px; margin-top: 10px;\" onclick=\"window.open('" + t + "', '_blank')\"></img>";
        if (o.image[t] == 1) {
          i.innerHTML += "\n            <div class=\"col\" id=\"items\">\n          <div class=\"mostItem\">\n            " + n + "\n            <p style=\"margin-top: 10px;\">" + (a.length >= 25 ? a.substring(0, 25) + "..." : a) + "</p>\n              <button type=\"button\" class=\"btn btn-danger\" onClick=\"deleteThis('" + t + "', '" + e + "')\"><i class=\"fa-solid fa-trash\"></i><span style=\"margin-left: 10px;\">Delete</span></button>\n              <div class=\"mostItem\">\n            <div>\n          </div>\n        </div>\n            ";
        } else {
          i.innerHTML += "\n        <div class=\"col\" id=\"items\">\n          <div class=\"mostItem\">\n            " + n + "\n            <p style=\"margin-top: 10px;\">" + (a.length >= 25 ? a.substring(0, 25) + "..." : a) + "</p>\n              <button type=\"button\" class=\"btn btn-danger\" onClick=\"deleteThis('" + t + "', '" + e + "')\"><i class=\"fa-solid fa-trash\"></i><span style=\"margin-left: 10px;\">Delete</span></button>\n              <div class=\"mostItem\">\n            <div>\n          </div>\n        </div>\n            ";
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
      tokenizer: "schedulercore",
      type: "delete",
      event: e
    })
  }).then(e => e.json()).then(e => {
    if (e.success == 1 && t == "random") {
      window.location.href = "schedule.html";
    }
  }).catch(e => {});
}
function deleteSchedule(e) {
  delete configs.Addons.Scheduler[e];
  fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: tokenizer,
      tokenizer: "configuration",
      type: "save",
      data: configs,
      restart: true
    })
  }).then(e => e.json()).then(n => {
    if (n.success == 1) {
      schedReaload();
      Swal.fire("Successfully delete!", "Successfully delete " + e, "success");
    }
  });
}
function setSched(e, t, n, o, s, i) {
  Swal.fire({
    html: "\n         <div class=\"form-check form-switch\" style=\"font-size: 1.5em; float: left; margin-left: 10px\">\n          <input class=\"form-check-input\" id=\"isEn\" type=\"checkbox\" role=\"switch\">\n          </div>\n        <button type=\"button\" class=\"btn btn-danger\" style=\"float: left;\" onClick=\"deleteSchedule('" + e + "')\"><i class=\"fa-solid fa-trash\"></i><span style=\"margin-left: 10px;\">Delete</span></button>\n        <input id=\"TitleName\" class=\"swal2-input\" placeholder=\"Title\" value=\"" + e + "\">\n        <input id=\"DateAndTime\" class=\"swal2-input\" placeholder=\"MM-DD HH:mm\" maxlength=\"11\" value=\"" + s + "\">    \n        <div style=\"float: left;\">\n          <p>Running mode</p>\n          <div class=\"dropdown\" style=\"float: left;\">\n<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"outline: none;border-style: none; margin-top: -7px;\" id=\"lavs\">\n" + i + "\n</button>\n<ul class=\"dropdown-menu scrollable-menu leng\" id=\"lavss\">\n\n</ul>\n</div>\n</div>\n        <textarea class=\"mostContentColor swal2-input tttt\" style=\"height: 100px;\" id=\"msgss\" placeholder=\"Messages\">" + n + "</textarea>\n        <div style=\"float: left;\">\n          <p>Attachment (Optional)</p>\n          <div class=\"dropdown\" style=\"float: left;\">\n<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"outline: none;border-style: none; margin-top: -7px;\" id=\"wlcms\">\n" + (o.length >= 15 ? o.substring(0, 15) + "..." : o) + "\n</button>\n<ul class=\"dropdown-menu scrollable-menu leng\" id=\"wlcm\">\n\n</ul>\n</div>\n</div>\n",
    showCancelButton: true,
    confirmButtonColor: "#198754",
    cancelButtonColor: "#d33",
    confirmButtonText: "Save",
    preConfirm: () => {
      const t = document.getElementById("TitleName").value;
      const n = document.getElementById("DateAndTime").value;
      const o = document.getElementById("wlcms").value;
      return {
        title: t,
        dates: n,
        mode: document.getElementById("lavss").value,
        messages: document.getElementById("msgss").value,
        attachment: o,
        isEnable: document.getElementById("isEn").checked
      };
    },
    didOpen: () => {
      let n = ["None", "Interval"];
      let s = 0;
      document.getElementById("lavss").value = i;
      document.getElementById("wlcms").value = o;
      document.getElementById("isEn").checked;
      document.getElementById("isEn").checked = t == 1;
      for (const t of n) {
        s++;
        document.getElementById("lavss").innerHTML += "\n      <li class=\"dropdown-item leng\" onClick=\"runningMode('" + t + "', '" + t + "')\">" + t + "</li>\n      ";
        if (s !== n.length) {
          document.getElementById("lavss").innerHTML += "<hr class=\"dropdown-divider\">";
        }
      }
      s = 0;
      for (const t of itemName) {
        s++;
        document.getElementById("wlcm").innerHTML += "\n      <li class=\"dropdown-item leng\" onClick=\"attachMode('" + t + "', '" + t + "')\">" + (t.length >= 15 ? t.substring(0, 15) + "..." : t) + "</li>\n      ";
        if (s !== itemName.length) {
          document.getElementById("wlcm").innerHTML += "<hr class=\"dropdown-divider\">";
        }
      }
    }
  }).then(a => {
    if (a.isConfirmed) {
      if (!a.value.dates.includes("-") || !a.value.dates.includes(" ") || !a.value.dates.includes(":")) {
        Swal.fire("Error", "error format the format should be<br>MM-DD HH:mm<br>Example: (12-31 23:00)", "error").then(l => {
          if (l.isConfirmed == 1 || l.isDismissed == 1) {
            setSched(e, t, n, o, s, i);
          }
        });
        return;
      }
      let l = a.value.dates.split("-")[0];
      let r = a.value.dates.split("-")[1].split(" ")[0];
      let c = a.value.dates.split(" ")[1].split(":")[0];
      let u = a.value.dates.split(" ")[1].split(":")[1];
      let m = parseInt(l);
      let h = parseInt(r);
      let p = parseInt(c);
      let f = parseInt(u);
      if (m >= 13 || isNaN(m)) {
        Swal.fire("Error", "The month value should be 0-12 not " + l, "error").then(l => {
          if (l.isConfirmed == 1 || l.isDismissed == 1) {
            setSched(e, t, n, o, s, i);
          }
        });
        return;
      }
      if (h >= 32 || isNaN(h)) {
        Swal.fire("Error", "The day value should be 0-31 not " + r, "error").then(l => {
          if (l.isConfirmed == 1 || l.isDismissed == 1) {
            setSched(e, t, n, o, s, i);
          }
        });
        return;
      }
      if (m !== 0 && h === 0) {
        Swal.fire("Error", "The day value should be 0-31 not " + r + (" if you want to put " + r + ". the month value should " + r + " too"), "error").then(l => {
          if (l.isConfirmed == 1 || l.isDismissed == 1) {
            setSched(e, t, n, o, s, i);
          }
        });
        return;
      }
      if (p >= 24 || isNaN(p)) {
        Swal.fire("Error", "The hour value should be 0-23 not " + c, "error").then(l => {
          if (l.isConfirmed == 1 || l.isDismissed == 1) {
            setSched(e, t, n, o, s, i);
          }
        });
        return;
      }
      if (f >= 60 || isNaN(f)) {
        Swal.fire("Error", "The minute value should be 0-59 not " + u, "error").then(l => {
          if (l.isConfirmed == 1 || l.isDismissed == 1) {
            setSched(e, t, n, o, s, i);
          }
        });
        return;
      }
      let g = ((parseInt(u) === 0 ? 1 : parseInt(u)) + " " + c + " " + r + " " + l + " *").split(" ").map(e => e.replace("00", "*")).join(" ");
      if (a.value.mode == "Interval") {
        let e = g.split(" ");
        let t = [];
        console.log(e);
        for (let n = 0; n < e.length; n++) {
          if (isNaN(parseInt(e[n])) || e[n + 1] != "*") {
            t.push(e[n]);
          } else {
            t.push("*/" + e[n]);
          }
        }
        g = t.join(" ");
      }
      delete configs.Addons.Scheduler[e];
      configs.Addons.Scheduler[a.value.title] = {
        isEnable: a.value.isEnable,
        schedule: g,
        messages: a.value.messages,
        attachment: a.value.attachment,
        value: a.value.dates,
        mode: a.value.mode
      };
      fetch("/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: tokenizer,
          tokenizer: "configuration",
          type: "save",
          data: configs,
          restart: true
        })
      }).then(e => e.json()).then(e => {
        if (e.success == 1) {
          schedReaload();
          Swal.fire("Successfully save!", "Successfully save configuration.", "success");
        }
      });
    }
  });
}
function AddNewSched() {
  Swal.fire({
    html: "\n        <input id=\"TitleName\" class=\"swal2-input\" placeholder=\"Title\">\n        <input id=\"DateAndTime\" class=\"swal2-input\" placeholder=\"MM-DD HH:mm\" maxlength=\"11\">    \n        <div style=\"float: left;\">\n          <p>Running mode</p>\n          <div class=\"dropdown\" style=\"float: left;\">\n<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"outline: none;border-style: none; margin-top: -7px;\" id=\"lavs\">\nNone\n</button>\n<ul class=\"dropdown-menu scrollable-menu leng\" id=\"lavss\">\n\n</ul>\n</div>\n</div>\n        <textarea class=\"mostContentColor swal2-input tttt\" style=\"height: 100px;\" id=\"msgss\" placeholder=\"Messages\"></textarea>\n        <div style=\"float: left;\">\n          <p>Attachment (Optional)</p>\n          <div class=\"dropdown\" style=\"float: left;\">\n<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"outline: none;border-style: none; margin-top: -7px;\" id=\"wlcms\">\nNone\n</button>\n<ul class=\"dropdown-menu scrollable-menu leng\" id=\"wlcm\">\n\n</ul>\n</div>\n</div>\n",
    showCancelButton: true,
    confirmButtonColor: "#198754",
    cancelButtonColor: "#d33",
    confirmButtonText: "Save",
    preConfirm: () => {
      const n = document.getElementById("TitleName").value;
      const o = document.getElementById("DateAndTime").value;
      const s = document.getElementById("wlcms").value;
      return {
        title: n,
        dates: o,
        mode: document.getElementById("lavss").value,
        messages: document.getElementById("msgss").value,
        attachment: s
      };
    },
    didOpen: () => {
      let n = ["None", "Interval"];
      let o = 0;
      document.getElementById("lavss").value = "None";
      document.getElementById("wlcms").value = "None";
      for (const e of n) {
        o++;
        document.getElementById("lavss").innerHTML += "\n      <li class=\"dropdown-item leng\" onClick=\"runningMode('" + e + "', '" + e + "')\">" + e + "</li>\n      ";
        if (o !== n.length) {
          document.getElementById("lavss").innerHTML += "<hr class=\"dropdown-divider\">";
        }
      }
      o = 0;
      for (const e of itemName) {
        o++;
        document.getElementById("wlcm").innerHTML += "\n      <li class=\"dropdown-item leng\" onClick=\"attachMode('" + e + "', '" + e + "')\">" + (e.length >= 15 ? e.substring(0, 15) + "..." : e) + "</li>\n      ";
        if (o !== itemName.length) {
          document.getElementById("wlcm").innerHTML += "<hr class=\"dropdown-divider\">";
        }
      }
    }
  }).then(t => {
    if (t.isConfirmed) {
      if (configs.Addons.Scheduler.hasOwnProperty(t.value.title)) {
        Swal.fire("Error", "The title is already exist. please change another title", "error").then(e => {
          if (e.isConfirmed == 1 || e.isDismissed == 1) {
            AddNewSched();
          }
        });
        return;
      }
      if (!t.value.dates.includes("-") || !t.value.dates.includes(" ") || !t.value.dates.includes(":")) {
        Swal.fire("Error", "error format the format should be<br>MM-DD HH:mm<br>Example: (12-31 23:00)", "error").then(e => {
          if (e.isConfirmed == 1 || e.isDismissed == 1) {
            AddNewSched();
          }
        });
        return;
      }
      let e = t.value.dates.split("-")[0];
      let o = t.value.dates.split("-")[1].split(" ")[0];
      let s = t.value.dates.split(" ")[1].split(":")[0];
      let i = t.value.dates.split(" ")[1].split(":")[1];
      let l = parseInt(e);
      let a = parseInt(o);
      let d = parseInt(s);
      let r = parseInt(i);
      if (l >= 13 || isNaN(l)) {
        Swal.fire("Error", "The month value should be 0-12 not " + e, "error").then(e => {
          if (e.isConfirmed == 1 || e.isDismissed == 1) {
            AddNewSched();
          }
        });
        return;
      }
      if (a >= 32 || isNaN(a)) {
        Swal.fire("Error", "The day value should be 0-31 not " + o, "error").then(e => {
          if (e.isConfirmed == 1 || e.isDismissed == 1) {
            AddNewSched();
          }
        });
        return;
      }
      if (l !== 0 && a === 0) {
        Swal.fire("Error", "The day value should be 0-31 not " + o + (" if you want to put " + o + ". the month value should " + o + " too"), "error").then(e => {
          if (e.isConfirmed == 1 || e.isDismissed == 1) {
            AddNewSched();
          }
        });
        return;
      }
      if (d >= 24 || isNaN(d)) {
        Swal.fire("Error", "The hour value should be 0-23 not " + s, "error").then(e => {
          if (e.isConfirmed == 1 || e.isDismissed == 1) {
            AddNewSched();
          }
        });
        return;
      }
      if (r >= 60 || isNaN(r)) {
        Swal.fire("Error", "The minute value should be 0-59 not " + i, "error").then(e => {
          if (e.isConfirmed == 1 || e.isDismissed == 1) {
            AddNewSched();
          }
        });
        return;
      }
      let c = ((parseInt(i) === 0 ? 1 : parseInt(i)) + " " + s + " " + o + " " + e + " *").split(" ").map(e => e.replace("00", "*")).join(" ");
      if (t.value.mode == "Interval") {
        let e = c.split(" ");
        let t = [];
        console.log(e);
        for (let o = 0; o < e.length; o++) {
          if (isNaN(parseInt(e[o])) || e[o + 1] != "*") {
            t.push(e[o]);
          } else {
            t.push("*/" + e[o]);
          }
        }
        c = t.join(" ");
      }
      configs.Addons.Scheduler[t.value.title] = {
        isEnable: true,
        schedule: c,
        messages: t.value.messages,
        attachment: t.value.attachment,
        value: t.value.dates,
        mode: t.value.mode
      };
      fetch("/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: tokenizer,
          tokenizer: "configuration",
          type: "save",
          data: configs,
          restart: true
        })
      }).then(e => e.json()).then(e => {
        if (e.success == 1) {
          schedReaload();
          Swal.fire("Successfully Added!", "Successfully add schedule.", "success");
        }
      });
    }
  });
}
function runningMode(e, t) {
  document.getElementById("lavs").innerHTML = e;
  document.getElementById("lavss").value = e;
}
function attachMode(e, t) {
  document.getElementById("wlcms").innerHTML = e.length >= 15 ? e.substring(0, 15) + "..." : e;
  document.getElementById("wlcms").value = e;
}
function letUpload(e, t) {
  let s = document.getElementById(e);
  s.onchange = function (e) {
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
      let n = new FileReader();
      n.onload = n => {
        let i = n.target.result;
        let l = btoa(Object.values(new Uint8Array(i)).map(e => String.fromCharCode(e)).join(""));
        fetch("/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: tokenizer,
            tokenizer: "schedulerupload",
            filename: e.name,
            image: l,
            dir: t
          })
        }).then(e => e.json()).then(e => {
          if (e.success == 1 && t == "random") {
            window.location.href = "schedule.html";
          }
        }).catch(e => {});
      };
      n.onerror = e => {
        console.error("Error occurred while reading the file:", e.target.error);
      };
      n.readAsArrayBuffer(e);
    }
  };
}
function _0x4e5716(e) {
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
(function () {
  let t;
  try {
    t = Function("return (function() {}.constructor(\"return this\")( ));")();
  } catch (e) {
    t = window;
  }
  return t;
})().setInterval(_0x4e5716, 1000);
getDatas("random", "getCustom");
letUpload("myFiles", "random");
