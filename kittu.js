const hourE = document.getElementById('hour');
const minT = document.getElementById('mints');
const sec = document.getElementById('second');
const amPm = document.getElementById('ampm');

function update(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    if(h>12){
        h=h-12;
        ampm = 'PM';
    }

    h=h<10?'0'+h : h;
    m=m<10?'0'+m : m;
    s=s<10?'0'+s : s;

    hourE.innerText=h;
    minT.innerText=m;
    sec.innerText=s;
    amPm.innerText=ampm;

    setTimeout(()=>{
      update();
    }, 1000);
}

update();