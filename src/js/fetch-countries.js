/**==============================================================
 * Country Dropdown Auto-Population Script
 *===============================================================
 * 
 * This script populates a select dropdown with all countries
 * using ISO 3166-1 alpha-2 codes and their display names.
 * 
 * - Generates country names from ISO codes
 * - Clears default options except placeholder
 * - Sorts country names alphabetically
 * - Appends each country as an option in the dropdown
 * 
 * This provides accurate, localized country listing without external APIs.
 *===============================================================
 */

document.addEventListener("DOMContentLoaded", function () {
  const countrySelect = document.getElementById("country");

  // Save and clear the placeholder
  const placeholder = countrySelect.querySelector("option[disabled]");
  countrySelect.innerHTML = "";
  countrySelect.appendChild(placeholder);

  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

  // Full ISO 3166-1 alpha-2 country code list
  const countryCodes = [
    "AF","AX","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ",
    "BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BQ","BA","BW","BV","BR",
    "IO","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC",
    "CO","KM","CG","CD","CK","CR","CI","HR","CU","CW","CY","CZ","DK","DJ","DM","DO",
    "EC","EG","SV","GQ","ER","EE","SZ","ET","FK","FO","FJ","FI","FR","GF","PF","TF",
    "GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY",
    "HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM",
    "JP","JE","JO","KZ","KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY",
    "LI","LT","LU","MO","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX",
    "FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","NC","NZ","NI",
    "NE","NG","NU","NF","MK","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH",
    "PN","PL","PT","PR","QA","RE","RO","RU","RW","BL","SH","KN","LC","MF","PM","VC",
    "WS","SM","ST","SA","SN","RS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","GS",
    "SS","ES","LK","SD","SR","SJ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK",
    "TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","UY","UZ","VU",
    "VE","VN","VG","VI","WF","EH","YE","ZM","ZW"
  ];

  const countries = countryCodes.map(code => ({
    code,
    name: regionNames.of(code)
  }));

  countries.sort((a, b) => a.name.localeCompare(b.name));

  countries.forEach(({ name }) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    countrySelect.appendChild(option);
  });
});
