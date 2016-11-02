var login = new Object();

login.login = function(){
    var userName = $("#userName").val();
	var passWord = $("#passWord").val();
//    var Url ;
    
    if(login.checkUserName(userName)&&login.checkPassWord(passWord)){
        console.log('表单提交到后台!')
//        $.ajax({
//            url: Url,
//            type: 'POST',
//            dataType: "json",
//            data: {
//                userName: userName,
//                passWord: passWord,
//            },
//            async: false,
//            success: function(data) {
//                console.log('success!');
//            },
//            error: function() {
//                console.log('error!');
//            }
//        });
    }else{
        index.view('.all-mask',0.6);
        index.view('.error-modal',1);
        $(document.body).addClass('noMove');//当有遮罩层的时候无法进行滚动
    }
}

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