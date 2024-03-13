const hour=document.getElementById("hr");
const minute=document.getElementById("min");
const second=document.getElementById("sec");

setInterval(
    function logic(){
       let d=new Date();
        let h=d.getHours();
        let m=d.getMinutes();
        let s=d.getSeconds();
        hour.style.transform=`rotate(${(h+m/60+s/3600)*30}deg)`
        second.style.transform=`rotate(${s*6}deg)`
        minute.style.transform=`rotate(${(m+s/60)*6}deg)`
   },1000


)