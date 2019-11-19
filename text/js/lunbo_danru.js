window.onload=function () {
 var nav=document.getElementById('_j_index_search_tab');
 console.log(nav);
 var oNav=nav.getElementsByTagName('li');
 
 var container=document.getElementById('_j_index_search_bar');
 var oDiv=container.getElementsByClassName('search-input');
 for(var i=0;i<oNav.length;i++){
	oNav[i].index=i;
	oNav[i].onclick=function () {
	for(var i=0;i<oNav.length;i++){
	 oNav[i].className='';
	 oDiv[i].style.display="none";
	}
	this.className='tab-select';
	//console.log(this);//this指向调用本函数的对象即点击到的选项卡oNav[i]整行<li>
	oDiv[this.index].style.display="block"
	}
	//默认登入时第一个是act,其他是none(只执行一次)
	// for(var m=1;m<oNav.length;m++){
	//  oNav[m].className='';
	//  oDiv[m].style.display="none";
	// }
 }
 
 
 //获取整个轮播图div对象，实现鼠标悬停停止轮播效果
 //getElementsByClassName注意要注明是第几个元素
 var box = document.getElementsByClassName('mfw-focus')[0];
 console.log(box);
 var li_list = document.querySelectorAll('#imageul li'); //获取图片的li
 console.log(li_list);
 var ol_list = document.querySelectorAll('#navul li');
 console.log(ol_list);
 var timer = null; //声明定时器
 var count = 0;
 
 function auto() { //执行自动轮播
 	count++;
 	if (count > li_list.length - 1) {
 		count = 0;
 	}
 	for (var i = 0; i < li_list.length; i++) {
 		li_list[i].className = '';
 		ol_list[i].className = '';
 	}
 	//console.log(li_list[count]);
 	//因为浏览器打开后首先显示第一个li所以从li_list[1]开始轮播
 	li_list[count].className = 'active';
 	ol_list[count].className = 'active';
 
 }
 timer = setInterval(auto, 3000); //调用定时器每隔
 
 //鼠标划上去，停止轮播
 box.onmouseover = function () { 
 	clearInterval(timer);
 }
 box.onmouseout = function () { //鼠标划出，继续轮播
 	timer = setInterval(auto, 3000); //调用定时器
 }
 
 //点击小按钮，切换图片
 for (var j = 0; j < ol_list.length; j++) {
 	ol_list[j].ind = j; //为每个小按钮添加下标
 	ol_list[j].onclick = function () { //进入点击事件
 		for (var i = 0; i < li_list.length; i++) { //干掉所有人
 			li_list[i].className = '';
 			ol_list[i].className = '';
 		}
 		li_list[this.ind].className = 'active'; //留下我自己
 		ol_list[this.ind].className = 'active'; //留下我自己
 		count = this.ind; // 把当前的角标值赋值给count 希望他从当前再开始
 	}
 }
 
};

// //有个问题,导入js文件不能使用,操作元素的JS需要放在body内或者全局
// document.getElementById(names);
// document.getElementsByClassName('box')[0];
// document.querySelectorAll('#imgul li');
// document.querySelectorAll('ol li');