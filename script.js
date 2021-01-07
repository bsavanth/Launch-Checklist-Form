


// Write your JavaScript code here!




window.addEventListener("load", function(){


	fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
		response.json().then( function(json) {
	let idx = Math.floor(Math.random() * json.length)   
	console.log(idx);
	let missiondest = document.getElementById("missionTarget")
	missiondest.innerHTML = `<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[idx].name}</li>
   <li>Diameter: ${json[idx].diameter}</li>
   <li>Star: ${json[idx].star}</li>
   <li>Distance from Earth: ${json[idx].distance}</li>
   <li>Number of Moons: ${json[idx].moons}</li>
</ol>
<img src="${json[idx].image}">`
  
} );
} );

	let form = document.querySelector("form");
	form.addEventListener("submit", function(event){


		let pilot = document.querySelector("input[name=pilotName]");
		let copilot = document.querySelector("input[name=copilotName]");
		let fuel = document.querySelector("input[name=fuelLevel]");
		let mass = document.querySelector("input[name=cargoMass]");

		if(pilot.value==="" || copilot.value==="" || fuel.value===""||mass.value==="")
		{			
			alert("All the fields are required");
			event.preventDefault();
		}
		
		if(isNaN(Number(fuel.value)))
		{
			alert("Enter proper data for fuel");
			event.preventDefault();
		}

		
		if(isNaN(Number(mass.value)))
		{
			alert("Enter proper data for mass");
			event.preventDefault();
		}

		if(!isNaN(pilot.value))
		{
			alert("Enter proper data for pilot");
			event.preventDefault();
		}

		if(!isNaN(copilot.value))
		{
			alert("Enter proper data for copilot");
			event.preventDefault();
		}


	  

		let faulthandler = document.getElementById("faultyItems");
		faulthandler.style.visibility="visible";



		let pilotinfo = document.getElementById("pilotStatus");
		let copilotinfo = document.getElementById("copilotStatus");
		let fuelevel = document.getElementById("fuelStatus");
		let cargostatus = document.getElementById("cargoStatus");
		pilotinfo.innerHTML=pilot.value+ " Ready"
		copilotinfo.innerHTML = copilot.value+" Ready"
		console.log(pilotinfo.innerHTML)
		console.log(copilotinfo.innerHTML)

		let launchstatus = document.getElementById("launchStatus");
		
		if( Number(fuel.value)<10000 ||  Number(mass.value)>10000 )
		{
				launchstatus.style.color="red";
				launchstatus.innerHTML="Shuttle not ready for launch";
		
				if(Number(fuel.value)<10000)
					{
						fuelevel.innerHTML = "Fuel level too low for the launch";
		   		}
		
				if( Number(mass.value)>10000 )
					{
						cargostatus.innerHTML = "Cargo level too high for the launch";
					}
		}

		else
		{
		
		launchstatus.style.color="green";
	   	launchstatus.innerHTML="Shuttle is ready for launch";
		}
	
		});
	});





