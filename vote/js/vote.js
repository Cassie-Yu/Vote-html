$(function(){
    vote.click();
})

var vote = new Object();

vote.click = function(){
//    点击投票按钮和模态框确认按钮样式变化
    vote.touch('.vote-button,.sure-button,.login-button','#e89104','#ffa00a');
//    点击投票按钮弹出模态框
    $(document).on('click','.vote-button',function(){
    	var a = $(this).parents(".people-box").eq(0);
    	var id = $(a).attr("id");
    	$("#mid").val(id);
    	var people_name = $($(a).find("span")[0]).text();
    	console.log(people_name);
    	$("#vote_people").text(people_name);
        vote.view('.all-mask',0.6);
        vote.view('.sure-modal',1);
        $(document.body).addClass('no-move');//当有遮罩层的时候无法进行滚动
    })
    
//    点击模态框关闭按钮样式变化
    vote.touch('.cancel-button,.error-button','#f5f5f5','#fff');
//    点击模态框关闭按钮模态框和遮罩层消失
    $(document).on('click','.cancel-button,.error-button',function(){
        $('.sure-modal,.error-modal,.all-mask').addClass('hide');
        $(document.body).removeClass('no-move');
    })
}

//模态框和遮罩层动态弹出效果
//target--获取对象模态框或遮罩层
//num--需要最后呈现出的透明度
vote.view = function(target,num){
    $(target).removeClass('hide').css('opacity','0').animate({opacity:num});
}

//按钮点击时的样式变化
//target--获取对象按钮
//style1--touchstart时的样式
//style2--touchend时的样式
vote.touch = function(target,style1,style2){
    $(document).on('touchstart',target,function(){
        $(this).css('background-color',style1);
    })
    $(document).on('touchend',target,function(){
        $(this).css('background-color',style2);
    })
}

$(document).on('click','.sure-button',function(){
    $('.sure-modal,.all-mask').addClass('hide');
    $(document.body).removeClass('no-move');
    var cid=$("#mid").val();
    var vid=$("#vid")[0].value;
    console.log(cid);
    console.log(vid);
    console.log("${ctx}");
	$.ajax({
		type: "post",
		async: true,
	    url: "./sure",
	    data: [{"name":"cid", "value":cid},
	           {"name":"vid", "value":vid}],
	    dataType: "json",
	    success: function (data) {
	    	console.log(data.result);
	    	var time = (new Date()).valueOf();
	    	if (data.result>0) {
	    		window.location.href="./base?time="+time;
	    		//console.log("111");
	        }
	    },
	    error: function (errorMsg) {
	        alert("请求数据失败!");
	    }
	});
})
