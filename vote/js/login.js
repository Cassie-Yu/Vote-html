var windowHeight;
var windowChangeHeight;

$(function(){
	windowHeight = $(window).innerHeight();
    login.iconChange();
    login.keyBoard();
    $('input:eq(0)').focus(); 
})

var login = new Object();

login.iconChange = function(){
    login.focusOrblur('.useName','./images/icon_name_curr.png','./images/icon_name.png');
    login.focusOrblur('.passWord','./images/icon_password_curr.png','./images/icon_password.png'); 
    $(document).on('click','.login-button',function(){
    	$('.login-logo,.login-title').animate({'margin-top':0});
    	$('#login-form').animate({'margin-top':0});
    })
}

login.login = function(){
    var userName = $("#userName").val();
	var passWord = $("#passWord").val();
    var Url = "./tologin";
    
    if(login.checkUserName(userName)&&login.checkPassWord(passWord)){
        console.log('表单提交到后台!')
        $.ajax({
            url: Url,
            type: 'POST',
            dataType: "json",
            data: {
            	username: userName,
            	password: passWord,
            },
            async: false,
            success: function(data) {14%
            	console.log("data"+data);
                console.log('success!');
                if(1 == data.result){
                	window.location.href="./base";
                }else{
                	vote.view('.all-mask',0.6);
                    vote.view('.error-modal',1);
                }
            },
            error: function() {
                console.log('error!');
                window.document.location.href="./login";
            }
        });
    }else{
        vote.view('.all-mask',0.6);
        vote.view('.error-modal',1);
        $(document.body).addClass('no-move');//当有遮罩层的时候无法进行滚动
    }
}

//target--当前获得失去焦点的输入框对象
//url1--获得焦点时小图标
//url2--失去焦点时小图标
//当输入框获得失去焦点时小图标变化
login.focusOrblur = function(target,url1,url2){
    $(document).on('focus',target,function(){
        $(this).siblings('.icon-box').children('img').attr('src',url1);
        $(this).parents('.input-box').attr('style','border-bottom:1px solid #faaf28');
    })
    $(document).on('blur',target,function(){
        $(this).siblings('.icon-box').children('img').attr('src',url2);
        $(this).parents('.input-box').removeAttr('style');    
    })
}

//判断用户名是否为空
login.checkUserName = function(target){
    var userName = $("#userName").val();
    return login.isNull(userName)? false:true;
}
//判断密码是否为空
login.checkPassWord = function(){
    var passWord = $("#passWord").val();
    return login.isNull(passWord)? false:true;
}

//str--获取需要判断的元素对象
//判断是否为空
login.isNull = function(str) {
	return str == '' || str == undefined || str == NaN ? true : false;
}

login.keyBoard = function(){
    $(window).resize(function(){
    	windowChangeHeight = $(window).innerHeight();
    	keyHeight = windowHeight - windowChangeHeight;
//        console.log(Height);
    	if(keyHeight>0){
    		$('.login-logo,.login-title').animate({'margin-top':-keyHeight/3});
    		$('#login-form').animate({'margin-top':keyHeight/2});
        }else{
        	$('.login-logo,.login-title').animate({'margin-top':0});
        	$('#login-form').animate({'margin-top':0});
        }
    })
}
