//cat fact using Axios
let url = "https://catfact.ninja/fact";
let btn = document.querySelector("#cat");
let result = document.querySelector("#output");
btn.addEventListener("click", async ()=>{
    let text = await getFacts();
    result.innerText = text;
});

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        return e;
    }
}

//Dog image using Axios
let dogUrl = "https://dog.ceo/api/breeds/image/random";
let dogBtn = document.querySelector("#dog");
let dogImg = document.querySelector("#dogImg");
dogBtn.addEventListener("click", async ()=>{
    let source = await getImage();
    dogImg.setAttribute("src", source);
})

async function getImage(){
    try{
        let res2 = await axios.get(dogUrl);
        return res2.data.message;
    }
    catch(err){
        return err;
    }
}

//Headers with axios request
let dadJoke = "https://icanhazdadjoke.com/";
let jokeBtn = document.querySelector("#joke");
let jokePara = document.querySelector("#jokePara");

jokeBtn.addEventListener("click", async() =>{
    let showJoke = await getJoke();
    jokePara.innerText = showJoke;
})
    

async function getJoke(){
    try{
        let config = { headers :{Accept : "application/json"}};
        let res3 = await axios.get(dadJoke, config);
        return res3.data.joke;
    }
    catch(err){
        return err;
    }
}
getJoke();

//updating querry string in url
let uniUrl = "http://universities.hipolabs.com/search?name=";
let search = document.querySelector("#Search");

search.addEventListener("click", async() =>{
    let country = document.querySelector("input").value;
    let collegesArr = await getUniDetails(country);
    show(collegesArr);    
})

function show(collegesArr){
    let list = document.querySelector("#list");
    for(col of collegesArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }

}

async function getUniDetails(country){
        try{
            let res4 = await axios.get(uniUrl+country);
            return res4.data;
        }
        catch(err){
            console.log("Error - ",err);
        }
}