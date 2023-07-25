// alert("mety")

let bouton = document.getElementById("darck")
bouton.addEventListener('click',()=>{
    console.log("bouton cliker")

    let teste = document.getElementById("about-me")
    console.log("mety ve");

    teste.style.backgroundColor = "black"
    let teste2 = document.getElementsByClassName("titre2")
    teste2.style.color = "white"
});
let description1 = document.getElementById("description1")
description1.innerText = "I am currently in my third year at the ISPM high school following the electronic computer science course. I am interested and enthusiastic about the digital world."

let Dina={
    About: {
            nom : "ANDRIAMIFIDISAMIMANANA",
            Prenom : "Dinaniaina",
            telephone : "+261 34 30 565 38",
            mail : "dinarasam10@gmail.com",
            adress : "Faravohitra Avaratra"
        },
    
    Skills:[
       {
        langage: "HTML",
        photo:"<img src='./assetes/images/Sans titre.png'>"
       },
       {
        langage: "CSS",
        photo:"<img src='./assetes/images/Sans titre.png'>"
       },
       {
        langage: "JS",
        photo:"<img src='./assetes/images/JavaScript-logo.png'>"
       },
       {
        langage: "PHP",
        photo:"<img src='./assetes/images/JavaScript-logo.png'>"
       },
       {
        langage: "Bootstrap",
        photo:"<img src='./assetes/images/JavaScript-logo.png'>"
       },
       {
        langage: "C",
        photo:"<img src='./assetes/images/JavaScript-logo.png'>"
       },
       {
        langage: "CodeIgniter",
        photo:"<img src='./assetes/images/JavaScript-logo.png'>"
       },
       {
        langage: "Git",
        photo:"<img src='./assetes/images/JavaScript-logo.png'>"
       }

    ],
    Contacts:[
        {
       
    }

    ],
    
   
}
// console.log(Dina.About.dateDebut)
 for(let i = 0;i<Dina.Skills.length ;i++){
     let Skills = document.getElementById("skils")
     console.log(Dina.Skills[i].photo)
        Skills.innerHTML +=
                           "<div class='skils1'>"
                            "<div class='items1'>"  + Dina.Skills[i].photo +
                            "<h1 class='style-skils'>"+Dina.Skills[i].langage+"</h1>"
                            "</div>" 
                            "</div>"
}

let description2 = document.getElementById("description2")
description2.innerHTML += "<table>"+
                          "<tbody>"+
                          "<tr>"+
                            "<td class='titre2'>"+"Name:"+"</td>"+ 
                            "<td class='contenu1'>"+Dina.About.nom+"</td>"+ 
                          "</tr>"+
                          "<tr>"+
                            "<td class=titre2>"+"Last-name:"+"</td>"+ 
                            "<td class='contenu1'>"+Dina.About.Prenom+"</td>"+ 
                          "</tr>"+
                          "<tr>"+
                             "<td class=titre2>"+"Call:"+"</td>"+ 
                             "<td class='contenu1'>"+Dina.About.telephone+"</td>"+ 
                          "</tr>"+
                          "<tr>"+
                             "<td class=titre2>"+"Mail:"+"</td>"+ 
                             "<td class='contenu1'>"+Dina.About.mail+"</td>"+ 
                          "</tr>"+
                          "<tr>"+
                             "<td class=titre2>"+"Adress:"+"</td>"+ 
                             "<td class='contenu1'>"+Dina.About.adress+"</td>"+ 
                          "</tr>"+
                        
                          "</tbody>"+
                          "</table>"

