const API = "https://api.frankfurter.dev/v2";
const $ = (s) => document.querySelector(s);

const translations = {
  en:{navConverter:"Converter",navCurrencies:"Currencies",navFaq:"FAQ",eyebrow:"Exchange rates, made simple",heroTitle1:"Convert money.",heroTitle2:"Know the rate.",heroSubtitle:"A fast, clean currency converter with a global currency directory — built for everyday decisions.",currenciesLabel:"currencies",freeLabel:"Free to use",multiLabel:"4 languages",converterLabel:"Currency converter",convertTitle:"Convert currencies",liveRates:"Live rates",amount:"Amount",converted:"Converted",trust1:"Simple inputs",trust2:"Fast conversion",trust3:"Global directory",trust4:"Mobile ready",directoryEyebrow:"Global directory",directoryTitle:"Every currency,<br><em>one place.</em>",directoryText:"Search by country, currency name or ISO code. Find the right currency before you convert.",searchPlaceholder:"Search currency, country or code…",thCurrency:"Currency",thCode:"Code",thName:"Currency name",thCountry:"Country / region",how1Title:"Pick your currencies",how1Text:"Choose a source and target currency from the searchable selector.",how2Title:"Enter an amount",how2Text:"Type any amount and your converted value updates automatically.",how3Title:"Use the result",how3Text:"Check the rate, compare currencies and make a more informed decision.",faqEyebrow:"Good to know",faqTitle:"Questions,<br><em>answered.</em>",faq1Q:"How often are exchange rates updated?",faq1A:"Rates come from Frankfurter's exchange-rate data and are updated according to its underlying official providers. They are suitable for general conversion, not live trading.",faq2Q:"Is Currenzy free?",faq2A:"Yes. The converter and currency directory are free to use.",faq3Q:"What does an ISO currency code mean?",faq3A:"An ISO 4217 code is a three-letter identifier for a currency, such as USD for the US Dollar and EGP for the Egyptian Pound.",faq4Q:"Are these rates for trading or payments?",faq4A:"No. They are reference/mid-market rates for general information. Banks, card networks and money-transfer services can apply their own rates and fees.",footerText:"A simpler way to understand currencies around the world.",privacy:"Privacy",terms:"Terms",footerNote:"Rates are for informational purposes only."},
  ar:{navConverter:"المحوّل",navCurrencies:"العملات",navFaq:"الأسئلة",eyebrow:"أسعار الصرف ببساطة",heroTitle1:"حوّل أموالك.",heroTitle2:"واعرف السعر.",heroSubtitle:"محول عملات سريع وأنيق مع دليل عالمي للعملات، مصمم للاستخدام اليومي.",currenciesLabel:"عملة",freeLabel:"مجاني",multiLabel:"٤ لغات",converterLabel:"محول العملات",convertTitle:"حوّل العملات",liveRates:"أسعار الصرف",amount:"المبلغ",converted:"بعد التحويل",trust1:"إدخال سهل",trust2:"تحويل سريع",trust3:"دليل عالمي",trust4:"متوافق مع الهاتف",directoryEyebrow:"دليل عالمي",directoryTitle:"كل العملات،<br><em>في مكان واحد.</em>",directoryText:"ابحث باسم الدولة أو العملة أو كود ISO واعثر على العملة التي تحتاجها.",searchPlaceholder:"ابحث عن عملة أو دولة أو كود…",thCurrency:"العملة",thCode:"الكود",thName:"اسم العملة",thCountry:"الدولة / المنطقة",how1Title:"اختر العملات",how1Text:"اختر عملة المصدر والعملة المستهدفة من القائمة القابلة للبحث.",how2Title:"أدخل المبلغ",how2Text:"اكتب أي مبلغ وستتحدث النتيجة تلقائيًا.",how3Title:"استخدم النتيجة",how3Text:"راجع السعر وقارن العملات لاتخاذ قرار أفضل.",faqEyebrow:"معلومات مهمة",faqTitle:"أسئلة،<br><em>وإجابات.</em>",faq1Q:"متى يتم تحديث أسعار الصرف؟",faq1A:"تعتمد الأسعار على بيانات Frankfurter ومصادرها الرسمية، ويتم تحديثها وفقًا لجدول هذه المصادر. وهي مناسبة للتحويلات العامة وليست للتداول اللحظي.",faq2Q:"هل Currenzy مجاني؟",faq2A:"نعم، المحول ودليل العملات متاحان مجانًا.",faq3Q:"ما معنى كود العملة ISO؟",faq3A:"كود ISO 4217 هو رمز من ثلاثة أحرف يحدد العملة، مثل USD للدولار الأمريكي وEGP للجنيه المصري.",faq4Q:"هل الأسعار مناسبة للتداول أو الدفع؟",faq4A:"لا، هي أسعار مرجعية للاستخدام العام. قد تضيف البنوك وشبكات البطاقات وخدمات التحويل أسعارًا ورسومًا مختلفة.",footerText:"طريقة أبسط لفهم عملات العالم.",privacy:"الخصوصية",terms:"الشروط",footerNote:"الأسعار لأغراض المعلومات فقط."},
  fr:{navConverter:"Convertisseur",navCurrencies:"Devises",navFaq:"FAQ",eyebrow:"Les taux de change, simplement",heroTitle1:"Convertissez.",heroTitle2:"Connaissez le taux.",heroSubtitle:"Un convertisseur rapide avec un répertoire mondial des devises.",currenciesLabel:"devises",freeLabel:"Gratuit",multiLabel:"4 langues",converterLabel:"Convertisseur",convertTitle:"Convertir des devises",liveRates:"Taux actuels",amount:"Montant",converted:"Converti",trust1:"Simple",trust2:"Rapide",trust3:"Mondial",trust4:"Mobile",directoryEyebrow:"Répertoire mondial",directoryTitle:"Chaque devise,<br><em>au même endroit.</em>",directoryText:"Recherchez par pays, nom de devise ou code ISO.",searchPlaceholder:"Rechercher une devise, un pays ou un code…",thCurrency:"Devise",thCode:"Code",thName:"Nom",thCountry:"Pays / région",how1Title:"Choisissez vos devises",how1Text:"Sélectionnez la devise source et la devise cible.",how2Title:"Entrez un montant",how2Text:"Saisissez un montant et le résultat se met à jour automatiquement.",how3Title:"Utilisez le résultat",how3Text:"Consultez le taux et comparez les devises.",faqEyebrow:"À savoir",faqTitle:"Questions,<br><em>réponses.</em>",faq1Q:"À quelle fréquence les taux sont-ils mis à jour ?",faq1A:"Les taux proviennent des données de change de Frankfurter et de ses sources officielles.",faq2Q:"Currenzy est-il gratuit ?",faq2A:"Oui, le convertisseur et le répertoire sont gratuits.",faq3Q:"Qu'est-ce qu'un code ISO ?",faq3A:"Un code ISO 4217 est un identifiant à trois lettres, comme USD ou EUR.",faq4Q:"Ces taux sont-ils destinés au trading ?",faq4A:"Non. Ce sont des taux de référence destinés à l'information générale.",footerText:"Une manière plus simple de comprendre les devises.",privacy:"Confidentialité",terms:"Conditions",footerNote:"Taux à titre informatif."},
  es:{navConverter:"Conversor",navCurrencies:"Monedas",navFaq:"FAQ",eyebrow:"Tipos de cambio, sin complicaciones",heroTitle1:"Convierte dinero.",heroTitle2:"Conoce el tipo.",heroSubtitle:"Un conversor rápido con un directorio global de monedas.",currenciesLabel:"monedas",freeLabel:"Gratis",multiLabel:"4 idiomas",converterLabel:"Conversor",convertTitle:"Convertir monedas",liveRates:"Tipos actuales",amount:"Cantidad",converted:"Convertido",trust1:"Simple",trust2:"Rápido",trust3:"Global",trust4:"Móvil",directoryEyebrow:"Directorio global",directoryTitle:"Todas las monedas,<br><em>en un solo lugar.</em>",directoryText:"Busca por país, nombre de moneda o código ISO.",searchPlaceholder:"Buscar moneda, país o código…",thCurrency:"Moneda",thCode:"Código",thName:"Nombre",thCountry:"País / región",how1Title:"Elige tus monedas",how1Text:"Selecciona la moneda de origen y destino.",how2Title:"Introduce una cantidad",how2Text:"Escribe una cantidad y el resultado se actualiza automáticamente.",how3Title:"Usa el resultado",how3Text:"Consulta el tipo y compara monedas.",faqEyebrow:"Información útil",faqTitle:"Preguntas,<br><em>respuestas.</em>",faq1Q:"¿Con qué frecuencia se actualizan los tipos?",faq1A:"Los tipos proceden de los datos de Frankfurter y sus fuentes oficiales.",faq2Q:"¿Currenzy es gratis?",faq2A:"Sí, el conversor y el directorio son gratuitos.",faq3Q:"¿Qué significa el código ISO?",faq3A:"Un código ISO 4217 es un identificador de tres letras, como USD o EUR.",faq4Q:"¿Son estos tipos para trading?",faq4A:"No. Son tipos de referencia para información general.",footerText:"Una forma más sencilla de entender las monedas del mundo.",privacy:"Privacidad",terms:"Términos",footerNote:"Tipos solo con fines informativos."}
};

