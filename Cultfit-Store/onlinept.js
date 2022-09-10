var countDownDate = new Date("Jan 6, 2022 20:23:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var span = document.createElement('span')
  span.id = " : ";
  span.style.color = 'gray';
  document.getElementById("timercountdown").innerHTML =hours+ span.id + minutes+ span.id + seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


var rotateDropDown = -180;
    function dropdowneffect(x) {
        var img = document.getElementById(x);
        img.style.transform = `rotate(${rotateDropDown}deg)`;
        var dropdown = document.getElementById('dropdown-links');
        if (rotateDropDown == -180) {
            rotateDropDown = 0;
            dropdown.style.display = "inline";
        }
        else {
            rotateDropDown = -180;
            dropdown.style.display = "none";
        }
    }

    // ----------login pop up--------- \\

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
        window.location.href = "onlinept.html";
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
                window.location.href = "onlinept.html";
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





    //------------- Cart js ----------\\
    function displayCart() {
        var cart = document.querySelector('.Cart-container');
        cart.style.display = "inherit";
    }

    function hideCart() {
        var cart = document.querySelector('.Cart-container');
        cart.style.display = "none";
    }



    // cart js
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
