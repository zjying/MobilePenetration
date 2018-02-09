/***************基础js**************/
var jadeNum=/\d+/;
/*******屏幕适配*******/
 (function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      clientWidth=parseInt(clientWidth);
      if (!clientWidth) return;
      if(clientWidth<1024){
      	   docEl.style.fontSize = 10 * (clientWidth / 320) + 'px';

      }else{
      		docEl.style.fontSize="20px";
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/**** 弹出框 ****/
var tipAlert=function(msg){
	$(".dialog-div .text").text(msg);
	$(".dialog-div:eq(0)").show();
	var _this=this;
	setTimeout(function(){
		//_this.close();//ie上会提示关闭窗口
		$(".dialog_div:eq(0)").hide();
	},3000)
	$(".dialog-div .close").click(function(){
		//_this.close();//ie上会提示关闭窗口
		$(".dialog_div:eq(0)").hide();
	})
	this.close=function(){
		$(".dialog-div:eq(0)").hide();
	}
};
/**** 设置cookie ****/
function setCookie(cname,cvalue,exdays){
	var d=new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var  expires="expires="+d.toString();
	var path="";
	document.cookie=cname+"="+cvalue+";"+expires+"path=/";
}
/**** 获取cookie ****/
function getCookie(cname){
	var name=cname+"=";
	var ca=document.cookie.split(";");
	for(var i=0; i<ca.length;i++){
		var c=ca[i].trim();
		if(c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}
/*** 移除cookie ***/ 
function removeCookie(cname){
	var d=new Date();
	d.setTime(d.getTime()-1*24*60*60*1000);
	var expires="expires=''";
	document.cookie=cname+"=''"+";"+expires+"path=/";

}
/*** 显示加载框 ***/ 
function showLoader(){
	$("#loader").show();
}
/*** 隐藏加载框 ***/ 
function hideLoader(){
	$("#loader").hide();
}


/********只获取有name的表单数据******/

/********判断是否微信******/
function isWeiXin() {
	var ua = window.navigator.userAgent.toLowerCase();
	console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
}
