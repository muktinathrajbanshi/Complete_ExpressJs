const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");

const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === "") {
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add("data_hide");

    } else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a609106e599dc0bd064bcbef1de49f82`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            //conditon to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }

            datahide.classList.remove("data_hide");


        } catch{
            city_name.innerText = `Plz enter the city name properly`;
            datahide.classList.add("data_hide");

        }
        
    }
}

submitBtn.addEventListener("click", getInfo);


const getCurrentDayAndDate = () => {
    const dayElement = document.getElementById("day");
    const dateElement = document.getElementById("today_date");

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const now = new Date();
    const day = weekday[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];

    dayElement.innerText = day;
    dateElement.innerText = `${date} ${month}`;
};

// Call the
getCurrentDayAndDate();