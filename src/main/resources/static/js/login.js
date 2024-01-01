$(document).ready(function(){
	
	
	$('#login-btn').on('click',function(){
		var id = $('#id').val();
		var pw = $('#pw').val();
		
		
		$.ajax({
			url:'./u/login',
			type:'post',
			data: {
				'id':id,
				'pw':pw
			},
			success:function(json){
				if(json=='') {
					alert('가입된 회원이 없습니다.')
				}else {
					alert(json.nickname+'님 안녕하세요!')
					location.replace('./')
				}
			},
			error:function(err){}
		});
		
		
		// 1. 과제 : 세션 로그인 성공여부 판단, 로그인 한 유저 정보 넣고, 메인페이지로 이동.
		// 2. 로그인 후 메인페이지 수정?
	
	});
	
	
	$('#go-register-btn').click(function(){
		location.href='./register';
	});
	
});