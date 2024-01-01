$(document).ready(function(){
	
	
	// 업체등록 페이지 이동
	$('.menu-btn').click(function(){
		var page = $(this).data('page');
		location.href=page;
	});
	
	
	// 로그인 페이지 이동
	$('#go-login-btn').click(function(){
		location.href='./login';
	});
	
	
	//로그아웃 이벤트
	$('#go-logout-btn').on('click',function(){
		var con = confirm('정말 로그아웃 하시겠습니까?');
		
		if(!con) {
			return;
		}
		
		$.ajax({
			url:'./u/logout',
			type:'post',
			data:{},
			success:function(json) {
				if(json=='ok') {
					alert('로그아웃 되었습니다.');
					location.replace('./');
				}
			},
			error:function(err){}
		});
	 });	
});