WebFont.load({
    google: {
        families: ["Caudex:regular,italic,700,700italic:greek,greek-ext,latin,latin-ext", "Inter:regular,500,600,700,800,900"]
    }
});
!function(o, c) {
    var n = c.documentElement
      , t = " w-mod-";
    n.className += t + "js",
    ("ontouchstart"in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);
window.__WEBFLOW_CURRENCY_SETTINGS = {
    "currencyCode": "USD",
    "symbol": "$",
    "decimal": ".",
    "fractionDigits": 2,
    "group": ",",
    "template": "{{wf {\"path\":\"symbol\",\"type\":\"PlainText\"} }} {{wf {\"path\":\"amount\",\"type\":\"CommercePrice\"} }} {{wf {\"path\":\"currencyCode\",\"type\":\"PlainText\"} }}",
    "hideDecimalForWholeNumbers": false
};