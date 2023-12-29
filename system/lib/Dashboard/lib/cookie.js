let tokenizer;
if (document.cookie == "") {
  let e = {
    data: "none",
    mode: "dark"
  };
  let t = JSON.stringify(e);
  document.cookie = "key=" + t + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  try {
    tokenizer = JSON.parse(document.cookie.split("; ").find(e => e.startsWith("key")).split(" ")[0].split(" ")[0].replace("key=", "")).data;
  } catch {
    tokenizer = "none";
  }
} else {
  try {
    tokenizer = JSON.parse(document.cookie.split("; ").find(e => e.startsWith("key")).split(" ")[0].split(" ")[0].replace("key=", "")).data;
  } catch {
    let e = {
      data: "none",
      mode: "dark"
    };
    let t = JSON.stringify(e);
    document.cookie = "key=" + t + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    tokenizer = JSON.parse(document.cookie.split("; ").find(e => e.startsWith("key")).split(" ")[0].split(" ")[0].replace("key=", "")).data;
  }
}
function logout() {
  let t = {
    data: "logout",
    mode: JSON.parse(document.cookie.split("; ").find(t => t.startsWith("key")).split(" ")[0].split(" ")[0].replace("key=", "")).mode
  };
  let n = JSON.stringify(t);
  document.cookie = "key=" + n + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  window.location.href = "/";
}
function _0x23e162(e) {
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
  (function () {
    let t;
    try {
      t = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (e) {
      t = window;
    }
    return t;
  })().setInterval(_0x23e162, 1000);
})();
