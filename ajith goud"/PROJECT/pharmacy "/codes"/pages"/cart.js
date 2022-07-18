function createProductCart(obj){

    var div=document.createElement('div');
    var a=document.createElement('a');
    a.href="#";

    var img=document.createElement('img');
    img.alg="";
    img.src=obj.img;
    a.appendChild(img);
    div.appendChild(a);

    var content=document.createElement('div');
    var cell=document.createElement('div');
    
    var category=document.createElement('a');
    category.href="#";
    category.innerHTML=obj.category;
    cell.appendChild(category);
    
    var name=document.createElement('a');
    name.href="#";
    name.innerHTML=obj.name;
    cell.appendChild(name);

    for(var i=0;i<obj.tags.length;i++){
        var tag=document.createElement('div');
        tag.innerHTML=obj.tags[i];
        cell.appendChild(tag);
        tag.className="inline-description";
    }

    var price=document.createElement('div');
    var prev=document.createElement('div');
    prev.innerHTML=obj.prevPrice;
    var cur=document.createElement('div');
    cur.innerHTML=obj.newPrice;
    price.appendChild(prev);
    price.appendChild(cur);
    cell.appendChild(price);

    var qtysel=document.createElement('div');
    var title=document.createElement('div');
    title.innerHTML="Quantity";
    qtysel.appendChild(title);
    var min=document.createElement('div');
    min.innerHTML="&nbsp;";
    qtysel.appendChild(min);
    var num=document.createElement('div');
    num.innerHTML=obj.qty;
    qtysel.appendChild(num);
    var plus=document.createElement('div');
    plus.innerHTML="&nbsp;";
    qtysel.appendChild(plus);
    var remove=document.createElement('a');
    remove.innerHTML="remove";
    qtysel.appendChild(remove);
    var update=document.createElement('a');
    update.innerHTML="Update cart";
    qtysel.appendChild(update);
    cell.appendChild(qtysel);

    content.appendChild(cell);
    div.appendChild(content);
    document.getElementById('cartproducts').appendChild(div);

    div.className="traditional-cart-entry style-1";
    update.className="button style-15";
    remove.className="button style-17";
    plus.className="entry number-plus";
    num.className="entry number";
    min.className="entry number-minus";
    title.className="detail-info-entry-title";
    qtysel.className="quantity-selector detail-info-entry";
    cur.className="current";
    prev.className="prev";
    price.className="price";
    name.className="title";
    category.className="tag";
    cell.className="cell-view";
    content.className="content";
    a.className="image";
}
function createBranchCart(obj){
    var entry=document.createElement('div');
    entry.className="blog-entry";
    
    var imga=document.createElement('a');
    imga.className="image hover-class-1";
    imga.href="#";
    var img=document.createElement('img');
    img.src=obj.img;
    var span=document.createElement('span');
    span.className="hover-label";
    span.innerHTML="Read More";
    imga.appendChild(img);
    imga.appendChild(span);
    entry.appendChild(imga);

    var content=document.createElement('div');
    content.className="content";

    var title=document.createElement('a');
    title.className="title";
    title.href="#";
    title.innerHTML=obj.name;
    content.appendChild(title);

    var subtitle=document.createElement('div');
    subtitle.className="subtitle";
    subtitle.innerHTML=obj.timing;
    content.appendChild(subtitle);

    var desc=document.createElement('div');
    desc.className="subtitle";
    desc.innerHTML=obj.desc;
    content.appendChild(desc);

    entry.appendChild(content);
    document.getElementById('branch').appendChild(entry);

}



function loadPage(){
    createMenu('cart');
    getProductList(function(err,products){
        for(var i=0;i<products.length;i++)
            createProductCart(products[i]);

        getBranches(function(err,branches){
            for(var i=0;i<branches.length;i++)
                createBranchCart(branches[i]);

            loadScripts();
        });
    });
}
window.onload=function(){
    loadPage();
}