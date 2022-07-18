function createProduct(obj){
	var slide=document.createElement('div');
	slide.className="swiper-slide";
	var container=document.createElement('div');
	container.className="paddings-container";
	var entry=document.createElement('div');
	entry.className="product-slide-entry";

	var image=document.createElement('div');
	image.className="product-image";
	var img=document.createElement('img');
	img.src=obj.img;
	image.appendChild(img);
	
	var left=document.createElement('a');
	left.className="top-line-a left";
	var retweet=document.createElement('i');
	retweet.className="fa fa-retweet";
	left.appendChild(retweet);
	image.appendChild(left);

	var right=document.createElement('a');
	right.className="top-line-a right";
	var heart=document.createElement('i');
	heart.className="fa fa-heart";
	right.appendChild(heart);
	image.appendChild(right);

	var bottom=document.createElement('div');
	bottom.className="bottom-line";
	var bottoma=document.createElement('a');
	bottoma.className="bottom-line-a";
	var cart=document.createElement('i');
	cart.className="fa fa-shopping-cart";
	bottoma.appendChild(cart);
	bottoma.innerHTML+="Add to cart";
	bottom.appendChild(bottoma);
	image.appendChild(bottom);
	entry.appendChild(image);

	var tag=document.createElement('a');
	tag.className="tag";
	tag.href="#";
	tag.innerHTML=obj.category;
	entry.appendChild(tag);

	var title=document.createElement('a');
	title.className="title";
	title.href="#";
	title.innerHTML=obj.name;
	entry.appendChild(title);

	var rating=document.createElement('div');
	rating.className="rating-box";
	for(var i=0;i<obj.ratings;i++){
		var star=document.createElement('div');
		star.className="star";
		var staric=document.createElement('i');
		staric.className="fa fa-star";
		star.appendChild(staric);
		rating.appendChild(star);
	}
	entry.appendChild(rating);

	var price=document.createElement('div');
	price.className="price";
	var prev=document.createElement('div');
	prev.className="prev";
	prev.innerHTML=obj.prevPrice;
	price.appendChild(prev);
	var cur=document.createElement('div');
	cur.className="current";
	cur.innerHTML=obj.newPrice;
	price.appendChild(cur);
	entry.appendChild(price);
	container.appendChild(entry);
	slide.appendChild(container);
	document.getElementById('selling').appendChild(slide);
}

function loadPage(){
    createMenu('home');
    getProductList(function(err,products){
    	for(var i=0;i<products.length;i++)
    		createProduct(products[i]);
    	//location.reload();
    });
}
var pageloaded=true;
window.onload=function(){
    setTimeout(function(){
    	loadPage();
    	loadScripts();
    	// $('#selling').load(window.location.href+"#selling");
    },3000);
    // loadPage();
}