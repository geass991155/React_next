export default function isIE() {
  const explorer = window.navigator.userAgent;
  const hasMSIE = explorer.indexOf("MSIE") !== -1;
  const ie11 = "ActiveXObject" in window || document.documentMode;
  const hasTrident = window.navigator.appVersion.indexOf("Trident/") > 0;

  return hasMSIE || ie11 || hasTrident;
}
