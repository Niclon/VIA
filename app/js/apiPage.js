var dataVariable;

$( document ).ready(function() {

    $('#submitButton').on("click",function(){
        var cityName = $('#cityname').val();


        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID=e09fa52b9d3dd89871061e362bfa84a9',
            data: {
                format: 'json'
            },
            error: function() {
                alert("Město nebylo možné nalézt");
            },
            dataType: 'json',
            success: function(data) {
                console.log(data);
            },
            type: 'GET'
        });
    });
    $('#forecastButton').on("click",function(){
        var cityName = $('#cityname').val();


        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&APPID=e09fa52b9d3dd89871061e362bfa84a9',
            data: {
                format: 'json'
            },
            error: function() {
                alert("Město nebylo možné nalézt");
            },
            dataType: 'json',
            success: function(data) {
                dataVariable=data;
                makeChart(data);
            },
            type: 'GET'
        });
    });


});

function makeChart(data) {
    var labelsvar = fillLabels(data);
    var celsias = fillCelsias(data);
    new Chart(document.getElementById("myChart"), {
        type: 'line',
        data: {
            labels: labelsvar,
            datasets: [{
                data: celsias,
                label: data.city.name,
                borderColor: "#cd0b04",
                fill: false
            }
            ]
        },
    options: {
        title: {
            display: true,
                text: 'Teplota ve městě ' + data.city.name
        }
    }
});
}
function fillLabels(data) {
    var labels = [];
    data.list.forEach(function(value){labels.push(value.dt_txt)})
    return labels;
}
function toCelsius(f) {
    return f-273.15;
}
function fillCelsias(data) {
    var celsias = [];
    data.list.forEach(function(value){celsias.push(toCelsius(value.main.temp))})
    return celsias;
}

