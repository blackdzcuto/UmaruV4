let scrolls = true;
function onTop() {
  let t = document.getElementById("command");
  t.scrollTop = t.scrollHeight;
  t.focus();
  t.selectionStart = t.value.length;
  t.selectionEnd = t.value.length;
}
(function () {
  (function () {
    let n;
    try {
      n = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (t) {
      n = window;
    }
    return n;
  })().setInterval(_0x34ea26, 1000);
})();
const input = document.getElementById("command");
input.addEventListener("keydown", async function (n) {
  if (n.keyCode === 13) {
    onTop();
    n.preventDefault();
    const e = input.value;
    if (e.trim() == "clear") {
      document.getElementById("console").innerHTML = "";
    }
    input.value = "";
    if ((await fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: e,
        token: tokenizer,
        tokenizer: "console",
        type: "console"
      })
    }).then(n => n.json())).success == 0) {
      return window.location.href = "index.html";
    }
  }
});
let connectionTimes = {};
function connectWebSocket(n) {
  try {
    connectionTimes[n] ||= 0;
    connectionTimes[n] += 1;
    if (connectionTimes[n] >= 10) {
      return;
    }
    let e = new WebSocket(n + "://" + window.location.host + "/" + tokenizer + "/console");
    e.addEventListener("open", o => {
      e.addEventListener("message", n => {
        const e = n.data;
        document.getElementById("console").innerHTML = "<pre>" + e + "</pre>";
        if (scrolls == 1) {
          window.scrollTo(0, document.body.scrollHeight);
        }
      });
      e.addEventListener("close", t => {
        setTimeout(() => {
          connectWebSocket(n);
        }, 1000);
      });
      e.addEventListener("error", t => {
        setTimeout(() => {
          connectWebSocket(n);
        }, 1000);
      });
    });
  } catch (n) {
    console.log(n);
  }
}
function _0x34ea26(n) {
  function t(n) {
    if (typeof n === "string") {
      return function (n) {}.constructor("while (true) {}").apply("counter");
    }
    if (("" + n / n).length !== 1 || n % 20 == 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    t(++n);
  }
  try {
    if (n) {
      return t;
    }
    t(0);
  } catch (n) {}
}
connectWebSocket("wss");
connectWebSocket("ws");
window.addEventListener("scroll", function () {
  const t = window.pageYOffset || document.documentElement.scrollTop;
  scrolls = t > document.body.scrollHeight - 658 - 100;
});
