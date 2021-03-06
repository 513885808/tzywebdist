<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<%@ include file = "/partials/_meta.jsp" %>
	<title>专业选择测试</title>
</head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	 <!-- 保存province属性 -->
	<input type="hidden" name="province" value="${user.province.code}">

	<!-- 保存code属性 -->
	<input type="hidden" name="code" value="${code}">

	 <div class="container proTestWrapper">
		<section class="s-proTest">
			<div class="content">
				<h3 class="clearfix title neeRow">
					<span class="fl s-title">
						<span class="vm">专业选择测试</span>
						<span class="badge"><i class="icon-nee"></i>
						<em class="vm">教育部考试中心独家授权</em></span>
						<em class="underLine"></em>	
					</span>
				</h3>
				
				<div class="contentWrap">
					<div id="qtestSliderWrap" class="qtestSliderWrap part1">
						<h5 class="title1">请选择你对这些工作内容的喜欢程度</h5>
						<h5 class="title2">请选出你对完成这些活动或工作的把握程度</h5>
						<ul class="rel ovh">
							
							
						</ul>

						<div class="progressWrap">
							<div class="progressInner"></div>
						</div>
						<div class="progressCount tc">
							答题进度:
							<em class="current">1</em>
							/
							<em class="all">210</em>
						</div>

						<div class="footerCnt" id="subTestFooter">
							
							<div class="row btnRow tc">
			                    <button type="submit" class="btn btn-positive btn-form" id="subTestBtn">
			                        <em class="subTxt">下一步</em>
			                    </button>
                  			</div>

						</div>

					</div>
				</div>
			</div>	
		</section>
	</div>
	
	
	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script type="text/javascript" src="/static/web/js/vendors.170dbd03e7ef7d584d54.js"></script><script type="text/javascript" src="/static/web/js/majorExam2.13c47a9d301e4b64c703.js"></script></body>
</html>