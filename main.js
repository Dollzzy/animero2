var InputStartPage = document.getElementById('InputStartPage')
var StartPage = document.querySelector(".StartPage")
var RezultsPage = document.querySelector(".RezultsPage")
var input = document.getElementById("inputRezultsPage"); 

InputStartPage.addEventListener('keypress', function (e) {
    var inp2 = InputStartPage;
    if (e.key === 'Enter') {
      inputRezultsPage.value = inp2.value
      inp2.value = ''
      SH()
      StartPage.style.display = 'none'
      RezultsPage.style.display = 'block'
    }
});

function SH() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("inputRezultsPage");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}