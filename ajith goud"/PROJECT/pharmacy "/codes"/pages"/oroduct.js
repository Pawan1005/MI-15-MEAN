function createProduct(obj){
	var item=document.createElement('div');
	item.className="col-md-3 col-sm-4 shop-grid-item";

	var slide=document.createElement('div');
	slide.className="product-slide-entry shift-image";

	var image=document.createElement('div');
	image.className="product-image";

	var img1=document.createElement('img');
	img1.src=obj.img;
	image.appendChild(img1);

	var img2=document.createElement('img');
	img2.src=obj.img1;
	image.appendChild(img2);

	var bottom=document.createElement('div');
	bottom.className="bottom-line left-attached";
	
	var cart=document.createElement('a');
	cart.className="bottom-line-a square";
	var cartic=document.createElement('i');
	cartic.className="fa fa-shopping-cart";
	cart.appendChild(cartic);
	bottom.appendChild(cart);

	var heart=document.createElement('a');
	heart.className="bottom-line-a square";
	var heartic=document.createElement('i');
	heartic.className="fa fa-heart";
	heart.appendChild(heartic);
	bottom.appendChild(heart);

	var retweet=document.createElement('a');
	retweet.className="bottom-line-a square";
	var retweetic=document.createElement('i');
	retweetic.className="fa fa-retweet";
	retweet.appendChild(retweetic);
	bottom.appendChild(retweet);

	var expand=document.createElement('a');
	expand.className="bottom-line-a square";
	var expandic=document.createElement('i');
	expandic.className="fa fa-expand";
	expand.appendChild(expandic);
	bottom.appendChild(expand);

	image.appendChild(bottom);
	slide.appendChild(image);

	var tag=document.createElement('a');
	tag.className="tag";
	tag.href="#";
	tag.innerHTML=obj.category;
	slide.appendChild(tag);

	var title=document.createElement('a');
	title.className="title";
	title.href="#";
	title.innerHTML=obj.name;
	slide.appendChild(title);

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
	var review=document.createElement('div');
	review.className="reviews-number";
	review.innerHTML=obj.reviews+" reviews";
	rating.appendChild(review);
	slide.appendChild(rating);

	var desc=document.createElement('div');
	desc.className="article-container style-1";
	var p=document.createElement('p');
	p.innerHTML=obj.desc;
	desc.appendChild(p);
	slide.appendChild(desc);

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
	slide.appendChild(price);

	var btns=document.createElement('div');
	btns.className="list-buttons";
	var add=document.createElement('a');
	add.className="button style-10";
	add.innerHTML="Add to cart";
	btns.appendChild(add);
	var list=document.createElement('a');
	list.className="button style-11";
	list.innerHTML="Add to wishlist";
	btns.appendChild(list);
	slide.appendChild(btns);

	item.appendChild(slide);
	var clear=document.createElement('div');
	clear.className="clear";
	item.appendChild(clear);
	document.getElementById('products').appendChild(item);
}
function createCategory(obj){
	var li=document.createElement('li');
	var link=document.createElement('a');
	link.href="#";
	link.innerHTML=obj.name;
	if(obj.selected)
		link.style.fontWeight=700;
	li.appendChild(link);
	document.getElementById('categories').appendChild(li);
}

function loadPage(){
    createMenu('product');
    getCategories(function(err,categories){
    	for(var i=0;i<categories.length;i++)
    		createCategory(categories[i]);

    	getProductList(function(err,products){
	    	for(var i=0;i<products.length;i++)
	    		createProduct(products[i]);
	    });
    });
}

window.onload=function(){
	loadPage();;
}