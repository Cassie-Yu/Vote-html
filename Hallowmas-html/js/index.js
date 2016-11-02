$(function(){
    index.click();
})

var index = new Object();

index.click = function(){
    
    $(document.body).removeClass('noMove');
    
    index.touch('.btn,.login-btn,.error-button','#41271a','#52382b');
    
    $(document).on('click','.btn',function(){
        index.view('.all-mask',0.6);
        index.view('.sure-modal',1);
        $(document.body).addClass('noMove');//当有遮罩层的时候无法进行滚动
    })
    
    index.touch('.cancel-button,.sure-button','#ccc','#fff');
    
    $(document).on('click','.cancel-button,.error-button',function(){
        $('.sure-modal,.error-modal,.all-mask').addClass('hide');
        $(document.body).removeClass('noMove');
    })
}

//模态框和遮罩层动态弹出效果
//target--获取对象模态框或遮罩层
//num--需要最后呈现出的透明度
index.view = function(target,num){
    $(target).removeClass('hide').css('opacity','0').animate({opacity:num});
}

//按钮点击时的样式变化
//target--获取对象按钮
//style1--mousedown时的样式
//style2--mouseup时的样式
index.touch = function(target,style1,style2){
    $(document).on('mousedown',target,function(){
        $(this).css('background-color',style1);
    })
    $(document).on('mouseup mouseout',target,function(){
        $(this).css('background-color',style2);
    })
}
