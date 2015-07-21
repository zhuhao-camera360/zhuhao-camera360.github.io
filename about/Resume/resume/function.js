function CompanyList(){
     if(document.searchlist){
        document.searchlist.publishdate.disabled =true;
        //document.searchlist.citycode.disabled =true;
        document.searchlist.is_vac.checked = false;
        document.searchlist.keyword.value = '输入公司关键字';
	 }
}
function KeywordList(){
     if(document.searchlist){
        document.searchlist.publishdate.disabled =false;
        //document.searchlist.citycode.disabled =false;
        document.searchlist.is_company.checked = false;
        document.searchlist.keyword.value = '输入职位关键字';
	 }
}


function logonType(formObj){
	if(formObj != null){
    for(var i=0;i<formobj.logonradio.length;i++){ 0="" if="" (formobj.logonradio[i].checked="=" true="" )="" {="" return="" formobj.logonradio[i].value;="" }="" function="" citychannelsearchsubmit(formobj){="" if(parseint(formobj.jobfamily.value)="=" &&="" parseint(formobj.industry.value)="=" formobj.keyword1.value.length="" <="" 1){="" alert("??ê?è?1??ü×??ò?????°??ààdí￡?");="" formobj.jobfamily.focus();="" false;="" checkkeyword(formobj.keyword1,="" 0);="" firstpagelogon(formobj){="" if(formobj="" !="null){" for(var="" i="0;i<formObj.logonradio.length;i++){" if(formobj.logonradio[i].value="=" "myzhaopin"){="" if(loginform_onsubmit(formobj)){="" formobj.action="mz_logon.jsp" ;="" true;="" }else="" aftertopuserlogin(){="" self.opener.document.loginimg.width="82" self.opener.document.loginimg.src="images/user-logout.gif" self.opener.loghref.href="index.jsp?logout=true" self.opener.loghref.onclick="" history.go(0);="" sendvacancytofriend(pageurl){="" email="window.prompt("请输入您朋友的Email地址"," "");="" (email="=" null="" ||="" ""="" email.indexof(".")="" email.length="" <7="" email.indexof("@")="" calcstringlength(email)="">80) {
		alert ("电子邮件地址输入有误！");
		return false;
  }
	window.location.href = pageurl+"&emailTo="+email;
}

function checkKeyword(keyWord, ifnull){
  if ((keyWord.value.length == 0 || keyWord.value.indexOf('??ê?è?1??ü×?') > -1)&& ifnull == 1){
	  alert("输入关键字不能为空！");
	  keyWord.focus();
	  return false;
	} else if (keyWord.value.length >60){
	  alert("输入关键字超长！");
	  keyWord.focus();
	  return false;
	} else if (keyWord.value.indexOf("%") > -1 || keyWord.value.indexOf("?") > -1){
	  alert("关键字包含非法字符！");
	  keyWord.focus();
	  return false;
	}
}


function psSearchAdvSubmit(formObj, ifpsa){
	if(ifpsa == 1){
		if(formObj.name.value.length < 1){
	  	alert("搜索器名称不能为空！");
  		formObj.name.focus();
  		return false;
		}
		if(formObj.name.value.length > 100){
	  	alert("搜索器名称超长！");
  		formObj.name.focus();
  		return false;
		}
	}
	
	if(formObj.seljobfamily.options.length < 1){
  	alert("职业类型不能为空！");
  	formObj.jobfamily.focus();
  	return false;
	}
	
	if(formObj.selindustry.options.length < 1){
  	alert("行业类型不能为空！");
  	formObj.industry.focus();
  	return false;
	}

	if(formObj.sellocation.options.length < 1){
  	alert("工作地区不能为空！");
  	formObj.location.focus();
  	return false;
	}

	jobfamlyall = false;
  jobfamly_length=formObj.seljobfamily.options.length;
  for (i = 0;i<jobfamly_length 0="" ;="" i++)="" {="" if="" (formobj.seljobfamily.options[i].value="=" "0")="" jobfamlyall="true;" }="" industryall="false;" industry_length="formObj.selindustry.options.length;" for="" (i="0;i<industry_length" (formobj.selindustry.options[i].value="=" if(jobfamlyall="" &&="" formobj.keyword.value.length="" <="" 1){="" alert("如果不输入关键字，职业类型和行业类型不能都为所有！");="" formobj.jobfamily.focus();="" return="" false;="" selectall(formobj);="" keywordobj="formObj.keyword;" if(ifpsa="=" 1)="" checkkeyword(keywordobj,="" 0);="" function="" pssearchsubmit(formobj){="" if(parseint(formobj.jobfamily.value)="=" parseint(formobj.industry.value)="=" formobj.keyword1.value.length="" checkkeyword(formobj.keyword1,="" pscompanysearchsubmit(formobj){="" if(parseint(formobj.citycode.value)="=" alert("如果不输入关键字，行业类型和工作地点不能都为所有！");="" formobj.keyword.focus();="" checkkeyword(formobj.keyword,="" popupalert(url)="" history.back();="" popup="window.open(url,"","menubar=no,scrollbars=no,resizable=yes,titlebar=no,toolbar=no,directories=no,width=335,height=80,top=200,left=250");" popup.focus();="" true;="" popuppasswordalert()="" inserttargetcompany(formobj){="" hasselected="false;" companyid_length="formObj.companyid.length;" if(companyid_length=""> 1){
	  for (i = 0;i<companyid_length ;="" i++)="" {="" if="" (formobj.companyid[i].checked)="" hasselected="true;" }="" }else{="" (formobj.companyid.checked)="" if(!hasselected){="" alert("请您先选择公司！");="" formobj.actiontag.value="" return="" false;="" formobj.submit();="" function="" insertforbidcompany(formobj){="" companyid_length="formObj.companyid.length;" if(companyid_length=""> 1){
	  for (i = 0;i<companyid_length ;="" i++)="" {="" if="" (formobj.companyid[i].checked)="" hasselected="true;" }="" }else{="" (formobj.companyid.checked)="" if(!hasselected){="" alert("请您先选择公司！");="" formobj.actiontag.value="" return="" false;="" formobj.submit();="" function="" checktargetcondition(formobj){="" industryall="false;" industry_length="formObj.industry.options.length;" for="" (i="0;i<industry_length" (formobj.industry.options[i].selected="=" true="" &&="" formobj.industry.options[i].value="=" "0")="" if(industryall="" formobj.keyword.value.length="=" 0){="" alert("行业类型为所有的时候关键字不能为空！");="" formobj.keyword.focus();="" checkkeyword(formobj.keyword,="" 0);="" popupfullwindow(urltextpre,checkboxobj)="" var="" urltext="urltextpre" +="" '?';="" for(var="" i="0;i<checkboxObj.length;i++){" (checkboxobj[i].checked="=" )="" 'vacancyid="+ checkboxObj[i].value + " &';="" popup="window.open(urltext,"","");" popup.focus();="" true;="" popup1(url)="" popup(url)="" gt="unescape('%3e');" over="Launch Pop-up Navigator" (popup="" !="null)" (popup.opener="=" null)="" popup.opener="self;" popup.location.href="url;" mz_admin.jsp="" deletenotapplycheck(formobj)="" actiontagobj="formObj.actionTag;" actiontagobj.value="DeleteNotApply" checkboxobj="formObj.vacancyid;" (ischeckboxchecked(checkboxobj))="" applyvacancycheck(formobj,type)="" (notapply_onsubmit(formobj,type)="" ischeckboxchecked(checkboxobj))="" notapply_onsubmit(formobj,type){="" (type="=0){" alert("您还没有简历！");="" (formobj.engcv.value="="-1"" ){="" alert("请选择简历！");="" (formobj.chncv.value="="-1"" ((formobj.chncv.value="="-1"" )&&(formobj.engcv.value="="-1"" )){="" deleteapplycheck(formobj)="" setloginandsubmit(formobj,type)="" '1')="" isloginobj="formObj.isLogin;" bottonobj="formObj.LoginSubmit;" isloginobj.value="Y" bottonobj.value="提交到申请管理" self.close();="" else="" '2')="" self.opener.document.forms[i].isloginobj="Y" self.opener.document.forms[i].botton1obj=" 申请职位 " self.opener.document.forms[i].botton2obj="职位信息收藏" '3')="" popuporsubmit(formobj,type)="" (isloginobj.value="=" "y")="" "n")="" popup1('x_window_userlogon.jsp?type="+type+" &formname="+formObj.name);
        }
    }
    else if (type == " 2')="" 3')="" y';="" pagenoobj.value="PageNo;" insertitem(objid,="" location)="" len="document.powersearch.elements[ObjID].length;" (counter="len;" counter="">Location; counter--)
  {
    Value = document.powersearch.elements[ObjID].options[counter-1].value;
    Text2Insert  = document.powersearch.elements[ObjID].options[counter-1].text;
    document.powersearch.elements[ObjID].options[counter] = new Option(Text2Insert, Value);
  }
}

function GetLocation(ObjID, Value)
{
  total=document.powersearch.elements[ObjID].length;
  for (pp=0; pp<total; pp++)="" if="" (document.powersearch.elements[objid].options[pp].text="=" "---"+value+"---")="" {="" return="" (pp);="" break;="" }="" (-1);="" function="" getobjid(objname)="" for="" (var="" objid="0;" <="" window.powersearch.elements.length;="" objid++)="" (="" window.powersearch.elements[objid].name="=" objname="" )="" return(objid);="" return(-1);="" tosubmit()="" (checkok)="" selecttotal('jobarea[]');="" selecttotal('industrytype[]');="" selecttotal('funtype[]');="" selecttotal(objname)="" (objid="" !="-1)" (i="0;" i<document.powersearch.elements[objid].length;="" i++)="" document.powersearch.elements[objid].options[i].selected="true;" additem(objname,="" desname,="" catname,="" num)="" get="" object="" id="" and="" destination="" desobjid="GetObjID(DesName);" window.alert(document.powersearch.elements[desobjid].length);="" k="0;" i="document.powersearch.elements[ObjID].options.length;" return;="" maxselected="0" (h="0;" h<i;="" h++)="" (document.powersearch.elements[objid].options[h].selected="" (maxselected="">=i)
     maxselected=0;
  if ( document.powersearch.elements[DesObjID].length + k >Num ) {
    window.alert("最多可选择 "+Num+" 条");
    return;
    }

  if (CatName != "")
    CatObjID = GetObjID(CatName);
  else
    CatObjID = 0;
  if ( ObjID != -1 && DesObjID != -1 && CatObjID != -1 )
  { jj = document.powersearch.elements[CatObjID].selectedIndex;
    if ( CatName != "")
    { CatValue = document.powersearch.elements[CatObjID].options[jj].text;
      CatCode  = document.powersearch.elements[CatObjID].options[jj].value;
    }
    else
      CatValue = "";
    i = document.powersearch.elements[ObjID].options.length;
    j = document.powersearch.elements[DesObjID].options.length;
    for (h=0; h<i; h++)="" {="" if="" (document.powersearch.elements[objid].options[h].selected="" )="" code="document.powersearch.elements[ObjID].options[h].value;" text="document.powersearch.elements[ObjID].options[h].text;" if(num="=3)" if(text.charat(0)="=Text.charAt(1))" }="" j="document.powersearch.elements[DesObjID].options.length;" (text.indexof('--')!="-1)" for="" (k="j-1;" k="">=0; k-- ) {
              document.powersearch.elements[DesObjID].options[k]=null;
            }
            j=0;
         }
         if (Text.substring(0,1)=='-' && Text.substring(1,2)!='-') {
            for (k=j-1; k>=0; k-- ) {
              if (((document.powersearch.elements[DesObjID].options[k].value).substring(0,2))==(Code.substring(0,2)))
                 document.powersearch.elements[DesObjID].options[k]=null;
            }
            j= document.powersearch.elements[DesObjID].options.length;
         }
         HasSelected = false;
         for (k=0; k<j; k++="" )="" {="" if="" ((document.powersearch.elements[desobjid].options[k].text).indexof('--')!="-1){" hasselected="true;" window.alert('已经包括本选项：'+text);="" break;="" }else="" ((document.powersearch.elements[desobjid].options[k].text).indexof('-')!="-1" &&="" ((document.powersearch.elements[desobjid].options[k].value).substring(0,2)="=Code.substring(0,2))){" }="" (document.powersearch.elements[desobjid].options[k].value="=" code)="" (="" false)="" (catvalue="" !="" location="GetLocation(DesObjID," catvalue);="" -1="" document.powersearch.elements[desobjid].options[j]="new" option("---"+catvalue+"---",catcode);="" document.powersearch.elements[desobjid].options[j+1]="new" option(text,="" code);="" else="" insertitem(desobjid,="" location+1);="" document.powersearch.elements[desobjid].options[location+1]="new" document.powersearch.elements[objid].options[h].selected="false;" for="" document.powersearch.elements[objid].options[maxselected].selected="true;" end="" of="" function="" deleteitem(objname)="" objid="GetObjID(ObjName);" minselected="0;" (i="window.powersearch.elements[ObjID].length-1;" i="">=0; i--)
    {  if (window.powersearch.elements[ObjID].options[i].selected)
       { // window.alert(i);
          if (minselected==0 || i<minselected) minselected="i;" window.powersearch.elements[objid].options[i]="null;" }="" i="window.powersearch.elements[ObjID].length;" if="" (i="">0)  {
        if (minselected>=i)
           minselected=i-1;
        window.powersearch.elements[ObjID].options[minselected].selected=true;
        }
  }
}

//对日期的合法性进行判断

function checkDate(year,month,day){
       	if (!isDigital(year)){
        		return false;
        	}
		if(year>2000 || year<1930){ return="" false;="" }="" if(month="">12 || month<1){ return="" false;="" }="" if(day="">31 || day<1){ 4="" return="" false;="" }="" if="" (month="=" ||month="=" 6||month="=" 9||month="=" 11){="" if(day="=" 31)="" {="" if(year%4="=" 0){="" 2){="">= 30)
				{
					return false;
				}
			}
		}
		else{
			if (month == 2){
				if(day >=29)
				{
					return false;
				}
			}
		}
		return true;
}

function isDigital(instance){
		if (calcStringLength(instance) > instance.length)
			return  false;

		var NUM = "0123456789-";
		for(i=0; i < instance.length; i++)
		{
			if (NUM.indexOf(instance.substr(i,1)) <0) 5="" return="" false;="" }="" true;="" function="" powersearch_onsubmit(){="" if="" (document.powersearch.name.value.length="" <1){="" alert("未输入搜索器名称！");="" powersearch.name.focus();="" jobfamly_length="document.powersearch.jobfamily.options.length;" (jobfamly_length<1)="" {="" alert("请选择职业类型！");="" powersearch.jobfamilya.focus();="" industry_length="document.powersearch.industry.options.length;" (industry_length<1)="" alert("请选择行业类型！");="" powersearch.industrya.focus();="" location_length="document.powersearch.location.options.length;" (location_length<1)="" alert("请选择工作地点！");="" powersearch.citycodea.focus();="" selectall();="" selectall()="" for="" (i="0;i<jobfamly_length" ;="" i++)="" (document.powersearch.jobfamily.options[i].text="" !="" )="" document.powersearch.jobfamily.options[i].selected="true;" (document.powersearch.industry.options[i].text="" document.powersearch.industry.options[i].selected="true;" (document.powersearch.location.options[i].text="" document.powersearch.location.options[i].selected="true;" usrsimplereg_onsubmit(){="" (document.usrform1.username.value.length="" <="" 1){="" alert("未输入您的用户名！");="" usrform1.username.focus();="" (document.usrform1.password.value.length="" alert("未输入您的密码！");="" usrform1.password.focus();="" (document.usrform1.password1.value.length="" alert("未输入您的密码确认！");="" usrform1.password1.focus();="" (document.usrform1.promptquestion.value.length="" alert("未输入您的密码提示问题！");="" usrform1.promptquestion.focus();="" (document.usrform1.promptanswer.value.length="" alert("未输入您的密码提示答案！");="" usrform1.promptanswer.focus();="" ||calcstringlength(usrform1.username.value)="">20){
	        	alert("您输入的用户名太短或者超长！");
	        	usrform1.username.focus();
	        	return false;
	}

	if (document.usrform1.password.value.length < 5 ||calcStringLength(usrform1.password.value)>20){
	        	alert("您输入的密码太短或者超长！");
	        	usrform1.password.focus();
	        	return false;
	}

	if (usrform1.password.value != usrform1.password1.value){
			    alert("两次输入的密码不一致！");
			    usrform1.password1.focus();
			    return false;
	}

		if (document.usrform1.email.value.indexOf(".") <= 1="" ||="" document.usrform1.email.value.length="" <7="" ||document.usrform1.email.value.indexof("@")="" <="0" ||calcstringlength(usrform1.email.value)="">40){
			alert ("电子邮件地址输入有误！");
			usrform1.email.focus();
			return false;
		}

	document.usrform1.name.value = document.usrform1.username.value;
	document.usrform1.pass.value = document.usrform1.password.value;

  return true;
}

function usrform1_onsubmit(){
       if (document.usrform1.password.value.length < 5 ||calcStringLength(usrform1.password.value)>20){
	        	alert("未输入您的密码或不符合要求！");
	        	usrform1.password.focus();
	        	return false;
            }
	   if (document.usrform1.lname.value.length <1 ||calcstringlength(usrform1.lname.value)="">20){
	        	alert("未输入姓或超长！");
	        	usrform1.lname.focus();
	        	return false;
	        }
		if (document.usrform1.fname.value.length <1 ||="" calcstringlength(usrform1.fname.value)="">20){
			alert ("未输入名或超长！");
			usrform1.fname.focus();
			return false;
		}
		if (!checkDate(usrform1.birthdate_y.value)){
			alert("出生日期有错！出生日期应为四位，例如：1980");
			usrform1.birthdate_y.focus();
			return false;
		}
		if (document.usrform1.address1.value.length <1 ||="" calcstringlength(usrform1.address1.value)="">80){
			alert ("未输入家庭地址或输入过长！");
			usrform1.address1.focus();
			return false;
		}

		if (document.usrform1.city.value == 000000){
			alert("请选择城市");
			usrform1.city.focus();
			return false;
		}
		
		if (document.usrform1.phone.value.length <1 &&="" document.usrform1.mobile.value.length="" <1="" document.usrform1.pager.value.length="" <1){="" alert("联系电话、手机、呼机三者必填其一！");="" usrform1.phone.focus();="" return="" false;="" }="" if="" (document.usrform1.email.value.indexof(".")="" <="1" ||="" document.usrform1.email.value.length="" <7="" ||document.usrform1.email.value.indexof("@")="" ||calcstringlength(usrform1.email.value)="">40){
			alert ("电子邮件地址输入有误！");
			usrform1.email.focus();
			return false;
		}

    return true;
	}

function checkEmail(emailObj) {
    if (emailObj.value.indexOf(".") <= 1="" ||="" emailobj.value.length="" <7="" ||emailobj.value.indexof("@")="" <="0" calcstringlength(emailobj.value)="">40) {
		alert ("电子邮件地址输入有误！");
		emailObj.focus();
		return false;
    }
    return true;
}

//计算包括中文字符的长度

function calcStringLength(instance){
		var len = 0;
		for(i=0;i<instance.length;i++){ if="" (instance.charcodeat(i)=""> 127) len +=2;
			else len += 1;
		}
		return len;
	}

function loginform_onsubmit(formObj) {
    var actionTagObj = formObj.actionTag;
    actionTagObj.value="login";

    if (formObj.name.value.length < 0 ||calcStringLength(formObj.name.value)>20){
	    alert("未输入您的用户名或不符合要求！");
	    formObj.name.focus();
	    return false;
    }

    if (formObj.pass.value.length < 0 ||calcStringLength(formObj.pass.value)>20){
	    alert("未输入您的密码或不符合要求！");
	    formObj.pass.focus();
	    return false;
    }
	return true;
}

function usrformlogon_onsubmit(){
if (document.usrform1.username.value.length < 1){
 	alert("未输入您的用户名！");
 	usrform1.username.focus();
 	return false;
}

if (document.usrform1.password.value.length < 1){
 	alert("未输入您的密码！");
 	usrform1.password.focus();
 	return false;
}

if (document.usrform1.password1.value.length < 1){
 	alert("未输入您的密码确认！");
 	usrform1.password1.focus();
 	return false;
}

if (document.usrform1.promptquestion.value.length < 1){
 	alert("未输入您的密码提示问题！");
 	usrform1.promptquestion.focus();
 	return false;
}

if (document.usrform1.promptanswer.value.length < 1){
 	alert("未输入您的密码提示答案！");
 	usrform1.promptanswer.focus();
 	return false;
}

if (document.usrform1.username.value.length < 5 ||calcStringLength(usrform1.username.value)>20){
	        	alert("您输入的用户名太短或者超长！");
	        	usrform1.username.focus();
	        	return false;
}

if (document.usrform1.password.value.length < 5 ||calcStringLength(usrform1.password.value)>20){
	        	alert("您输入的密码太短或者超长！");
	        	usrform1.password.focus();
	        	return false;
}
if (usrform1.password.value != usrform1.password1.value){
			    alert("两次输入的密码不一致！");
			    usrform1.password1.focus();
			    return false;
}
	    return true;
}

// This function is used when user modify private info Add by baiyu 2002-06-10
function updateaccount_onsubmit()
{
    if (document.usrform1.password.value.length < 5 ||calcStringLength(usrform1.password.value)>20){
	   	alert("未输入您的密码或不符合要求！");
	  	usrform1.password.focus();
	   	return false;
    }

    if (usrform1.password.value != usrform1.password1.value){
	    alert("两次输入的密码不一致！");
	    usrform1.password1.focus();
	    return false;
    }

    if (usrform1.promptquestion.value == 0){
	    alert("请输入您的提示问题！");
	    usrform1.promptquestion.focus();
	    return false;
    }

    if (usrform1.promptanswer.value == 0){
	    alert("请输入您的提示问题答案！");
	    usrform1.promptanswer.focus();
	    return false;
    }
    
    if(usrform1_onsubmit())
    	return true;  
    else
      return false;	
}

//add by baiyu 2002-06-17
function message_onsubmit(){
if (document.usrform1.title.value.length < 1 || document.usrform1.title.value.length >100){
	        	alert("没有输入求职信的标题或过长！");
	        	usrform1.title.focus();
	        	return false;
}

if (document.usrform1.text.value.length < 1 || document.usrform1.text.value.length >2000 ){
	        	alert("没有输入求职信的内容或过长！");
	        	usrform1.text.focus();
	        	return false;
}
	    return true;
}



//add by baiyu 2002-06-17
function cv_onsubmit(){
  if (document.usrform1.cvname.value.length <1 ||calcstringlength(usrform1.cvname.value)="">30){
   	alert("未输入简历名称或超长！");
   	usrform1.cvname.focus();
   	return false;
  }
	   
  if (document.usrform1.lname.value.length <1 ||calcstringlength(usrform1.lname.value)="">20){
   	alert("未输入姓或超长！");
   	usrform1.lname.focus();
   	return false;
  }

		if (document.usrform1.fname.value.length <1 ||="" calcstringlength(usrform1.fname.value)="">20){
			alert ("未输入名或超长！");
			usrform1.fname.focus();
			return false;
		}
		if (!checkDate(usrform1.birthdate_y.value)){
			alert("出生日期有错！出生日期应为四位，例如：1980");
			usrform1.birthdate_y.focus();
			return false;
		}
		if (document.usrform1.address1.value.length <1 ||="" calcstringlength(usrform1.address1.value)="">80){
			alert ("未输入家庭地址或输入过长！");
			usrform1.address1.focus();
			return false;
		}

		if (document.usrform1.city.value == 000000){
			alert("请选择城市");
			usrform1.city.focus();
			return false;
		}

		if (document.usrform1.phone.value.length <1 &&="" document.usrform1.mobile.value.length="" <1="" document.usrform1.pager.value.length="" <1){="" alert("联系电话、手机、呼机三者必填其一！");="" usrform1.phone.focus();="" return="" false;="" }="" if="" (document.usrform1.email.value.indexof(".")="" <="1" ||="" document.usrform1.email.value.length="" <7="" ||document.usrform1.email.value.indexof("@")="" ||calcstringlength(usrform1.email.value)="">80){
			alert ("电子邮件地址输入有误！");
			usrform1.email.focus();
			return false;
		}

	    return true;
	}
	



function newPopupOrSubmit(formObj,type) 
{

  if (type == 'favorite') 
  {
    var isLoginObj = formObj.isLogin;
    var checkboxObj = formObj.vacancyid;
    var actionTagObj = formObj.actionTag;
    //alert(isLoginObj.value);
    if (isLoginObj.value == "Y") 
    {
      
      actionTagObj.value="submitApply";
      if (isCheckboxChecked(checkboxObj)) formObj.submit();
    }
    else if (isLoginObj.value == "N") 
    {
       if (isCheckboxChecked(checkboxObj))
       {
        formObj.action="userlogon.jsp?type="+type;
        formObj.submit();
       } 
      //document.location='userlogon.jsp?type='+type+'&formname=' + escape(uu);
    }
  }
  else if (type == 'apply') 
  {
    var isLoginObj = formObj.isLogin;
    var actionTagObj = formObj.actionTag;
    //var uu="ps_request.jsp?vacancyid=" + formObj.vacancyid.value +"&vlocation=" + formObj.vlocation.value+ "&vname="+ formObj.vname.value + "&vcname=" + formObj.vcname.value;
    if (isLoginObj.value == "Y") 
    {
      actionTagObj.value="apply1";
      formObj.submit();
    }
    else if (isLoginObj.value == "N") 
    {
      formObj.action="userlogon.jsp?type="+type;
      formObj.submit();
    }
  }
  else if (type == 'favorite1') 
  {
    var isLoginObj = formObj.isLogin;
    var actionTagObj = formObj.actionTag;
    //var uu="ps_request.jsp?vacancyid=" + formObj.vacancyid.value;
    if (isLoginObj.value == "Y") 
    {
      actionTagObj.value="apply2";
      formObj.submit();
    }
    else if (isLoginObj.value == "N") 
    {
      formObj.action="userlogon.jsp?type="+type;
      formObj.submit();
    }
  }
}
//popup feedback
function openFeedback(strTarget){ 
	window.open(strTarget, "_blank",'width=1,height=1,left=100,top=60, scrollbars=0, overflow=auto, status=0');
}

function openLogin(){
	location.href = "/loginmgr/login.asp";
}

function openLogout(){
	location.href = "/loginmgr/logout.asp";
}

function getCookie(key){
  var name=key;
  var start = document.cookie.indexOf(name+"=");
  var len = start+name.length+1;
  if (start == -1) return null;
  var end = document.cookie.indexOf(";",len);
  if (end == -1) end = document.cookie.length;
  return unescape(document.cookie.substring(len,end)); 
}
</1></1></1></1></1></instance.length;i++){></=></1></1></1></1></=></0)></1){></1){></1930){></minselected)></j;></i;></total;></companyid_length></companyid_length></jobfamly_length></formobj.logonradio.length;i++){>