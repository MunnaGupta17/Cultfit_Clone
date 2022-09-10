function muteUnmute() {
    var video = document.getElementById('information-video');
    var img = document.getElementById('video-sound');
    if (video.muted) {
        video.muted = !video.muted;
        img.src = "https://static.cure.fit/assets/images/volume-up-outline.svg";
    }
    else {
        video.muted = !video.muted;
        img.src = "https://static.cure.fit/assets/images/volume-off-outline.svg";
    }
}

function hovereffect(a, b, c) {
    var liveDiv1 = document.querySelector(a);
    var liveDiv2 = document.querySelector(b);
    var liveDiv3 = document.querySelector(c);

    var w = window.innerWidth;
    if (w <= 780) {
        smallhovereffect(a, b, c);
        return;
    }

    liveDiv1.style.width = "60%";
    liveDiv1.style.height = "100%";
    liveDiv1.style.backgroundPosition = "0px 0px"


    liveDiv2.style.width = "20%";
    liveDiv2.style.height = "100%";
    liveDiv2.style.backgroundPosition = "86% 0px";


    liveDiv3.style.width = "20%";
    liveDiv3.style.height = "100%";
    liveDiv3.style.backgroundPosition = "86% 0px";

    dispalyManager(a, b, c);
}

function smallhovereffect(a, b, c) {
    var liveDiv1 = document.querySelector(a);
    var liveDiv2 = document.querySelector(b);
    var liveDiv3 = document.querySelector(c);

    liveDiv1.style.height = "60%";
    liveDiv1.style.width = "100%";


    liveDiv2.style.height = "20%";
    liveDiv2.style.width = "100%";


    liveDiv3.style.height = "20%";
    liveDiv3.style.width = "100%";

    dispalyManager(a, b, c);
}



function dispalyManager(a, b, c) {
    var hide1 = document.querySelector(`${a}-hide`);
    var hide2 = document.querySelector(`${b}-hide`);
    var hide3 = document.querySelector(`${c}-hide`);

    hide1.style.display = "inherit";
    hide2.style.display = "none";
    hide3.style.display = "none";
}

function applestore() {
    window.open("https://apps.apple.com/us/app/cure-fit/id1217794588");
}

function playsotre() {
    window.open("https://play.google.com/store/apps/details?id=fit.cure.android");
}

function business() {
    window.open("https://business.cult.fit/");
}

function cultPage() {
    var login = document.getElementById('login-text');
    if (login.innerHTML == "Login") {
        fetchLoginPage();
    }
    else {
        window.location.href = "./Cultfit-project/home_cult_cultCenters.html"
    }
}


// ---------Log in---------- \\ 

let clickCount = 0;

function fetchLoginPage() {
    clickCount++;
    if (clickCount % 2 == 0) {
        let x = document.getElementById('user-info-popup');
        x.style.display = "none";
        return;
    }
    var login = document.getElementById('login-text');
    if (login.innerHTML != "Login") {
        let x = document.getElementById('user-info-popup');
        x.style.display = "inherit";
        return;
    }

    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById('login-page');
    popup.classList.toggle('active');
}

function logout() {
    let currentUser = {
        name: "Login"
    }

    localStorage.setItem('cultUserName', JSON.stringify(currentUser));
    window.location.href = "./Cultfit-project/home.html";
}

function displayCart() {
    var cart = document.querySelector('.Cart-container');
    cart.style.display = "inherit";
}

function hideCart() {
    var cart = document.querySelector('.Cart-container');
    cart.style.display = "none";
}

function verifyLogin() {

    let phone = document.getElementById('login-phone').value;
    let password = document.getElementById('login-password').value;

    let data = JSON.parse(localStorage.getItem('cultFitUsers'));

    if (data == null) {
        alert("Invalid Credentials!");
        return;
    }

    if (data[phone] == undefined) {
        alert("Invalid Credentials!");
    }
    else {
        if (data[phone].password == password) {
            var login = document.getElementById('login-text');

            if (login.innerHTML == "Login") {
                let currentUser = data[phone];

                localStorage.setItem('cultUserName', JSON.stringify(currentUser));
            }
            else {
                alert("User already logged in");
            }
            window.location.href = "./Cultfit-project/home.html";
        }
        else {
            alert("Invalid Credentials!");
        }
    }

}


let check = JSON.parse(localStorage.getItem('cultUserName'));
if (check != null) {
    var login = document.getElementById('login-text');
    login.innerHTML = `${check.name}`;
}

function showHidePassword(id) {
    let input = document.getElementById('login-password');
    let passwordType = document.getElementById(id);
    if (input.type == 'password') {
        input.type = "text";
        passwordType.removeAttribute('class');
        passwordType.setAttribute('class', 'far fa-eye');
    }
    else {
        input.type = 'password';
        passwordType.removeAttribute('class');
        passwordType.setAttribute('class', 'far fa-eye-slash');
    }
}


// -------------- cart js ------------- \\
var borderBottomAchor = document.getElementById('eatfit');
function underline(x) {
    var a = document.getElementById(x);
    borderBottomAchor.style.borderBottom = "none";
    borderBottomAchor.style.fontWeight = "500";

    borderBottomAchor = a;
    borderBottomAchor.style.fontWeight = "bolder";
    a.style.borderBottom = "2px solid rgb(255, 50, 120)";

    var cartImg = document.getElementById('cart-img-1');
    var cartDes = document.getElementById('cart-description');

    if (x == "cultgear") {
        cartImg.style.display = "none";
        cartDes.style.display = "none";
    }
    else {
        cartImg.style.display = "inherit";
        cartDes.style.display = "inherit";
    }
}




// ---------Location pop up---------- \\

function locationUpdate(x) {
    var a = document.getElementById('location-popup');
    a.style.display = "none";

    var b = document.getElementById('change-location-navbar');
    b.innerText = x;
}

function displayLocation(x) {
    var a = document.getElementById('location-popup');
    a.style.display = "inherit";
}
