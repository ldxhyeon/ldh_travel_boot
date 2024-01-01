$(document).ready(function(){
	
	
	var activeArray = [];
	let checkId = false;
	let checkNickname = false;
	let checkPw = false;
	
	
	
	//액티비티 선택
	
	$('.tag-checkbox').on('click',function(){
		
		var isActive = $(this).hasClass('active');
		
		var value = $(this).data('value');
		
		
		if(isActive){
			//삭제	
			var index = activeArray.indexOf(value);
			activeArray.splice(index, 1); //데이터 변경  
			
			$(this).removeClass('active'); //UI 변경
		}else{			
			
			//추가
			if(activeArray.length < 3){
				activeArray.push(value); //데이터 변경
				$(this).addClass('active'); //UI 변경
			}else{
				alert('최대 3개까지 선택이 가능합니다.');
			}
			
			
		}
		
		console.log(activeArray);
		
		
		
		
		
		
		
		
	});
	
	
	
	
	
	
	
	$('#id').on('focusout',function(){
		var id= $('#id').val();
		
		//ajax 만들어보기
		$.ajax({
			url:'./u/findById',
			type:'get',
			data:{
				'id':id
			},
			success:function(json){
				
				if(json != '') {
					//이미 가입된 아이디 존재
					checkId=false;
					$('#id-result').attr('class','inp-result-txt no')
					$('#id-result').html('이미 가입된 아이디가 존재합니다.')
				}else{
					//가입이 가능한 아이디
					checkId=true;
					$('#id-result').attr('class','inp-result-txt ok')
					$('#id-result').html('가입이 가능한 아이디 입니다.')
				}
				
				if(id.length < 4) {
					checkId=false;
					$('#id-result').attr('class','inp-result-txt no')
					$('#id-result').html('최소 4자리 이상의 아이디를 사용하세요.')
				}
				
				
			},
			error:function(err){}
		});
		
	});
	
	
	//비밀번호 확인
	$('#id,#pw-check').on('keyup',function(){
		var pw = $('#pw').val();
		var pwCheck = $('#pw-check').val();
		
		console.log(`pw: ${pw}, pwChekck : ${pwCheck}`);
		
		if(pw==pwCheck) {
			//비밀번호 일치
			checkPw=true;
			$('#pw-result').attr('class','inp-result-txt ok')
			$('#pw-result').html('비밀번호가 일치 합니다.')
			
		}else {
			//비밀번호 불일치
			checkPw=false;
			$('#pw-result').attr('class','inp-result-txt no')
			$('#pw-result').html('비밀번호가 일치하지 않습니다.')
		}
		
		if(validatePassword(pw)==false) {
			//비밀번호가 형식에 안맞음
			checkPw=false;
			$('#pw-result').attr('class','inp-result-txt no')
			$('#pw-result').html('문자,숫자,특수문자 포함(최소 8자리)')
		}
		
		
	});
	
	
	$('#nick').on('focusout',function(){
		var nick= $('#nick').val();
		
		//ajax 만들어보기
		$.ajax({
			url:'./u/findByNickname',
			type:'get',
			data:{
				'nickname':nick
			},
			success:function(json){
				
				if(json != '') {
					//이미 가입된 아이디 존재
					checkNickname=false;
					$('#nick-result').attr('class','inp-result-txt no')
					$('#nick-result').html('이미 가입된 닉네임이 존재합니다.')
				}else{
					//가입이 가능한 아이디
					checkNickname=true;
					$('#nick-result').attr('class','inp-result-txt ok')
					$('#nick-result').html('가입이 가능한 닉네임 입니다.')
				}
				
				if(nick.length < 4) {
					checkNickname=false;
					$('#nick-result').attr('class','inp-result-txt no')
					$('#nick-result').html('최소 4자리 이상의 닉네임을 사용하세요.')
				}
			},
			error:function(err){}
		});
		
	});
	
	
	
	
	
	$('#submit-btn').on('click',function(){
		var id = $('#id').val();
		var pw = $('#pw').val();
		var pwCheck = $('#pw-check').val();
		var nick = $('#nick').val();
		var addr1 = $('#addr1').val();
		var addr2 = $('#addr2').val();
		
		
		if(!checkId) {
			alert('아이디가 인증되지 않았습니다.')
			return;
		}
		
		if(!checkPw) {
			alert('비밀번호가 확인되지 않았습니다.')
			return;
		}
		
		if(!checkNickname) {
			alert('닉네임이 인증되지 않았습니다.')
			return;
		}
		
		if(addr1.length==0) {
			alert('기본주소는 필수 입니다.')
			return;
		}
		
		
		// 액티비티 만들기
		var act='';
		$.each(activeArray, function(index, item){
			act += '#'+item;
		});
		
		
		
		
		
		$.ajax({
			url:'./u/save',
			type:'post',
			data:{
				id:id,
				pw:pw,
				nick:nick,
				addr1:addr1,
				addr2:addr2,
				act:act
			},
			success:function(json){
				if(json=='ok') {
					alert(`${nick} 님 즐거운 여행하세요!`)
					location.replace('./login')
				}
			},
			error:function(err){
				
			}
		});
		
	});
	
	
	
	
	
	var width = 500; //팝업의 너비
	var height = 600; //팝업의 높이
	
	//주소 api 호출
	$('#addr1').click(function(){
		new daum.Postcode({
	        oncomplete: function(data) {
	            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
	            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
	            $('#addr1').val(data.address);
	        },
	        width: width, //생성자에 크기 값을 명시적으로 지정해야 합니다.
    		height: height
	    }).open({
			left: (window.screen.width / 2) - (width / 2),
    		top: (window.screen.height / 2) - (height / 2)
		});
	});
	
	 
	
});








function validatePassword(password) {
    // 최소 8자리 이상
    if (password.length < 8) {
        return false;
    }

    // 숫자, 문자, 특수문자 각각 1개 이상 포함 여부 체크
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // 모든 조건을 만족하면 true 반환
    return hasNumber && hasLetter && hasSpecialChar;
}













