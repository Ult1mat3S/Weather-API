const locationInput = document.querySelector('input')
const submitButton = document.querySelector('button')



submitButton.addEventListener("click", function (e) {
    let userLocationInput = window.prompt('New location:')
    url = `http://api.openweathermap.org/data/2.5/weather?q=${userLocationInput}&APPID=e3320e2862e2dc7be9337435a68c5aaf`
    // console.log(url)
    getLocationData()
});


function getLocationData() {
    const location = document.getElementById('location')
    const feelsLike = document.getElementById('feels-like')
    const temp = document.getElementById('temp')
    fetch(`${url}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            locationNameData = response.name;
            tempData = response.main.temp;
            feelsLikeData = response.main.feels_like;
            location.textContent = locationNameData;
            temp.textContent = tempData;
            feelsLike.textContent = feelsLikeData;
            return response
            // console.log(response.name);
        });
    // .catch(function (err) {
    //     console.log(response);
    // });
}




