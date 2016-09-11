var lisNav = document.getElementsByClassName("topLi");
var fixObj = document.getElementById("sellBuyFix");
var retractObj = document.getElementsByClassName("fixRetract")[0];
var span = document.getElementsByClassName("fixContent")[0].getElementsByTagName("span")[0];
var fixCancel = document.getElementsByClassName("fixCancel")[0];
retractObj.onclick = function(){
	fixObj.style.left = "-100%";
}
fixCancel.onclick = function(){
	span.innerHTML = "未选择";
}
for (var i=0; i<lisNav.length; i++) {
	lisNav[i].onclick = function(){
		var navID = this.id;
		var uls = fixObj.getElementsByTagName("ul");
		var thisUl;
		var thisUlAs;
		span.innerHTML = "未选择";//初始化span
		fixObj.style.left = "0";
		for (var j=0; j<uls.length; j++) {
			uls[j].style.display = "none";
		}
		thisUl = document.getElementsByClassName(navID+"Ul")[0];
		thisUl.style.display = "";
		//点击展开
		thisUlAs = thisUl.getElementsByTagName("a");
		for (var i=0;i<thisUlAs.length; i++) {
			thisUlAs[i].onclick = function(){
				var siblingUl = this.nextElementSibling;
				if (siblingUl) {
					if(siblingUl.style.display=="none"){
						siblingUl.style.display = "";
					} else{
						siblingUl.style.display = "none";
					}
				} else{	//span显示选择
					if(navID == "brand"){
						var num = this.innerHTML;
						var serise = this.parentElement.parentElement.previousElementSibling.innerHTML;
						var brand = this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.innerHTML;
						//console.log(brand + " " + serise + " " + num);
						span.innerHTML = brand + " " + serise + " " + num;
					} else if(navID == "sort"){
						span.innerHTML = this.innerHTML;
					}
				}
			}
		}
	}
}
