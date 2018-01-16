/**
 * Created by dell on 2018/1/15.
 */
var oPrev=document.getElementById('prev');
var oNext=document.getElementById('next');
var oSlip=document.getElementById('slip');
var aContent=oSlip.getElementsByClassName('content')[0];
var aImg=aContent.getElementsByTagName('img');
var iNow=0;
oPrev.onclick=function () {
    iNow--;
    if(iNow<0){
        iNow=aImg.length-1;
    }
    for (var i=0;i<aImg.length;i++){
        aImg[i].className=''
    }
    aImg[iNow].className='slipimg';
};
oNext.onclick=function () {
        iNow++;
        if(iNow>=aImg.length){
            iNow=0
        }
        for (var i=0;i<aImg.length;i++){
            aImg[i].className=''
        }
        aImg[iNow].className='slipimg';
    }
