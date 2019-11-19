//事件,鼠标移入导航条时触发鼠标移入事件,执行函数显示菜单
//更改导航条样式:增加head-nav-hover类选择器
//当鼠标移出整个导航条和菜单的部分时,执行鼠标移出事件
//执行函数使菜单消失display:none
//导航条样式恢复,ClassName=''

//获取元素对象    ,head-nav-sales head-nav-dropdown
//导航条li的id 修改li的上边框
//菜单的id获取
var nav_sales=document.getElementById('_j_nav_sales');
console.log(nav_sales);
var nav_sales_menu= document.getElementById('_j_sales_panel');
console.log(nav_sales_menu);



nav_sales.onmouseover = function () {
 nav_sales.className+=' head-nav-hover';
 nav_sales_menu.style.display="block";
}
nav_sales.onmouseout = function () { //鼠标划出，菜单消失
nav_sales.className='head-nav-sales head-nav-dropdown';
nav_sales_menu.style.display="none";
}
