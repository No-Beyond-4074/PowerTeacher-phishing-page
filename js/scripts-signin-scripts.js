var $j = jQuery.noConflict(),
    pskey = $j('#contextData').val();
function deleteCookie(cookieName){
	var cookieDate = new Date();
	cookieDate.setTime(cookieDate.getTime()-1);
	document.cookie = cookieName + "=; expires='" + cookieDate.toGMTString()+"'; path=/";
}
deleteCookie("InformAuthToken");

   $j('.tabs').tabs();

function getURLParameter(name) {
    return unescape(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

function translatorRole () {    // Hide or show the translator login input field
    // if the URL parameter "translator" is present
	var translator = getURLParameter("translator");
	if (translator == "null") {
		$j('#translatorInput').hide();
	} else {
	    if (translator == "true") {
			$j('#translatorInput').show();
		} else {
			$j('#translatorInput').hide();
		}
	}
	$j('a.popWin').click(function(){
		var winURL = $j(this).attr('href');
		window.open(winURL);
		return false;
	});
};

/**
 * Set the page's locale via a request_locale URL parameter. If there is already a URL parameter by
 * this name, then substitute it with the passed-in locale. NOTE: This function will actually cause the page
 * to be re-submitted with the new locale, so it really should not be used with pages submitted via POST
 * requests (if there are any, which I hope there are not).
 * @param locale string the locale to set (e.g. en_US)
 */
function setPageLocale (locale) {
  var c=String (window.location);
  var rlpos = c.indexOf("request_locale=");
  var afterPart = "";
  if (rlpos > 0) {
    var afterBegin = c.indexOf("&", rlpos);
    if (afterBegin > 0) {
      afterPart = c.substring(afterBegin);
    }
    c = c.substring(0, rlpos-1);
  }
  var s=(c.indexOf('?') > 0 ? '&' : '?');
  var np = c + s + 'request_locale=' + locale + afterPart;
  window.location = np;
}

function jsEnabled() {
	if(typeof $j !== 'function'){
		alert('Developer: This page is missing key components required for functionality!\n\nPossible causes include:\n - Commonscripts might be missing.\n - Page customization might enabled, and incomplete.');
		} else {
			$j('#noscript').hide();
			$j('#login-inputs').removeClass('hide');
			$j("#fieldAccount").focus();
		}
}
function psModernizer(feature) {
    var testBox = $j('<div/>', {id: 'testBox'}),
        testParam = '',
        testVal = '',
        expectedVal = '',
        testStatus = true;
    testBox.appendTo('body');
    switch (feature) {
        case 'calc':
            testParam = 'width';
            testVal = 'calc(100px - 50px)';
            expectedVal = '50px';
            feature = 'no' + feature;
            testBox.css(testParam, testVal);
            if (testBox.css(testParam) != expectedVal) {
                testStatus = false;
            }
            break;
        case 'frames':
            if ( $j('#frameSet, #container-frame', top.document).length ) {
                $j('body').closest('html').addClass(feature);
            }
            break;
        /* end frame check */
    }

    if ( !testStatus ){
        $j('html').addClass(feature);
    }
    testBox.remove();
}

$j(document).ready(function(){
	translatorRole();
	jsEnabled();
    psModernizer('calc');
    psModernizer('frames');
});

