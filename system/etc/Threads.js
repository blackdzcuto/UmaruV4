import * as a from "../lib/index.js";
import e from "fs-extra";
import t from "axios";
function r(a) {
  let t = a.split(/\/|\\/);
  let r = t[0];
  t.shift();
  let d = "";
  d += r;
  for (const a of t) {
    d += "/" + a;
    if (!e.existsSync(d)) {
      e.mkdirSync(d);
    }
  }
}
export const updateThreads = async function ({
  event: d,
  Umaru: s,
  umaru: h,
  readThread: o,
  writeThread: i,
  cooldown: n
}) {
  if (n.isCooldown("createthread" + d.threadID, 5)) {
    return;
  }
  n.create("createthread" + d.threadID);
  const g = await s.getThreadInfo(d.threadID);
  h.process.database = true;
  h.data.users ||= {};
  for (const a of g.userInfo) {
    if (!h.data.users.hasOwnProperty(a.id)) {
      h.data.users[a.id] = {};
    }
    h.data.users[a.id].name = a.name;
    h.data.users[a.id].gender = a.gender;
    h.data.users[a.id].firstName = a.firstName;
    h.data.users[a.id].money ||= 0;
    h.data.users[a.id].exp ||= 1.5;
    if (h.config.PerformanceMode == 1 && h.config.PerformanceModeConfig.UsersPhoto == 1 && a.profileUrl !== null && !e.existsSync(h.systemPath + "/data/Users/" + a.id + "/profile.png") || h.config.PerformanceMode == 0 && a.profileUrl !== null && !e.existsSync(h.systemPath + "/data/Users/" + a.id + "/profile.png")) {
      r(h.systemPath + "/data/Users/" + a.id);
      (await t.get(a.profileUrl, {
        responseType: "stream"
      })).data.pipe(e.createWriteStream(h.systemPath + "/data/Users/" + a.id + "/profile.png"));
    } else if (!e.existsSync(h.systemPath + "/data/Users/" + a.id)) {
      r(h.systemPath + "/data/Users/" + a.id);
    }
  }
  if (g.imageSrc === null) {
    e.removeSync(h.systemPath + "/data/Threads/" + d.threadID + "/photo.png");
  } else {
    if (!e.existsSync(h.systemPath + "/data/Threads/" + d.threadID + "/photo.png")) {
      r(h.systemPath + "/data/Threads/" + d.threadID);
    }
    (await t.get(g.imageSrc, {
      responseType: "stream"
    })).data.pipe(e.createWriteStream(h.systemPath + "/data/Threads/" + d.threadID + "/photo.png"));
  }
  h.data.threads ||= {};
  h.data.threads[d.threadID] ||= {};
  h.data.threads[d.threadID].UpdateDatabase = Date.now();
  h.data.threads[d.threadID].threadName = g.threadName;
  h.data.threads[d.threadID].imageSrc = g.imageSrc;
  h.data.threads[d.threadID].unreadCount = g.unreadCount;
  h.data.threads[d.threadID].messageCount = g.messageCount;
  h.data.threads[d.threadID].emoji = g.emoji;
  h.data.threads[d.threadID].color = g.color;
  h.data.threads[d.threadID].threadTheme = {};
  h.data.threads[d.threadID].active = true;
  h.data.threads[d.threadID].resend = true;
  h.data.threads[d.threadID].adminIDs = [];
  a.log("DATABASE", "Successfully update thread: " + g.threadName + " | " + d.threadID);
  for (const a in g.threadTheme) {
    h.data.threads[d.threadID].threadTheme[a] = g.threadTheme[a];
  }
  for (const a of g.adminIDs) {
    h.data.threads[d.threadID].adminIDs.push(a.id);
  }
  h.allThreadID = Object.keys(h.data.threads);
  h.allUserID = Object.keys(h.data.users);
  await h.save();
  await (await import("./Threads.js")).nickname({
    event: d,
    info: g,
    writeThread: i,
    readThread: o,
    umaru: h,
    cooldown: n
  }).catch(a => {
    console.log(a);
  });
  await (await import("./Users.js")).record({
    event: d,
    info: g,
    Umaru: s,
    writeThread: i,
    readThread: o,
    umaru: h,
    cooldown: n
  }).catch(a => {
    console.log(a);
  });
  h.process.database = false;
};
export const newThreads = async function ({
  event: d,
  Umaru: s,
  umaru: h,
  writeThread: o,
  readThread: i,
  cooldown: n
}) {
  if (n.isCooldown("createthread" + d.threadID, 5)) {
    return;
  }
  n.create("createthread" + d.threadID);
  let g = s.getCurrentUserID();
  let l = h.config.botname ? h.config.botname : h.data.users[g].name.split(" ")[0];
  s.changeNickname(h.config.nickname.replace("{prefix}", h.config.prefix).replace("{botname}", l), d.threadID, g);
  const m = await s.getThreadInfo(d.threadID);
  h.process.database = true;
  h.data.users ||= {};
  for (const d of m.userInfo) {
    if (!h.data.users[d.id]) {
      a.log("DATABASE", "New user: " + d.name + " | " + d.id);
      h.data.users[d.id] = {};
    }
    h.data.users[d.id].name ||= d.name;
    h.data.users[d.id].gender ||= d.gender;
    h.data.users[d.id].timeZone ||= 0;
    h.data.users[d.id].firstName ||= d.firstName;
    h.data.users[d.id].money ||= 0;
    h.data.users[d.id].exp ||= 1.5;
    if (h.config.PerformanceMode == 1 && h.config.PerformanceModeConfig.UsersPhoto == 1 && d.profileUrl !== null && !e.existsSync(h.systemPath + "/data/Users/" + d.id + "/profile.png") || h.config.PerformanceMode == 0 && d.profileUrl !== null && !e.existsSync(h.systemPath + "/data/Users/" + d.id + "/profile.png")) {
      r(h.systemPath + "/data/Users/" + d.id);
      (await t.get(d.profileUrl, {
        responseType: "stream"
      })).data.pipe(e.createWriteStream(h.systemPath + "/data/Users/" + d.id + "/profile.png"));
    } else if (!e.existsSync(h.systemPath + "/data/Users/" + d.id)) {
      r(h.systemPath + "/data/Users/" + d.id);
    }
  }
  a.log("DATABASE", "New thread: " + m.threadName + " | " + d.threadID);
  if (m.imageSrc === null) {
    e.removeSync(h.systemPath + "/data/Threads/" + d.threadID + "/photo.png");
  } else {
    if (!e.existsSync(h.systemPath + "/data/Threads/" + d.threadID + "/photo.png")) {
      r(h.systemPath + "/data/Threads/" + d.threadID);
    }
    (await t.get(m.imageSrc, {
      responseType: "stream"
    })).data.pipe(e.createWriteStream(h.systemPath + "/data/Threads/" + d.threadID + "/photo.png"));
  }
  h.data.threads ||= {};
  h.data.threads[d.threadID] ||= {};
  h.data.threads[d.threadID].UpdateDatabase = Date.now();
  h.data.threads[d.threadID].timeZone = 0;
  h.data.threads[d.threadID].threadName = m.threadName;
  h.data.threads[d.threadID].imageSrc = m.imageSrc;
  h.data.threads[d.threadID].unreadCount = m.unreadCount;
  h.data.threads[d.threadID].messageCount = m.messageCount;
  h.data.threads[d.threadID].emoji = m.emoji;
  h.data.threads[d.threadID].color = m.color;
  h.data.threads[d.threadID].threadTheme = {};
  h.data.threads[d.threadID].active = true;
  h.data.threads[d.threadID].resend = true;
  h.data.threads[d.threadID].adminIDs = [];
  h.data.threads[d.threadID].AntiChangeGroup = {};
  h.data.threads[d.threadID].AntiChangeGroup.nickname = false;
  h.data.threads[d.threadID].AntiChangeGroup.photo = false;
  h.data.threads[d.threadID].AntiChangeGroup.emoji = false;
  h.data.threads[d.threadID].AntiChangeGroup.theme = false;
  h.data.threads[d.threadID].AntiChangeGroup.name = false;
  h.data.threads[d.threadID].nsfw = false;
  for (const a in m.threadTheme) {
    h.data.threads[d.threadID].threadTheme[a] = m.threadTheme[a];
  }
  for (const a of m.adminIDs) {
    h.data.threads[d.threadID].adminIDs.push(a.id);
  }
  h.allThreadID = Object.keys(h.data.threads);
  h.allUserID = Object.keys(h.data.users);
  await h.save();
  await (await import("./Threads.js")).nickname({
    event: d,
    info: m,
    writeThread: o,
    readThread: i,
    umaru: h,
    cooldown: n
  }).catch(a => {
    console.log(a);
  });
  await (await import("./Users.js")).record({
    event: d,
    info: m,
    Umaru: s,
    writeThread: o,
    readThread: i,
    umaru: h,
    cooldown: n
  }).catch(a => {
    console.log(a);
  });
  h.process.database = false;
};
export const getUpdate = async function ({
  event: d,
  Umaru: s,
  getNickname: h,
  getUsers: o,
  writeThread: i,
  getAdminIDs: n,
  umaru: g,
  Threads: l
}) {
  let m = s.getCurrentUserID();
  if (d.logMessageType == "log:thread-admins") {
    if (d.logMessageData.ADMIN_EVENT == "add_admin") {
      let e = await n(d.threadID);
      e.push(d.logMessageData.TARGET_ID);
      g.data.threads[d.threadID].adminIDs = e;
      await g.save();
      a.log("DATABASE", "Successfully update thread: " + (await l.getName(d.threadID)) + " | " + d.threadID + " - " + d.logMessageBody);
    }
    if (d.logMessageData.ADMIN_EVENT == "remove_admin") {
      let e = g.data.threads[d.threadID].adminIDs.filter(function (a) {
        return a !== d.logMessageData.TARGET_ID;
      });
      g.data.threads[d.threadID].adminIDs = e;
      await g.save();
      a.log("DATABASE", "Successfully update thread: " + (await l.getName(d.threadID)) + " | " + d.threadID + " - " + d.logMessageBody);
    }
  }
  if (d.logMessageType == "log:unsubscribe") {
    const e = await o(d.threadID);
    if (g.data.threads[d.threadID].adminIDs.includes(d.logMessageData.leftParticipantFbId)) {
      let e = g.data.threads[d.threadID].adminIDs.filter(function (a) {
        return a !== d.logMessageData.leftParticipantFbId;
      });
      g.data.threads[d.threadID].adminIDs = e;
      await g.save();
      a.log("DATABASE", "Successfully update thread: " + (await l.getName(d.threadID)) + " | " + d.threadID + " - " + d.logMessageBody);
    }
    setTimeout(async () => {
      if (e.hasOwnProperty(d.logMessageData.leftParticipantFbId)) {
        delete e[d.logMessageData.leftParticipantFbId];
        await i(g.systemPath + "/data/Threads/" + d.threadID + "/Users", e);
        a.log("DATABASE", "Successfully update thread: " + (await l.getName(d.threadID)) + " | " + d.threadID + " - " + d.logMessageBody);
      }
    }, 10000);
    if (d.logMessageData.leftParticipantFbId == m) {
      g.data.threadBackup ||= {};
      g.data.threadBackup[d.threadID] = g.data.threads[d.threadID];
      delete g.data.threads[d.threadID];
      await g.save();
      g.allThreadID = Object.keys(g.data.threads);
    }
  }
  if (d.logMessageType == "log:subscribe") {
    const e = await o(d.threadID);
    for (const a of d.logMessageData.addedParticipants) {
      e[a.userFbId] = {};
      e[a.userFbId].name = a.fullName;
      e[a.userFbId].lastActive = "Record not found";
      await i(g.systemPath + "/data/Threads/" + d.threadID + "/Users", e, true);
    }
    a.log("DATABASE", "Successfully update thread: " + (await l.getName(d.threadID)) + " | " + d.threadID + " - " + d.logMessageBody);
  }
  if (d.logMessageType == "log:user-nickname") {
    const e = await n(d.threadID);
    if (d.author != m && g.data.threads[d.threadID].AntiChangeGroup.nickname == 0 || d.author != m && g.data.threads[d.threadID].AntiChangeGroup.nickname == 1 && e.includes(d.author) || d.author != m && g.data.threads[d.threadID].AntiChangeGroup.nickname == 1 && g.config.adminbot.includes(d.author)) {
      const a = await h(d.threadID);
      a[d.logMessageData.participant_id] = d.logMessageData.nickname;
      await i(g.systemPath + "/data/Threads/" + d.threadID + "/Nickname", a, true);
    }
    a.log("DATABASE", "Successfully update thread: " + (await l.getName(d.threadID)) + " | " + d.threadID + " - " + d.logMessageBody);
  }
  if (d.logMessageType == "log:thread-color") {
    const e = await n(d.threadID);
    if (d.author != m && g.data.threads[d.threadID].AntiChangeGroup.theme == 0 || d.author != m && g.data.threads[d.threadID].AntiChangeGroup.theme == 1 && e.includes(d.author) || d.author != m && g.data.threads[d.threadID].AntiChangeGroup.theme == 1 && g.config.adminbot.includes(d.author)) {
      g.data.threads[d.threadID].threadTheme.id = d.logMessageData.theme_id;
      g.data.threads[d.threadID].threadTheme.accessibility_label = d.logMessageData.accessibility_label;
      g.data.threads[d.threadID].color = d.logMessageData.theme_color;
      if (d.logMessageData.theme_emoji) {
        g.data.threads[d.threadID].emoji = d.logMessageData.theme_emoji;
      }
      await g.save();
    }
    a.log("DATABASE", "Successfully update thread: " + (await l.getName(d.threadID)) + " | " + d.threadID + " - " + d.logMessageBody);
  }
  if (d.logMessageType == "log:thread-name") {
    const e = await n(d.threadID);
    if (d.author != m && g.data.threads[d.threadID].AntiChangeGroup.name == 0 || d.author != m && g.data.threads[d.threadID].AntiChangeGroup.name == 1 && e.includes(d.author) || d.author != m && g.data.threads[d.threadID].AntiChangeGroup.name == 1 && g.config.adminbot.includes(d.author)) {
      g.data.threads[d.threadID].threadName = d.logMessageData.name;
      await g.save();
    }
    a.log("DATABASE", "Successfully update thread: " + (await l.getName(d.threadID)) + " | " + d.threadID + " - " + d.logMessageBody);
  }
  if (d.logMessageType == "log:thread-image" || d.type == "change_thread_image") {
    const s = await n(d.threadID);
    let h = d.image && d.image.url !== null ? d.image.url : d.logMessageData && d.logMessageData.url !== null ? d.logMessageData.url : null;
    if (d.author != m && g.data.threads[d.threadID].AntiChangeGroup.photo == 0 || d.author != m && g.data.threads[d.threadID].AntiChangeGroup.photo == 1 && s.includes(d.author) || d.author != m && g.data.threads[d.threadID].AntiChangeGroup.photo == 1 && g.config.adminbot.includes(d.author)) {
      if (d.image && d.image.url === null || d.logMessageData && d.logMessageData.url === null) {
        e.removeSync(g.systemPath + "/data/Threads/" + d.threadID + "/photo.png");
      } else {
        if (!e.existsSync(g.systemPath + "/data/Threads/" + d.threadID + "/photo.png")) {
          r(g.systemPath + "/data/Threads/" + d.threadID);
        }
        (await t.get(h, {
          responseType: "stream"
        })).data.pipe(e.createWriteStream(g.systemPath + "/data/Threads/" + d.threadID + "/photo.png"));
      }
      g.data.threads[d.threadID].imageSrc = h;
      await g.save();
    }
    a.log("DATABASE", "Successfully update thread: " + (await l.getName(d.threadID)) + " | " + d.threadID + " - " + (d.snippet ? d.snippet : d.logMessageBody));
  }
  if (d.logMessageType == "log:thread-icon") {
    const e = await n(d.threadID);
    if (d.author != m && g.data.threads[d.threadID].AntiChangeGroup.emoji == 0 || d.author != m && g.data.threads[d.threadID].AntiChangeGroup.emoji == 1 && e.includes(d.author) || d.author != m && g.data.threads[d.threadID].AntiChangeGroup.emoji == 1 && g.config.adminbot.includes(d.author)) {
      g.data.threads[d.threadID].emoji = d.logMessageData.thread_icon;
      await g.save();
    }
    a.log("DATABASE", "Successfully update thread: " + (await l.getName(d.threadID)) + " | " + d.threadID + " - " + d.logMessageBody);
  }
};
export const nickname = async function ({
  event: a,
  info: e,
  umaru: t,
  readThread: r,
  writeThread: d,
  cooldown: s
}) {
  if (s.isCooldown("createnickname" + a.threadID, 5)) {
    return;
  }
  s.create("createnickname" + a.threadID);
  const h = t.systemPath + "/data/Threads/" + a.threadID + "/Nickname";
  let o = await r(h);
  o = e.nicknames;
  await d(h, o, true);
};
