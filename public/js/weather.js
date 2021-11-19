const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp')
const temp_stats = document.getElementById('temp_stats')

const dataHide = document.querySelector('.middle_layer');
const getInfo = async (event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Pls enter name before you search`;
        dataHide.classList.add("data_hide");
    } else {
       try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=a5640be27a2dd2e0c0e5e55c228e4286`;
        const response = await fetch(url);
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        const arrData = [data];

        const cityN = arrData[0].name;
        console.log(cityN);
        const cityCon = arrData[0].sys.country;
        console.log(cityCon);
        const cityDeg = arrData[0].main.temp;
        console.log(cityDeg);
        const cityWet = arrData[0].weather[0].main
        console.log(cityWet);

        // temp.innerText = cityDeg;
        const cityCelcius = Math.round(cityDeg - 276.15);
        temp.innerText = cityCelcius;
        const cityFeh = Math.round( (cityDeg - 273.15) * 9/5 + 32 );
        // temp.innerText = cityFeh;
        // temp_stats.innerText = cityWet;
        city_name.innerText = `${cityN}, ${cityCon}`;

        if(cityWet == "Clear"){
            temp_stats.innerHTML = '<i class="fas fa-sun" style="color: #eccc68;"></i>';
        }else if(cityWet == "Clouds"){
            temp_stats.innerHTML = '<i class="fas fa-cloud" style="color: f1f2f6;"></i>';
        }else if(cityWet == "Rain"){
            temp_stats.innerHTML = '<i class="fas fa-cloud-rain" style="color: a4b0be;"></i>';
        }else if(cityWet == "Haze"){
            temp_stats.innerHTML = '<i class="fas fa-smog" style="color: rgb(84, 130, 138);"></i>'
        }else if(cityWet == "Smoke"){
            temp_stats.innerHTML = '<i class="fas fa-smog" style="color: rgb(84, 130, 138);"></i>'
        }else{
            temp_stats.innerHTML = '<i class="fas fa-sun" style="color: #eccc68;"></i>';
        }

        dataHide.classList.remove("data_hide");
       } catch {
        city_name.innerText = `Enter name properly`;
        dataHide.classList.add("data_hide");
       }
    }
}



submitBtn.addEventListener('click' , getInfo);