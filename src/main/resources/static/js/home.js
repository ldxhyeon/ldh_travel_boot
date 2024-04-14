

$(document).ready(function(){
	
	loadShops();
	
	
	$(document).on('click','.shop-box',function(){
		
		var shopUuid = $(this).data('shop-uuid');
		var shopIdx = $(this).data('shop-idx');
		var shopBox = $(this);
		
		
		//ajax view 증가 처리
		$.ajax({
			url:'./shop/plusVC',
			type:'post',
			data:{
				shop_idx:shopIdx
			},
			success:function(response) {
				//조회수 ui +1 처리
				var vc = shopBox.find('.vc').html();
				shopBox.find('.vc').html(parseInt(vc)+1);
			},
			error:function(err) {
				
			}
		})
		
		location.href='./detail-shop?shop_uuid='+shopUuid
	});
	
	
});

function loadShops() {
	
	//호텔,모텔 최신 4개 가져오기	
	$.ajax({
		url:'./shop/findByTypeWithLimit',
		type:'get',
		data:{
			count:4,
			types:['호텔','모텔']
		},
		success:function(shops){
			$.each(shops,function(index,shop){
				
				console.log(shop);
				$('#list-1').append(buildShopBox(shop));
			});
			
		},
		error:function(error){}
	})
	
	
	
	//펜션,리조트 최신 4개
	$.ajax({
		url:'./shop/findByTypeWithLimit',
		type:'get',
		data:{
			count:4,
			types:['펜션','리조트']
		},
		success:function(shops){
			$.each(shops,function(index,shop){
				$('#list-2').append(buildShopBox(shop));
			});
		},
		error:function(error){}
	})
	
	//한인민박,쉐어하우스 최신 4개 가져오기
	$.ajax({
		url:'./shop/findByTypeWithLimit',
		type:'get',
		data:{
			count:4,
			types:['민박','셰어하우스']
		},
		success:function(shops){
			$.each(shops,function(index,shop){
				$('#list-3').append(buildShopBox(shop));
			});
		},
		error:function(error){}
	})
	

}


function buildShopBox(shop) {
	
	var stars='';
	
	var n = Math.floor(shop.rank);
	
	
	for(var i=0; i<n; i++) {
		stars = stars+'<i class="fa-solid fa-star star"></i>';
	}
	
	
	var diff = shop.rank-n;
	if(diff >= 0.5) {
		stars = stars+'<i class="fa-solid fa-star-half-stroke star"></i>';
	}
	
	if(diff == 0){
		shop.rank = shop.rank+'.0';
	}
	
	if(n==0){
		stars = `
			<i class="fa-regular fa-star" style="color:#999"></i>
			<i class="fa-regular fa-star" style="color:#999"></i>
			<i class="fa-regular fa-star" style="color:#999"></i>
			<i class="fa-regular fa-star" style="color:#999"></i>
			<i class="fa-regular fa-star" style="color:#999"></i>
		`;
	}
	
	console.log(shop.rank);
	
	
	return `
			<div class="shop-space">
				<div class="shop-box" data-shop-uuid="${shop.shop_uuid}" data-shop-idx='${shop.shop_idx}'>
					<div class="img-box">
						<img src="${shop.shop_main_img_url}"/>		
						<span>
							<i class="fa-regular fa-eye"></i>
							<span class="vc">${shop.view_cnt}</span>
						</span>
					</div>
					
					
					
					<div class="title">[${shop.shop_type}] ${shop.shop_name}</div>
					<div>
						${stars} ${shop.rank}
					</div>
					<p>
						${shop.shop_addr1}
					</p>
				</div>
			</div>
	`;
}

















