const key = '20f1a159ac85850ec7f399a00708179f';
var id = 1;
let query = 'all';
window.onload = function () {
    var button = document.getElementsByClassName('button')[0];
    button.addEventListener("click", function () {
        var searchText = document.getElementsByClassName('search')[0].value;
        console.log(searchText);
        if (searchText != '') query = searchText;
        const url = `https://api.themoviedb.org/3/search/company?api_key=${key}&query=${query}&page=${id}`;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(xhttp.responseText);
                var table = document.getElementById('table');
                var tbody = document.getElementById('tb');
                tbody.innerHTML = '';
                for (var i = 0; i < obj.results.length; i++) {
                    var tr = document.createElement('tr');
                    var td1 = document.createElement('td');
                    var td2 = document.createElement('td');
                    td1.innerText = obj.results[i].id;
                    td2.innerText = obj.results[i].name;
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tbody.appendChild(tr);
                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    })
}