let global_nnb_content;
function nnb_start(mainDivID, nnb_content) {


    global_nnb_content = nnb_content;
    var defaultSelected = nnb_content.selected_tab || 0;

    let countTab = 0;
    if (!defaultSelected) {
         defaultSelected = 0;
    }

    if (nnb_content.alwaysOnTop)
        document.documentElement.style.setProperty('--bar_position', "fixed");


    var bigDiv = document.getElementById(mainDivID)

    var maindiv = document.createElement("div");
    maindiv.classList.add("topnav")
    maindiv.id = "nnb_topbar"

    var rightdiv = document.createElement("div");


    var alreadySpaced = false;
    var alreadyMainIcon = false;
    for (let i = 0; i < nnb_content.header_tabs.length; i++) {
        if (global_nnb_content.header_tabs[i].selectionable == undefined) global_nnb_content.header_tabs[i].selectionable = true;
        if (global_nnb_content.header_tabs[i].innerText == undefined) global_nnb_content.header_tabs[i].innerText = global_nnb_content.header_tabs[i].tabName;
        if (global_nnb_content.header_tabs[i].showInWrapped) alreadyMainIcon = true;

        if (nnb_content.header_tabs[i].oriented == "right" && !alreadySpaced) {
            alreadySpaced = true;
            maindiv.appendChild(generateBlankSpace(0));
        }

        if (!nnb_content.header_tabs[i].type || nnb_content.header_tabs[i].type == "tab") {

            if (nnb_content.header_tabs[i].oriented == "right") {
                rightdiv.appendChild(generateTab(nnb_content.header_tabs[i], countTab == defaultSelected));
            } else {
                maindiv.appendChild(generateTab(nnb_content.header_tabs[i], countTab == defaultSelected));
            }

            if (countTab == defaultSelected && nnb_content.header_tabs[i].body_div)
                nnb_div(nnb_content.header_tabs[i].body_div)
            countTab++;
        } else if (nnb_content.header_tabs[i].type == "icon") {

            if (nnb_content.header_tabs[i].oriented == "right") {
                rightdiv.appendChild(generateIcon(nnb_content.header_tabs[i]));
            } else {
                maindiv.appendChild(generateIcon(nnb_content.header_tabs[i]));
            }


        }

    }
    rightdiv.classList.add("nnb_right");
    maindiv.appendChild(rightdiv);
    maindiv.appendChild(generateBlankSpace(1));

    let hamburguer = document.createElement("button");
    hamburguer.id = "nnb_hamburguer"
    let height = getComputedStyle(document.documentElement).getPropertyValue('--wrapped_icon_height');
    hamburguer.innerHTML = '<svg style="pointer-events: none; xmlns="http://www.w3.org/2000/svg" height = "' + height + '" viewBox="0 0 30 30"><rect class="nnb-bar-icon" x="2" y="1.5" width="26" height="3"/><rect class="nnb-bar-icon" x="2" y="9.5" width="26" height="3"/><rect class="nnb-bar-icon" x="2" y="17.5" width="26" height="3"/><rect class="nnb-bar-icon" x="2" y="25.5" width="26" height="3"/></svg>';
    hamburguer.classList.add("nnb_hamburger")
    hamburguer.setAttribute("onclick", 'toogleHamburguer()');
    maindiv.appendChild(hamburguer);


    let margin = document.createElement("div");
    margin.classList.add("nnb_margin")
    margin.id = "nnb_margin";

    bigDiv.appendChild(maindiv);
    bigDiv.appendChild(margin);

    if (!alreadyMainIcon) {
        let upMargin = document.createElement("div");
        upMargin.classList.add("nnb_top_margin");
        maindiv.insertBefore(upMargin, maindiv.firstChild)
    }
    
    window.addEventListener("click", function (event) {

        if (!event.target.classList.contains("nnb_hamburger") && !nnb_hamburger_status) {
            if (event.target.classList.contains("nnb_active") || event.target.classList.contains("nnb_no_active")) {
                if (nnb_content.wrap_on_click) {
                    toogleHamburguer();
                }
            } else {
                toogleHamburguer();
            }
        }
    });

    window.addEventListener('resize', resizeEvent);
    resizeEvent();

}

function resizeEvent() {
    let x = document.getElementById("nnb_topbar")
    let y = document.getElementById("nnb_margin")
    y.style.height = x.offsetHeight + "px";
}

function generateBlankSpace(index) {
    var a = document.createElement("a");
    a.classList.add("nnb_space");
    a.classList.add("nnb_show_or_hide");
    a.id = "nnb_space" + index;

    if (index == 0) {
        var b = document.createElement("a");
        b.classList.add("nnb_line");
        a.appendChild(b);
    }
    return a;
}

function generateIcon(nnb_tab) {
    var a = document.createElement("a");
    a.classList.add("nnb_icon");
    a.id = "nnb_" + nnb_tab.tabName + "_icon";

    if (!nnb_tab.showInWrapped)
        a.classList.add("nnb_show_or_hide");

    let funcs = "";
    if (nnb_tab.tabselect && nnb_tab.selectionable) {
        funcs += "nnb_select('nnb_" + nnb_tab.tabselect + "_tab');"
        a.href = nnb_tab.href || "#";
    }
    if (nnb_tab.function)
        funcs += "nnb_function('" + nnb_tab.tabName + "');"

    if (nnb_tab.body_div)
        funcs += "nnb_div('" + nnb_tab.body_div + "');"

    if (funcs != "")
        a.setAttribute("onclick", funcs)

    var b = document.createElement("img");
    if (nnb_tab.height) {
        let bar_height = getComputedStyle(document.documentElement).getPropertyValue('--bar_height');
        //a.style.height = bar_height
        b.style.height = "100%"
        b.style.width = nnb_tab.height
        b.style.padding = "0%"
    }

    if (nnb_tab.class)
        a.classList.add(nnb_tab.class)

    b.src = nnb_tab.icon_src;

    a.append(b);

    //  if (nnb_tab.oriented == "right") a.classList.add("nnb_right");
    return a;
}

