$(function(){
	//轮播图
	var t;
	var index = 0;
	//自动播放
	t = setInterval(play, 3000)
	function play() {
	    index++;
	    if (index > 3) {
	        index = 0
	    }
	    // siblings  找到 兄弟节点(不包括自己）
	    $("#lunb ul li ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	};
})
