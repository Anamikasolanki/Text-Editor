function run1(){
    var a = document.getElementById("code").value;
    var b = document.getElementById("result");
    b.innerHTML = a ;
    var c = document.getElementById("code-box");
    c.style.display="none";
    var d = document.getElementById("show");
    d.style.display="block";
    d.setAttribute("class","animate__animated animate__slideInRight");
    var e = document.getElementById("run-btn");
    e.style.display="none";
    var f = document.getElementById("icon");
    f.style.display="block";
}

function run2(){
    var g = document.getElementById("show");
    g.style.display="none";
    var h = document.getElementById("code-box");
    h.style.display="block";
    h.setAttribute("class","animate__animated animate__slideInLeft");
    var i = document.getElementById("icon");
    i.style.display="none";
    var j = document.getElementById("run-btn");
    j.style.display="block";
   
}

