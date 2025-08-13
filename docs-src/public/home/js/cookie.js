/* Cookie Notice */
// Get Cookie //
function getCookie(name) {
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin != 0) return null;
	}
	else {
		begin += 2;
		var end = document.cookie.indexOf(";", begin);
		if (end == -1) {
			end = dc.length;
		}
	}
	return decodeURI(dc.substring(begin + prefix.length, end));
}
// End Get Cookie //
// Query Cookie //
function queryCookie() {
	var consentCookie = getCookie("LOWGROUP");

	if (consentCookie == null) {
		$("#cookie-notice").show();
	}
	else {
		$("#cookie-notice").hide();
    
        // Allow Scripts (On Accept)
          function cookieAllowedScripts() {
              // Load scripts after accepting
              // N/A
          }
      // End Allow Scripts (On Accept)
      	cookieAllowedScripts();
	}
}

queryCookie();
// End Query Cookie //
// Set Cookie //
// RESET ONLY - document.cookie = "HYPERDREAMS=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
function setCookie() {
	var cookieDate = new Date();
	cookieDate.setDate(cookieDate.getDate() + 14);
	document.cookie = 'LOWGROUP=Accepted;expires=' + cookieDate.toUTCString() + ';path=/';
}
// End Set Cookie //
// Cookie Notice //
$(".cookies__inner-right").click(function () {
	$("#cookie-notice").css({ "pointer-events": "none" });
	setCookie();
	$("#cookie-notice").fadeOut();
  
    // Allow Scripts (On Accept)
    function cookieAllowedScripts() {
        // Load scripts after accepting
        // N/A
    }
    var consentCookie = getCookie("LOWGROUP");
    if (consentCookie !== null) {
      cookieAllowedScripts();
    }
    // End Allow Scripts (On Accept)
  
});
// End Cookie Notice //
// Cookie Fade In
setTimeout(function() {
  anime({
      targets: '#cookie-notice',
      opacity: 1,
      duration: 1500
  });
}, 1250);
// End Cookie Fade In
// Allow Scripts (On Load)
var consentCookie = getCookie("LOWGROUP");
if (consentCookie !== null) {
  
  // Allow Scripts (On Accept)
    function cookieAllowedScripts() {
        // Load scripts after accepting
        // N/A
     }
  // End Allow Scripts (On Accept)
  cookieAllowedScripts();
}
// End Allow Scripts (On Load)