<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
       *{margin:0px; padding:0px; box-sizing: border-box;}  
       body{background:linear-gradient(to left,rgba(100, 10, 100, 0.5),rgba(100, 10, 100, 0.5), rgba(100, 10, 100, 0.5), white ,rgba(100, 10, 100, 0.5)) ; background:url('background.jpg');}  
       #out{width:100%; display: inline-flex; flex-wrap: wrap; justify-content: space-around ; flex:0.2 0.2 10%;}
.title{width:100%; background-color: rgba(0,0,0, 0.3); height:30%; overflow: hidden; position: absolute; bottom: 1.5em; } 
        .card{position:relative; width: 10em;  display:inline-flex; flex-direction: column;   border:solid white thin inset;  color:white; border-radius: 0.5em;  aspect-ratio:0.8;background-position: center; margin:1em; box-shadow: 5px 5px 10px rgba(100, 10, 100, 1); }

.title:hover, .Categories:hover, .end:hover, .Merchant:hover{overflow: visible;height:max-content; background:black;color:aqua;}
.visitBtn{width:100%; font-size: large; text-decoration: none;position: absolute; bottom:0px;left:0px; font-weight: 800; background-color:white;  text-align: center;padding:5px ; color:green;  border-bottom-left-radius: inherit; border-bottom-right-radius: inherit;}
.Merchant{position: absolute; top:0px; right:0px; background-color:black; color:white;padding:3px; border-top-right-radius: 0.5em; border:white;}  
.end {position:absolute; bottom:2em;}     
.Categories{position:absolute; bottom:3.25em;}
.end, .Categories, .title{background:rgba(0,0,0, 0.6); }
.end, .Categories{visibility: hidden;}
.title:hover, .Categories:hover, .end:hover{visibility:visible; height:max-content; background:black;color:aqua;}
.visitBtn:hover{color:white; background:green;}
#header{width:100vw; display: inline-flex;flex-direction: row;justify-content: flex-start; box-shadow: 5px 5px 10px whitesmoke; background:linear-gradient(165deg,rgba(100, 10, 100, 0.5) ,rgba(100, 10, 100, 0.45), rgba(100, 10, 100, 0.6), white ,rgba(100, 10, 100, 0.3)) }
#logoImg{width: 75px; aspect-ratio: 1; border-radius: 50%; box-shadow: 0px 0px 10px white; transform:perspective(500px) scale3d(0.8, 0.8, 0.8);}
#webname{ margin-left:1em; height:100%; color:whitesmoke;text-align: left;}
            </style>
</head>
<body>
    <div id="header">
<div id="logo"><img src="logo.jpg" alt="Logo Image" id="logoImg"></div>
<br><h1 id="webname">250-Offers</h1>
    </div>
  <div id="out"></div>
    <script>

var allData = [];
document.body.onload = loadData;
let out = document.getElementById('out');

function loadData(){
    fetch("http://localhost:5000/allstore").then(res =>
            res.json()).then(d => {
               
               for(let i=0; i < d.length; i++ ){
                out.innerHTML += `<div style='background:url(${d[i].Image_URL}); background-size:100% 100%;' class='card'><div class='Merchant'>${d[i].Merchant}</div><div class='title'>${d[i].Title}</div><div class='Categories'>${d[i].Categories}</div><div class='end'>${d[i].End_Date}</div><a class='visitBtn' href='${d[i].siteURL}'>Shop Now</a></div>`;
               }
               flipkartData();
            }).catch(err => {out.innerHTML = 'Error While Loading..Try Again Later'});

}


async function flipkartData(){
    fetch("http://localhost:5000/flipkart").then(res =>
            res.json()).then(d => {
               
               for(let i=0; i < d.length; i++ ){
                out.innerHTML += `<div style='background:url(${d[i].imageUrl}); background-size:100% 100%;' class='card'><div class='Merchant'>Flipkart</div><div class='title'>${d[i].title}</div><div class='Categories'>${d[i].category}</div><div class='end'>${new Date().getUTCDate()}-${new Date().getUTCMonth()+1}-${new Date().getUTCFullYear()}</div><a class='visitBtn' href='${d[i].url}'>Shop Now</a></div>`;
               }
            }).catch(err => {out.innerHTML = 'Error While Loading..Try Again Later'});

}




</script>
<script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAk4_da2E5F3h4X92C9Y1frfEkzrLa4PXg",
      authDomain: "website-582ba.firebaseapp.com",
      projectId: "website-582ba",
      storageBucket: "website-582ba.appspot.com",
      messagingSenderId: "580121767995",
      appId: "1:580121767995:web:c3e33d237703d904016c1e",
      measurementId: "G-YSTHETZNTM"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  </script>
</body>
</html>

