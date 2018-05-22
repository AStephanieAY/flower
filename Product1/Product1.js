window.onload=function () {
    let pN1BPic=document.querySelectorAll('.pimgBox');
    let pN1Box=document.querySelector('.pN1Box');
    let current1=0
    let current2=1
    let next=1
    let lb=setInterval(move ,2000)
    function move(){
        next++
        if (next === pN1BPic.length) {
            next=0
        }
        pN1BPic[next].style.left='1000px'
        animate(pN1BPic[current1],{left:-500})
        animate(pN1BPic[current2],{left:0})
        animate(pN1BPic[next],{left:500},function () {
            flag=true
        })
        current1=current2
        current2=next
    }


}