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


//The Message Form Stuffffff//


function onFormSubmit(event){
  event.preventDefault();
  //Setting up the data
  const usersName= event.target.usersName.value;
  const usersEmail= event.target.usersEmail.value;
  const usersMessage= event.target.usersMessage.value;
  console.log(usersName);
  console.log(usersEmail);
  console.log(usersMessage);


  const messageSection=document.getElementById("messages");
  const messageList=messageSection.querySelector("ul");
  console.log(messageList);


  messageSection.hidden=false;


  //Displaying the message


  const newMessage=document.createElement("li");
  newString= `<a href="mailto:${usersEmail}">${usersName}</a>\n
  <span>${usersMessage}</span>`;
  //console.log(newString);
  newMessage.innerHTML.newString;


  //The Remove Button
  const removeButton=document.createElement("button");
  removeButton.innerText="Remove";
  removeButton.type="button";
  removeButton.addEventListener("click", function (){
    const entry=this.parentNode;
    entry.remove();
  });


  //Add a remove button
  newMessage.appendChild(removeButton);


  //Add a message
  messageList.appendChild(newMessage);


  event.target.reset();


}


const messageForms=document.getElementsByName("leave_message");
//console.log(messageForms);
const messageForm=messageForms[0];


//Message Section Hidden Component
const messageSection= document.getElementById("messages");
messageSection.hidden = true;
//console.log(messageForm);


//When submit is pressed, call the onFormSubmit and execute that function
messageForm.addEventListener("submit", onFormSubmit);






//Fetch Component, a promise that has our data//
let projectSection = document.getElementById("projects");
console.log("projectSection:", projectSection);
let projectList = projectSection.querySelector("ul");
console.log("projectList", projectList);




fetch("https://api.github.com/users/Esme48/repos")
.then((response)=>{
  //Body of the callback function
  return response.json();
})


.then((repositories)=>{
  console.log("repositories:", repositories);
  for (let i=0; i < repositories.length; i++){
    let project = repositories[i].name;
    let li = document.createElement("li");
    //innertext of the li element
    li.innerText = project;
    projectList.appendChild(li);
  }
})


.catch((error)=>{
  console.log(error);
});



