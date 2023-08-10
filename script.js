let pass = document.getElementById("pass");
 let cpass = document.getElementById("cpass");

cpass.addEventListener('keyup', (e) => {
    
    if (pass.value!=cpass.value){
        cpass.setCustomValidity("Password does not match");
    }
    else {cpass.setCustomValidity("");

    }
});

function jac(){


    document.getElementsByTagName("left")[0].style.backgroundImage ="url('images/jacob.jpg')";
}

function edw(){


    document.getElementsByTagName("left")[0].style.backgroundImage ="url('images/edw.jpg')";
}