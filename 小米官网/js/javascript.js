/**
 * Created by dell on 2017/12/3.
 */
//购物车
var oSearch=document.getElementById('search');
var aInput=oSearch.getElementsByTagName('input')[0];
var aInputBtn=oSearch.getElementsByTagName('input')[1];
var oKeywordsHide=document.getElementById('keywords-hide');
var oSearchHotWords=document.getElementById('search-hot-words');
aInput.onclick=function (e) {
    e=e||window.event;
    e.stopPropagation();
    e.cancelBubble=true;
    aInput.style.border='1px solid #ff6700';
    aInputBtn.style.border='1px solid #ff6700';
    aInputBtn.style.borderLeft='none';
    oKeywordsHide.style.display='block';
    oSearchHotWords.style.display='none';
};
document.onclick=function(){
    aInput.style.border='1px solid #e0e0e0';
    aInputBtn.style.border='1px solid #e0e0e0';
    aInputBtn.style.borderLeft='none';
    oKeywordsHide.style.display='none';
    oSearchHotWords.style.display='block';
};
//购物车
//轮播图
var aLi=document.getElementsByClassName('btns-li');
var oImgbox=document.getElementById('img-box');
var aImg=oImgbox.getElementsByTagName('img');
var aPrevBtn=document.getElementsByClassName('prev-btn')[0];
var aNextBtn=document.getElementsByClassName('next-btn')[0];
var iNow=0;
for(var i=0;i<aLi.length;i++){
    aLi[i].index=i;
    aLi[i].onmouseover=function () {
        for(var j=0;j<aLi.length;j++){

            aLi[j].className="btns-li";
            aImg[j].className='';
        }
        iNow=this.index;
        this.className='btns-li selected';
        aImg[this.index].className='active';
    }
}
aPrevBtn.onclick=function () {
    iNow--;
    if(iNow<=0){
        iNow=aImg.length-1;
    }
    for(var j=0;j<aLi.length;j++){
        aLi[j].className='btns-li';
        aImg[j].className='';
    }
    aLi[iNow].className='btns-li selected';
    aImg[iNow].className='active';
};
aNextBtn.onclick=function () {
    iNow++;
    if(iNow>=aImg.length){
        iNow=0;
    }
    for (var j=0;j<aLi.length;j++){
        aLi[j].className="btns-li";
        aImg[j].className='';
    }
    aLi[iNow].className = 'btns-li selected';
    aImg[iNow].className = 'active';
};
var timer;
run();

oImgbox.onmouseover = function () {
    clearInterval(timer)
};
oImgbox.onmouseout = function () {
    run();
};
function run() {
    timer = setInterval(function () {
        aNextBtn.onclick();
    }, 1000);

}
//轮播图
// 小米明星单品
var oMoreBox=document.getElementById('more-box');
var aIconBack=oMoreBox.getElementsByClassName('icon-back')[0];
var aIconMore=oMoreBox.getElementsByClassName('icon-more')[0];
var oProList=document.getElementById('pro-list');
var aUl=oProList.getElementsByTagName('ul')[0];
aIconBack.onclick=function(){
    aIconBack.className='iconfont icon-back icon-left';
    aIconMore.className='iconfont icon-more icon-active';
    animate(aUl,{left:0});
};
aIconMore.onclick=function () {
    aIconBack.className='iconfont icon-back icon-active icon-left';
    aIconMore.className='iconfont icon-more';
    animate(aUl,{left:-1240});
};
//小米明星单品
//家电
$('#tab-btns1 li').on('mouseover',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.box-right1').eq($(this).index()).addClass('active').siblings().removeClass('active');
});
//家电
//智能
$('#tab-btns2 li').on('mouseover',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.box-right2').eq($(this).index()).addClass('active').siblings().removeClass('active');
});
//智能
// 为你推荐
var oMoreBox1=document.getElementById('more-box1');
var aIconBack1=oMoreBox1.getElementsByClassName('icon-back')[0];
var aIconMore1=oMoreBox1.getElementsByClassName('icon-more')[0];
var oRecommendu=document.getElementById('recommendu');
var aUl1=oRecommendu.getElementsByTagName('ul')[0];
aIconBack1.onclick=function(){
    aIconBack1.className='iconfont icon-back icon-left';
    aIconMore1.className='iconfont icon-more icon-active';
    animate(aUl1,{left:0});
};
aIconMore1.onclick=function () {
    aIconBack1.className='iconfont icon-back icon-active icon-left';
    aIconMore1.className='iconfont icon-more';
    animate(aUl1,{left:-1240});
};
// 为你推荐
// 内容
var oConCarousel1=document.getElementById('con-carousel1');
var aLi1=oConCarousel1.getElementsByTagName('li');
var oConBtnBox1=document.getElementById('con-btn-box1');
var aLi2=oConBtnBox1.getElementsByTagName('li');
var aConPrevBtn=document.getElementsByClassName('con-prev-btn')[0];
var aConNextBtn=document.getElementsByClassName('con-next-btn')[0];
var iNow1=0;
for(var i=0;i<aLi2.length;i++){
    aLi2[i].index=i;
    aLi2[i].onclick=function () {
        for(var j=0;j<aLi2.length;j++){

            aLi2[j].className="";
            aLi1[j].className='';
        }
        iNow1=this.index;
        this.className='btn-active';
        aLi1[this.index].className='selected-con';
    }
}
aConPrevBtn.onclick=function () {
    iNow1--;
    if(iNow1<0){
        iNow1=aLi1.length-1;
    }
    for(var j=0;j<aLi2.length;j++){
        aLi2[j].className='';
        aLi1[j].className='';
    }
    aLi2[iNow1].className='btn-active';
    aLi1[iNow1].className='selected-con';
};
aConNextBtn.onclick=function () {
    iNow1++;
    if(iNow1>=aLi1.length){
        iNow1=0;
    }
    for (var j=0;j<aLi2.length;j++){
        aLi2[j].className='';
        aLi1[j].className='';
    }
    aLi2[iNow1].className='btn-active';
    aLi1[iNow1].className='selected-con';
};


// 内容
