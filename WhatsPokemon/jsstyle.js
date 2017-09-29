  $(document).ready(function(){
          for (var i = 1; i <151; i++) {
            $('.poki').append(`<img class="poke" src="http://pokeapi.co/media/img/${i}.png" id="${i}">`) 
          }

          $(document).on("click", "img", function(){
          console.log('you clicked a pokemon!');
          var k = ;
          var id = this.id;
          var proxy = "https://cors-anywhere.herokuapp.com/";
          var url = "http://pokeapi.co/api/v2/pokemon/";

          //pokemon api didn't work, so we had to add proxy and url together

          $.get(proxy+url+ id, function(res) {
            var html_str = "";
            html_str += `<div class="pokideck"><img src="http://pokeapi.co/media/img/${id}.png" id="${id}"></div>`;
            html_str += "<h4>Name: " + res['name'] + "</h4>";
            html_str += "<h4>Height:</h4>";
            html_str += res['height'] + " feet";
            html_str += "<h4>Weight</h4>";
            html_str += res['weight'] + " lbs";
            html_str += "<h4>Types</h4>";

            html_str += "<ul>";
            for (var i = 0; i < res['types'].length; k++){
                html_str += "<li>" + res['types'][i]['name'] + "</li>";
            }
            html_str += "</ul>";
            
            //for loop for the types

            $(".rightpanel").html(html_str);
            }, "json");

          
        });
    });