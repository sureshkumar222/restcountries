var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");

row.classList.add("row","m-3");
container.append(row);
var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((value)=>foo(value));


function foo(value){
    for(var i=0;i<value.length;i++){
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-body text-primary">
        <div class="card-header">${value[i].name}</div>
        <img src="${value[i].flag}" class="card-img-top" >
        <h5 class="card-title">capital:${value[i].capital}</h5>
        <h5 class="card-title">Region:${value[i].region}</h5>
        <h5 class="card-title">Country code:${value[i].alpha3Code}</h5>
        <button type="button" class="btn btn-primary" >click for weather</button>

        
        </div>
      </div>
      </div>
      `;
      document.body.append(container);
    }
}
