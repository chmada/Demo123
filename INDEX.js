var email="ramu@gmail.com"
var pass="123"
var from=document.foces
function loginPage()
{
    var userDefEmail=document.getElementById("email").value
    var userDefPassword=document.getElementById("password").value
    var divbor=document.getElementsByClassName("borderDiv")
    if(email!=userDefEmail && pass!=userDefPassword)
    {
        document.body.style.backgroundImage="liner-gradient(75deg,red,red)"
        divbor[0].style.borderColor="red"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="User name and password is wrong"
    }
    else if(email!=userDefEmail && pass!=userDefPassword)
    {
        document.body.style.backgroundImage="liner-gradient(75deg,rgb(201, 0, 134),red)"
        divbor[0].style.borderColor="royalblue"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="password is wrong"
    } 
    else if(email!=userDefEmail && pass!=userDefPassword)
    {
        document.body.style.backgroundImage="liner-gradient(75deg,red,purple)"
        divbor[1].style.borderColor="royalblue"
        divbor[0].style.borderColor="red"
        document.getElementById("result").innerHTML="Email is wrong"
    }
    else{
        form[0].action="./html/home.html"
        form[0].elements[2].type="submit"
    }
}

function visible()
{
    form[0].elements[1].type="text";
    document.getElementById("passVisible").scr="./   "
    document.getElementById("passVisible").style.transform="rotateY(360deg)"
    document.getElementById("passVisible").style.transition="transform 0.5s"
}
function invisible()
{
    form[0].elements[1].type="password";
    document.getElementById("passVisible").scr="./   "
    document.getElementById("passVisible").style.transform="rotateY(0deg)"
    document.getElementById("passVisible").style.transition="transform 0.5s"
}