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
				
				<div class="box-list-container">
					<img style="width:100%;object-fit:cover;border-radius:10px;margin-top:20px;" src="./image/test1.png">
				</div>
			</div>
		</section>
		
			<section class="page-section">
			<div class="page-inner">
				<div class="page-title-txt">음식/문화</div>
				<div class="page-sub-title-txt">전국의 숨겨진 숙박시설을 한눈에 확인해보세요.</div>
				
				<div class="box-list-container">
					<img style="width:100%;object-fit:cover;border-radius:10px;margin-top:20px;" src="./image/test1.png">
				</div>
			</div>
		</section>
		
		
		
		
		
		
		
		
	</main>

	
	
	
</body>

<script src="./js/home.js"></script>
</html>