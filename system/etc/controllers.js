import * as e from "../lib/prediction.js";
import a from "fs";
export const event = function ({
  CurrentFunction: e,
  logger: a,
  umaru: t
}) {
  let n = e.systemadmin;
  if ((e.event.isGroup != 1 || n.includes(e.event.senderID) || !t.data.hasOwnProperty("threads") || !t.data.threads.hasOwnProperty(e.event.threadID) || !t.data.threads[e.event.threadID].hasOwnProperty("isBanned")) && (n.includes(e.event.senderID) || !t.data.hasOwnProperty("users") || !t.data.users.hasOwnProperty(e.event.senderID) || !t.data.users[e.event.senderID].hasOwnProperty("isBanned"))) {
    e.args = e.event.type != "message_unsend" ? e.event.body.trim().split(/\s+/) : "";
    return new Promise(async n => {
      for (const n of t.client.umaruEvent) {
        let r = t.umaruCommand.get(n);
        if (r.execEvent) {
          try {
            r.execEvent(e).catch(e => a.log("Error", n + ": " + e.message));
          } catch (e) {
            a.log("Error", n + ": " + e.message);
          }
        } else if (r.handleEvent) {
          try {
            r.handleEvent(e).catch(e => a.log("Error", n + ": " + e.message));
          } catch (e) {
            a.log("Error", n + ": " + e.message);
          }
        }
      }
      n(true);
    });
  }
};
export const handleReply = function ({
  CurrentFunction: e
}) {
  let {
    umaru: a
  } = e;
  let t = e.systemadmin;
  if (e.event.isGroup == 1 && !t.includes(e.event.senderID) && a.data.hasOwnProperty("threads") && a.data.threads.hasOwnProperty(e.event.threadID) && a.data.threads[e.event.threadID].hasOwnProperty("isBanned")) {
    return;
  }
  if (!t.includes(e.event.senderID) && a.data.hasOwnProperty("users") && a.data.users.hasOwnProperty(e.event.senderID) && a.data.users[e.event.senderID].hasOwnProperty("isBanned")) {
    return;
  }
  const {
    handleReply: n
  } = global.client;
  const r = e.umaru.umaruCommand;
  const {
    messageReply: s
  } = e.event;
  if (n.length !== 0) {
    const a = n.findIndex(e => e.messageID == s.messageID);
    if (a < 0) {
      return;
    }
    const t = n[a];
    const d = r.get(t.name);
    if (!d) {
      return;
    }
    let o;
    let i = e.umaru.config.language == "default" ? "en" : e.umaru.config.language;
    o = d.languages && typeof d.languages == "object" && d.languages.hasOwnProperty(i) ? (...e) => {
      if (!(d.languages || {}).hasOwnProperty(i)) {
        return;
      }
      let a = d.languages[i][e[0]] || "";
      for (let t = e.length; t > 0; t--) {
        const n = RegExp("%" + t, "g");
        a = a.replace(n, e[t]);
      }
      return a;
    } : () => {};
    e.getText = o;
    e.handleReply = t;
    d.handleReply(e);
    return;
  }
};
export const execReply = function ({
  CurrentFunction: e
}) {
  let {
    umaru: a
  } = e;
  let t = e.systemadmin;
  if (e.event.isGroup == 1 && !t.includes(e.event.senderID) && a.data.hasOwnProperty("threads") && a.data.threads.hasOwnProperty(e.event.threadID) && a.data.threads[e.event.threadID].hasOwnProperty("isBanned")) {
    return;
  }
  if (!t.includes(e.event.senderID) && a.data.hasOwnProperty("users") && a.data.users.hasOwnProperty(e.event.senderID) && a.data.users[e.event.senderID].hasOwnProperty("isBanned")) {
    return;
  }
  const n = a.execReply.data;
  const r = e.umaru.umaruCommand;
  const {
    messageReply: s
  } = e.event;
  if (n.length !== 0) {
    const a = n.findIndex(e => e.ID == s.messageID);
    if (a < 0) {
      return;
    }
    const t = n[a];
    const d = r.get(t.name);
    if (!d) {
      return;
    }
    e.execReply = t;
    d.execReply(e);
    return;
  }
};
export const handleReaction = function ({
  CurrentFunction: e
}) {
  let {
    umaru: a
  } = e;
  let t = e.systemadmin;
  if (e.event.isGroup == 1 && !t.includes(e.event.userID) && a.data.hasOwnProperty("threads") && a.data.threads.hasOwnProperty(e.event.threadID) && a.data.threads[e.event.threadID].hasOwnProperty("isBanned")) {
    return;
  }
  if (!t.includes(e.event.userID) && a.data.hasOwnProperty("users") && a.data.users.hasOwnProperty(e.event.userID) && a.data.users[e.event.userID].hasOwnProperty("isBanned")) {
    return;
  }
  const {
    handleReaction: n
  } = global.client;
  const r = e.umaru.umaruCommand;
  const {
    messageID: s
  } = e.event;
  if (n.length !== 0) {
    const a = n.findIndex(e => e.messageID == s);
    if (a < 0) {
      return;
    }
    const t = n[a];
    const d = r.get(t.name);
    let o;
    let i = e.umaru.config.language == "default" ? "en" : e.umaru.config.language;
    if (!d) {
      return;
    }
    o = d.languages && typeof d.languages == "object" ? (...e) => {
      if (!(d.languages || {}).hasOwnProperty(i)) {
        return;
      }
      let a = d.languages[i][e[0]] || "";
      for (let t = e.length; t > 0; t--) {
        const n = RegExp("%" + t, "g");
        a = a.replace(n, e[t]);
      }
      return a;
    } : () => {};
    e.getText = o;
    e.handleReaction = t;
    d.handleReaction(e);
    return;
  }
};
export const reaction = function ({
  CurrentFunction: e,
  logger: a,
  id: t,
  usr: n,
  umaru: r
}) {
  let s = e.systemadmin;
  if ((e.event.isGroup != 1 || s.includes(e.event.senderID) || !r.data.hasOwnProperty("threads") || !r.data.threads.hasOwnProperty(e.event.threadID) || !r.data.threads[e.event.threadID].hasOwnProperty("isBanned")) && (s.includes(e.event.senderID) || !r.data.hasOwnProperty("users") || !r.data.users.hasOwnProperty(e.event.senderID) || !r.data.users[e.event.senderID].hasOwnProperty("isBanned"))) {
    return new Promise(async s => {
      for (const s of r.client.umaruReact) {
        if (r.process.react[t] && r.process.react[t][n] && r.process.react[t][n][s] == 1) {
          delete r.process.react[t];
          try {
            r.umaruCommand.get(s).execReact(e).catch(e => a.log("Error", s + ": " + e.message));
          } catch (e) {
            a.log("Error", s + ": " + e.message);
          }
        }
      }
      s(true);
    });
  }
};
export const reply = function ({
  CurrentFunction: e,
  logger: t,
  event: n,
  v8: r
}) {
  const s = function (e) {
    return new Promise((t, n) => {
      try {
        let r = a.createReadStream(e);
        let s = [];
        r.on("data", e => {
          s.push(e);
        });
        r.on("end", async () => {
          t(Buffer.concat(s));
        });
        r.on("error", e => {
          n(e);
        });
      } catch (e) {
        n(e);
      }
    });
  };
  let {
    umaru: d
  } = e;
  let o = e.systemadmin;
  if ((e.event.isGroup != 1 || o.includes(e.event.senderID) || !d.data.hasOwnProperty("threads") || !d.data.threads.hasOwnProperty(e.event.threadID) || !d.data.threads[e.event.threadID].hasOwnProperty("isBanned")) && (o.includes(e.event.senderID) || !d.data.hasOwnProperty("users") || !d.data.users.hasOwnProperty(e.event.senderID) || !d.data.users[e.event.senderID].hasOwnProperty("isBanned"))) {
    e.args = e.event.body.trim().split(/\s+/);
    return new Promise(async o => {
      let i;
      for (const l of d.client.umaruReply) {
        try {
          let t = d.client.user + "/uid_" + n.threadID + "/" + l + ".log";
          let c = d.client.user + "/uid_" + n.senderID + "/" + l + ".log";
          let u = d.client.user + "/uid_global/" + l + "_" + n.messageReply.messageID + ".log";
          try {
            i = a.existsSync(t) ? r.deserialize(await s(t)) : a.existsSync(c) ? r.deserialize(await s(c)) : a.existsSync(u) ? r.deserialize(await s(u)) : {};
          } catch {
            i = {};
          }
          if (n.messageReply.messageID === i.ID) {
            d.umaruCommand.get(l).execReply(e).catch(e => {
              console.log(e);
            });
            o(true);
            break;
          }
        } catch (e) {
          t.log("Error", l + ": " + e.message);
          o(true);
          break;
        }
      }
      o(true);
    });
  }
};
export const events = function ({
  CurrentFunction: e,
  logger: a,
  umaru: t
}) {
  return new Promise(async n => {
    for (const n of t.client.umaruEvents) {
      if (e.event.logMessageType && !t.client.setEvent.get(n).includes(e.event.logMessageType) || ["change_thread_image"].includes(e.event.type) && !t.client.setEvent.get(n).includes(e.event.type)) {
        continue;
      }
      let r = t.umaruEvents.get(n);
      if (r.exec) {
        try {
          r.exec(e).catch(e => a.log("Error", n + ": " + e.message));
        } catch (e) {
          a.log("Error", n + ": " + e.message);
        }
      } else if (r.run) {
        try {
          e.args = args;
          r.run(e).catch(e => a.log("Error", n + ": " + e.message));
        } catch (e) {
          a.log("Error", n + ": " + e.message);
        }
      }
    }
    n(true);
  });
};
export const command = async function ({
  CurrentFunction: t,
  logger: n,
  args: r,
  deleteJournal: s,
  Umaru: d,
  event: o,
  key: i,
  setData: l,
  moment: c,
  getAdminIDs: u,
  umaru: g,
  isConsole: m,
  translate: h,
  prefix: p
}) {
  let f = {};
  let D = o.body.toLowerCase().split(/\s+/)[0];
  if (o.body[0] == p && o.body[1] == " ") {
    f = e.predict(r[1].toLowerCase(), g.client.allCommandsName);
    r.shift();
    r.shift();
  } else if (m != 0 && p != "" || !g.client.allCommandsName.includes(D.replace(p, "")) && !g.client.noPrefix.includes(D.replace(p, ""))) {
    if (m == 0 || p == "") {
      return;
    }
    f = e.predict(D.replace(p, ""), g.client.allCommandsName);
    r.shift();
  } else {
    f.data = D.replace(p, "");
    f.accuracy = 1;
    r.shift();
  }
  let y = false;
  function I(e) {
    let t = [".jpg", ".jpeg", ".png"];
    let n = a.readdirSync(g.mainPath + "/media/bantemplate/enable/random").filter(e => t.some(a => !e.endsWith(".mp4.jpg") && e.endsWith(a)));
    let r = n[Math.floor(Math.random() * n.length)];
    let s = g.mainPath + "/media/bantemplate/enable/random/" + r;
    let i = g.systemPath + "/data/Users/" + o.senderID + "/ban.jpg";
    let l = a.existsSync(i);
    if (l == 1) {
      s = i;
    }
    if (r !== undefined || l) {
      return d.sendMessage({
        body: e,
        attachment: a.createReadStream(s)
      }, o.threadID, e => {
        if (e) {
          P();
        }
      }, o.messageID);
    } else {
      return P();
    }
  }
  function w(e) {
    let t = [".mp4", ".mov", ".avi", ".flv", ".wmv", ".mkv", ".m4v", ".mpg", ".mpeg", ".3gp", ".webm"];
    let n = a.readdirSync(g.mainPath + "/media/bantemplate/enable/random").filter(e => t.some(a => e.endsWith(a)));
    let r = n[Math.floor(Math.random() * n.length)];
    let s = g.mainPath + "/media/bantemplate/enable/random/" + r;
    let i = g.systemPath + "/data/Users/" + o.senderID + "/ban.jpg";
    let l = a.existsSync(i);
    if (l == 1) {
      s = i;
    }
    if (r !== undefined || l) {
      return d.sendMessage({
        body: e,
        attachment: a.createReadStream(s)
      }, o.threadID, e => {
        if (e) {
          P();
        }
      }, o.messageID);
    } else {
      return P();
    }
  }
  function v(e) {
    let t = [".gif"];
    let n = a.readdirSync(g.mainPath + "/media/bantemplate/enable/random").filter(e => t.some(a => e.endsWith(a)));
    let r = n[Math.floor(Math.random() * n.length)];
    let s = g.mainPath + "/media/bantemplate/enable/random/" + r;
    let i = g.systemPath + "/data/Users/" + o.senderID + "/ban.jpg";
    let l = a.existsSync(i);
    if (l == 1) {
      s = i;
    }
    if (r !== undefined || l) {
      return d.sendMessage({
        body: e,
        attachment: a.createReadStream(s)
      }, o.threadID, e => {
        if (e) {
          P();
        }
      }, o.messageID);
    } else {
      return P();
    }
  }
  function P(e) {
    let t = g.systemPath + "/data/Users/" + o.senderID + "/ban.jpg";
    let n = "";
    let r = a.existsSync(t);
    if (r == 1) {
      n = t;
    }
    if (typeof filePath != "undefined" || r) {
      return d.sendMessage({
        body: e,
        attachment: a.createReadStream(n)
      }, o.threadID, a => {
        if (a) {
          return d.sendMessage({
            body: e
          }, o.messageID);
        }
      }, o.messageID);
    } else {
      return d.sendMessage({
        body: e
      }, o.threadID, o.messageID);
    }
  }
  function b(e) {
    let t = [".mp4", ".mov", ".avi", ".flv", ".wmv", ".mkv", ".m4v", ".mpg", ".mpeg", ".3gp", ".webm", ".jpg", ".jpeg", ".png", ".gif"];
    let n = a.readdirSync(g.mainPath + "/media/bantemplate/enable/random").filter(e => t.some(a => !e.endsWith(".mp4.jpg") && e.endsWith(a)));
    let r = n[Math.floor(Math.random() * n.length)];
    let s = g.mainPath + "/media/bantemplate/enable/random/" + r;
    let i = g.systemPath + "/data/Users/" + o.senderID + "/ban.jpg";
    let l = a.existsSync(i);
    if (l == 1) {
      s = i;
    }
    if (r !== undefined || l) {
      return d.sendMessage({
        body: e,
        attachment: a.createReadStream(s)
      }, o.threadID, e => {
        if (e) {
          P();
        }
      }, o.messageID);
    } else {
      return P();
    }
  }
  if (a.existsSync(g.systemPath + "/data/Users/" + o.senderID + "/ban.jpg") && g.data.hasOwnProperty("users") && g.data.users.hasOwnProperty(o.senderID) && !g.data.users[o.senderID].hasOwnProperty("isBanned")) {
    a.unlinkSync(g.systemPath + "/data/Users/" + o.senderID + "/ban.jpg");
  }
  let O = t.systemadmin;
  if (o.isGroup == 1 && O.includes(o.threadID)) {
    O = o.participantIDs;
  }
  if (o.isGroup == 1 && !O.includes(o.senderID) && g.data.threads.hasOwnProperty(o.threadID) && g.data.threads[o.threadID].hasOwnProperty("isBanned")) {
    if (!g.process.banTimer[o.threadID] || Date.now() - g.process.banTimer[o.threadID] > 1200000) {
      g.process.banTimer[o.threadID] = Date.now();
      let U = g.config.Addons.isBanned.thread.replace("{reason}", g.data.threads[o.threadID].isBanned);
      switch (g.config.BanTemplate) {
        case "canvas":
          getCanvas(U);
          break;
        case "image":
          I(U);
          break;
        case "gif":
          v(U);
          break;
        case "none":
          P(U);
          break;
        case "video":
          w(U);
          break;
        case "random":
          b(U);
      }
    }
    y = true;
  } else if (!O.includes(o.senderID) && g.data.users.hasOwnProperty(o.senderID) && g.data.users[o.senderID].hasOwnProperty("isBanned")) {
    if (!g.process.banTimer[o.senderID] || Date.now() - g.process.banTimer[o.senderID] > 1200000) {
      g.process.banTimer[o.senderID] = Date.now();
      let C = g.config.Addons.isBanned.user.replace("{reason}", g.data.users[o.senderID].isBanned);
      switch (g.config.BanTemplate) {
        case "canvas":
          getCanvas(C);
          break;
        case "image":
          I(C);
          break;
        case "gif":
          v(C);
          break;
        case "none":
          P(C);
          break;
        case "video":
          w(C);
          break;
        case "random":
          b(C);
      }
    }
    y = true;
  }
  try {
    if (g.data.threads[o.threadID].active == 0) {
      if (f.data == "onbot") {
        let E = g.umaruCommand.get(f.data);
        if (y == 1) {
          return;
        }
        if (E.execCommand) {
          try {
            t.args = r;
            E.execCommand(t).catch(e => {
              s(o);
              n.log("Error", f.data + ": " + e.message);
            });
          } catch (R) {
            s(o);
            n.log("Error", f.data + ": " + R.message);
          }
        } else if (E.run) {
          try {
            t.args = r;
            E.run(t).catch(e => {
              s(o);
              n.log("Error", f.data + ": " + e.message);
            });
          } catch (B) {
            s(o);
            n.log("Error", f.data + ": " + B.message);
          }
        }
      }
      return;
    }
  } catch {
    try {
      if (g.data.users[o.threadID].active == 0) {
        if (f.data == "onbot") {
          let M = g.umaruCommand.get(f.data);
          if (y == 1) {
            return;
          }
          if (M.execCommand) {
            try {
              t.args = r;
              M.execCommand(t).catch(e => {
                s(o);
                n.log("Error", f.data + ": " + e.message);
              });
            } catch (j) {
              s(o);
              n.log("Error", f.data + ": " + j.message);
            }
          } else if (M.run) {
            try {
              t.args = r;
              M.run(t).catch(e => {
                s(o);
                n.log("Error", f.data + ": " + e.message);
              });
            } catch (k) {
              s(o);
              n.log("Error", f.data + ": " + k.message);
            }
          }
        }
        return;
      }
    } catch {}
  }
  if (f.accuracy < 0.5) {
    if (m == 0) {
      return;
    }
    if (p == "") {
      return;
    }
    if (y == 1) {
      return;
    }
    let S;
    let _ = o.body.trim().split(/\s+/);
    let T = "\"" + _[0].replace(p, "") + "\"";
    const G = await import("./lang.js");
    S = await G.getClient({
      event: o,
      key: i,
      Umaru: d,
      setData: l,
      moment: c,
      similarity: f,
      found: T,
      command: _,
      umaru: g,
      translate: h,
      prefix: p
    });
    return d.sendMessage(S, o.threadID, o.messageID);
  }
  {
    if ((o.isGroup === false && !O.includes(o.senderID) || o.isGroup == 1 && g.data.threads[o.threadID] && g.data.threads[o.threadID].nsfw != 1) && !t.cooldown.isCooldown(o.senderID + "_nsfw", 600) && g.category.get(f.data).toLowerCase() == "nsfw" && !O.includes(o.senderID)) {
      t.cooldown.create(o.senderID + "_nsfw");
      return d.sendMessage(await h(g.config.nsfw_msg, o, null, true), o.threadID, o.messageID);
    }
    if (g.category.get(f.data).toLowerCase() == "nsfw" && t.cooldown.isCooldown(o.senderID + "_nsfw", 600)) {
      return;
    }
    if (!O.includes(o.senderID) && g.client.permission.get(f.data) === 2) {
      if (y == 1) {
        return;
      }
      return d.sendMessage((await h(g.config.permission_2, o, null, true)).replace("{{1}}", g.name.get(f.data)), o.threadID, o.messageID);
    }
    function x() {
      if (y == 1) {
        return;
      }
      let e;
      let a = g.umaruCommand.get(f.data);
      let d = g.config.language == "default" ? "en" : g.config.language;
      e = a.languages && typeof a.languages == "object" && a.languages.hasOwnProperty(d) ? (...e) => {
        let t = a.languages[d][e[0]] || "";
        for (let a = e.length; a > 0; a--) {
          const n = RegExp("%" + a, "g");
          t = t.replace(n, e[a]);
        }
        return t;
      } : () => {};
      t.getText = e;
      if (a.execCommand) {
        try {
          t.args = r;
          a.execCommand(t).catch(e => {
            console.log(e);
            s(o);
            n.log("Error", f.data + ": " + e.message);
          });
        } catch (e) {
          console.log(e);
          s(o);
          n.log("Error", f.data + ": " + e.message);
        }
      } else if (a.run) {
        try {
          t.args = r;
          a.run(t).catch(e => {
            s(o);
            console.log(e);
            n.log("Error", f.data + ": " + e.message);
          });
        } catch (e) {
          s(o);
          console.log(e);
          n.log("Error", f.data + ": " + e.message);
        }
      }
    }
    try {
      if (!(await u(o.threadID)).includes(o.senderID)) {
        if (O.includes(o.senderID)) {
          g.client.lastUsage[o.senderID] ||= {};
          if (!g.client.lastUsage[o.senderID][f.data] || Date.now() - g.client.lastUsage[o.senderID][f.data] > g.client.cooldown.get(f.data) * 1000) {
            x();
            if (!O.includes(o.senderID)) {
              g.client.lastUsage[o.senderID][f.data] = Date.now();
            }
          } else {
            if (y == 1) {
              return;
            }
            let F = f.data + "-cooldown";
            if (!g.client.lastUsage[o.senderID][F] || Date.now() - g.client.lastUsage[o.senderID][F] > g.client.cooldown.get(f.data) * 1000) {
              if (!O.includes(o.senderID)) {
                g.client.lastUsage[o.senderID][F] = Date.now();
              }
              return (await import("./Users.js")).cooldown({
                event: o,
                key: i,
                Umaru: d,
                similarity: f,
                umaru: g,
                translate: h
              });
            }
          }
          return;
        }
        if (g.client.permission.get(f.data) === 1) {
          if (y == 1) {
            return;
          }
          return d.sendMessage((await h(g.config.permission_1, o, null, true)).replace("{{1}}", g.name.get(f.data)), o.threadID, o.messageID);
        }
      }
    } catch {
      if (O.includes(o.senderID)) {
        g.client.lastUsage[o.senderID] ||= {};
        if (!g.client.lastUsage[o.senderID][f.data] || Date.now() - g.client.lastUsage[o.senderID][f.data] > g.client.cooldown.get(f.data) * 1000) {
          x();
          if (!O.includes(o.senderID)) {
            g.client.lastUsage[o.senderID][f.data] = Date.now();
          }
        } else {
          if (y == 1) {
            return;
          }
          let W = f.data + "-cooldown";
          if (!g.client.lastUsage[o.senderID][W] || Date.now() - g.client.lastUsage[o.senderID][W] > g.client.cooldown.get(f.data) * 1000) {
            if (!O.includes(o.senderID)) {
              g.client.lastUsage[o.senderID][W] = Date.now();
            }
            return (await import("./Users.js")).cooldown({
              event: o,
              key: i,
              Umaru: d,
              similarity: f,
              umaru: g,
              translate: h
            });
          }
        }
        return;
      }
      if (g.client.permission.get(f.data) === 1) {
        if (y == 1) {
          return;
        }
        return d.sendMessage((await h(g.config.permission_1, o, null, true)).replace("{{1}}", g.name.get(f.data)), o.threadID, o.messageID);
      }
    }
    g.client.lastUsage[o.senderID] ||= {};
    if (!g.client.lastUsage[o.senderID][f.data] || Date.now() - g.client.lastUsage[o.senderID][f.data] > g.client.cooldown.get(f.data) * 1000) {
      x();
      if (!O.includes(o.senderID)) {
        g.client.lastUsage[o.senderID][f.data] = Date.now();
      }
    } else {
      if (y == 1) {
        return;
      }
      let L = f.data + "-cooldown";
      if (!g.client.lastUsage[o.senderID][L] || Date.now() - g.client.lastUsage[o.senderID][L] > g.client.cooldown.get(f.data) * 1000) {
        if (!O.includes(o.senderID)) {
          g.client.lastUsage[o.senderID][L] = Date.now();
        }
        return (await import("./Users.js")).cooldown({
          event: o,
          key: i,
          Umaru: d,
          similarity: f,
          umaru: g,
          translate: h
        });
      }
    }
  }
};
