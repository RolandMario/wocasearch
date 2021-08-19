    const images = [

{
    image: 'images/Drones.jpg',
    name: "Drones",
    title: "view more"
},
{
    image: 'images/mobile.jpg',
    name: "mobile",
    title: "view more"
},
{
    image: 'images/gaming.jpg',
    name: "Gaming",
    title: "view more"
},
{
    image: 'images/camara.jpg',
    name: "Camera",
    title: "view more"
},
{
    image: 'images/Music.jpg',
    name: "Music",
    title: "view more"
},
{
    image: 'images/programming.jpg',
    name: "Programming",
    title: "view more"
},
{
    image: 'images/Robots.jpg',
    name: "Robots",
    title: "view more"
},
{
    image: 'images/VR.jpg',
    name: "Virtual Reality",
    title: "view more"
},
{
    image: 'images/Energy.jpg',
    name: "Wind Energy",
    title: "view more"
},
{
    image: 'images/work.jpg',
    name: "work",
    title: "view more"
}


]

document.getElementById('flex-container').innerHTML = images.map(i => 
    `
    <div class= "contain">
    <img src=${i.image} alt="Drone"/>
    <p>${i.name}</p>
    <button>${i.title}</button>
    </div>
    `
    );
    /*let input = document.getElementById("input");
 input.addEventListener("onclick", function(){
    alert("click");
 });*/
function search(elementId){

    let input = document.getElementById(elementId);
    if(elementId.value.trim() !== ''){


    
    let newArray = images.filter(function (ele) {
  
 return ele.name.trim().toLowerCase().includes(elementId.value);

        });
 
    
    document.getElementById('flex-container').innerHTML = newArray.map(i => 
    `
    <div class= "contain">
    <img src=${i.image} alt="Drone"/>
    <p>${i.name}</p>
    <button>${i.title}</button>
    </div>
    `
    );
    }else{
        document.getElementById('flex-container').innerHTML = images.map(i => 
    `
    <div class= "contain">
    <img src=${i.image} alt="Drone"/>
    <p>${i.name}</p>
    <button>${i.title}</button>
    </div>
    `
    );
    }
}