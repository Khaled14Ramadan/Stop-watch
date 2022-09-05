
var d = document.getElementById("di");
var pr = document.getElementById("do");
var start = document.getElementById("start");
var stop = document.getElementById("stop");

d.style.textAlign = "center";
d.style.paddingTop = "50px";
pr.style.fontSize = "40px";

var sec = 0;
var min = 0;
var hour = 0;
function timer()
{
   sec++;
   if(sec>59)
   {
        min++;
        sec = 0;
        if(min>59)
        {
            hour++;
            min=0;
        }
   }

    show();
   
}

show();

function show()
{
    if(parseInt(hour) < 10)
   {
        hour = '0'+ parseInt(hour); 
   }
   if(parseInt(min) < 10)
   {
        min = '0'+ parseInt(min); 
   }
   if(parseInt(sec) < 10)
   {
        sec = '0'+ parseInt(sec); 
   }

   pr.innerHTML = hour +":"+min + ":" + sec;
   console.log(sec)
}

var falg ;
var st = true ;
start.addEventListener('click', function(){
    if(st)
    {
        falg = setInterval(timer , 1000);
        st = false ;
        ////////////////desgin///////////
        start.innerText = "Stop";
        start.classList.remove("btn-info");
        start.classList.add("btn-danger");
    }
    else
    {
        st = true;
        clearInterval(falg);
        ////////////////desgin///////////
        start.innerText = "Start";
        start.classList.remove("btn-danger");
        start.classList.add("btn-info");
    }
});


