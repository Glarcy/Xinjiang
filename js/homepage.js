function self_adaption () {
    var root=document.getElementById("root");
    var Width=root.clientWidth;
    console.log(Width);
    var rem = Width/100;
    root.style.fontSize=rem+"px";
}