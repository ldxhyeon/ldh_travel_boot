<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>   
 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>트립쉐어 | 상세보기</title>
<link rel="icon" href="./image/trip-logo-icon.png"/>

<%@ include file="/WEB-INF/views/include/lib.jsp" %>

<link rel="stylesheet" href="./css/app.css"/>
<link rel="stylesheet" href="./css/home.css"/>
<link rel="stylesheet" href="./css/detail-shop.css"/>

</head>
<body>

		
	<main>
		<%@ include file="/WEB-INF/views/include/header.jsp" %>
		
		
		<section class="page-section">
			<div class="page-inner">
			
				<input type="hidden" id="this-shop-idx" value="${shop.shop_idx}">
				
				<label class="dts-title">${shop.shop_name}</label>
				
				<div style="display:flex;">
					<div id="rank">
						
					</div>
					
					<span style="color:#999; font-size:14px; margin-left:10px;">${shop.view_cnt} 명 조회</span>
				</div>
				
				<img class="dts-big-img" src="${shop.shop_main_img_url}">
				
				<div class="dts-imgs-container">
				
					<c:forEach items="${imgs}" var = "si">
						<img src="${si.img_url}"/>
					</c:forEach>
					
				</div>
				
				<label class="dts-sm-title">간단소개</label>
				<p class="dts-p">
					${shop.shop_content}
				</p>
				
				<label class="dts-sm-title">주소</label>
				<p class="dts-p">
					${shop.shop_addr1}<br/>
					${shop.shop_addr2}
				</p>
				
				<label class="dts-sm-title">전화번호</label>
				<p class="dts-p">${shop.shop_tel}</p>
				
				
				<div class="review-container" style="margin-top:40px;">
					<hr style="background: #999; height:1px; border:0;"/>
					
					<div style="display:flex;justify-content:space-between;">
						<span style="color:#222;font-weight:700;font-size:26px;">리뷰</span>
  						
						<button class="add-rv-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">+리뷰작성</button>
					</div>
					
					
					
					<div id="review-list">
					
<%-- 						<c:forEach items="${reviews}" var="review"> --%>
<!-- 							<nav class="review-box"> -->
<%-- 								<div>${review.nickname}</div> --%>
<!-- 								<div> -->
<!-- 									<i class="fa-solid fa-star star"></i> -->
<!-- 									<i class="fa-solid fa-star star"></i> -->
<!-- 									<i class="fa-solid fa-star star"></i> -->
<!-- 									<i class="fa-solid fa-star star"></i> -->
<!-- 									<i class="fa-solid fa-star star"></i> -->
<!-- 								</div> -->
<!-- 								<p> -->
<%-- 									${review.content} --%>
<!-- 								</p> -->
<!-- 							</nav> -->
<%-- 						</c:forEach> --%>
						
					</div>
					
					
				</div>
				
				
			</div>
		</section>
	</main>
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog modal-dialog-centered">
	    <div class="modal-content">
	      <div class="modal-header">
	      	<div style="font-weight:700;font-size:16px;">리뷰작성</div>
	        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	      </div>
	      <div class="modal-body">
		      <div>
		        <i data-index="0" class="fa-solid fa-star rv-star" style="font-size:30px;color:#D4D4D4;cursor:pointer;"></i>
				<i data-index="1" class="fa-solid fa-star rv-star" style="font-size:30px;color:#D4D4D4;cursor:pointer;"></i>
				<i data-index="2" class="fa-solid fa-star rv-star" style="font-size:30px;color:#D4D4D4;cursor:pointer;"></i>
				<i data-index="3" class="fa-solid fa-star rv-star" style="font-size:30px;color:#D4D4D4;cursor:pointer;"></i>
				<i data-index="4" class="fa-solid fa-star rv-star" style="font-size:30px;color:#D4D4D4;cursor:pointer;"></i>
				</div>
				
				<textarea id="rv-content" placeholder="리뷰를 써주세요." style="width:100%;height:100px;resize:none;margin-top:20px;border:1px solid #dedede;padding:4px;"></textarea>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
	        <button id="save-rv-btn" type="button" class="btn btn-primary">작성완료</button>
	      </div>
	    </div>
	  </div>
	</div>

<script src="./js/detail-shop.js"></script>

</body>
</html>