$(".nav li a").hover(function(){
	$($(this).children()).css("width","100%");
},function(){
	$($(this).children()).css("width","0px");
})
$(".nav li a").click(function(){
	$(".nav li a").removeClass("active");
	$(this).addClass("active");
})
var arr=["Friends","Family","Office"];
var n=0;
var m=0;
var a=0;
function exchange(){
	if(arr[n].length==m){
		var str=arr[n].slice(0,-a-1);
		a++;
		if(str.length==0){
			n++;//1
			m=0;
			a=0;
			if(n==3){
				n=0;
			}
		}
	}else{
		var str=arr[n].slice(0,m+1);
		m++;
	}
	$("i").html(str);
}
setInterval(function(){
	exchange();
},500)
var index=0;
function lunbo(){
	index++;
	if(index==4){
		index=0
	}
	$(".special .lunbo .md").css("margin-left",-index*3.80+"rem");
	if(index==2){
		$(".special ul li").attr("class","");
		$($(".special ul li")[index-1]).attr("class","bg_color");
	}else if(index==0){
		$(".special ul li").attr("class","");
		$($(".special ul li")[index]).attr("class","bg_color");
	}
}
var timer=setInterval(function(){
	lunbo();
},2500)
$(".special .lunbo .md").mouseenter(function(){
	clearInterval(timer);
	timer=null;
})
$(".special .lunbo .md").mouseleave(function(){
	timer=setInterval(function(){
		lunbo();
	},2500);
})
$("#menu .row .col-lg-3").click(function(){
	$(this).siblings().removeClass("bg_color");
	$(this).addClass("bg_color");
	$(this).siblings().removeClass("click");
	$(this).addClass("click");
	$("#menu .row .col-lg-3 h3").removeClass("border_active");
	$($(this).children()[0]).addClass("border_active");
	var index=$(this).index()*($("#menu .max .middle .row")[0].offsetWidth-30);
	$("#menu .max .middle").css("margin-left",(-index)/100+"rem");
})
$("#team .team_box dl").hover(function(){
	$($(this).children()[1]).addClass("bg_color");
	$($(this).children()[2]).addClass("bg_color");
	$($(this).children()[3]).addClass("bg_color");
	$($(this).children()[1]).css("color","#fff");
	$($(this).children()[2]).css("color","#fff");
},function(){
	$($(this).children()[1]).removeClass("bg_color");
	$($(this).children()[2]).removeClass("bg_color");
	$($(this).children()[3]).removeClass("bg_color");
	$($(this).children()[1]).css("color","");
	$($(this).children()[2]).css("color","");
})
$(document).ready(function(){
    var OclientX,
        OclientY,
        NclientX,
        NclientY,
        flag = false,
    	p=0,
        obj = $(".middle");
    var index=$("#menu .max .middle .row")[0].offsetWidth-30; 
        obj.mousedown(function(e){
            flag = true;    //鼠标按下后改变可拖动状态
            e = e || event;
            OclientX = e.pageX - $(this).offset().left;    
            return false;
        });
         
        obj.mousemove(function(e){
            return false;
        });
         
        obj.mouseup(function(e){
        	e = e || event;
            NclientX = e.pageX;
            NclientY = e.pageY;
            if(flag){
                clientX = (NclientX - OclientX - $(this).offset().left);   
                if(clientX<0&&p<3){
                	p++;
                	$(this).css("margin-left",(-index*p)/100+"rem");
                	
                }else if(clientX>0&&p>0){
                	p--;
                	$(this).css("margin-left",(-index*p)/100+"rem");
                }
                $("#menu .row .col-lg-3").removeClass("bg_color");
				$($("#menu .row .col-lg-3")[p]).addClass("bg_color");
				$("#menu .row .col-lg-3").removeClass("click");
				$($("#menu .row .col-lg-3")[p]).addClass("click");
				$("#menu .row .col-lg-3 h3").removeClass("border_active");
				$("#menu .row .col-lg-3:eq("+p+") h3").addClass("border_active");
            }
            flag = false;    //松开鼠标改变可拖动装状态
            return false;
        });
         
    });
$(".date").click(function(){
	laydate({
		istoday:false,
		format:"YYYY年MM月DD日",
		istime:true
	});				
})
$(".maodian").click(function(){
    $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top)},500);
});
var flag=true;
$("section a").click(function(){
	if(flag){
		$("section").css("right","0");
		flag=false;
	}else{
		$("section").css("right","-1.8rem");
		flag=true;
	}	
})
var arr_color=["#e75b1e","#1E69B8","#8dc63f","#fdcb03"];
$("section .select_color b").click(function(){
	var sheet=document.styleSheets[1];
	var rules=sheet.cssRules||sheet.rules;
	var rule=rules[17];
	var index=$(this).index()-1;
	$(".text_color").css("color",arr_color[index]);
	rule.style.cssText="background:"+ arr_color[index]+ " !important";
	$(".borde_color").css("border","1px solid "+arr_color[index]);
	$("header img").attr("src","img/logo"+(index+1)+".png");
	$("footer img").attr("src","img/logo"+(index+1)+".png");
})
$(window).scroll(function(){
	if($(window).scrollTop()>=$("header nav").height()){
		$("header nav").addClass("navbar-inverse");
		$("header nav").addClass("navbar-fixed-top");
	}else{
		$("header nav").removeClass("navbar-inverse");
		$("header nav").removeClass("navbar-fixed-top");
	}

})
