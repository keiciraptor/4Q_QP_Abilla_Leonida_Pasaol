function signup()
{
    var ufn = document.getElementById("fname").value; //takes value and stores it in the variable
    var umn = document.getElementById("mname").value;
    var uln = document.getElementById("lname").value;
    var umail = document.getElementById("email").value;
    var upass = document.getElementById("pword").value;
    var unum = document.getElementById("cnumber").value;
    var usex = sexC();
    var usupp = document.getElementById("support").value;
    var ufoc = document.getElementById("foundoc").value;

    if ((ufn == "")||(umn == "")||(uln="")||(umail="")||(usupp=="")||(usex="")||(upass =="")) //checks if there is any blank input
        {
            if (ufn == "")
                {
                    document.getElementById("fnreq").innerHTML = "REQUIRED" ;
                }
            if (umn == "")
                {
                    document.getElementById("mnreq").innerHTML = "REQUIRED";
                }
            if (uln == "")
                 {
                    document.getElementById("lnreq").innerHTML = "REQUIRED";
                 }        
            if (umail == "")
                {
                    document.getElementById("mailreq").innerHTML = "REQUIRED";
                }
            if(usupp == "")
                {
                    document.getElementById("suppreq").innerHTML = "REQUIRED";
                }
            if (usex == "")
                {
                    document.getElementById("sexreq").innerHTML = "REQUIRED"; 
                }
            if (upass == "")
                {
                    document.getElementById("passreq").innerHTML = "REQUIRED";
                }
        }
        else //sets data for storing
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
    var ufn = localStorage.getItem("sfn"); //Takes the value and places in the mentioned variable
    var umn = localStorage.getItem("smn");
    var uln = localStorage.getItem("sln");
    var umail = localStorage.getItem("smail");
    var usex = localStorage.getItem("ssex");
    var usupp = localStorage.getItem("ssupp");

    document.getElementById("displayfn").innerHTML += ufn;//Display First Name
    document.getElementById("displaymn").innerHTML += umn; //Display Middle Name
    document.getElementById("displayln").innerHTML += uln; //Display Last Name
    document.getElementById("displaymail").innerHTML += umail; //Display Mail
    document.getElementById("displaysex").innerHTML += usex; //Display Sex
    document.getElementById("displaysupp").innerHTML += usupp; //Display Reason for supporting campaign

    return false; //
}

function sexC() //Takes the choice of the user
{
    var sex="";
    var sexC = document.getElementsByName("sex");
    for (var ctr=0; ctr<sexC.length; ctr++){
        if (sexC[ctr].checked){
            sex += sexC[ctr].value;
        }
    }
    return sex;
}

function checkfn()//Clears the required text once there is already input, same for the codes below.
{
    document.getElementById("fnreq").innerHTML="";
}
function checkmn()
{
    document.getElementById("mnreq").innerHTML="";
}
function checkln()
{
    document.getElementById("lnreq").innerHTML="";
}
function checkmail()
{
    document.getElementById("mailreq").innerHTML="";
}
function checksex()
{
    document.getElementById("sexreq").innerHTML="";
}
function checkpass()
{
    document.getElementById("passreq").innerHTML="";
}
function checksupp()
{
    document.getElementById("suppreq").innerHTML="";
}