export default async function ({
  Umaru: e,
  event: t,
  moment: a,
  getUsers: s,
  writeThread: r,
  umaru: d
}) {
  const n = e.getCurrentUserID();
  var h = a.tz(d.data.threads[t.threadID].timeZone).format("MMM DD YYYY hh:mm:ss A");
  var o = Math.floor(Date.now() / 3600000);
  var D = Math.floor(Date.now() / 86400000);
  var I = Math.floor(Date.now() / 2592000000);
  const i = await s(t.threadID);
  if (i[t.senderID] && !i[t.senderID].timestamp || i[t.senderID] && Date.now() - i[t.senderID].timestamp > 3600000) {
    i[t.senderID].timestamp = Date.now();
    if (t.senderID == n) {
      i[n].lastActive = "None/Bot";
      return await r(d.systemPath + "/data/Threads/" + t.threadID + "/Users", i, true);
    }
    if (d.data.threads[t.threadID].adminIDs.includes(t.senderID)) {
      i[t.senderID].lastActive = "Administrator";
      return await r(d.systemPath + "/data/Threads/" + t.threadID + "/Users", i, true);
    }
    d.data.threads[t.threadID].seenerType ||= "";
    i[t.senderID].lastActive = h;
    if (d.data.threads[t.threadID].seenerType == "hours") {
      i[t.senderID].hours = parseInt(o);
      for (const e in i) {
        delete i[e].months;
        delete i[e].days;
      }
    } else if (d.data.threads[t.threadID].seenerType == "days") {
      i[t.senderID].days = parseInt(D);
      for (const e in i) {
        delete i[e].hours;
        delete i[e].months;
      }
    } else if (d.data.threads[t.threadID].seenerType == "months") {
      i[t.senderID].days = parseInt(D);
      for (const e in i) {
        delete i[e].hours;
        delete i[e].days;
      }
    } else {
      i[t.senderID].hours = parseInt(o);
      i[t.senderID].days = parseInt(D);
      i[t.senderID].months = parseInt(I);
    }
    await r(d.systemPath + "/data/Threads/" + t.threadID + "/Users", i, true);
  }
}
