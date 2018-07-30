<script src="http://j.mp/jqymin"></script>
<script>
      var form = new FormData(document.getElementById("form"));
      var inputValue = form.get("inputTypeName");
        
        console.log(inputValue);
      $.getJSON(
        "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=936f662b43be61e785b7efc65830f04c",
        function foo(data)
        {
            console.log(data);
            console.log(data.main.temp);
            console.log(data.main.humidity);
            console.log(data.main.pressure);
            console.log(data.main.temp_max);
            console.log(data.main.temp_min);
            console.log(data.visibility);
        }
      )
    </script>