//Build html elements
document.body.innerHTML=`<div class="heading-container">
<h1>Nationality Predictor of Name</h1>
<img class="icon" src="https://www.legalbites.in/wp-content/uploads/2018/06/Nationality-Citizenship-and-Statelessness.jpg" width="30%" height="100px" alt="Nationalize API"><img class="icon" src="https://www.legalbites.in/wp-content/uploads/2018/06/Nationality-Citizenship-and-Statelessness.jpg" width="50%" height="100px" alt="Nationalize API">
</div>
<div class="main-Container" id="mainContainer"
</div>`

mainContainer.innerHTML+=
`
<div class="container-heading">
<h3>Predict the nationality of a name</h3>
</div>


<div class="container">
<label for="name" =>Name</label>
<input type="text" class="form-control" id="name" placeholder="Enter a name">
<button type="submit" class="btn btn-primary" onclick="getData()">Submit</button>
<button class="btn btn-primary" onclick="history.go(0);">Reset</button>
</div>
`

//create a function to fetch data from API using async and await
//Displaying error using try and catch
const getData=async()=>{
    try{
        let name=document.getElementById("name").value;          
        const data=await fetch(`https://api.nationalize.io/?name=${name}`);
        const nationalityDetails1=await data.json();
      
     displayData(nationalityDetails1);   //calling function to display data
       

    }catch(error){
        console.log(error);
    }
}

//create a function to display data
const displayData=(obj)=>{
   
    mainContainer.innerHTML+=
    `<div class="container" id="resultData">
    <h2 id="nameHeading">Name: ${obj.name}</h2>
    <p>1) Nationality: ${obj.country[0].country_id}</p>
    <p>   Probability: ${obj.country[0].probability}</p>
    <p>2) Nationality: ${obj.country[1].country_id}</p>
    <p>   Probability: ${obj.country[1].probability}</p></div>
    `
}