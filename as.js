
var $$=function(sel){
	return document.querySelectorAll(sel);
};
var p=$$('.aside p'); 
// alert(l.length);
for(var i=0;i<p.length;i++){
	p[i].onclick=function(e){
		var u=this.parentNode.querySelector('ul');
		var cs=window.getComputedStyle(u,null);
		var display=cs["display"];
		if(display=="block"){
			u.style.cssText="display:none;";
		}else{
			u.style.cssText="display:block;";
		}
	}
}