function generateTab(nnb_tab, isSelected) {

    var a = document.createElement("a");
    a.classList.add(isSelected ? "nnb_active" : "nnb_no_active");
    a.classList.add("nnb_show_or_hide");
    a.id = "nnb_" + nnb_tab.tabName + "_tab";

    var funcs = "";

    if (nnb_tab.selectionable || nnb_tab.function)
        a.href = nnb_tab.href || "#";

    if (nnb_tab.selectionable)
        funcs += "nnb_select('nnb_" + (nnb_tab.tabselect ? nnb_tab.tabselect : nnb_tab.tabName) + "_tab');"

    if (nnb_tab.function)
        funcs += "nnb_function('" + nnb_tab.tabName + "');"

    if (nnb_tab.body_div)
        funcs += "nnb_div('" + nnb_tab.body_div + "');"

    if (funcs != "")
        a.setAttribute("onclick", funcs)

    if (nnb_tab.class)
        a.classList.add(nnb_tab.class)

    if (nnb_tab.icon_src) {
        var h = nnb_tab.height ? nnb_tab.height : getComputedStyle(document.documentElement).getPropertyValue('--liveSVG_icon_height')
        if (nnb_tab.liveSVG) {
            setInnerSVG(nnb_tab.icon_src, a, h)
        } else {
            var b = document.createElement("img");
            b.src = nnb_tab.icon_src;
            b.setAttribute("height", '100%')
            b.setAttribute("width", h)
            a.append(b);
        }
    }

    a.innerHTML += nnb_tab.innerText;

    // if (nnb_tab.oriented == "right") a.classList.add("nnb_right");
    return a;
}

function nnb_div(divname) {
    for (let i = 0; i < global_nnb_content.body_divs.length; i++) {
        let show = divname == global_nnb_content.body_divs[i];
        var x = document.getElementById(global_nnb_content.body_divs[i]);
        x.style.display = show ? "block" : "none";
    }
}


function nnb_select(tab_name) {

    let a = document.getElementById(tab_name)
    for (let i = 0; i < global_nnb_content.header_tabs.length; i++) {
        let id0 = "nnb_" + (global_nnb_content.header_tabs[i].tabselect ? global_nnb_content.header_tabs[i].tabselect : global_nnb_content.header_tabs[i].tabName) + "_tab";
        let b = document.getElementById(id0);
        b.classList.add(a.id == id0 ? "nnb_active" : "nnb_no_active");
        b.classList.remove(a.id == id0 ? "nnb_no_active" : "nnb_active");
    }

}

function nnb_function(element_name) {
    var found = global_nnb_content.header_tabs.find(function (element) {
        return element.tabName == element_name;
    });
    found.function();
}

var nnb_hamburger_status = true;
function toogleHamburguer() {
    let a = document.getElementById("nnb_hamburguer");
    let height = getComputedStyle(document.documentElement).getPropertyValue('--wrapped_icon_height');

    if (nnb_hamburger_status)
        a.innerHTML = '<svg style="pointer-events: none;" xmlns="http://www.w3.org/2000/svg" height = "' + height + '" viewBox="0 0 30 30"><polygon class="nnb-bar-icon" points="25.25 6.87 23.13 4.75 15 12.88 6.87 4.75 4.75 6.87 12.88 15 4.75 23.13 6.87 25.25 15 17.12 23.13 25.25 25.25 23.13 17.12 15 25.25 6.87"/></svg>';
    else
        a.innerHTML = '<svg style="pointer-events: none;" xmlns="http://www.w3.org/2000/svg" height = "' + height + '" viewBox="0 0 30 30"><rect class="nnb-bar-icon" x="2" y="1.5" width="26" height="3"/><rect class="nnb-bar-icon" x="2" y="9.5" width="26" height="3"/><rect class="nnb-bar-icon" x="2" y="17.5" width="26" height="3"/><rect class="nnb-bar-icon" x="2" y="25.5" width="26" height="3"/></svg>';

    nnb_hamburger_status = !nnb_hamburger_status;

    for (let i = 0; i < global_nnb_content.header_tabs.length; i++) {
        let id0 = "nnb_" + global_nnb_content.header_tabs[i].tabName + "_";
        id0 += (global_nnb_content.header_tabs[i].type ? global_nnb_content.header_tabs[i].type : "tab")
        let b = document.getElementById(id0);
        if (!global_nnb_content.header_tabs[i].type || global_nnb_content.header_tabs[i].type == "tab") {
            b.classList.toggle("nnb_show_or_hide");
        } else {
            if (!global_nnb_content.header_tabs[i].showInWrapped) {
                b.classList.toggle("nnb_show_or_hide")
                b.classList.add("nbb_wrapped_icon")
            }
        }
    }
    document.getElementById("nnb_space0").classList.toggle("nnb_show_or_hide");
    document.getElementById("nnb_space1").classList.toggle("nnb_show_or_hide");
}

function setInnerSVG(url, a, h) {
    new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {

                let r = xhr.response;
                r = r.replace(/<defs>.*<\/defs>/, '')
                var temp = document.createElement('div');
                temp.innerHTML = r;
                var htmlObject = temp.firstChild;

                htmlObject.setAttribute("height", '100%')
                htmlObject.setAttribute("width", h || getComputedStyle(document.documentElement).getPropertyValue('--liveSVG_icon_height'))
                a.insertBefore(htmlObject, a.firstChild)
            }
        };
        xhr.send();
    });
}