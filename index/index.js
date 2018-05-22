window.onload=function () {
    let banner=document.querySelector('.banner');
    console.log(banner);
    let bPic=document.querySelectorAll('.banner>.pic');
    let bBtn=document.querySelectorAll('.picbtn>.btn');
    //图片自动轮播
    let index=0;
    let t=setInterval(move,3000);
     function move() {
        index++;
        if (index===bPic.length) {
            index=0;
        }
         for (let i=0;i<bPic.length;i++) {
            animate(bPic[i],{opacity:0});
            bBtn[i].classList.remove('hot');
            animate(bPic[index],{opacity:1});
            bBtn[index].classList.add('hot');
         }
    }
//   点击轮播点转换图片以及轮播点
    for (let i=0;i<bBtn.length;i++){
         bBtn[i].onclick=function () {
             for (let j=0;j<bBtn.length;j++){
                 bBtn[j].classList.remove('hot');
                 animate(bPic[j],{opacity:0})
             }
             bBtn[i].classList.add('hot');
             animate(bPic[i],{opacity:1});
             index=i;
         }
    }
    //    鼠标移入时图片停止轮播
    banner.onmouseenter=function(){
        clearInterval(t);
    }
    //鼠标移出时继续轮播
    banner.onmouseleave=function(){
        t=setInterval(move,3000);
    }
//   新闻资讯
    let xwBtn=document.querySelectorAll('.xwBtn>i');
     let xwKuai=document.querySelector('.xwKuai');console.log(xwKuai);
    let xwKs=document.querySelectorAll('.xwKuai>.xwK');
    let lw=(parseInt(getComputedStyle(xwKs[0],null).width)+parseInt(getComputedStyle(xwKs[0],null).marginRight))*4
    let times=0;
    let maxtimes=xwKs.length/4;
    xwBtn[0].onclick=function () {
            if (++times === maxtimes){
                times = maxtimes-1;
            }
        xwKuai.style.transform=`translateX(${-times*lw}px)`;
    }
   xwBtn[1].onclick=function () {
        if (--times <0){
            times = 0;
        }
        xwKuai.style.transform=`translateX(${-times*lw}px)`;
    }
//产品展示：
    let box=document.querySelectorAll(' .cpP0pic ' );
    console.log(box);
    let opacity=document.querySelectorAll('.opacity');
    console.log(opacity);
for (let i=0;i<box.length;i++){
    box[i].onmouseenter=function(){
        opacity[i].style.display='block';
    }
    //// 鼠标在遮罩里面移出时，隐藏
    box[i].onmouseleave=function(){
        opacity[i].style.display='none';
    }
}






}