let lang = localStorage.getItem("currenzy-lang") || "en";
let theme = localStorage.getItem("currenzy-theme") || "light";
let currencies = [];
let countries = [];
let selectedFrom = "USD";
let selectedTo = "EGP";
let currentRate = null;
let tableLimit = 30;

const currencyCountryCodes = {
  "AED": "AE",
  "AFN": "AF",
  "ALL": "AL",
  "AMD": "AM",
  "ANG": "CW",
  "AOA": "AO",
  "ARS": "AR",
  "AUD": "AU",
  "AWG": "AW",
  "AZN": "AZ",
  "BAM": "BA",
  "BBD": "BB",
  "BDT": "BD",
  "BGN": "BG",
  "BHD": "BH",
  "BIF": "BI",
  "BMD": "BM",
  "BND": "BN",
  "BOB": "BO",
  "BRL": "BR",
  "BSD": "BS",
  "BTN": "BT",
  "BWP": "BW",
  "BYN": "BY",
  "BZD": "BZ",
  "CAD": "CA",
  "CDF": "CD",
  "CHF": "CH",
  "CLP": "CL",
  "CNH": "CN",
  "CNY": "CN",
  "COP": "CO",
  "CRC": "CR",
  "CUP": "CU",
  "CVE": "CV",
  "CZK": "CZ",
  "DJF": "DJ",
  "DKK": "DK",
  "DOP": "DO",
  "DZD": "DZ",
  "EGP": "EG",
  "ERN": "ER",
  "ETB": "ET",
  "EUR": "EU",
  "FJD": "FJ",
  "FKP": "FK",
  "GBP": "GB",
  "GEL": "GE",
  "GHS": "GH",
  "GIP": "GI",
  "GMD": "GM",
  "GNF": "GN",
  "GTQ": "GT",
  "GYD": "GY",
  "HKD": "HK",
  "HNL": "HN",
  "HTG": "HT",
  "HUF": "HU",
  "IDR": "ID",
  "ILS": "IL",
  "INR": "IN",
  "IQD": "IQ",
  "IRR": "IR",
  "ISK": "IS",
  "JEP": "JE",
  "JMD": "JM",
  "JOD": "JO",
  "JPY": "JP",
  "KES": "KE",
  "KGS": "KG",
  "KHR": "KH",
  "KMF": "KM",
  "KPW": "KP",
  "KRW": "KR",
  "KWD": "KW",
  "KYD": "KY",
  "KZT": "KZ",
  "LAK": "LA",
  "LBP": "LB",
  "LKR": "LK",
  "LRD": "LR",
  "LSL": "LS",
  "LYD": "LY",
  "MAD": "MA",
  "MDL": "MD",
  "MGA": "MG",
  "MKD": "MK",
  "MMK": "MM",
  "MNT": "MN",
  "MOP": "MO",
  "MRU": "MR",
  "MUR": "MU",
  "MVR": "MV",
  "MWK": "MW",
  "MXN": "MX",
  "MYR": "MY",
  "MZN": "MZ",
  "NAD": "NA",
  "NGN": "NG",
  "NIO": "NI",
  "NOK": "NO",
  "NPR": "NP",
  "NZD": "NZ",
  "OMR": "OM",
  "PAB": "PA",
  "PEN": "PE",
  "PGK": "PG",
  "PHP": "PH",
  "PKR": "PK",
  "PLN": "PL",
  "PYG": "PY",
  "QAR": "QA",
  "RON": "RO",
  "RSD": "RS",
  "RUB": "RU",
  "RWF": "RW",
  "SAR": "SA",
  "SBD": "SB",
  "SCR": "SC",
  "SDG": "SD",
  "SEK": "SE",
  "SGD": "SG",
  "SHP": "SH",
  "SLE": "SL",
  "SOS": "SO",
  "SRD": "SR",
  "SSP": "SS",
  "STN": "ST",
  "SVC": "SV",
  "SYP": "SY",
  "SZL": "SZ",
  "THB": "TH",
  "TJS": "TJ",
  "TMT": "TM",
  "TND": "TN",
  "TOP": "TO",
  "TRY": "TR",
  "TTD": "TT",
  "TWD": "TW",
  "TZS": "TZ",
  "UAH": "UA",
  "UGX": "UG",
  "USD": "US",
  "UYU": "UY",
  "UZS": "UZ",
  "VES": "VE",
  "VND": "VN",
  "VUV": "VU",
  "WST": "WS",
  "XAF": "CM",
  "XAG": "",
  "XAU": "",
  "XCD": "AG",
  "XCG": "CW",
  "XDR": "",
  "XOF": "SN",
  "XPD": "",
  "XPF": "NC",
  "XPT": "",
  "YER": "YE",
  "ZAR": "ZA",
  "ZMW": "ZM",
  "ZWG": "ZW",
  "CMD": "KE"
};

