<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
    
    
<script src="./js/header.js"></script>
    
    
<header>
	<div class="page-inner d-flex j-c-space-between a-i-ceter">
		<img id="main-logo" style="height:90%;margin-top:7px; cursor:pointer;" src="./image/trip-logo.png">
		
		<div>
			<span class="menu-btn" data-page="./add-shop">트립쉐어소개</span>
			<span class="menu-btn" data-page="./add-shop">블로그</span>
			<span class="menu-btn" data-page="./add-shop">여행정보</span>
			<span class="menu-btn" data-page="./add-shop">업체등록</span>
		</div>
		
		<div>
			<c:if test = "${empty sessionScope.me}">
				<button id="go-login-btn" class="outline-btn">로그인</button>
			</c:if>
			
			<c:if test = "${not empty sessionScope.me}">
				<span style="margin-right:15px;">${sessionScope.me.nickname} 님</span>
				<button id="go-logout-btn" class="outline-btn">로그아웃</button>
			</c:if>
		</div>
		
		
	</div>
</header>