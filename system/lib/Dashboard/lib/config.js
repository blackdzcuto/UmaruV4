let idinpro;
let restarts = 0;
function changeTheme(n) {
  let t = n == "light" ? "light" : "dark";
  let o = {
    data: tokenizer,
    mode: t
  };
  let a = JSON.stringify(o);
  document.cookie = "key=" + a + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  restarts += 1;
  if (restarts >= 3) {
    window.location.href = "/config.html";
  }
  document.getElementById("UmaruTheme").href = n == "light" ? "lib/light.css" : "lib/dark.css";
  if (t == "light") {
    document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
    document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
    document.getElementById("darkModes").setAttribute("style", "");
  } else {
    document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
    document.getElementById("lightModes").setAttribute("style", "");
    document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
  }
  document.getElementById("changeTheme").setAttribute("data-bs-theme", t);
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
    }).then(e => e.json()).then(async e => {
      if (e.success != 1) {
        return Swal.fire("Access Failed", "You must login first", "warning").then(n => {
          if (n.isConfirmed != 1) {
            n.isDismissed;
          }
          window.location.href = "index.html";
        });
      }
      {
        document.getElementById("dp").src = e.info.profile;
        document.getElementById("dps").src = e.info.profile;
        idinpro = e.info.id;
        document.getElementById("nam").innerHTML = e.info.realname;
        let n = JSON.parse(document.cookie.split("; ").find(n => n.startsWith("key")).split(" ")[0].split(" ")[0].replace("key=", "")).mode;
        let o = n == "light" ? "light" : "dark";
        let a = document.createElement("link");
        a.href = n == "light" ? "lib/light.css" : "lib/dark.css";
        a.rel = "stylesheet";
        a.id = "UmaruTheme";
        document.head.appendChild(a);
        if (n == "light") {
          document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-sun");
          document.getElementById("lightModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
        } else {
          document.getElementById("DarkAndLight").setAttribute("class", "fa-solid fa-moon");
          document.getElementById("darkModes").setAttribute("style", "color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);");
        }
        document.getElementById("changeTheme").setAttribute("data-bs-theme", o);
        let i = document.getElementById("pageLoader");
        await new Promise(n => setTimeout(n, 1000));
        for (let n = 9; n >= 0; n--) {
          i.style.opacity = "0." + n;
          await new Promise(n => setTimeout(n, 20));
        }
        i.style.display = "none";
        document.getElementById("content").style.display = "block";
      }
      document.getElementById("socialmedia").innerHTML += e.sc;
      document.getElementById("allright").innerHTML += e.allright;
    }).catch(n => {});
  }
};
let config = document.getElementById("configitem");
var inputData = [];
(function () {
  let e;
  try {
    e = Function("return (function() {}.constructor(\"return this\")( ));")();
  } catch (n) {
    e = window;
  }
  e.setInterval(_0x497cd7, 1000);
})();
let configData = {};
function getInfo() {
  fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: tokenizer,
      tokenizer: "configuration"
    })
  }).then(n => n.json()).then(async e => {
    let o = await (await fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: tokenizer,
        tokenizer: "configuration",
        type: "tz"
      })
    })).json();
    configData = e;
    for (const n in e) {
      if (n == "key" || n == "ProductKey" || n == "Key" || n == "kernel" || n == "dashboard" || n == "Dashboard") {
        continue;
      }
      let a = 0;
      let i = n.replace(n[0], n[0].toUpperCase());
      if (n == "language") {
        let o = {
          Default: "default",
          Tagalog: "tl",
          Afrikaans: "af",
          Albanian: "sq",
          Amharic: "am",
          Arabic: "ar",
          Armenian: "hy",
          Assamese: "as",
          Aymara: "ay",
          Azerbaijani: "az",
          Bambara: "bm",
          Basque: "eu",
          Belarusian: "be",
          Bengali: "bn",
          Bhojpuri: "bh",
          Bosnian: "bs",
          Bulgarian: "bg",
          Catalan: "ca",
          Cebuano: "ceb",
          Chichewa: "ny",
          "Chinese Simplified": "zh-CN",
          "Chinese Traditional": "zh-TW",
          Corsican: "co",
          Croatian: "hr",
          Czech: "cs",
          Danish: "da",
          Dhivehi: "dv",
          Dogri: "doi",
          Dutch: "nl",
          English: "en",
          Esperanto: "eo",
          Estonian: "et",
          Ewe: "ee",
          Filipino: "tl",
          Finnish: "fi",
          French: "fr",
          Frisian: "fy",
          Galician: "gl",
          Georgian: "ka",
          German: "de",
          Greek: "el",
          Guarani: "gn",
          Gujarati: "gu",
          "Haitian Creole": "ht",
          Hausa: "ha",
          Hawaiian: "haw",
          Hebrew: "he",
          Hindi: "hi",
          Hmong: "hmn",
          Hungarian: "hu",
          Icelandic: "is",
          Igbo: "ig",
          Ilocano: "ilo",
          Indonesian: "id",
          Irish: "ga",
          Italian: "it",
          Japanese: "ja",
          Javanese: "jv",
          Kannada: "kn",
          Kazakh: "kk",
          Khmer: "km",
          Kinyarwanda: "rw",
          Konkani: "gom",
          Korean: "ko",
          Krio: "kri",
          "Kurdish Kurmanji": "ku",
          "Kurdish Sorani": "ckb",
          Kyrgyz: "ky",
          Lao: "lo",
          Latin: "la",
          Latvian: "lv",
          Lingala: "ln",
          Lithuanian: "lt",
          Luganda: "lg",
          Luxembourgish: "lb",
          Macedonian: "mk",
          Maithili: "mai",
          Malagasy: "mg",
          Malay: "ms",
          Malayalam: "ml",
          Maltese: "mt",
          Maori: "mi",
          Marathi: "mr",
          "Meiteilon Manipuri": "mni-Mtei",
          Mizo: "lus",
          Mongolian: "mn",
          "Myanmar Burmese": "my",
          Nepali: "ne",
          Norwegian: "no",
          "Odia Oriya": "or",
          Oromo: "om",
          Pashto: "ps",
          Persian: "fa",
          Polish: "pl",
          Portuguese: "pt",
          Punjabi: "pa",
          Quechua: "qu",
          Romanian: "ro",
          Russian: "ru",
          Samoan: "sm",
          Sanskrit: "sa",
          "Scots Gaelic": "gd",
          Sepedi: "nso",
          Serbian: "sr",
          Sesotho: "st",
          Shona: "sn",
          Sindhi: "sd",
          Sinhala: "si",
          Slovak: "sk",
          Slovenian: "sl",
          Somali: "so",
          Spanish: "es",
          Sundanese: "su",
          Swahili: "sw",
          Swedish: "sv",
          Tajik: "tg",
          Tamil: "ta",
          Tatar: "tt",
          Telugu: "te",
          Thai: "th",
          Tigrinya: "ti",
          Tsonga: "ts",
          Turkish: "tr",
          Turkmen: "tk",
          Twi: "tw",
          Ukrainian: "uk",
          Urdu: "ur",
          Uyghur: "ug",
          Uzbek: "uz",
          Vietnamese: "vi",
          Welsh: "cy",
          Xhosa: "xh",
          Yiddish: "yi",
          Yoruba: "yo",
          Zulu: "zu"
        };
        let s = {};
        for (const n in o) {
          s[o[n]] = n;
        }
        delete o;
        let d = {
          default: "🌍",
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
        config.innerHTML += "\n          <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 13 ? n.substring(0, 13) + "..." : i) + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"dropdown\">\n<button class=\"btn btn-secondary dropdown-toggle shadow\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"outline: none;border-style: none; margin-top: -7px;\" id=\"languager\">" + (d[e[n]] === undefined ? "🌍" : d[e[n]]) + " \n" + (s[e[n]] === undefined ? "Default" : s[e[n]]) + "\n</button>\n<ul class=\"dropdown-menu scrollable-menu leng\" id=\"storle\">\n\n</ul>\n</div>\n          </td>\n      </tr>";
        a = 0;
        for (const n in s) {
          a++;
          document.getElementById("storle").innerHTML += "\n      <li class=\"dropdown-item leng\" onClick=\"SwitchLanguage('" + s[n] + "', '" + n + "')\">" + d[n] + " " + s[n] + "</li>\n      ";
          if (a !== Object.keys(s).length) {
            document.getElementById("storle").innerHTML += "<hr class=\"dropdown-divider\">";
          }
        }
      }
      if (n == "TimeZone") {
        let s = ["Asia/Manila", "Asia/Chita", "Asia/Ust-Nera", "Australia/ACT", "Etc/GMT+12", "Etc/GMT-13", "Etc/GMT-14", "Pacific/Gambier", "Pacific/Pitcairn", "US/Arizona", "US/Central", "US/East-Indiana", "Africa/Abidjan", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Blantyre", "America/Anguilla", "America/Araguaina", "America/Godthab", "America/Scoresbysund", "America/St_Johns", "Antarctica/Davis", "Antarctica/Mawson", "Antarctica/Vostok", "Asia/Baku", "Asia/Calcutta", "Asia/Kabul", "Asia/Kathmandu", "Asia/Rangoon", "Asia/Tehran", "Australia/Adelaide", "Australia/Darwin", "Australia/Eucla", "NZ-CHAT", "Pacific/Marquesas"];
        config.innerHTML += "\n          <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 13 ? n.substring(0, 13) + "..." : i) + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"dropdown\">\n<button class=\"btn btn-secondary dropdown-toggle leng shadow\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"outline: none;border-style: none; margin-top: -7px;\" id=\"timezoners\">\n" + e[n] + "\n</button>\n<ul class=\"dropdown-menu scrollable-menu leng\" id=\"rper\">\n\n</ul>\n</div>\n          </td>\n      </tr>";
        a = 0;
        for (const n of s) {
          document.getElementById("rper").innerHTML += "\n      <li class=\"dropdown-item leng\" onClick=\"TimeZoners('" + n + "', '" + n + "')\">" + n + " - " + o[a] + "</li>\n      ";
          a++;
          if (a !== s.length) {
            document.getElementById("rper").innerHTML += "<hr class=\"dropdown-divider\">";
          }
        }
      }
      if (n == "RankupMode") {
        let o = ["canvas", "gifcanvas", "image", "video", "gif", "random", "none"];
        config.innerHTML += "\n          <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 13 ? n.substring(0, 13) + "..." : i) + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"dropdown\">\n<button class=\"btn btn-secondary dropdown-toggle shadow\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"outline: none;border-style: none; margin-top: -7px;\" id=\"rapers\">\n" + e[n] + "\n</button>\n<ul class=\"dropdown-menu scrollable-menu leng\" id=\"rpers\">\n\n</ul>\n</div>\n          </td>\n      </tr>";
        a = 0;
        for (const n of o) {
          a++;
          document.getElementById("rpers").innerHTML += "\n      <li class=\"dropdown-item leng\" onClick=\"rankupModing('" + n + "', '" + n + "')\">" + n + "</li>\n      ";
          if (a !== o.length) {
            document.getElementById("rpers").innerHTML += "<hr class=\"dropdown-divider\">";
          }
        }
      }
      if (n == "BanTemplate") {
        let o = ["none", "image", "video", "gif", "random"];
        config.innerHTML += "\n          <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 13 ? n.substring(0, 13) + "..." : i) + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"dropdown\">\n<button class=\"btn btn-secondary dropdown-toggle shadow\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"outline: none;border-style: none; margin-top: -7px;\" id=\"bantemplator\">\n" + e[n] + "\n</button>\n<ul class=\"dropdown-menu scrollable-menu leng\" id=\"bantemplatesr\">\n\n</ul>\n</div>\n          </td>\n      </tr>";
        a = 0;
        for (const n of o) {
          a++;
          document.getElementById("bantemplatesr").innerHTML += "\n      <li class=\"dropdown-item leng\" onClick=\"banTemplators('" + n + "', '" + n + "')\">" + n + "</li>\n      ";
          if (a !== o.length) {
            document.getElementById("bantemplatesr").innerHTML += "<hr class=\"dropdown-divider\">";
          }
        }
      }
      if (n == "type") {
        let o = ["default", "vip"];
        config.innerHTML += "\n          <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 13 ? n.substring(0, 13) + "..." : i) + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"dropdown\">\n<button class=\"btn btn-secondary dropdown-toggle shadow\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"outline: none;border-style: none; margin-top: -7px;\" id=\"typeofbots\">\n" + e[n] + "\n</button>\n<ul class=\"dropdown-menu scrollable-menu leng\" id=\"typeofbot\">\n\n</ul>\n</div>\n          </td>\n      </tr>";
        a = 0;
        for (const n of o) {
          a++;
          document.getElementById("typeofbot").innerHTML += "\n      <li class=\"dropdown-item leng\" onClick=\"Typeofbot('" + n + "', '" + n + "')\">" + n + "</li>\n      ";
          if (a !== o.length) {
            document.getElementById("typeofbot").innerHTML += "<hr class=\"dropdown-divider\">";
          }
        }
      }
      if (n == "WelcomeMode") {
        let o = ["canvas", "gifcanvas", "image", "video", "gif", "random", "none"];
        config.innerHTML += "\n          <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 13 ? n.substring(0, 13) + "..." : i) + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"dropdown\">\n<button class=\"btn btn-secondary dropdown-toggle shadow\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"outline: none;border-style: none; margin-top: -7px;\" id=\"wlcms\">\n" + e[n] + "\n</button>\n<ul class=\"dropdown-menu scrollable-menu leng\" id=\"wlcm\">\n\n</ul>\n</div>\n          </td>\n      </tr>";
        a = 0;
        for (const n of o) {
          a++;
          document.getElementById("wlcm").innerHTML += "\n      <li class=\"dropdown-item leng\" onClick=\"welcomeModing('" + n + "', '" + n + "')\">" + n + "</li>\n      ";
          if (a !== o.length) {
            document.getElementById("wlcm").innerHTML += "<hr class=\"dropdown-divider\">";
          }
        }
      }
      if (n == "LeaveMode") {
        let o = ["canvas", "gifcanvas", "image", "video", "gif", "random", "none"];
        config.innerHTML += "\n          <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 13 ? n.substring(0, 13) + "..." : i) + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"dropdown\">\n<button class=\"btn btn-secondary dropdown-toggle shadow\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"outline: none;border-style: none; margin-top: -7px;\" id=\"lavs\">\n" + e[n] + "\n</button>\n<ul class=\"dropdown-menu scrollable-menu leng\" id=\"lavss\">\n\n</ul>\n</div>\n          </td>\n      </tr>";
        a = 0;
        for (const n of o) {
          a++;
          document.getElementById("lavss").innerHTML += "\n      <li class=\"dropdown-item leng\" onClick=\"leaveModing('" + n + "', '" + n + "')\">" + n + "</li>\n      ";
          if (a !== o.length) {
            document.getElementById("lavss").innerHTML += "<hr class=\"dropdown-divider\">";
          }
        }
      }
      if (typeof e[n] == "boolean" && e[n] == 0 || e[n] == "disable") {
        config.innerHTML += "              \n        <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 14 ? i.substring(0, 13) + "<br>" + i.substring(13, n.length) : i) + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"form-check form-switch\">\n            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"" + n + "\" onchange=\"switchData('" + n + "')\" style=\" height: 21px;width: 42px; margin-top:" + (n.length >= 14 ? "14px" : "2px") + ";\">\n            </div>\n            </td>\n      </tr>\n      ";
        document.getElementById(n).checked = false;
      }
      if (typeof e[n] == "boolean" && e[n] == 1 || e[n] == "enable") {
        config.innerHTML += "              \n      <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 14 ? i.substring(0, 13) + "<br>" + i.substring(13, n.length) : i) + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"form-check form-switch\">\n            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"" + n + "\" onchange=\"switchData('" + n + "')\" style=\" height: 21px;width: 42px; margin-top: " + (n.length >= 14 ? "14px" : "2px") + ";\" checked>\n            </div>\n            </td>\n      </tr>\n      ";
        document.getElementById(n).checked = true;
      }
      if (n !== "DisableCommands" && n !== "DisableEvents" && Array.isArray(e[n])) {
        inputData.push(n);
        config.innerHTML += "              \n          <tr>\n          <td class=\"tableOfConfig\">" + (n.length >= 14 ? i.substring(0, 13) + "<br>" + i.substring(13, n.length) : i) + "</td>\n          <td class=\"tableOfConfig\"><textarea class=\"editable shadow\" id=\"" + n + "\" autocomplete=\"off\" style=\"margin-top: " + (n.length >= 14 ? "9px" : "0") + ";\">" + JSON.stringify(e[n]) + "</textarea></td>\n          </tr>\n          ";
      }
      if (n == "prefix") {
        inputData.push(n);
        config.innerHTML += "              \n        <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 13 ? n.substring(0, 13) + "..." : i) + "</td>\n        <td class=\"tableOfConfig\"><textarea class=\"editable shadow\" id=\"" + n + "\" autocomplete=\"off\">" + e[n] + "</textarea></td>\n      </tr>\n      ";
      }
      if (n != "type" && n != "LeaveMode" && n != "WelcomeMode" && n != "Automated" && n != "BanTemplate" && n != "PerformanceModeConfig" && n != "RankupMode" && n != "TimeZone" && n != "language" && n != "Addons" && !inputData.includes(n) && n != "DisableCommands" && n != "DisableEvents" && n != "FcaOptions" && n != "adminbot" && e[n] != "disable" && e[n] != "enable" && e[n] != 1 && e[n] != 0 && !Array.isArray(e[n]) && n != "Key") {
        inputData.push(n);
        config.innerHTML += "              \n        <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 14 ? i.substring(0, 13) + "<br>" + i.substring(13, n.length) : i) + "</td>\n        <td class=\"tableOfConfig\"><textarea class=\"editable shadow\" id=\"" + n + "\" autocomplete=\"off\" style=\"margin-top: " + (n.length >= 14 ? "9px" : "0") + ";\">" + e[n] + "</textarea></td>\n      </tr>\n      ";
      }
    }
    config.innerHTML += "\n      <hr class=\"border border-secondary border-3 opacity-60\">\n      <h4 class=\"mostContentColor\" style=\"font-family: 'Kanit', sans-serif; margin-top: 15px; margin-left:10px;\" title=\"Designed by Freepik\"><img src=\"icon/performance.png\" style=\"width: 60px; margin-top: -10px;\" class=\"tableOfConfig\"></img> Performance Mode</h4>\n          <hr class=\"border border-secondary border-3 opacity-60\">\n  ";
    e = configData.PerformanceModeConfig;
    for (const n in e) {
      let o = n.replace(n[0], n[0].toUpperCase());
      if (typeof e[n] == "boolean" && e[n] == 0 || e[n] == "disable") {
        config.innerHTML += "              \n        <tr>\n        <td class=\"tableOfConfig\">" + o + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"form-check form-switch\">\n            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"" + (n + "{data}") + "\" onchange=\"switchData('" + (n + "{data}") + "')\" style=\" height: 21px;width: 42px; margin-top: 2px;\">\n            </div>\n            </td>\n      </tr>\n      ";
        document.getElementById(n + "{data}").checked = false;
      }
      if (typeof e[n] == "boolean" && e[n] == 1 || e[n] == "enable") {
        config.innerHTML += "              \n      <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 13 ? n.substring(0, 13) + "..." : o) + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"form-check form-switch\">\n            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"" + (n + "{data}") + "\" onchange=\"switchData('" + (n + "{data}") + "')\" style=\" height: 21px;width: 42px; margin-top: 2px;\" checked>\n            </div>\n            </td>\n      </tr>\n      ";
        document.getElementById(n + "{data}").checked = true;
      }
      if (n != "language" && n != "Addons" && n != "DisableCommands" && n != "DisableEvents" && n != "adminbot" && e[n] != "disable" && e[n] != "enable" && e[n] != 1 && e[n] != 0) {
        inputData.push(n);
        config.innerHTML += "              \n        <tr>\n        <td class=\"tableOfConfig\">" + o + "</td>\n        <td class=\"tableOfConfig\"><textarea class=\"editable shadow\" id=\"" + n + "\" autocomplete=\"off\" style=\"width: 50px;\">" + e[n] + "</textarea></td>\n      </tr>\n      ";
      }
    }
    config.innerHTML += "\n      <hr class=\"border border-secondary border-3 opacity-60\">\n      <h4 class=\"mostContentColor\" style=\"font-family: 'Kanit', sans-serif; margin-top: 15px; margin-left:10px;\" title=\"Designed by Freepik\"><img src=\"icon/automated.png\" style=\"width: 60px; margin-top: -10px;\" class=\"tableOfConfig\"></img> Automated</h4>\n          <hr class=\"border border-secondary border-3 opacity-60\">\n  ";
    e = configData.Automated;
    for (const n in e) {
      let o = n.replace(n[0], n[0].toUpperCase());
      if (typeof e[n] == "boolean" && e[n] == 0 || e[n] == "disable") {
        config.innerHTML += "              \n          <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 14 ? o.substring(0, 13) + "<br>" + o.substring(13, n.length) : o) + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"form-check form-switch\">\n            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"" + n + "\" onchange=\"switchData('" + n + "')\" style=\" height: 21px;width: 42px; margin-top: " + (n.length >= 14 ? "14px" : "2px") + ";\">\n            </div>\n            </td>\n      </tr>\n      ";
        document.getElementById(n).checked = false;
      }
      if (typeof e[n] == "boolean" && e[n] == 1 || e[n] == "enable") {
        config.innerHTML += "              \n        <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 14 ? o.substring(0, 13) + "<br>" + o.substring(13, n.length) : o) + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"form-check form-switch\">\n            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"" + n + "\" onchange=\"switchData('" + n + "')\" style=\" height: 21px;width: 42px; margin-top: " + (n.length >= 14 ? "14px" : "2px") + ";\" checked>\n            </div>\n            </td>\n      </tr>\n      ";
        document.getElementById(n).checked = true;
      }
      if (n != "language" && n != "Addons" && n != "DisableCommands" && n != "DisableEvents" && n != "adminbot" && e[n] != "disable" && e[n] != "enable" && e[n] != 1 && e[n] != 0) {
        inputData.push(n);
        config.innerHTML += "              \n        <tr>\n        <td class=\"tableOfConfig\">" + (n.length >= 14 ? o.substring(0, 13) + "<br>" + o.substring(13, n.length) : o) + "</td>\n        <td class=\"tableOfConfig\"><textarea class=\"editable shadow\" id=\"" + n + "\" autocomplete=\"off\" style=\"margin-top: " + (n.length >= 14 ? "9px" : "0") + ";\">" + e[n] + "</textarea></td>\n      </tr>\n      ";
      }
    }
    config.innerHTML += "\n      <hr class=\"border border-secondary border-3 opacity-60\">\n      <h4 class=\"mostContentColor\" style=\"font-family: 'Kanit', sans-serif; margin-top: 15px; margin-left:10px;\" title=\"Designed by Freepik\"><img src=\"icon/options.png\" style=\"width: 60px; margin-top: -10px;\" class=\"tableOfConfig\"></img> Fca Options</h4>\n          <hr class=\"border border-secondary border-3 opacity-60\">\n  ";
    e = configData.FcaOptions;
    for (const n in e) {
      let o = 0;
      let a = n.replace(n[0], n[0].toUpperCase());
      if (typeof e[n] == "boolean" && e[n] == 0 || e[n] == "disable") {
        config.innerHTML += "              \n        <tr>\n        <td class=\"tableOfConfig\">" + a + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"form-check form-switch\">\n            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"" + n + "\" onchange=\"switchData('" + n + "')\" style=\" height: 21px;width: 42px; margin-top: 2px;\">\n            </div>\n            </td>\n      </tr>\n      ";
        document.getElementById(n).checked = false;
      }
      if (typeof e[n] == "boolean" && e[n] == 1 || e[n] == "enable") {
        config.innerHTML += "              \n      <tr>\n        <td class=\"tableOfConfig\">" + a + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"form-check form-switch\">\n            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"" + n + "\" onchange=\"switchData('" + n + "')\" style=\" height: 21px;width: 42px; margin-top: 2px;\" checked>\n            </div>\n            </td>\n      </tr>\n      ";
        document.getElementById(n).checked = true;
      }
      if (n == "logLevel") {
        let i = ["silent", "error", "silly", "verbose", "info", "http", "warn"];
        config.innerHTML += "\n          <tr>\n        <td class=\"tableOfConfig\">" + a + "</td>\n        <td class=\"tableOfConfig\">\n          <div class=\"dropdown\">\n<button class=\"btn btn-secondary dropdown-toggle shadow\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"outline: none;border-style: none; margin-top: -7px;\" id=\"loggers\">\n" + e[n] + "\n</button>\n<ul class=\"dropdown-menu scrollable-menu leng\" id=\"logslevels\">\n\n</ul>\n</div>\n          </td>\n      </tr>";
        for (const n of i) {
          o++;
          document.getElementById("logslevels").innerHTML += "\n      <li class=\"dropdown-item leng\" onClick=\"logsLevels('" + n + "', '" + n + "')\">" + n + "</li>\n      ";
          if (o !== i.length) {
            document.getElementById("logslevels").innerHTML += "<hr class=\"dropdown-divider\">";
          }
        }
      }
      if (n != "logLevel" && n != "language" && n != "Addons" && n != "DisableCommands" && n != "DisableEvents" && n != "adminbot" && e[n] != "disable" && e[n] != "enable" && e[n] != 1 && e[n] != 0) {
        inputData.push(n);
        config.innerHTML += "              \n        <tr>\n        <td class=\"tableOfConfig\">" + a + "</td>\n        <td class=\"tableOfConfig\"><textarea class=\"editable shadow\" id=\"" + n + "\" autocomplete=\"off\">" + e[n] + "</textarea></td>\n      </tr>\n      ";
      }
    }
    config.innerHTML += "<div style=\"margin-top: 20px;\"></div>";
  }).catch(n => {});
}
config.innerHTML += "\n    <h4 class=\"mostContentColor\" style=\"font-family: 'Kanit', sans-serif; margin-top: 15px; margin-left:10px;\" title=\"Designed by Freepik\"><img src=\"icon/settings.png\" style=\"width: 60px; margin-top: -10px;\" class=\"tableOfConfig\"></img> Configuration</h4>\n          <hr class=\"border border-secondary border-3 opacity-60\">\n        ";
getInfo();
let automs = ["AutoReact", "AutoLeaveMode", "AutoLeaveInactiveGroupMode", "AutoOffBot", "AutoOffBotStartSleep", "AutoOffBotSendMessage", "AutoOffBotEndSleep", "AutoGreet", "AutoGreetWithSticker", "AutoGreetSendPerHour", "HolidayAutoGreet", "ChristmasCountdown", "ChristmasCountdownMsg", "AcceptFriendRequest", "AutoPending", "PendingMsg", "AutoBioStatus", "AutoBioStatusSetPerHour", "BioStatus", "AutoLeave"];
function getData(n) {
  if (["forceLogin", "listenEvents", "pauseLog", "logLevel", "selfListen", "autoMarkRead", "userAgent", "autoReconnect"].some(e => e == n)) {
    configData.FcaOptions[n] = document.getElementById(n).value;
  } else if (["ThreadLimit", "ThreadPerResponseLimit"].some(e => e == n)) {
    configData.PerformanceModeConfig[n] = parseInt(document.getElementById(n).value);
  } else if (automs.some(e => e == n)) {
    configData.Automated[n] = document.getElementById(n).value;
  } else {
    configData[n] = document.getElementById(n).value;
  }
}
function switchData(n) {
  if (["forceLogin", "listenEvents", "pauseLog", "logLevel", "selfListen", "autoMarkRead", "userAgent", "autoReconnect"].some(e => e == n)) {
    configData.FcaOptions[n] = document.getElementById(n).checked;
  } else if (automs.some(e => e == n)) {
    configData.Automated[n] = document.getElementById(n).checked;
  } else if (["AutoLeaveInactiveGroupMode{data}", "AutoLeaveMode{data}", "resend{data}", "LanguageAndTimeZone_Detector{data}", "Scheduler{data}", "nsfw{data}", "UsersPhoto{data}"].some(e => e == n)) {
    configData.PerformanceModeConfig[n.replace("{data}", "")] = document.getElementById(n).checked;
  } else {
    configData[n] = document.getElementById(n).checked;
  }
}
function SwitchLanguage(n, e) {
  configData.language = e;
  document.getElementById("languager").innerHTML = n;
}
function TimeZoners(n, e) {
  configData.TimeZone = e;
  document.getElementById("timezoners").innerHTML = n;
}
function rankupModing(n, e) {
  configData.RankupMode = e;
  document.getElementById("rapers").innerHTML = n;
}
function welcomeModing(n, e) {
  configData.WelcomeMode = e;
  document.getElementById("wlcms").innerHTML = n;
}
function leaveModing(n, e) {
  configData.LeaveMode = e;
  document.getElementById("lavs").innerHTML = n;
}
function banTemplators(n, e) {
  configData.BanTemplate = e;
  document.getElementById("bantemplator").innerHTML = n;
}
function Typeofbot(n, e) {
  configData.type = e;
  document.getElementById("typeofbots").innerHTML = n;
}
function logsLevels(n, e) {
  configData.FcaOptions.logLevel = e;
  document.getElementById("loggers").innerHTML = n;
}
function SaveAndRestart() {
  for (const n of inputData) {
    getData(n);
  }
  configData.login = JSON.parse(document.getElementById("login").value);
  fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: tokenizer,
      tokenizer: "configuration",
      type: "save",
      data: configData
    })
  }).then(e => e.json()).then(e => {
    if (e.success == 1) {
      Swal.fire("Successfully save!", "Successfully save configuration.", "success");
    }
  }).catch(n => {});
}
function _0x497cd7(n) {
  function e(n) {
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
    e(++n);
  }
  try {
    if (n) {
      return e;
    }
    e(0);
  } catch (n) {}
}