const fallbackCountries = {
  USD:["United States","US"],EUR:["Eurozone","EU"],GBP:["United Kingdom","GB"],EGP:["Egypt","EG"],
  JPY:["Japan","JP"],CNY:["China","CN"],CAD:["Canada","CA"],AUD:["Australia","AU"],CHF:["Switzerland","CH"],
  INR:["India","IN"],AED:["United Arab Emirates","AE"],SAR:["Saudi Arabia","SA"],TRY:["Türkiye","TR"],
  BRL:["Brazil","BR"],ZAR:["South Africa","ZA"],MXN:["Mexico","MX"],SGD:["Singapore","SG"],HKD:["Hong Kong","HK"],
  NOK:["Norway","NO"],SEK:["Sweden","SE"],DKK:["Denmark","DK"],PLN:["Poland","PL"],NZD:["New Zealand","NZ"],
  THB:["Thailand","TH"],KRW:["South Korea","KR"],IDR:["Indonesia","ID"],MYR:["Malaysia","MY"],PHP:["Philippines","PH"],
  PKR:["Pakistan","PK"],BDT:["Bangladesh","BD"],VND:["Vietnam","VN"],NGN:["Nigeria","NG"],KES:["Kenya","KE"],
  MAD:["Morocco","MA"],TND:["Tunisia","TN"],DZD:["Algeria","DZ"],QAR:["Qatar","QA"],KWD:["Kuwait","KW"],
  BHD:["Bahrain","BH"],OMR:["Oman","OM"],JOD:["Jordan","JO"],ILS:["Israel","IL"],CZK:["Czechia","CZ"],
  HUF:["Hungary","HU"],RON:["Romania","RO"],BGN:["Bulgaria","BG"],ISK:["Iceland","IS"],ARS:["Argentina","AR"],
  CLP:["Chile","CL"],COP:["Colombia","CO"],PEN:["Peru","PE"],UYU:["Uruguay","UY"],RUB:["Russia","RU"],
  UAH:["Ukraine","UA"],GEL:["Georgia","GE"],KZT:["Kazakhstan","KZ"],LKR:["Sri Lanka","LK"],NPR:["Nepal","NP"],
  ETB:["Ethiopia","ET"],GHS:["Ghana","GH"],TZS:["Tanzania","TZ"],UGX:["Uganda","UG"]
};

