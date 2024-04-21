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
	
	
	
	$.ajax({
		url:'./shop/test',
		type:'post',
		data:{
			imgs:['a','b']
		},
		success:function(response) {
//			alert(response)
		},
		error:function(error) {
			console.log(error);
		}
		
	})
	
	
	let selectedType = '호텔';
	
	
	// firebase  
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	var storage = firebase.storage();
	
	
	// var base65ImageList = [];  // 사용 안하는 이유 : UI, data 2개를 관리하기 힘듬.(굳이 2개를 관리할 필요가 없음)
	
	
	
	
	//사진 여러장 등록
	$('#add-img-btn').on('click',function(){
		
		var imgCount =$('.added-img').length;
		alert('현재 이미지 개수 : ' +imgCount);
		if(imgCount==8) {
			alert('상세이미지는 최대 8장만 가능합니다.');
			return;
		}
		
		$('#adding-img-input').trigger('click');
	});
	
	
	//사진 여러장 input change 이벤트
	$('#adding-img-input').on('change',async function(){
		var imgFile = $(this)[0].files[0];
		// file -> 
		var base64 = await getBase64(imgFile);
		
		
		$('#detail-imgs').append(`
				<div class="col-md-6 added-img" style="padding:10px;">
					<div class="f-img-add-btn">
						<img class="detail-base64-img" src="${base64}"/>
						<img class="delete-btn" src="./image/delete.png"/>
					</div>
				</div>
		`);
		
		
		//input file 초기화
		$(this).val('');
		
		
	});
	
	//사진 삭제
	$(document).on('click','.delete-btn',function(){
		
		var con = confirm ('사진 등록을 취소 하시겠습니끼?')
		if(!con) {
			return;
		}
		
		$(this).closest('.col-md-6').remove();
	});
	
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
	
	
	$('#test-upload-img-btn').on('click',async function(){
		var url = await uploadImgAndGetUrl(storage, file)		
		
		alert(url);
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
 	$('#submit-btn').on('click',async function(){
		 
		
		 
		 
		var imgTags = $('.detail-base64-img');
		$.each(imgTags,function(index,item){
			var base64 = $(item).attr('src');
			console.log(base64);
		});
		 
		 
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
		 if(ceo.length==0 || ceo.length>7) {
			 alert('올바른 대표자명을 적어주세요');
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
		 
		if(file==undefined) {
			alert('대표이미지는 필수 입니다.');
			return;
		}	 
		
		var con = confirm('등록 하시겠습니까?');
		if(!con) {
			return;
		}
		
		
		$('.loading-container').css('display','flex');
		 
		 
		var url = await uploadImgAndGetUrl(storage, file);
		
		//상세이미지 UI 여러장 -> 배열 로 추출
		var detailImgsBase64=[];
		var detailImgsUrl=[];
		
		var imgTags = $('.detail-base64-img');
		$.each(imgTags, function(index,item){
			var base64 = $(item).attr('src');
			detailImgsBase64.push(base64);
		});
		
		
		
		for(var i=0;i<detailImgsBase64.length;i++){
			var oneBase64 = detailImgsBase64[i];
			var oneUr1 = await uploadBase64AndGetUrl(storage, oneBase64);
			detailImgsUrl.push(oneUr1);
		}
		
		console.log(detailImgsUrl);
		 
		 
		 
		 
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
				 img_url:url,
				 detail_imgs:detailImgsUrl
			 },
			 success:function(json) {
				 
				 if(json=='ok') {
					 $('.loading-container').css('display','none');
					 alert('업체 등록 완료')
					 location.replace('./');
				 }
				 
				
			 },
			 error:function(err) {
				 $('.loading-container').css('display','none');	
			 }
		 });
    });
    
    
});


function uploadBase64AndGetUrl($storage,$b64) {
	
	return new Promise((resolve,reject)=>{
		var now = Date.now();
		var ref = $storage.ref('shop_image').child('sh_'+now);
		ref.putString($b64, 'data_url').then(function(snapshot){
			//업로드 완료 -> 다운로드 하기
			
			ref.getDownloadURL().then((url)=>{
				resolve(url);
			});
			
		}).catch(function(err){
			//업로드 실패
			reject();
		});
		
	});
	
	
};


function uploadImgAndGetUrl($storage,$file) {
	
	return new Promise((resolve,reject)=>{
		var now = Date.now();
		var ref = $storage.ref('shop_image').child('sh_'+now);
		ref.put($file).then(function(snapshot){
			//업로드 완료 -> 다운로드 하기
			
			ref.getDownloadURL().then((url)=>{
				resolve(url);
			});
			
		}).catch(function(err){
			//업로드 실패
			reject();
		});
		
	});
	
	
};



