// 作者：xcw
// 功能：导航效果设计
// 时间：2018-4-13 9:06

var $$=function(sel) {
	return document.querySelectorAll(sel);
};

var l=$$('.nav>ul>li');

// for(i=0;i<5;i++){
//  		l[i].onmouseover=function(e){
// 			this.querySelector('ul').style.cssText="display:block;";
// 		}
// 		l[i].onmouseout=function(e){
// 			this.querySelector('ul').style.cssText="display:none;"
// 		}
// }
// for (var i = 0; i <; i++){
// 	things[i]
// };

for(var i=0;i<l.length;i++){
	l[i].onmouseover=function(e){
		if(this.querySslector('ul')){
			this.querySelector('ul').style.cssText="display:block;"
		}
	}
	l[i].onmouseout=function(e){
		if (this.querySelector('ul')){
			this.querySelector('ul').style.cssText="display:none;"
		}
	}
}