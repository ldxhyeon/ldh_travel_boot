<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>트립쉐어 로그인</title>
<link rel="icon" href="./image/trip-logo-icon.png"/>


<%@ include file="/WEB-INF/views/include/lib.jsp" %>


<link rel="stylesheet" href="./css/all.min.css"/>
<link rel="stylesheet" href="./css/app.css"/>
<link rel="stylesheet" href="./css/home.css"/>


<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

<script src="./js/register.js"></script>

</head>
<body>

	<main class="body">
	
		<div style="display:flex;">
			<section style="width:35%;height:100vh;background: red;">
				<img style="width:100%;height:100%;object-fit:cover;" src="https://i.pinimg.com/originals/f4/ff/c7/f4ffc7827687908d4d28fd3fc8513d57.jpg"/>
			</section>
			<section class="form-body" style="width:65%;height:100vh;background: #fff;">
			
				<div class="form-box">
					<div style="font-size:22px; font-weight:700; margin-bottom:4px">안녕하세요.</div>
					<div style="font-size:22px; font-weight:700; margin-bottom:20px">이번 주말 여행 어떠세요?</div>
					<label>아이디</label>
					<input id="id" placeholder="아이디" style="margin-bottom:2px;"/>
					<div id="id-result" class="inp-result-txt"></div>
					
					
					
					
					
					
					<label>비밀번호</label>
					<input id="pw" type="password" placeholder="비밀번호"//>
					
					<label>비밀번호 확인</label>
					<input id="pw-check" type="password" placeholder="비밀번호 확인" style="margin-bottom:2px;"/>
					<div id="pw-result" class="inp-result-txt"></div>
					
					<label>닉네임</label>
					<input id="nick" placeholder="닉네임" style="margin-bottom:2px;"/>
					<div id="nick-result" class="inp-result-txt ok"></div>
					
					<label>주소</label>
					<input id="addr1" placeholder="기본주소" style="margin-bottom:4px;" readonly/>
					<input id="addr2" placeholder="상세주소(선택사항)"/>
					
					<label>관심있는 액티비티(최대 3개)</label>
					<div>
						<div style="margin-top:10px;">
							<span class="tag-checkbox" data-value="캠핑">캠핑</span>
							<span class="tag-checkbox" data-value="레저">레저</span>
							<span class="tag-checkbox" data-value="숙박">숙박</span>
							<span class="tag-checkbox" data-value="여행">여행</span>
						</div>
						<div style="margin-top:8px;">
							<span class="tag-checkbox" data-value="음식">음식</span>
							<span class="tag-checkbox" data-value="드라이브">드라이브</span>
							<span class="tag-checkbox" data-value="하이킹">하이킹</span>
						</div>
					</div>
					
					
					
					<button id="submit-btn" style="margin-top:40px">Travel 시작하기</button>
				</div>
			
			</section>
		</div>
	
	
	</main>


	
	
	
</body>

<script src="./js/home.js"></script>
</html>