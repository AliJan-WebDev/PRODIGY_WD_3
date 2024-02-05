const testing = document.getElementById('Test')
const btn = document.getElementById('btn')
const city = document.getElementById('city')
const img = document.getElementById('icon')
const desc = document.getElementById('desc')

const Test = async (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=44.34&lon=10.99&appid=5d8e35f02871154ab0ec9b794c9c240f&units=metric`
    try {
        const response = await fetch(URL);
        const result = await response.json();
        const temp = result.main.temp
        const description = result.weather[0].description
        const icons = result.weather[0].icon 
        testing.innerHTML="Today is " + temp + " C"
         // console.log(result.weather[0].icon);
         desc.innerHTML ="It looks like " + description
        const iconURL = `https://openweathermap.org/img/wn/${icons}.png`
        img.src = iconURL
    } catch(error) {
        console.log(error);
    }
    // console.log(result.weather[0].id);

 
 }

 btn.addEventListener('click', (e) => {
    const cit = city.value
    Test(cit);
    e.preventDefault()
}) 


// https://openweathermap.org/img/wn/10d@2x.png