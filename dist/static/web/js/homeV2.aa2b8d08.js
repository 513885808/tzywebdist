webpackJsonp([31],{0:function(t,n,e){e(23),e(256);var i=e(51),s=window.$||e(46),o=(e(47),e(48),e(249)),a=e(264),r=e(251),l=e(265),c=s("[name=province]").val(),u=i({score:"",rank:""},window.__INITDATA__);o(s("#bannerShow")),o(s("#expertArea")),r.init(),a.init(),s(".sloganTag").on("click",function(t){t.preventDefault();var n=s(this).attr("id"),e=s("[rel="+n+"]"),i=e.offset().top;s("html,body").animate({scrollTop:i},600)});var d={init:function(){this.bindEvt()},bindEvt:function(){s(".js-edit").on("click",function(t){t.preventDefault();var n=s(t.target);l.init(n,{provinceId:c,data:u,successCallback:function(){setTimeout(function(){window.location="/"},400)}}),l.box()})}};d.init()},249:function(t,n,e){function i(t,n){function e(t,n){this.target=t,this.ul=t.find("ul"),this.li=this.ul.find("li"),this.visible_item=n.visible_item,this.options=n,this.timer=null,this.init(this.options)}e.prototype={init:function(t){var n=this,e=(n.target,this.li.length);n.target.css({overflow:"hidden"}),this.ul.css({position:"relative",left:0,width:100*e+"%"}),this.li.css({"float":"left",width:100/e+"%"}),s.each(this.li,function(t,n){var e=s(n);e.find("a").css({backgroundImage:"url("+e.data("pic")+")"})}),t.nav&&e>1&&this.nav()},nav:function(){var t=this,n=(t.target,t.options,"dot"),e='<div class="dots">';s.each(this.li,function(i){e+='<a href="#" class="'+(i==t.visible_item?n+" active":n)+'">'+ ++i+"</a>"}),e+="</ol>",this.target.append(e);var i=this.target.find(".dots").width();this.target.find(".dots").css({left:"50%",marginLeft:-(i/2)}),this.dots=this.target.find(".dots"),this.dot=this.target.find("."+n),this.bindEvt()},bindEvt:function(){var t=this,n=t.target,e=t.options;this.dots.on("click",".dot",function(n){n.preventDefault();var e=s(this);return!e.hasClass("active")&&void(e.hasClass("dot")&&t.to(s(".dots  .dot").index(this)))}),e.keys&&s(document).keydown(function(n){var e=n.which;clearInterval(t.timer),37==e?t.to(t.visible_item-1):39==e?t.to(t.visible_item+1):27==e&&clearInterval(t.timer)}),e.delay&&(t.timer=setInterval(function(){t.to()},e.delay),e.pause&&n.mouseenter(function(){clearInterval(t.timer)}).mouseleave(function(){clearInterval(t.timer),t.timer=setInterval(function(){t.to()},e.delay)}))},to:function(t,n){var e=this,i=e.target,s=e.options;"undefined"==typeof t&&(t=e.visible_item+1,t=t>=this.li.length?0:t),t==-1&&(t=e.li.length-1),t==e.li.length&&(t=0),i.find(".dot").eq(t).addClass("active").siblings().removeClass("active"),e.ul.animate({left:"-"+t+"00%"},s.speed,function(){e.visible_item=t})}};var i=o({speed:500,delay:5e3,pause:!0,keys:!0,nav:!0,visible_item:0},n);return t.each(function(t){var n=s(this);return new e(n,i)})}var s=window.$||e(46),o=e(51);t.exports=i},251:function(t,n,e){var i=window.$||e(46);e(51);e(252);var s=e(55),o=e(109),a=e(255),r={init:function(){var t=this;return!!(s.isIE()&&s.isIE()<8)&&void t.bindEvt()},bindEvt:function(){if(!o.get("browser_nav")){var t=i("body");t.animate({"padding-top":50},300),t.append(a());var n=i("#browser_nav");n.slideDown(300),i("#nav_close").click(function(){o.set("browser_nav","close",{expires:3}),n.slideUp(300),t.animate({"padding-top":0},300)})}}};t.exports=r},252:function(t,n){},255:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<div class="browser_nav" id="browser_nav">\n\t<div class="browser_nav_room rel">\n\t\t<span class="txt">检测到您的浏览器版本过低，建议您使用如下浏览器</span>\n\t\t<a href="https://www.google.com/intl/zh-CN/chrome/browser/"target="_blank"class="b_chrome blue">Google Chrome</a>\n\t\t<a href="https://www.mozilla.org/zh-CN/firefox/new/?utm_source=firefox-com&utm_medium=referral"target="_blank"class="b_firefox blue">Firefox</a>\n\t\t<a href="http://chrome.360.cn/"target="_blank"class="b_360 blue">360极速</a>\n\t\t达到页面最佳效果！\n\t\t<a href="javascript:;" class="nav_close" id="nav_close">关闭</a>\n\t</div>\n</div>';return __p}},256:function(t,n){},264:function(t,n,e){var i=window.$||e(46),s=(e(51),{init:function(t){this.target=i(".collegeWrap");var n=i.extend({speed:500,delay:4e3,pause:!0,slideNum:5},t);this.iNow=0,this.options=n,this.ul=i(".collegeList"),this.li=this.ul.find("li"),this.len=this.li.length,this.timer=null,this.nextok=!0,this.prevok=!1,this.bindEvt()},bindEvt:function(){this.setWidth(),this.auto()},setWidth:function(){var t=this;t.oW=this.li.outerWidth(!0),t.cW=t.target.width(),this.oneMarginRight=parseInt(this.li.eq(0).css("marginRight")),this.rowNum=Math.round((t.cW+this.oneMarginRight)/this.oW),this.ul.css({width:this.len*t.oW}),this.ul.fadeIn()},toggleControl:function(){var t=this,n=(t.target,t.options);t.iNow>=t.len-t.rowNum?(t.iNow=t.len-t.rowNum,t.nextok=!1,clearInterval(t.timer),n.delay&&(t.timer=setTimeout(function(){t.prev()},n.delay))):t.nextok=!0,t.iNow<=0?(t.iNow=0,t.prevok=!1,clearInterval(t.timer),n.delay&&(t.timer=setTimeout(function(){t.next()},n.delay))):t.prevok=!0},auto:function(){var t=this,n=t.target,e=t.options;e.delay&&(t.timer=setInterval(function(){t.next()},e.delay),e.pause&&n.mouseenter(function(){clearInterval(t.timer)}).mouseleave(function(){clearInterval(t.timer),t.timer=setInterval(function(){t.next()},e.delay)}))},next:function(){this.to(1)},prev:function(){this.to(-1)},to:function(t){var n=this,e=(n.target,n.options);this.oW*this.li.length<=n.cW+this.oneMarginRight||(n.toggleControl(),1==t&&n.nextok?n.ul.stop(!1,!0).animate({marginLeft:"-="+e.slideNum*n.oW},function(){n.iNow+=e.slideNum,n.toggleControl()}):t==-1&&n.prevok&&n.ul.stop(!1,!0).animate({marginLeft:0},function(){n.iNow=0,n.toggleControl()}))}});t.exports=s},265:function(t,n,e){var i=window.$||e(46);e(266);var s=e(268),o=e(146),a=e(66),r={init:function(t,n){this.options=n,this.btn=t,this.provinceId=this.options.provinceId},requestExamInfo:function(t){var n=this;i.ajax({url:preServer+n.options.provinceId+"/profile/isFillExamInfo",contentType:"application/json",type:"get",success:function(e){if("string"==typeof e)var e=i.parseJSON(e);if(1!=e.code)return void warn(e.msg);var s=e.result;s.isFill?n.options.successCallback(t):n.box(t)},error:function(t){console.log(t)}})},initSubject:function(){var t=this.options.data||{};t.subjectList&&i("[name=subject]").each(function(n,e){var s=i(e);i(t.subjectList).each(function(t,n){n.type==s.val()&&s.prop("checked",!0)})})},getSubjects:function(){var t=i("[name=subject]").map(function(t,n){if(n.checked)return{name:i(n).attr("n"),code:i(n).val()}}).get();return t},postPlanInfo:function(t,n,e){var s=this;t.addClass("disabled");var o=i(".errTxt"),r=this.getSubjects().map(function(t){return Number(t.code)}),l={score:Number(n.find("[name=score]").val()),subjects:r},c=n.find("[name=rank]").val();c&&(l.rank=Number(c)),i.ajax({url:preServer+this.provinceId+"/profile/fillExamInfo",type:"post",data:JSON.stringify(l),contentType:"application/json",success:function(n){if("string"==typeof n)var n=i.parseJSON(n);if(1011==n.code)window.location="/home/signin";else{if(1!=n.code)return t.removeClass("disabled"),void a.showError(o,n.msg);s.options.successCallback(e)}},error:function(n){t.removeClass("disabled")}})},box:function(t){var n=this,e=this.options.data||{};modalBox(n.btn.get(),{html:s(e),klass:"w540 shadow",closeByOverlay:!1,startCallback:function(){n.initSubject(),o.init()},completeCallback:function(){i("#score").focus(),i("#planForm").validator({errorParent:".row",successCallback:function(e){var s=i(e.target).closest(".btn"),o=i(".errTxt"),r=n.getSubjects();return 3!=r.length?(i(".subjectListRow").addClass("unvalid"),a.showErrorMsg(i("#planForm"),o,i(".subjectListRow")),!1):(i(".subjectListRow").removeClass("unvalid"),a.hideError(i(".errTxt")),void n.postPlanInfo(s,i("#planForm"),t))},focusinCallback:function(){a.hideError(i(".errTxt")),i(".row").removeClass("errorIpt")},errorCallback:function(t){var n=i(".errTxt");a.showErrorMsg(i("#planForm"),n,t)}})}})}};t.exports=r},266:function(t,n){},268:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<div class="modalCntWrap planModal taoModal g9 modalForm">\n <h3 class="clearfix"><a href="javascript:;" class="icons btn-close fr"></a><span class="fl">智能志愿定制</span></h3>\n <form class="modalSubCnt" id="planForm" onsubmit="return false;" autocomplete="off">\n\n<div class="inputRows">\n <div class="row clearfix">\n    <div class="inputWrap inputTextWrap">\n      <span class="iconWrap"><i class="icon-location icon-fenshu"></i></span>\n      <input type="text" class="input form-control" id="score" name="score" \n      min="0" max="750" placeholder="请输入高考/模拟考分数" required autocomplete="off" value="'+(null==(__t=score?score:"")?"":__t)+'">\n    </div>\n    <span class="p-error">高考分数为0-750之间，请重新填写</span>\n    <span class="p-error-empty">分数不能为空</span>\n </div>\n\n <div class="row clearfix">\n    <div class="inputWrap inputTextWrap">\n      <span class="iconWrap"><i class="icon-location icon-rank"></i></span>\n      <input type="number" class="input form-control" id="rank" name="rank" placeholder="请输入位次号" autocomplete="off" value="'+(null==(__t=rank?rank:"")?"":__t)+'">\n    </div>\n </div>\n</div>\n\n<div class=\'row subjectListRow\'>\n  <div class=\'g3 option-label\'>选考科目（选择3门）</div>\n  <div class="fieldWrap"> \n    <label for="subject_1" class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_1" name="subject" value="1" required n="物理" >\n    <em class="vm">物理</em>\n    </label>\n\n    <label for="subject_2"  class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_2" name="subject" value="2" n="化学" required>\n    <em class="vm">化学</em>\n    </label>\n\n    <label for="subject_3" class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_3" name="subject" value="3" n="生物" required>\n    <em class="vm">生物</em>\n    </label>\n\n    <label for="subject_4"  class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_4" name="subject" value="4" n="技术" required>\n    <em class="vm">技术</em>\n    </label>\n\n    <label for="subject_5" class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_5" name="subject" value="5" n="政治" required>\n    <em class="vm">政治</em>\n    </label>\n\n    <label for="subject_6"  class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_6" name="subject" value="6" n="地理" required>\n    <em class="vm">地理</em>\n    </label>\n\n    <label for="subject_7"  class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_7" name="subject" value="7" n="历史" required>\n    <em class="vm">历史</em>\n    </label>\n  </div>\n  <div class="errInfo">\n    <span class="p-error">请选择3门选考科目</span>\n    <span class="p-error-empty">选考科目不能为空</span>\n  </div>\n</div>\n\n <div class="footerCnt planCnt">\n   <p id="errTxt" class="errTxt"></p>\n   <div class="row btnRow">\n    <a class="btn btn-default btn-form btn-close">\n        <em class="subTxt">取消</em></a>\n     <button type="submit" class="btn btn-primary btn-form">\n     \t\t<em class="subTxt">确认</em></button>\n   </div>\n </div>\n</form>\n</div>';return __p}}});