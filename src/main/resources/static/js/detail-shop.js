

$(document).ready(function(){
	init();
	
	fetchReviews();
});


function init() {
	
	let selectedRank=0;
	
	
	//url 에서 uuid 값 가져오기
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const shop_uuid = urlParams.get('shop_uuid');
	
	//	alert(shop_uuid);
	
	
	
	$.ajax({
		url:'./shop/findByUuid',
		type:'get',
		data:{
			shop_uuid:shop_uuid
		},
		success:function(shop){
			
			var starHtml = UTIL.buildStarts(shop.rank);
			
			$('#rank').html(starHtml);
			
		},
		error:function(err){}
	});
	
	
	//상세 사진 클릭

	$('.dts-imgs-container img').on('click',function(){
		var src = $(this).attr('src');
		$('.dts-big-img').attr('src',src);
	});	
	
	
	const exampleModal = document.getElementById('exampleModal');
	
	exampleModal.addEventListener('shown.bs.modal', () => {
		var response;
		
		//기존 리뷰 조회
		$.ajax({
			url:'./shrv/findByshopIdxAndUserIdx',
			type:'get',
			data:{
				shop_idx:$('#this-shop-idx').val(),
			},
			async:false,
			success:function($response){
				// response : not-login, '' , 리뷰Json
				
				
				console.log('[1]');
				response=$response;
				
			},
			error:function(err){
				
			}
		})
		
		console.log('[2]');
		//외부에서 판단 처리
		if(response == 'not-login') {
			$('#exampleModal').modal('hide');
			alert('로그인 후 이용해주세요.');
			location.href ="./login";
			return;
		}
		
		if(response != '') {
			$('#exampleModal').modal('hide');
			alert('이미 리뷰를 작성하셨습니다.')
			return;
		}
		
	});
	
	$('.add-rv-btn').on('click',function(){
		
		//별점초기화
		selectedRank=0;
		 for(var i = 0; i <=4; i++) {
	 		$(`.rv-star[data-index="${i}`).css('color','#D4D4D4');
		 }
		 
		 //리뷰 내용 초기화
		 $('#rv-content').val('');
	});
	
	
	//별점 클릭
	 $('.rv-star').on('click',function(){
//		 $(this).css('color','#ffd400');
		 var selectedIndex = $(this).data('index');
		 selectedRank=selectedIndex+1;
		 
		 //초기화
		 for(var i = 0; i <=4; i++) {
			 $(`.rv-star[data-index="${i}`).css('color','#D4D4D4');
		 }
		 
		 for(var i = 0; i <=selectedIndex; i++) {
			 $(`.rv-star[data-index="${i}`).css('color','#ffd400');
		 }
	 });
	
	
	
	//리뷰작성 클릭 이벤트
	$('#save-rv-btn').on('click',function(){
		
		
		var content = $('#rv-content').val();
		
		if(selectedRank==0) {
			alert('별점을 선택해주세요.');
			return;
		};
		
		if(content.length<10) {
			alert('리뷰내용을 작성해주세요. (10자리 이상).');
			return;
		};
		
		
		$.ajax({
			url:'./shrv/save',
			type:'post',
			data:{
				shop_idx:$('#this-shop-idx').val(),
				rank:selectedRank,
				content:content
			},
			success:function(response){
				if(response =='ok'){
					alert('소중한 리뷰 감사합니다.');
					location.reload();
				}else if(response == 'not-login'){
					alert('로그인 후 이용해주세요.');
				}
			},
			error:function(err){
				
			}
		})
		
		
		
	});
	
}


//리뷰 조회
function fetchReviews() {
	$.ajax({
		url:'./shrv/findByShopIdx',
		type:'get',
		data:{
			shop_idx:$('#this-shop-idx').val()
		},
		success:function(reviews){
			console.log(reviews);
			$.each(reviews,function(index,review){
				$('#review-list').append(`
					<nav class="review-box">
						<div>${review.nickname}</div>
						<div>
							${UTIL.buildStarts(review.rank)}
						</div>
						<p>
							${review.content}
						</p>
					</nav>
				`);
			});
			
		},
		error:function(error){}
	})
}




























