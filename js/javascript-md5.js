function doAdminLogin(form) {
  var pw = form.password.value;
  var i = pw.indexOf(";");
  var unHidden  = form.username.type == "hidden";
  if ( !unHidden ) {
    if (form.ldappassword != null) {
      form.ldappassword.value = pw;
    }
  } else {
    // Handle legacy single input version
    form.username.value = pw.substring(0, i);
    pw = pw.substring(i + 1);
    if (form.ldappassword != null) {
      form.ldappassword.value = pw;
    }
  }
  return true;
}


function doTeacherLogin(form) {
	var pw = form.password.value;
	if (form.ldappassword!=null) {
		form.ldappassword.value = pw;
	}
	
   // Translator Login
   var translatorpw = form.translatorpw.value;
   var i = translatorpw.indexOf(";");
	if (i < 0) {
		form.translator_username.value = translatorpw;
		form.translator_password.value = "";
	}
	else {
		form.translator_username.value = translatorpw.substring(0,i);
		translatorpw = translatorpw.substring(i+1);
		form.translator_password.value = translatorpw;
		if (form.translator_ldappassword!=null) {
			form.translator_ldappassword.value = translatorpw;
		}
	}
	
	return true;
}

function doPCASLogin(form)
{
   var originalpw = form.pw.value;
   form.dbpw.value = originalpw;
   if (form.ldappassword!=null) {
     form.ldappassword.value = originalpw;
   }
   
   // Translator Login
   var translatorpw = form.translatorpw.value;
   var i = translatorpw.indexOf(";");
	if (i < 0) {
		form.translator_username.value = translatorpw;
		form.translator_password.value = "";
	}
	else {
		form.translator_username.value = translatorpw.substring(0,i);
		translatorpw = translatorpw.substring(i+1); // Get the password
		form.translator_password.value = translatorpw;
		if (form.translator_ldappassword!=null) {
			form.translator_ldappassword.value = translatorpw;
		}
	}
	
	return true;
}


function encryptMultipleStudentsAccesPasswords(form)
{
   return true;
}



function encryptSingleStudentAccesPassword(form)
{
   return true;
}

function encryptGuardianPassword(form) {
        return true;
}




function encryptGuardianPasswords(form, origPasswordId, newPasswordId, newConfirmPasswordId) {
    return true;    

}

function encryptRecoverPasswords(form, newPasswordId, newConfirmPasswordId) 
{
	return true;
}


function doChangePassword(form)
{
   return true;
}

function getCookie(name) {
  var dc = document.cookie;
  //alert("cookie=" + dc);
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } 
  else begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1) end = dc.length;
  var retval = unescape(dc.substring(begin + prefix.length, end));
  //alert("retval=" + retval);
  return retval;
}

function deleteCookie(name) {
  if (getCookie(name)) {
    document.cookie = "psaid=<-A-><-E->; expires=Thu, 01-Jan-70 00:00:00 GMT";
    //alert("deleted cookie=" + document.cookie);
  }
}

function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g, "");
}
