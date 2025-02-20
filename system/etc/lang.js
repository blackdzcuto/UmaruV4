import a from "fs";
import { fileURLToPath as e } from "url";
import { dirname as t } from "path";
t(e(import.meta.url));
let n = {
  af: "🇿🇦",
  sq: "🇦🇱",
  am: "🇪🇹",
  ar: "🇸🇦",
  hy: "🇦🇲",
  as: "🇮🇳",
  ay: "🏳",
  az: "🇦🇿",
  bm: "🇲🇱",
  eu: "🇪🇺",
  be: "🇧🇾",
  bn: "🇧🇩",
  bh: "🇮🇳",
  bs: "🇧🇦",
  bg: "🇧🇬",
  ca: "🇦🇩",
  ceb: "🇵🇭",
  ny: "🇲🇼",
  "zh-CN": "🇨🇳",
  "zh-TW": "🇹🇼",
  co: "🇫🇷",
  hr: "🇭🇷",
  cs: "🇨🇿",
  da: "🇩🇰",
  dv: "🇲🇻",
  doi: "🇮🇳",
  nl: "🇳🇱",
  en: "🇺🇸",
  eo: "🌍",
  et: "🇪🇪",
  ee: "🇬🇭",
  tl: "🇵🇭",
  fi: "🇫🇮",
  fr: "🇫🇷",
  fy: "🇳🇱",
  gl: "🇪🇸",
  ka: "🇬🇪",
  de: "🇩🇪",
  el: "🇬🇷",
  gn: "🇵🇾",
  gu: "🇮🇳",
  ht: "🇭🇹",
  ha: "🇳🇬",
  haw: "🇺🇸",
  he: "🇮🇱",
  hi: "🇮🇳",
  hmn: "🌍",
  hu: "🇭🇺",
  is: "🇮🇸",
  ig: "🇳🇬",
  ilo: "🇵🇭",
  id: "🇮🇩",
  ga: "🇮🇪",
  it: "🇮🇹",
  ja: "🇯🇵",
  jv: "🇮🇩",
  kn: "🇮🇳",
  kk: "🇰🇿",
  km: "🇰🇭",
  rw: "🇷🇼",
  gom: "🇮🇳",
  ko: "🇰🇷",
  kri: "🇸🇱",
  ku: "🇮🇶",
  ckb: "🇮🇶",
  ky: "🇰🇬",
  lo: "🇱🇦",
  la: "🇻🇦",
  lv: "🇱🇻",
  ln: "🇨🇬",
  lt: "🇱🇹",
  lg: "🇺🇬",
  lb: "🇱🇺",
  mk: "🇲🇰",
  mai: "🇮🇳",
  mg: "🇲🇬",
  ms: "🇲🇾",
  ml: "🇮🇳",
  mt: "🇲🇹",
  mi: "🇳🇿",
  mr: "🇮🇳",
  "mni-Mtei": "🇮🇳",
  lus: "🇮🇳",
  mn: "🇲🇳",
  my: "🇲🇲",
  ne: "🇳🇵",
  no: "🇳🇴",
  or: "🇮🇳",
  om: "🇪🇹",
  ps: "🇦🇫",
  fa: "🇮🇷",
  pl: "🇵🇱",
  pt: "🇵🇹",
  pa: "🇮🇳",
  qu: "🇵🇪",
  ro: "🇷🇴",
  ru: "🇷🇺",
  sm: "🇼🇸",
  sa: "🇮🇳",
  gd: "🏴",
  nso: "🇿🇦",
  sr: "🇷🇸",
  st: "🇱🇸",
  sn: "🇿🇼",
  sd: "🇵🇰",
  si: "🇱🇰",
  sk: "🇸🇰",
  sl: "🇸🇮",
  so: "🇸🇴",
  es: "🇪🇸",
  su: "🇮🇩",
  sw: "🇹🇿",
  sv: "🇸🇪",
  tg: "🇹🇯",
  ta: "🇮🇳",
  tt: "🇷🇺",
  te: "🇮🇳",
  th: "🇹🇭",
  ti: "🇪🇷",
  ts: "🇿🇦",
  tr: "🇹🇷",
  tk: "🇹🇲",
  tw: "🇬🇭",
  uk: "🇺🇦",
  ur: "🇵🇰",
  ug: "🇺🇬",
  uz: "🇺🇿",
  vi: "🇻🇳",
  cy: "🏴",
  xh: "🇿🇦",
  yi: "🇮🇱",
  yo: "🇳🇬",
  zu: "🇿🇦"
};
export const getLang = async function ({
  event: a,
  key: e,
  Umaru: t,
  moment: r,
  umaru: s,
  kernel: l,
  translate: d,
  prefix: g,
  cooldown: i
}) {
  if (a.isGroup == 1) {
    if (i.isCooldown("languagedetect" + a.threadID, 10)) {
      return;
    }
    if (s.data.threads.hasOwnProperty(a.threadID) && s.data.threads[a.threadID].hasOwnProperty("timeZone") && s.data.threads[a.threadID].timeZone === 0) {
      let o = a.body.replace(/[0-9]|[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]|/g, "").replace(/\p{Emoji}/gu, "");
      let u = (await l.read(["lang"], {
        key: e,
        lang: o
      }))[0];
      if (u.lang == "en") {
        return;
      }
      if (u && u.prob >= 0.99999) {
        s.data.threads[a.threadID][u.lang] ||= 1;
        s.data.threads[a.threadID][u.lang] &&= s.data.threads[a.threadID][u.lang] + 1;
        await s.save();
      }
      if (s.data.threads[a.threadID][u.lang] >= 10) {
        let e;
        let l;
        let o = "";
        if (u.lang == "tl") {
          e = u.tz;
          l = u.language;
        } else {
          e = u.tz;
          l = u.language;
          o = u.lang;
        }
        s.data.threads[a.threadID].timeZone = e;
        s.data.threads[a.threadID].lang = o;
        await s.save();
        t.sendMessage(n[u.lang] + " " + l + " language detected, " + (await d("you can change the language using", a, u.lang === "tl" ? "default" : u.lang, false)) + "  " + g + "language set group [language]\n\n🕒 Time: " + r.tz(s.data.threads[a.threadID].timeZone).format("MMMM DD, YYYY, hh:mm:ss A"), a.threadID);
        i.create("languagedetect" + a.threadID);
      }
    }
  }
  if (a.isGroup == 0) {
    if (i.isCooldown("languagedetect" + a.senderID, 10)) {
      return;
    }
    if (s.data.users.hasOwnProperty(a.senderID) && s.data.users[a.senderID].hasOwnProperty("timeZone") && s.data.users[a.senderID].timeZone === 0) {
      let o = a.body.replace(/[0-9]|[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]|/g, "").replace(/\p{Emoji}/gu, "");
      let u = (await l.read(["lang"], {
        key: e,
        lang: o
      }))[0];
      if (u.lang == "en") {
        return;
      }
      if (u && u.prob >= 0.99999) {
        s.data.users[a.senderID][u.lang] ||= 1;
        s.data.users[a.senderID][u.lang] &&= s.data.users[a.senderID][u.lang] + 1;
        await s.save();
      }
      if (s.data.users[a.senderID][u.lang] >= 10) {
        let e;
        let l;
        let o = "";
        if (u.lang == "tl") {
          e = u.tz;
          l = u.language;
        } else {
          e = u.tz;
          l = u.language;
          o = u.lang;
        }
        s.data.users[a.senderID].timeZone = e;
        s.data.users[a.senderID].lang = o;
        await s.save();
        t.sendMessage(n[u.lang] + " " + l + " language detected, " + (await d("you can change the language using", a, u.lang === "tl" ? "default" : u.lang, false)) + "  " + g + "language set me [language]\n\n🕒 Time: " + r.tz(s.data.users[a.senderID].timeZone).format("MMMM DD, YYYY, hh:mm:ss A"), a.threadID);
        i.create("languagedetect" + a.senderID);
      }
    }
  }
};
export const getClient = function ({
  event: a,
  similarity: e,
  found: t,
  command: n,
  umaru: r,
  translate: s,
  prefix: l
}) {
  let d = l + "help";
  let g = n[0].length > 1 ? t : "";
  let i = "\"" + r.name.get(e.data) + "\"";
  return new Promise(async (e, t) => {
    let n = r.config.cmd_not_found.replace("{{1}}", g).replace("{{2}}", d).replace("{{3}}", i).replace("  ", " ").replace(g, "{{1}}").replace(d, "{{2}}").replace(i, "{{3}}");
    e((await s(n, a, null, true)).replace("{{1}}", g).replace("{{2}}", d).replace("{{3}}", i));
  });
};
