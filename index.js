const express = require("express")

const app = express()

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`server started running on ${PORT}`)
})

app.get("/", (request,response)=>{
    response.json("WELCOME")
})


//ABOUT
const about = [
    {
        fullName: "Rhema Great Peters",
        state: "Kaduna",
        gender: "Male"
    },
]

app.get("/about", (request, response)=>{
    response.json(about)
})


//CONTACT
const contact = [
    {
        emailAddress: "rhemagreatpeters@gmail.com",
        phoneNumber: +2348069577142
    },
]

app.get("/contact", (request, response)=>{
    response.json(contact)
})


//PROGRAM
const program = [
        "JavaScript", "Python", "Java", "C++", "Ruby"
    ]
  
app.get("/program", (request, response)=>{
    response.json(program)
})