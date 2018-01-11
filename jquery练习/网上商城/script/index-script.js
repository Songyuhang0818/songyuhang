/**
 * Created by dell on 2017/12/3.
 */
// 文本框
$(function () {
    $('#inputSearch').focus(function () {
        $(this).addClass('focus');
        if($(this).val()==this.defaultValue){
            $(this).val('');
        }
    }).blur(function () {
        $(this).removeClass('focus');
        if($(this).val()==''){
            $(this).val(this.defaultValue)
        }
    }).keyup(function (e) {
        if(e.which==13){
            alert('已提交表单!')
        }
    })
});
// 文本框
// 网页换肤
$(function () {
    $('#skin li').on('click',function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        var skinName=$(this).attr('id')
        $("#cssfile").attr("href","styles/skin/"+ skinName +".css");
    })
});
// 网页换肤
// 导航栏
$(function () {
    $('.nav li').hover(function () {
        $(this).find('.jnNav').show();
    },function () {
        $(this).find('.jnNav').hide();
    })
});
// 导航栏
// 轮播图
$(function () {
    var $jnImageroll_a=$('#jnImageroll div a');
    $jnImageroll_a.css('opacity','0.7');
    var len=$jnImageroll_a.length;
    var index=0;
    var adTimer=null;
    $jnImageroll_a.mousemove(function () {
        index=$jnImageroll_a.index(this);
        showImg(index);
    }).eq(0).mouseover();
    function showImg(index) {
        var $jnImageroll=$('#jnImageroll');
        var $rolllist=$jnImageroll.find('div a');
        $("#JS_imgWrap").find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
        $rolllist.removeClass("chos").css("opacity","0.7").eq(index).addClass("chos").css("opacity","1");
    }
    $jnImageroll_a.hover(function () {
        if(adTimer){
            clearInterval(adTimer)
        }
    },function () {
        adTimer=setInterval(function () {
            showImg(index);
            index++;
            if(index==len){
                index=0;
            }
        },1000);

    })
});
// 轮播图
// hot
$(function () {
    $('.promoted').append('<span class="hot"></span>');
});

// hot
// 超文本
$(function () {
    var x=10;
    var y=20;
    $('.tooltip').hover(function (e) {
        this.myTitle=this.title;
        this.title='';
        var tooltip="<div id='tooltip'>"+this.myTitle+"</div>"
        $('body').append(tooltip);
        $('#tooltip').css({
            'top':(e.pageY+y)+'px',
            'left':(e.pageX+x)+'px',

        }).show('fast');
    },function (e) {
        this.title=this.myTitle;
        $('#tooltip').remove();
    }).mousemove(function(e){
        $("#tooltip")
            .css({
                "top": (e.pageY+y) + "px",
                "left":(e.pageX+x) + "px"
            });
    });
});
// 超文本
// 横向滚动
$(function () {
    var index=0;
    $('#jnBrandTab li').on('click',function () {
        var $jnBrandTabli=$('#jnBrandTab li');
        var lenth=$jnBrandTabli.length
        $(this).addClass('chos').siblings().removeClass('chos');
        index++;
        if(index>lenth){
            index=1
        };
        console.log(index)
        $("#jnBrandList").animate({left: -(index-1)*780+'px'})
    }).eq(0).click();
});
// 横向滚动