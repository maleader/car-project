var lisCar = document.getElementById("changeCheck").getElementsByTagName("li");
var sum = 0;
//console.log(lisCar);
//console.log(checkBox);
for (var i=0; i<lisCar.length; i++) {
	lisCar[i].onclick = function(){
		var checkBox = this.getElementsByTagName("input")[0];
//		console.log(checkBox);
		if (checkBox.checked) {
			checkBox.checked = false;
			checkBox.parentNode.style.backgroundPosition = "0 -0.44rem";
		} else{
			checkBox.checked = true;
			checkBox.parentNode.style.backgroundPosition = "0 0";
		}
		var checkBtn = document.getElementsByClassName("checkBtn");
		var n = 0;
		for (var j=0; j<checkBtn.length; j++) {
			if (checkBtn[j].checked) {
			n++;
			}
		}
		sum = n;
		//console.log(n);
		document.getElementsByClassName("changeNumber")[0].value = "删除（"+n+"）";
	}
}
document.getElementsByTagName("form")[0].onsubmit = function () {
	if(sum != 0){
		if (window.confirm("确定删除吗？")) {
			return true;
		} else{
			return false;
		}
	} else{
		alert("请选择要删除的条目");
	}
}

