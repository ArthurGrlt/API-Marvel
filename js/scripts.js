function Name() {
    var name = document.getElementById("name").value;
    document.querySelector('h4.card-title').innerHTML = name;
}    

function getApiData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);

            const img = data.data.results.thumbnail.path.lenght;

            //const img = data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension
            //console.log(data)

            for (let i = 0; i < rers; i++) {
                if (data.data.results[i].thumbnail.path === 'critical') {
                    hasProblem = true
                }
            }


        
        }
    }
    xhr.open('GET', 'https://gateway.marvel.com:443/v1/public/characters?apikey=5fb0b1629aa96efb6843bf56ee43e2e5');
    xhr.send()
}

getApiData()
