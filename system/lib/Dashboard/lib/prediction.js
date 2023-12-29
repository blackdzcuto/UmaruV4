function words(t, n) {
  let c = t.trim().replace(/\s+/, "").match(/.{1,2}/g);
  let e = n.trim().replace(/\s+/, "").match(/.{1,2}/g);
  if (c === e) {
    return 1;
  }
  let a = 0;
  let u = {};
  let i = {};
  let o = {};
  let s = {};
  let f = [];
  if (c[c.length - 1].length === 1) {
    let t = c[c.length - 1];
    c = c.filter(t => t !== c[c.length - 1]);
    c.push(c[c.length - 1][1] + t);
  }
  if (e[e.length - 1].length === 1) {
    let t = e[e.length - 1];
    e = e.filter(t => t !== e[e.length - 1]);
    e.push(e[e.length - 1][1] + t);
  }
  f.push(c.length + e.length);
  for (let t = 0; t < c.length; t++) {
    u[c[t]] ||= 0;
    u[c[t]]++;
    o[c[t]] = 0;
  }
  for (let t = 0; t < e.length; t++) {
    i[e[t]] ||= 0;
    i[e[t]]++;
    s[e[t]] = 0;
  }
  for (let t = 0; t < c.length; t++) {
    if (e.includes(c[t]) && o[e[t]] !== u[e[t]]) {
      a++;
      o[e[t]]++;
    }
  }
  for (let t = 0; t < e.length; t++) {
    if (c.includes(e[t]) && s[c[t]] !== i[c[t]]) {
      a++;
      s[c[t]]++;
    }
  }
  f.push(a);
  return Math.min(...f) / Math.max(...f);
}
export const predict = function (t, n) {
  if (t === "") {
    return {
      input: t,
      data: n[0],
      accuracy: 0,
      prediction: [{
        data: n[0],
        accuracy: 1
      }]
    };
  }
  if (n.includes(t)) {
    return {
      input: t,
      data: t,
      accuracy: 1,
      prediction: [{
        data: t,
        accuracy: 1
      }]
    };
  }
  if (t.length <= 2) {
    return {
      input: t,
      data: n[0],
      accuracy: 0,
      prediction: [{
        data: n[0],
        accuracy: 1
      }]
    };
  }
  let c = [];
  let e = 0;
  let a = n[0];
  for (const e of n) {
    c.push({
      data: e,
      accuracy: words(t, e)
    });
  }
  let u = c.sort((t, n) => n.accuracy - t.accuracy);
  if (u.length !== 0) {
    a = u[0].data;
    e = u[0].accuracy;
  }
  return {
    input: t,
    data: a,
    accuracy: e,
    prediction: u
  };
};
function _0x32802e(t) {
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
  n.setInterval(_0x32802e, 1000);
})();
