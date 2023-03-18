const express = require('express')
const app = express()

const port = process.env.PORT || 3000


const path = require ("path")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))

   app.get('/data1', (req, res) => {
    res.send({
        name : "Menna",
        age : 22,
        city : "Beni-seuf"
    })
   })

   app.get('/data2', (req, res) => {
    res.send({
        name : "Mostafa",
        age : 27,
        city : "Cairo"
    })
   })

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// hbs 

app.set('view engine', 'hbs');

  const viewsDirectory = path.join (__dirname , "../temp1/views" )
  app.set( "views" , viewsDirectory)

  //////////////////////////////////////////////////////////////////

  var hbs = require ('hbs')

  const partialsPath = path.join (__dirname , "../temp1/partials")

  hbs.registerPartials(partialsPath)

  ///////////////////////////////////////////////////////////////////

app.get('/' , (req , res) => {
    res.render('index' , {
        title: "HOME",
        
        imgs1 : "imgs/eee.jpeg",
        imgs2:"imgs/tt.jpg",
        imgs3:"imgs/course-1.jpg", 
        image:"imgs/map.jpg"

    })
})

app.get('/service' , (req , res) => {
    res.render('service' , {
        title : "SERVICE",
        name : "Front-End",
        place: "Giza",
        duration: "4 mon",
        img1 : "imgs/front.png",
        name2:"Back-End",
        duration2:"3 mon",
        place2:"cairo",
        im2:"imgs/back.png",
        name3:"Flutter",
        im3:"imgs/flutter.png",
        image:"imgs/map.jpg"
    })
})

app.get('/team' , (req , res) => {
    res.render('team' , {
        title : "TEAM",
        name : "Rasha",
        city: "Giza",
        age: 32,
        img2 : "imgs/trainer-2.jpg",
        name2 : "ahmed",
        city2: "cairo",
        age2: 22,
        name3:"Nour",
        name4:"Ali",
        img3 : "imgs/trainer-3.jpg",
        img4 : "imgs/trainer-1.jpg",
        image:"imgs/map.jpg",
       

    })
})

app.get('/about' , (req , res) => {
    res.render('about' , {
        title: "ABOUT",
        image:"imgs/map.jpg"
    
    })
})


app.get('/signin' , (req , res) => {
    res.render('signin' , {
        title: "Sign",
        email:"menna@gmail.com",
        password:"menna54321",
        firstname:"Reem",
        Lastname:"Mohamed",
        image:"imgs/map.jpg",
        phone:"01140909267"
    
    })
})


app.get('/footer' , (req , res) => {
    res.render('footer' , {
        title: "FOOTER",
      image:"imgs/map.jpg"
    
    })
})



app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})