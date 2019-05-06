window.onload = function () {loadSubtitles(); highlightSelectedTab();};
function highlightSelectedTab(){
    var url = window.location.pathname;
    var href = url.substring(url.lastIndexOf('/')+1);
    let tabs = document.getElementsByClassName("menuItem");
    for(var i = 0; i < tabs.length; i++){
        if(href === tabs.item(i).getAttribute("href")){
            tabs.item(i).style.textDecoration = "underline";
        }
    }
}
function loadSubtitles(){
    let subtitles = document.getElementsByClassName("subtitle");
    for(var i = 0; i < subtitles.length; i++){
        var node = document.createElement("a");
        node.setAttribute("href", "javascript:scrollToSubtitle("+i+")");
        var textnode = document.createTextNode(subtitles.item(i).textContent);
        node.appendChild(textnode);
        document.getElementById("sideNavItems").appendChild(node);
    }
}
function scrollToSubtitle(i){
    let subtitles = document.getElementsByClassName("subtitle");
    let el = subtitles.item(i);
    const offset = el.offsetTop - el.scrollTop - 50;
    document.body.scrollTop = offset;
    document.documentElement.scrollTop = offset;
}
function toggleNav() {
    let nav = document.getElementById("mySidenav");
    let navItems = document.getElementById("sideNavItems");
    let main = document.getElementById("mainText");
    if(nav.style.width === "250px"){
        nav.style.width = "50px";
        main.style.marginLeft= "13%";
        navItems.style.marginLeft = "-500px";
    }else{
        nav.style.width = "250px";
        main.style.marginLeft = "20%";
        navItems.style.marginLeft = "0";
    }
}