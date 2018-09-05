function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    var arrowDown = document.getElementById('down');
    var arrowUp = document.getElementById('up');

    if (arrowDown.classList.contains("arrow-down")) {
    	arrowDown.classList.remove("arrow-down");
    	arrowUp.classList.toggle("arrow-up");
    }else{
    	arrowDown.classList.toggle("arrow-down");
    	arrowUp.classList.remove("arrow-up");
    }

}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

  	var arrowDown = document.getElementById('down');
  	var arrowUp = document.getElementById('up');

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show') && arrowUp.classList.contains('arrow-up')) {
        openDropdown.classList.remove('show');
        arrowUp.classList.remove('arrow-up');
   		arrowDown.classList.toggle("arrow-down");

      }
    }
  }
}

var search = document.getElementById("search");
var sIcon = document.querySelector(".s-icon1");
var body = document.querySelector("body");
var html = document.querySelector("html");
var iButton = document.getElementById("i-button");
var iSearch = document.getElementById("i-search");

search.addEventListener('click', function(e){
	e.stopPropagation();
	iButton.classList.remove('hidden');
	iSearch.classList.remove('hidden');
	sIcon.classList.add('hidden');
	this.classList.remove('hidden');
})
body.addEventListener('click', function(){
	iButton.classList.add('hidden');
	iSearch.classList.add('hidden');
	sIcon.classList.remove('hidden');
})
html.addEventListener('click', function(){
	iButton.classList.add('hidden');
	iSearch.classList.add('hidden');
	sIcon.classList.remove('hidden');
})

		var manage = document.getElementById("manage"),
        arr = ["Леонтий Моисеев", "Прохор Баранов", "Григорий Артемьев", "Вячеслав Захаров", "Руслана Кононова", "Антонина Лукина", "Вячеслав Фадеев", "Филимон Гуляев", "Алёна Колесникова"];
        for(var i = 0; i < arr.length; i++){
            var a = document.createElement("a"),
            txt = document.createTextNode(arr[i]);
            a.appendChild(txt);
            manage.insertBefore(a, manage.lastChild);
        }

        var teamlead = document.getElementById("teamlead"),
        arr = ["Людмила Трифонова", "Антонина Лукина", "Юлий Голубев", "Жадан Зыков", "Павел Титов", "Юрий Селиверстов"];
        for(var i = 0; i < arr.length; i++){
            var a = document.createElement("a"),
            txt = document.createTextNode(arr[i]);
            a.appendChild(txt);
            teamlead.insertBefore(a, teamlead.lastChild);
        }

        var supervysor = document.getElementById("supervysor"),
        arr = ["Филимон Ленин", "Галена Трофимова", "Зарина Макарова", "Георгий Сысоев", "Клим Лыткин", "Модест Королёв", "Магдалина Громова", "Маргарита Веселова", "Маргарита Веселова", "Оскар Лыткин"];
        for(var i = 0; i < arr.length; i++){
            var a = document.createElement("a"),
            txt = document.createTextNode(arr[i]);
            a.appendChild(txt);
            supervysor.insertBefore(a, supervysor.lastChild);
        }

        var merchen = document.getElementById("merchen"),
        arr = ["Егор Щукин", "Вальтер Лазарев", "Белла Шуляк", "Роза Костина", "Роза Костина", "Клим Илясов", "Зарина Макарова", "Георгий Сысоев"];
        for(var i = 0; i < arr.length; i++){
            var a = document.createElement("a"),
            txt = document.createTextNode(arr[i]);
            a.appendChild(txt);
            merchen.insertBefore(a, merchen.lastChild);
        }