function countryCode(code){
  return (currencyCountryCodes[code] || fallbackCountries[code]?.[1] || "").toUpperCase();
}

function flag(code){
  const cc = countryCode(code).toLowerCase();

  return cc && cc.length === 2
    ? `<img class="flag-img" src="https://flagcdn.com/w40/${cc}.png" alt="">`
    : `<span class="flag-placeholder">🌐</span>`;
}

function countryName(code){
  const cc = countryCode(code);

  if (!cc) {
    return lang === "ar" ? "دولي / بدون دولة" : lang === "fr" ? "International / sans pays" : lang === "es" ? "Internacional / sin país" : "International / no country";
  }

  try {
    const locale = lang === "ar" ? "ar" : lang === "fr" ? "fr" : lang === "es" ? "es" : "en";
    const displayNames = new Intl.DisplayNames([locale], { type: "region" });
    return displayNames.of(cc) || fallbackCountries[code]?.[0] || "—";
  } catch(e) {
    return fallbackCountries[code]?.[0] || "—";
  }
}

function currencyName(code, fallback){
  try {
    const locale = lang === "ar" ? "ar" : lang === "fr" ? "fr" : lang === "es" ? "es" : "en";
    const displayNames = new Intl.DisplayNames([locale], { type: "currency" });
    return displayNames.of(code) || fallback || code;
  } catch(e) {
    return fallback || code;
  }
}

