function public(){
    document.getElementById("public").style.color="black";
    document.getElementById("private").style.color="grey";
    document.getElementById("float-line").style.marginLeft="15%";
    document.getElementById("float-line").style.width="75px";
    document.getElementById("public-nogroup").style.display="none";
    document.getElementById("private-joingroup").style.display="none";
    document.getElementById("private-nogroups").style.display="none";
    document.getElementById("public-groups").style.display="inherit";
    document.getElementById("private-groups").style.display="none";

}
function private(){
    document.getElementById("public").style.color="grey";
    document.getElementById("private").style.color="black";
    document.getElementById("float-line").style.marginLeft="62%";
    document.getElementById("float-line").style.width="85px";
    document.getElementById("public-nogroup").style.display="none";
    document.getElementById("private-joingroup").style.display="none";
    document.getElementById("private-nogroups").style.display="none";
    document.getElementById("public-groups").style.display="none";
    document.getElementById("private-groups").style.display="inherit";

}
function join(){
    document.getElementById("public-nogroup").style.display="none";
    document.getElementById("private-joingroup").style.display="inherit";
    document.getElementById("private-nogroups").style.display="none";
    document.getElementById("public-groups").style.display="none";
    document.getElementById("private-groups").style.display="none";
}
function chat(){
    document.getElementById("chat").style.color="black";
    document.getElementById("people").style.color="rgb(165, 165, 165)";
    document.getElementById("float-line2").style.marginLeft="31.8%";
    document.getElementById("float-line2").style.width="85px";
    document.getElementById("people-online-none").style.display="none";
    document.getElementById("chats").style.display="none";
    document.getElementById("group-chats").style.display="inherit";
}
function people(){
    document.getElementById("chat").style.color="rgb(165, 165, 165)";
    document.getElementById("people").style.color="black";
    document.getElementById("float-line2").style.marginLeft="43.8%";
    document.getElementById("float-line2").style.width="95px";
    document.getElementById("chats").style.display="none";
    document.getElementById("people-online-none").style.display="inherit";
    document.getElementById("group-chats").style.display="none";
}
function cancel(){
    document.getElementById("group-available").style.display="none";
    document.getElementById("full").style.filter="none";
}
function groups(){
    document.getElementById("group-available").style.display="inherit";
    document.getElementById("full").style.filter="blur(2px)";
}
function joingroup(){
    document.getElementById("public-nogroup").style.display="none";
    document.getElementById("private-joingroup").style.display="none";
    document.getElementById("private-nogroups").style.display="none";
    document.getElementById("public-groups").style.display="inherit";
    document.getElementById("private-groups").style.display="none";
    document.getElementById("group-available").style.display="none";
    document.getElementById("full").style.filter="none";
}
function group(){
    document.querySelectorAll("group-info").style.cssText="background-color:red;border-right:4px solid black;color:white;"
    document.getElementById("group-bio").style.cssText="color:white;"
}