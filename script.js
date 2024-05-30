function signup()
{
    var ufn = document.getElementById("fname").value;
    var umn = document.getElementById("mname").value;
    var uln = document.getElementById("lname").value;
    var umail = document.getElementById("email").value;
    var upass = document.getElementById("pword").value;
    var unum = document.getElementById("cnumber").value;
    var usex = sex();
    var usupp = document.getElementById("support").value;
    var ufoc = document.getElementById("foundoc").value;

    if ((ufn == ""))||(umn == "")||(uln="")||(umail="")||(usupp=="")||(usex="")
        {
            if (ufn == "")
                {
                    document.getElementById(".").innerHTML = "REQUIRED" ;
                }
            if (umn == "")
                {
                    document.getElementById(".").innerHTML = "REQUIRED";
                }
            if (uln == "")
                 {
                    document.getElementById(".").innerHTML = "REQUIRED";
                 }        
            if (umail == "")
                {
                    document.getElementById(".").innerHTML = "REQUIRED";
                }
            if(usupp == "")
                {
                    document.getElementById(".").innerHTML = "REQUIRED";
                }
            if (usex == "")
                {
                    document.getElementById(".").innerHTML = "REQUIRED"; 
                }
        }
        else
        {
            localStorage.setItem("sfn", ufn);
            localStorage.setItem("smn", umn);
            localStorage.setItem("sln", uln);
            localStorage.setItem("smail", umail);
            localStorage.setItem("ssex", usex);
            localStorage.setItem("ssupp", usupp);

            window.open("profile.html", "_self");
        }
}



function display()
{
    var ufn = localStorage.getItem("sfn");
    var umn = localStorage.getItem("smn");
    var uln = localStorage.getItem("sln");
    var umail = localStorage.getItem("smail");
    var usex = localStorage.getItem("ssex");
    var usupp = localStorage.getItem("ssupp");

    document.getElementById("displayfn").innerHTML += ufn;
    document.getElementById("displaymn").innerHTML += umn;
    document.getElementById("displayln").innerHTML += uln;
    document.getElementById("displaymail").innerHTML += umail;
    document.getElementById("displaysex").innerHTML += usex;
    document.getElementById("displaysupp").innerHTML += usupp;

    return false;
}

function checkfn()
{
    document.getElementById("").innerHTML="";
}
function checkmn()
{
    document.getElementById("").innerHTML="";
}
function checkln()
{
    document.getElementById("").innerHTML="";
}
function checkmail()
{
    document.getElementById("").innerHTML="";
}
function checksex()
{
    document.getElementById("").innerHTML="";
}
function checkpass()
{
    document.getElementById("").innerHTML="";
}
function checksupp()
{
    document.getElementById("").innerHTML="";
}