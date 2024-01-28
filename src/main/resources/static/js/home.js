

$(document).ready(function(){
	
	loadShops();
	
	
	$(document).on('click','.shop-box',function(){
		location.href='./detail-shop'
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
			types:['한인민박','셰어하우스']
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
				<div class="shop-box">
					<div class="img-box">
						<img src="${shop.shop_main_img_url}"/>		
						<span>
							<i class="fa-regular fa-eye"></i>
							${shop.view_cnt}
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

















