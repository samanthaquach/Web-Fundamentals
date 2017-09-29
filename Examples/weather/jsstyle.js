    $('form').submit(function() {
        $('.form').submit(function(){
            var api_key = '38ed520286ab541243ddee4e7fe64fab';
            var city = $('input#city').val();

        // .submit(function(){
        // 	var api_key = '38ed520286ab541243ddee4e7fe64fab';
        //     var city = $('input#city').val();
        //     console.log('checking weather...');
        //     var location_name = $('.location_name').val();
        //     console.log(location_name);
        //     $('.weather').append("<div class='weatherResults'>"+location_name+"</div>")
        //     return false;
        //     });

        $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`, function(res){
                console.log(res)
                var html = '';
                html += `<p> ${res['name']}: ${res['weather'][0]['description']} </p>`;
                html += `<p> Temperature:${res['main']['temp']} F</p>`;
                html += `<p> Coord: ${res['coord'].lat}, ${res['coord'].lon}`
                $('.weather').html(html);
            }, 'jsonp');
        // don't forget to return false so the page doesn't refresh
        return false;
    });