var lisPub = document.getElementsByClassName("pubLi");
var fixObj = document.getElementById("publishFix");
var retractObj = document.getElementsByClassName("fixRetract")[0];
retractObj.onclick = function(){
	fixObj.style.left = "-100%";
}
for (var i=0; i<lisPub.length; i++) {
	lisPub[i].onclick = function(){
		var pubID = this.id;
		var span = this.lastElementChild;
		//console.log(span);
		var uls = fixObj.getElementsByTagName("ul");
		var thisUl;
		var thisUlAs;
		fixObj.style.left = "0";
		for (var j=0; j<uls.length; j++) {
			uls[j].style.display = "none";
		}
		thisUl = document.getElementsByClassName(pubID+"Ul")[0];
		//console.log(pubID);
		thisUl.style.height = "100%";
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
				} else{
					if(pubID == "model"){
						var num = this.innerHTML;
						var serise = this.parentElement.parentElement.previousElementSibling.innerHTML;
						var brand = this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.innerHTML;
						span.innerHTML = brand + " " + serise + " " + num;
					} else{
						span.innerHTML = this.innerHTML;
					}
					span.style.color = "#000000";
					fixObj.style.left = "-100%";
				}
			}
		}
	}
}
