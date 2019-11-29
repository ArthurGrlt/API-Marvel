function Name() {
    var name = document.getElementById("name").value;
    document.querySelector('h4.card-title').innerHTML = name;
}    

function getApiData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            
            
        }
    }
    xhr.open('GET', 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Spider-man&apikey=390b19eb2cf9452479bf0585b435d6c5');
    xhr.send()
}

getApiData();

