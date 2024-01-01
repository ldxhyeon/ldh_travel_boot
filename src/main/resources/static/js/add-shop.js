const firebaseConfig = {
  apiKey: "AIzaSyDoYUXvekPTYHyNukAO8EIEV0GF1OP04IM",
  authDomain: "ldh-travel-89460.firebaseapp.com",
  projectId: "ldh-travel-89460",
  storageBucket: "ldh-travel-89460.appspot.com",
  messagingSenderId: "863549983725",
  appId: "1:863549983725:web:3682a3ad867ec6940535e4",
  measurementId: "G-2XDZ2DGK43"
};



function getBase64(file) {
   return new Promise(function(resolve, reject){
	   var reader = new FileReader();
	   reader.readAsDataURL(file);
	   reader.onload = function () {
		   resolve(reader.result);
	   };
	   reader.onerror = function (error) {
		   reject('Error: ', error);
	   };
   });
}




$(document).ready(function(){
	
	
	
	var now = Date.now();
	alert(now);
	
	
	let selectedType = '호텔';
	
	
	// firebase  
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	var storage = firebase.storage();
	
	
	//파이어베이스 테스트
	var file;
	$('#img-file').on('change',async function(){
		file = $(this)[0].files[0];
		//이미지 미리보기
		
//		getBase64(file).then((b64)=>{
//			console.log(b64);
//			$('#preview-img').attr('src',b64)
//		});
		
		var b64 = await getBase64(file);
		$('#preview-img').attr('src',b64)
	});
	
	
	$('#preview-img').on('click',function(){
		$('#img-file').trigger('click');
	});
	
	
	$('#upload-img-btn').on('click',async function(){
		
		var now = Date.now();
		var ref = storage.ref('shop_image').child('sh_'+now);
		ref.put(file).then(function(snapshot){
			//업로드 완료
			alert('성공');
		}).catch(function(err){
			//업로드 실패
		});
	});
	
	
	
	
	
	
	
	
	
	
	
	
	var width = 500; //팝업의 너비
	var height = 600; //팝업의 높이
	
	//주소 api 호출
	$('#address1').click(function(){
		new daum.Postcode({
	        oncomplete: function(data) {
	            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
	            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
	            
	            $('#address1').val(data.address);
	            $('#zonecode').val(data.zonecode);
	        },
	        width: width, //생성자에 크기 값을 명시적으로 지정해야 합니다.
    		height: height
	    }).open({
			left: (window.screen.width / 2) - (width / 2),
    		top: (window.screen.height / 2) - (height / 2)
		});
	});
	
	
	//업체종류 선택 로직
	$('.f-type-tag').on('click',function(){
		$('.f-type-tag').removeClass('selected');
		$(this).addClass('selected');
		var value = $(this).data('value');
		
		
		selectedType=value;
		
	}); 
	
	
	$('#content').on('keyup',function(){
		var text = $(this).val();
		
		console.log(text.length);
		
		var color = 'red';
		if(text.length < 20){
			color='red';
		}else{
			color='blue';
		}
		
		$('#content-len').html(`${text.length} / 300`);	
		$('#content-len').css('color',color);
	});
	
	
	
	
	//업체등록 버튼 이벤트
 	$('#submit-btn').on('click',function(){
		 
		 var name=$('#name').val();
		 var ceo=$('#ceo').val();
		 var bs_code=$('#bs-code').val();
		 var zonecode=$('#zonecode').val();
		 var addr1=$('#address1').val();
		 var addr2=$('#address2').val();
		 var tel=$('#tel').val();
		 var content=$('#content').val();
		 
		 
		 console.log(name);
		 console.log(ceo);
		 console.log(bs_code);
		 console.log(zonecode);
		 console.log(addr1);
		 console.log(addr2);
		 console.log(tel);
		 console.log(content);
		 
		 
		 
		 
		 if(name.length==0) {
			 alert('업체명을 적어주세요');
			 return;
		 }
		 if(ceo.length==0) {
			 alert('대표자명을 적어주세요');
			 return;
		 }
		 if(bs_code.length==0) {
			 alert('사업자등록번호를 적어주세요');
			 return;
		 }
		 if(addr1.length==0) {
			 alert('주소를 적어주세요');
			 return;
		 }
		 if(zonecode.length==0) {
			 alert('우편번호를 적어주세요');
			 return;
		 }
		 if(tel.length==0) {
			 alert('전화번호를 적어주세요');
			 return;
		 }
		 if(content.length < 20) {
			 alert('내용을 적어주세요 (20자 이상)');
			 return;
		 }
		 
		 
		 
		 
		 
		 
		 
		 $.ajax({
			 url:'./shop/save',
			 type:'post',
			 data:{
				 type:selectedType,
				 name:name,
				 ceo:ceo,
				 bs_code:bs_code,
				 zonecode:zonecode,
				 addr1:addr1,
				 addr2:addr2,
				 tel:tel,
				 content:content,
			 },
			 success:function(json) {
				 alert(json);
			 },
			 error:function(err) {
				 
			 }
		 });
    });
    
    
});






//function uploadImg() {
//		return new Promise((resolve, reject)=>{
//			var ref = storage.ref('some_path').child("test");
//			ref.put(file).then(function(snapshot){
//				//업로드 완료
//				resolve();
//			}).catch(function(err){
//				reject();
//			});
//		});
//	}