function applyLanguage(){
  const t=translations[lang]||translations.en;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.body.classList.toggle("rtl",lang==="ar");
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(t[k])el.innerHTML=t[k]});
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{const k=el.dataset.i18nPlaceholder;if(t[k])el.placeholder=t[k]});
  $("#languageSelect").value=lang;
  localStorage.setItem("currenzy-lang",lang);
}
function applyTheme(){
  document.body.classList.toggle("dark",theme==="dark");
  $("#themeToggle").textContent=theme==="dark"?"☾":"☼";
  localStorage.setItem("currenzy-theme",theme);
}
function currencyMeta(code){
  const c=currencies.find(x=>x.iso_code===code);
  return c || {iso_code:code,name:code};
}
function renderCurrencyMenu(menuId, triggerId, selected){
  const menu=$(menuId);
  if(!menu) return;
  menu.innerHTML="";
  const list=currencies.length?currencies:[{iso_code:"USD",name:"US Dollar"},{iso_code:"EUR",name:"Euro"},{iso_code:"EGP",name:"Egyptian Pound"}];
  list.forEach(c=>{
    const b=document.createElement("button");
    b.className="currency-option";
    b.type="button";
    b.setAttribute("role","option");
    b.setAttribute("data-currency",c.iso_code);
    b.innerHTML=`<span class="flag">${flag(c.iso_code)}</span><strong>${c.iso_code}</strong><span>${escapeHtml(currencyName(c.iso_code,c.name))}</span>`;
    b.addEventListener("click",(e)=>{
      e.preventDefault();
      e.stopPropagation();
      if(triggerId==="fromTrigger") selectedFrom=c.iso_code;
      else selectedTo=c.iso_code;
      closeMenus();
      updateTrigger(triggerId);
      convert();
    });
    menu.appendChild(b);
  });
}
function updateTrigger(triggerId){
  const code = triggerId === "fromTrigger" ? selectedFrom : selectedTo;
  const trigger = $("#" + triggerId);
  if(!trigger) return;

  const flagEl = trigger.querySelector(".flag");
  const codeEl = trigger.querySelector(".currency-code");

  if(flagEl) flagEl.innerHTML = flag(code);
  if(codeEl) codeEl.textContent = code;
}
function closeMenus(){
  document.querySelectorAll(".currency-menu").forEach(m=>m.classList.remove("open"));
  document.querySelectorAll(".currency-trigger").forEach(b=>b.setAttribute("aria-expanded","false"));
}
function toggleMenu(trigger,menu){
  const is=menu.classList.contains("open"); closeMenus();
  if(!is){menu.classList.add("open");trigger.setAttribute("aria-expanded","true")}
}
async function convert(){
  const raw=$("#amount").value.replace(/,/g,"").trim();
  const amount=Number(raw);
  $("#converterError").textContent="";
  if(!Number.isFinite(amount)||amount<0){$("#result").textContent="—";return}
  if(selectedFrom===selectedTo){
    currentRate=1; showResult(amount,1,new Date().toISOString().slice(0,10)); return;
  }
  $("#result").textContent="…";
  try{
    const res=await fetch(`${API}/rate/${selectedFrom.toLowerCase()}/${selectedTo.toLowerCase()}`);
    if(!res.ok) throw new Error("Rate unavailable");
    const data=await res.json(); currentRate=data.rate; showResult(amount,data.rate,data.date);
  }catch(e){
    $("#result").textContent="—"; $("#converterError").textContent="Could not load the exchange rate. Please try again.";
  }
}
function showResult(amount,rate,date){
  const out=amount*rate;
  const digits=out>=1000?2:Math.min(6,Math.max(2,selectedTo==="JPY"?0:4));
  $("#result").textContent=new Intl.NumberFormat(lang==="ar"?"ar-EG":"en-US",{maximumFractionDigits:digits}).format(out);
  $("#rateText").textContent=`1 ${selectedFrom} = ${formatRate(rate)} ${selectedTo}`;
  $("#updatedText").textContent=date?`Rate date: ${date}`:"";
}
function formatRate(n){return new Intl.NumberFormat(lang==="ar"?"ar-EG":"en-US",{maximumFractionDigits:6}).format(n)}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function renderTable(){
  const q=$("#currencySearch").value.toLowerCase().trim();
  const rows=currencies.filter(c=>`${c.iso_code} ${currencyName(c.iso_code,c.name)} ${c.name} ${countryName(c.iso_code)}`.toLowerCase().includes(q));
  const shown=rows.slice(0,tableLimit);
  $("#currencyBody").innerHTML=shown.map(c=>`<tr>
    <td><div class="currency-cell"><span class="flag">${flag(c.iso_code)}</span><span>${escapeHtml(c.iso_code)}</span></div></td>
    <td><span class="code-badge">${c.iso_code}</span></td>
    <td>${escapeHtml(currencyName(c.iso_code,c.name))}</td>
    <td class="muted-cell">${escapeHtml(countryName(c.iso_code))}</td>
  </tr>`).join("");
  const resultWord = lang === "ar" ? "نتيجة" : lang === "fr" ? "résultats" : lang === "es" ? "resultados" : "results";
  $("#resultCount").textContent=`${rows.length} ${resultWord}`;
  const shownText = lang === "ar" ? `${Math.min(shown.length,rows.length)} من ${rows.length} معروضة` : lang === "fr" ? `${Math.min(shown.length,rows.length)} sur ${rows.length} affichés` : lang === "es" ? `${Math.min(shown.length,rows.length)} de ${rows.length} mostrados` : `${Math.min(shown.length,rows.length)} of ${rows.length} shown`;
  const noMatch = lang === "ar" ? "لا توجد عملات مطابقة" : lang === "fr" ? "Aucune devise correspondante" : lang === "es" ? "No hay monedas coincidentes" : "No matching currencies";
  $("#tableStatus").textContent=rows.length?shownText:noMatch;
  $("#loadMore").style.display=shown.length<rows.length?"block":"none";
}
async function loadData(){
  try{
    const res = await fetch(`${API}/currencies`);
    if(!res.ok) throw new Error("Currencies unavailable");
    const cr = await res.json();
    currencies = cr.sort((a,b)=>a.iso_code.localeCompare(b.iso_code));
  }catch(e){
    console.error("Currency data error:", e);
    currencies = Object.entries(fallbackCountries).map(([iso,[name]])=>({iso_code:iso,name}));
  }

  renderCurrencyMenu("#fromMenu","fromTrigger",selectedFrom);
  renderCurrencyMenu("#toMenu","toTrigger",selectedTo);
  updateTrigger("fromTrigger");
  updateTrigger("toTrigger");
  renderTable();
  convert();
}
$("#amount").addEventListener("input",convert);
$("#fromTrigger").onclick=()=>toggleMenu($("#fromTrigger"),$("#fromMenu"));
$("#toTrigger").onclick=()=>toggleMenu($("#toTrigger"),$("#toMenu"));
$("#swapBtn").onclick=()=>{
  [selectedFrom, selectedTo] = [selectedTo, selectedFrom];
  updateTrigger("fromTrigger");
  updateTrigger("toTrigger");
  convert();
};
$("#currencySearch").addEventListener("input",()=>{tableLimit=30;renderTable()});
$("#loadMore").onclick=()=>{tableLimit+=30;renderTable()};
$("#themeToggle").onclick=()=>{theme=theme==="dark"?"light":"dark";applyTheme()};
$("#languageSelect").onchange=(e)=>{lang=e.target.value;applyLanguage();renderCurrencyMenu("#fromMenu","#fromTrigger",selectedFrom);renderCurrencyMenu("#toMenu","#toTrigger",selectedTo);updateTrigger("fromTrigger");updateTrigger("toTrigger");renderTable();convert()};
document.addEventListener("click",(e)=>{if(!e.target.closest(".money-field"))closeMenus()});
document.addEventListener("keydown",(e)=>{if(e.key==="/" && document.activeElement.tagName!=="INPUT"){e.preventDefault();$("#currencySearch").focus()}});
applyLanguage();applyTheme();loadData();
