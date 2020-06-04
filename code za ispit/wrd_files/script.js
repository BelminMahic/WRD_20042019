//1 Zuti okvir


var okvir=document.querySelectorAll(".VilaKolonaOkvir");

for(var i=0;i<okvir.length;i++)
{
    okvir[i].addEventListener("click",function()
    {
        this.style.borderStyle="solid";
        this.style.borderWidth="3px";
        this.style.borderColor="yellow";
    });
}