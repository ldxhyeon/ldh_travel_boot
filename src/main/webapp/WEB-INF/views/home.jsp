<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>트립쉐어</title>
<link rel="icon" href="./image/trip-logo-icon.png"/>


<%@ include file="/WEB-INF/views/include/lib.jsp" %>

<link rel="stylesheet" href="./css/all.min.css"/>
<link rel="stylesheet" href="./css/app.css"/>
<link rel="stylesheet" href="./css/home.css"/>





</head>
<body>

	<main class="body">
		
		<%@ include file="/WEB-INF/views/include/header.jsp" %>
		
		<section class="page-section">
			<div class="page-inner">
				<div class="page-title-txt">주말에 여행 어떠세요?</div>
				<img style="width:100%;object-fit:cover;border-radius:10px;margin-top:20px;" src="./image/bg-1.png">
			</div>
		</section>
		
		<section class="page-section">
			<div class="page-inner">
				<div class="page-title-txt">호텔/모텔</div>
				<div class="page-sub-title-txt">전국의 숨겨진 숙박시설을 한눈에 확인해보세요.</div>
				
				
				
				<div id="list-1" class="box-list-container">
				
<!-- 					<div class="shop-space"> -->
<!-- 						<div class="shop-box"> -->
<!-- 							<div class="img-box"> -->
<!-- 								<img src="https://blog.kakaocdn.net/dn/FZ96O/btq94sm7GF2/KHSHX3rl3rWp9lJGUMiDyk/img.png">		 -->
<!-- 								<span> -->
<!-- 									<i class="fa-regular fa-eye"></i> -->
<!-- 									1002 -->
<!-- 								</span> -->
<!-- 							</div> -->
							
							
							
<!-- 							<div class="title">[호텔] 그랜드호텔</div> -->
<!-- 							<div> -->
<!-- 								<i class="fa-solid fa-star star"></i> -->
<!-- 								<i class="fa-solid fa-star star"></i> -->
<!-- 								<i class="fa-solid fa-star star"></i> -->
<!-- 								<i class="fa-solid fa-star star"></i> -->
<!-- 								<i class="fa-solid fa-star star"></i> -->
<!-- 							</div> -->
<!-- 							<p> -->
<!-- 								서울시 용산구 121번길 10 -->
<!-- 							</p> -->
<!-- 						</div> -->
<!-- 					</div> -->
					
				</div>
				
				
				
			</div>
		</section>
		
		<section class="page-section">
			<div class="page-inner">
				<div class="page-title-txt">펜션/리조트</div>
				<div class="page-sub-title-txt">전국의 숨겨진 숙박시설을 한눈에 확인해보세요.</div>
				
				<div id="list-2" class="box-list-container">
				</div>
				
			</div>
		</section>
		
		<section class="page-section">
			<div class="page-inner">
				<div class="page-title-txt">민박/셰어하우스</div>
				<div class="page-sub-title-txt">전국의 숨겨진 숙박시설을 한눈에 확인해보세요.</div>
				
				<div id="list-3" class="box-list-container">
				</div>
			</div>
		</section>
		
		
	</main>

	
	
	
</body>

<script src="./js/home.js"></script>
</html>