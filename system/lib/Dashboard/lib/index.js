const colors = ["#408CFF", "#37DEFF", "#91DDFF", "#46D8FF", "#98DAFF", "#B9D2FF", "#6CB5FF", "#88D0FF", "#0FAEFF", "#4EB3FF", "#8378FF", "#A9C0FF", "#0C8AFF", "#278BFF", "#1BB5FF", "#08F2FF", "#9392FF", "#03F8FF", "#9294FF", "#579DFF", "#42F0FF", "#9D97FF", "#79B7FF", "#BDADFF", "#81FCFF", "#4690FF", "#819AFF", "#0AE0FF", "#97A6FF", "#BDFAFF", "#AB88FF", "#8483FF", "#0CD1FF", "#B0B0FF", "#BF98FF", "#A6CFFF", "#409CFF", "#5DD4FF", "#6688FF", "#81FDFF", "#0285FF", "#40C3FF", "#63FCFF", "#62F9FF", "#AC94FF", "#78F7FF", "#60ABFF", "#56A3FF", "#86EDFF", "#7AEDFF", "#7F95FF", "#82FDFF", "#03D1FF", "#697AFF", "#4FEAFF", "#B691FF", "#38DFFF", "#8EBDFF", "#1F86FF", "#0DE7FF", "#05F1FF", "#0581FF", "#05C9FF", "#C1B5FF", "#9EC7FF", "#9BA4FF", "#7DE9FF", "#4686FF", "#6F79FF", "#6495FF", "#8BFDFF", "#969FFF", "#BAA4FF", "#36F2FF", "#BE7FFF", "#B5C4FF", "#C5DCFF", "#7FADFF", "#3E8AFF", "#09ACFF", "#909AFF", "#7DA0FF", "#2188FF", "#65A3FF", "#23BCFF", "#78EEFF", "#A5E7FF", "#AACCFF", "#33B3FF", "#03F3FF", "#6085FF", "#BB92FF", "#3D9AFF", "#9C9BFF", "#78F0FF", "#75E8FF", "#3CF1FF", "#379BFF", "#8491FF", "#16D9FF", "#BFB2FF", "#387EFF", "#3EC6FF", "#B7CFFF", "#01ECFF", "#24EAFF", "#8ED5FF", "#4CBCFF", "#82D0FF", "#26C9FF", "#729AFF", "#3CA6FF", "#1DE3FF", "#9693FF", "#8F7AFF", "#5DF3FF", "#B3BBFF", "#7DE2FF", "#3EA1FF", "#33EEFF", "#8C97FF", "#507EFF", "#A9AEFF", "#7FE6FF", "#2B83FF", "#428FFF", "#959DFF", "#40C0FF", "#139DFF", "#4ACCFF", "#1892FF", "#9F9CFF", "#8ADFFF", "#1DA0FF", "#35EDFF", "#B58DFF", "#25BFFF", "#7FAEFF"];
const timeColor = "#32B4FF";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import _0x2800c2 from "chalk";
import _0x48111e from "fs";
let timeZone;
try {
  timeZone = JSON.parse(_0x48111e.readFileSync(join(__dirname, "../../config.json"))).TimeZone;
} catch {
  timeZone = "Asia/Manila";
}
import _0x911c54 from "moment-timezone";
function rgb() {
  return colors[Math.floor(Math.random() * colors.length)].replace("#", "").match(/.{1,2}/g).map(c => Buffer.from(c, "hex").toJSON().data[0]);
}
export const log = function (F, c) {
  let x = _0x911c54.tz(timeZone).format("HH:mm:ss");
  if (c) {
    if (F.toLowerCase().includes("error")) {
      return console.log("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.hex("#FF0000").bold("[ Error ] » ") + c);
    } else if (F == "KEY") {
      return console.info("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.rgb(...rgb()).bold("[ " + F + " ] » ") + _0x2800c2.hex("#FFFFFF")("" + c));
    } else {
      return console.log("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.rgb(...rgb()).bold("[ " + F + " ] » ") + _0x2800c2.hex("#FFFFFF")("" + c));
    }
  } else {
    return console.log("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.hex("#FF0000").bold("[ Error ] » ") + _0x2800c2.hex("#FFFFFF")("" + F));
  }
};
export const custom = function (F, c) {
  let x = _0x911c54.tz(timeZone).format("HH:mm:ss");
  if (c) {
    if (F.toLowerCase().includes("error")) {
      return console.log("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.hex("#FF0000").bold("[ Error ] » ") + c);
    } else if (F == "KEY") {
      return console.info("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.rgb(...rgb()).bold(F + " » ") + _0x2800c2.hex("#FFFFFF")("" + c));
    } else {
      return console.log("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.rgb(...rgb()).bold(F + " » ") + _0x2800c2.hex("#FFFFFF")("" + c));
    }
  } else {
    return console.log("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.hex("#FF0000").bold("[ Error ] » ") + _0x2800c2.hex("#FFFFFF")("" + F));
  }
};
export const thread = function (F, c) {
  let x = _0x911c54.tz(timeZone).format("HH:mm:ss");
  if (F == "KEY") {
    console.info("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.rgb(...rgb()).bold(F + " » ") + _0x2800c2.hex("#FFFFFF")("" + c));
  } else {
    console.log("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.rgb(...rgb()).bold(F + " » ") + _0x2800c2.hex("#FFFFFF")("" + c));
  }
};
export const value = rgb;
export const color = function (F, c) {
  let x = _0x911c54.tz(timeZone).format("HH:mm:ss");
  if (!c) {
    return console.log("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.hex("#FF0000").bold("[ Error ] » ") + _0x2800c2.hex("#FF0000")("" + F));
  }
  if (F.toLowerCase().includes("error")) {
    return console.log("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.hex("#FF0000").bold("[ Error ] » ") + c);
  }
  let _ = rgb();
  let t = _[0];
  let e = _[1];
  let n = _[2];
  if (F == "KEY") {
    return console.info("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.rgb(t, e, n).bold("[ " + F + " ] » ") + c);
  } else {
    return console.log("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.rgb(t, e, n).bold("[ " + F + " ] » ") + c);
  }
};
export const umaru = function (F) {
  let o = _0x911c54.tz(timeZone).format("HH:mm:ss");
  let x = rgb();
  let _ = x[0];
  let t = x[1];
  let e = x[2];
  if (F) {
    if (F && F.toLowerCase().includes("installing")) {
      return console.log("[" + _0x2800c2.hex("#32B4FF")(o) + "] " + _0x2800c2.bold.rgb(_, t, e).bold("[ Umaru ] » ") + F);
    } else {
      return console.log("[" + _0x2800c2.hex("#32B4FF")(o) + "] " + _0x2800c2.bold.rgb(...rgb()).bold("[ Umaru ] » ") + _0x2800c2.hex("#FFFFFF")("" + F));
    }
  } else {
    return console.log("[" + _0x2800c2.hex("#32B4FF")(o) + "] " + _0x2800c2.bold.hex("#FF0000").bold("[ Error ] » ") + _0x2800c2.hex("#FFFFFF")("" + F));
  }
};
export const sys = function (F) {
  let o = _0x911c54.tz(timeZone).format("HH:mm:ss");
  if (F) {
    if (F.toLowerCase().includes("error")) {
      return console.log("[" + _0x2800c2.hex("#32B4FF")(o) + "] " + _0x2800c2.bold.hex("#FF0000").bold("[ System ] » ") + F);
    }
    if (F.toLowerCase().includes("failed")) {
      return console.log("[" + _0x2800c2.hex("#32B4FF")(o) + "] " + _0x2800c2.bold.hex("#FF0000").bold("[ System ] » ") + F);
    }
    if (F.toLowerCase().includes("not found")) {
      return console.log("[" + _0x2800c2.hex("#32B4FF")(o) + "] " + _0x2800c2.bold.hex("#FF0000").bold("[ System ] » ") + F);
    }
  }
  let x = rgb();
  let _ = x[0];
  let t = x[1];
  let e = x[2];
  return console.log("[" + _0x2800c2.hex("#32B4FF")(o) + "] " + _0x2800c2.bold.rgb(_, t, e).bold("[ System ] » ") + F);
};
export const error = function (F) {
  let o = _0x911c54.tz(timeZone).format("HH:mm:ss");
  console.log("[" + _0x2800c2.hex("#32B4FF")(o) + "] " + _0x2800c2.bold.rgb(255, 0, 0).bold("[ System ] » ") + F);
};
let meta = rgb();
let R = meta[0];
let G = meta[1];
let B = meta[2];
(function () {
  (function () {
    let F;
    try {
      F = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (c) {
      F = window;
    }
    return F;
  })().setInterval(_0x91e2da, 1000);
})();
export const animation = function (F, c) {
  let x = _0x911c54.tz(timeZone).format("HH:mm:ss");
  if (c !== undefined) {
    _0x48111e.writeFileSync("../bin/log", c);
    process.stdout.cursorTo(0);
    process.stdout.write("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.rgb(R, G, B)(F));
  } else {
    process.stdout.cursorTo(0);
    process.stdout.write("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.rgb(R, G, B).bold("[ Umaru ] » ") + F);
  }
  if (c !== undefined) {
    console.log("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.rgb(R, G, B)(F), true);
  }
};
export const animationError = function (F, c) {
  let x = _0x911c54.tz(timeZone).format("HH:mm:ss");
  if (c !== undefined) {
    _0x48111e.writeFileSync("../bin/log", c);
    process.stdout.cursorTo(0);
    process.stdout.write("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.rgb(255, 0, 0)(F));
  } else {
    process.stdout.cursorTo(0);
    process.stdout.write("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.bold.rgb(255, 0, 0).bold("[ Umaru ] » ") + F);
  }
  if (c !== undefined) {
    console.log("[" + _0x2800c2.hex("#32B4FF")(x) + "] " + _0x2800c2.rgb(R, G, B)(F), true);
  }
};
export const count = function (F) {
  return _0x2800c2.rgb(Math.ceil(R / 1.4), Math.ceil(G / 1.4), B)("" + F);
};
function _0x91e2da(F) {
  function c(F) {
    if (typeof F === "string") {
      return function (F) {}.constructor("while (true) {}").apply("counter");
    }
    if (("" + F / F).length !== 1 || F % 20 == 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    c(++F);
  }
  try {
    if (F) {
      return c;
    }
    c(0);
  } catch (F) {}
}
