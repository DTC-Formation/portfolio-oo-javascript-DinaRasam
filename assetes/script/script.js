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
        photo:"<img src='./assetes/images/Sans titre.png' width=\'100px\' height=\'100px\'>"
       },
       {
        langage: "CSS",
        photo:"<img src='./assetes/images/Sans titre.png' width=\'100px\' height=\'100px\'>"
       },
       {
        langage: "JS",
        photo:"<img src='./assetes/images/Sans titre.png' width=\'100px\' height=\'100px\'>"
       },
       {
        langage: "PHP",
        photo:"<img src='./assetes/images/php-1-logo-png-transparent.png' width=\'100px\' height=\'100px\'>"
       },
       {
        langage: "Bootstrap",
        photo:"<img src='./assetes/images/Sans titre.png' width=\'100px\' height=\'100px\'>"
       },
       {
        langage: "C",
        photo:"<img src='./assetes/images/Sans titre.png' width=\'100px\' height=\'100px\'>"
       },
       {
        langage: "CodeIgniter",
        photo:"<img src='./assetes/images/codeigniter.png' width=\'100px\' height=\'100px\'>"
       },
       {
        langage: "Git",
        photo:"<img src='./assetes/images/Git-Icon-1788C.png' width=\'100px\' height=\'100px\'>" 
       }

    ],
    Education:[
        {
         année: "2023" ,
         grade: "Formation DTC",
         explication: "Following the training web developer at DTC."
        },
        {
        année: "2022-2023" ,
        grade: "third years at ISPM",
        explication: "third year 'Eléctronique Systèmes Informatiques' at Institut Superieur Polythecnique de Madagascar."
        },
        {
        année: "2021-2022",
        grade: "second years at ISPM",
        explication: "Seconde year 'Eléctronique Systèmes Informatiques' at Institut Superieur Polythecnique de Madagascar."
        },
        {
        année: "2020-2021"  ,
        grade: "first years at ISPM",
        explication: "First year 'Eléctronique Systèmes Informatiques' at Institut Superieur Polythecnique de Madagascar."
        },
        {
        année: "2018" ,
        grade: "obtain baccalaureate",
        explication: "First year 'Eléctronique Systèmes Informatiques' at Institut Superieur Polythecnique de Madagascar."
        },
    ],
    Experience:[
        {
        année: "Mars-may:2023",
        explication:"Development of web applications to manage the presence of employees at the MNPDT technology:codeigniter"
        }
    ],
    
   
}
// console.log(Dina.About.dateDebut)
 for(let i = 0;i<Dina.Skills.length ;i++){
     let Skills = document.getElementById("skils")
    //  console.log(Dina.Skills[i].photo)
        Skills.innerHTML +=
                           "<div class='skils1'>"+
                            "<div class='items1'>" + Dina.Skills[i].photo +
                            "<h1 class='style-skils'>"+Dina.Skills[i].langage+"</h1>"+
                            "</div>" +
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

for(let i = 0;i<Dina.Education.length ;i++){
    let Education = document.getElementById("Grade")
    // console.log(Dina.Education[i].explication)
    Education.innerHTML += '<div class="educ">'+Dina.Education[i].année+'</div>'+
                          '<div class="exp">'+
                          '<h2 class="sec">'+ Dina.Education[i].grade+'</h2>'+
                            '<p>'+Dina.Education[i].explication+'</p>'+
                          '</div>'+
                          '</div>'
                          
}
for(let i = 0;i<Dina.Experience.length ;i++ ){
    let Experience = document.getElementById("Experiences")
    // console.log(Dina.Education[i].explication)
    Experience.innerHTML += '<div class="educ">'+Dina.Experience[i].année+'</div>'+
                          '<div class="exp">'+
                            '<p>'+Dina.Education[i].explication+'</p>'+
                          '</div>'+
                          '</div>' 
}
