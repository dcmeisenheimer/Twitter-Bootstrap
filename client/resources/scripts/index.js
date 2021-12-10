function getJokes(){
	const jokesApiUrl = "https://v2.jokeapi.dev/joke/Any?amount=10";
	//Fetching Jokes API URL
	fetch(jokesApiUrl).then(function(response){
		return response.json();
		//Then we use the JSON to create our table
	}).then(function(json){
		//This is the table header 
		let html = "<table class=\"table-bordered table-hover\">";
		//grabbing our table row and table headers
		html += "<tr><th>Setup</th><th>Delivery</th></tr>"
        json.jokes.forEach((joke)=>{
			//grabbing the joke setup and delivery from api and places them in the table
			html += "<tr><td>" + joke.setup + 
            "</td><td>" + joke.delivery + "</td>";
		});
		html += "</table>";
		//Target the ID jokeTable and set it to the html variable
		document.getElementById("jokeTable").innerHTML = html;
	}).catch(function(error){
		console.log(error);
	});
}


//This is what we use to for the html variable 
//It looks like this in HTML.
/*
<Set the table with borders and allow hover
                <table class="table-bordered table-hover">
                    <!-- First Table Row -->
                    <tr>
                        <!-- First Table Header -->
                        <th>Setup</th>
                        <!-- Second Table Header -->
                        <th>Punchline</th>
                    </tr>
                    <!-- Second Table Row -->
                    <tr>
                        <!-- First Table Data -->
                        <td>Joke Setup</td>
                        <!-- Second Table Data -->
                        <td>Punchline</td>
                    </tr>
                </table>
*/