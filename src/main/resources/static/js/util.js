


var UTIL = {
	
	buildStarts:function(rank) {
		
		var stars='';
		
		var n = Math.floor(rank);
		
		
		for(var i=0; i<n; i++) {
			stars = stars+'<i class="fa-solid fa-star star"></i>';
		}
		
		
		var diff = rank-n;
		if(diff >= 0.5) {
			stars = stars+'<i class="fa-solid fa-star-half-stroke star"></i>';
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
		
		return stars;
	}
	
}
