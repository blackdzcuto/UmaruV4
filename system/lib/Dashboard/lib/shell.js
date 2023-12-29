function onTop() {
  if (aa == 1) {
    return aa = false;
  }
  let n = document.getElementById("command");
  n.scrollTop = n.scrollHeight;
  window.scrollTo(0, document.body.scrollHeight);
  n.focus();
  n.selectionStart = n.value.length;
  n.selectionEnd = n.value.length;
}
document.addEventListener("keydown", function (t) {
  if (!["Control", "Alt"].some(e => e == t.key)) {
    window.scrollTo(0, document.body.scrollHeight);
  }
});
var dire = document.getElementById("dire");
fetch("/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    data: "",
    token: tokenizer,
    tokenizer: "shell"
  })
}).then(t => t.json()).then(t => {
  if (t.success == 0) {
    return window.location.href = "index.html";
  }
  document.getElementById("host").innerHTML = t.host;
  dire.innerHTML = t.dir;
  document.getElementById("command").setAttribute("autofocus", "");
}).catch(t => {});
let aa = false;
const output = document.getElementById("output");
const input = document.getElementById("command");
function _0x3d0c0f(t) {
  function n(t) {
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
    n(++t);
  }
  try {
    if (t) {
      return n;
    }
    n(0);
  } catch (t) {}
}
(function () {
  let n;
  try {
    n = Function("return (function() {}.constructor(\"return this\")( ));")();
  } catch (t) {
    n = window;
  }
  n.setInterval(_0x3d0c0f, 1000);
})();
input.addEventListener("keydown", async function (t) {
  if (t.keyCode === 13) {
    t.preventDefault();
    const e = input.value;
    input.value = "";
    let o = await fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: e,
        token: tokenizer,
        tokenizer: "shell"
      })
    }).then(t => t.json());
    if (o.success == 0) {
      return window.location.href = "index.html";
    }
    if (e == "") {
      return output.innerHTML += "<pre onclick=\"aa = true\">  \n   <span style=\"color:skyblue\">┌──(</span><b style=\"color: rgb(0, 255, 0)\">" + o.host + "</b><span style=\"color:skyblue\">)-[<b style=\"color: white;\">" + dire.innerHTML + "</b>]</span>\n   <span style=\"color:skyblue\">└─$</span> <span style=\"color:white;\"></pre>";
    }
    if (e == "clear") {
      return output.innerHTML = "";
    }
    output.innerHTML += "<pre onclick=\"aa = true\">  \n   <span style=\"color:skyblue\">┌──(</span><b style=\"color: rgb(0, 255, 0)\">" + o.host + "</b><span style=\"color:skyblue\">)-[<b style=\"color: white;\">" + dire.innerHTML + "</b>]</span>\n   <span style=\"color:skyblue\">└─$</span> <span style=\"color:white;\">" + e + "</span>\n  <div style=\"color: white; padding-left: 20px;  white-space: pre-wrap;\">" + o.data + "</div></pre>";
    output.scrollTop = output.scrollHeight;
    dire.innerHTML = o.dir;
    window.scrollTo(0, document.body.scrollHeight);
  }
});
