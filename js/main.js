$(document).ready(function () {
    let headerHeigh=$('header').innerHeight(),
        input=$('input'),
        //emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        popup=$('.popup'),
        pId,
        msg,
        timer=30;
    //padding for body    
    $('body').css('paddingTop',headerHeigh+50);

    $(':password').focus();
    
    function animat(id=pId,val=0){
         pId=id;
        // console.log(id,val);
        $(`#${id}`).next().animate({
            'width': `${val}`
        },1000)
    }
   
    input.not('#_submit')
        .focus(
        (e)=>animat(e.target.id,'100%'))
        .blur(function(){
        animat();

        //validate 
        let input=$(this);
       // console.log(input);
        if(input.attr('id')==='_password'){
           input.val().length<3?input.siblings('.error').fadeIn(3000):input.siblings('.error').fadeOut(3000)     
        }
       

    });


 
    $('form').on('submit',function(e){
        e.preventDefault();
        let email=$('#_email'),
            password=$('#_password');
        console.log('Email:',email.val(),'\n','PassWord:',password.val());
        popup.fadeIn(3000);
        email.val('');
        password.val('');
        let popTime=setInterval(() => {
            timer-=1;
            //console.log(timer);
            if(timer==0){
                clearInterval(popTime)
                popup.click();

            }
           
            
        }, 1000);


    })

    //show popup
    popup.click(function(e) {
        $(this).fadeOut(3000);
        //console.log('clock');

    });
    $(".popup .pop-content").click(function(e) {
        e.stopPropagation();
    });

    $(".close").click(function(e) {
        e.preventDefault();
        
        $(this)
            .parents(".popup")
            .fadeOut(3000);
            
    });
    //esc code
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            popup.fadeOut(3000);
        }
    });


    
});