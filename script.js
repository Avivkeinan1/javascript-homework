
const aElement = window.document.getElementById("a");
console.dir(aElement);
aElement.style.width = "200px";
aElement.style.height = "200px";
aElement.style.borderRadius = "50%" ;
aElement.style.backgroundImage =  "linear-gradient(red, yellow)";
aElement.style.backgroundColor = "blue";
aElement.classList.add("text-center" , "row", "align-items-center" , "justify-content-center");


const user ={
    name: "aviv",
    email: "avivkenan043@gmail.com",
    age: 23,
    gender: "male",
};



const userProfiling =window.document.getElementById("user");
console.log(userProfiling);
userProfiling.innerHTML = ` 
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">`+ user.name +`</h5>
  <h6 class="card-subtitle mb-2 text-muted">`+ user.age +`</h6>
  <p class="card-text">`+ user.gender +`</p>
  <p class="card-text">`+ user.email +`</p>
  
  
</div>`







const dElement =window.document.getElementById("d");
console.log(dElement);
dElement.classList.add("bg-danger");







const car= {
    title: "car",
            price: 200_000,
            hand: 2,
            km: 100_403,
            year: 2014,
};

const cElement = window.document.getElementById("c");
console.dir(cElement);
cElement.classList.add("card");
cElement.innerHTML= `  
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">`+car.title +`</h5>
  <h6 class="card-subtitle mb-2 text-muted">`+car.price+` price</h6>
  <p class="card-text">`+ car.hand +` hand</p>
  <p class="card-text">`+ car.km +` kilometer</p>
  <p class="card-text">`+ car.year +` year</p>
 
</div>
</div>` 










