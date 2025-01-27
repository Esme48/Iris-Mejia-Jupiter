//Date
const today=new Date()
const thisYear=today.getFullYear()

//Footer Part
const footer=document.createElement("footer")
const body=document.querySelector("body")
body.appendChild(footer)

//Copywrite
const copyright=document.createElement("p")
copyright.innerHTML=` © I.Mejia ${thisYear}`
footer.appendChild(copyright)

//Skills
const skills=["Adapt to new technologies", "Manage change and pivot", "C++", "Assembly","HTML", "CSS","JS","AutoDesk Fusion", "Time management","Problem solving","Excellent Communicator"]
const skillsSection=document.getElementById("skills")

//List
const skillsList=skillsSection.querySelector("ul")

for(let i=0; i<skills.length; i++){
  const skill=document.createElement("li")
  skill.textContent=skills[i]
  skillsList.appendChild(skill)
}


