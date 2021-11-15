# Javascript-Projects
1.animated-typping-effect- done by typed.js<br>
2.Analog-Clock<br>
<img src="https://user-images.githubusercontent.com/90699287/141798742-df33347c-35e8-4bea-9e51-e614d48b1dab.png" style=width:500px;>
<html>
  <head>
    <style>
      *{
	margin:0;
}
body{
	background-color:#0d1137
}
#clockcontainer{
	height:30vw;
	width:30vw;
	position:absolute;
	top:20%;
	left:35%;
	background: url("clock2.png") no-repeat;
	margin: auto;
	background-size:100%;
	border-radius:50%;
	border:2px solid #0d1137;
	box-shadow:0 -15px 15px rgba(255,255,255,0.05),
               inset 0 -15px rgba(255,255,255,0.05),
               0 15px 15px rgba(0,0,0,0.05),
               inset 0 15px 15px rgba(0,0,0,0.05);

}
#circle{
	background-color:ghostwhite;
	margin:auto;
	height:6%;
	width:6%;
	position:relative;
	top:-30%;
	border-radius:50%;
}
#hour,#minutes,#second{
    position:relative;
    background-color:black;
    border-radius:20px;
    left:50%;
    transform-origin:bottom;
}
#hour{
	width:1.6%;
	height:20%;
	top:30%;
	background-color:deeppink;
	border-radius:5px 6px 0 0;
}
#minutes{
	width:1%;
	height:26%;
	top:5%;
	background-color:whitesmoke;
	border-radius:5px 6px 0 0;
}
#second{
	width:1%;
	height:30%;
	top:-28%;
	background-color:pink;
}
    </style>
  </head>
  <body>
	<div id="clockcontainer">
		<div id="hour"></div>
		<div id="minutes"></div>
		<div id="second"></div>
		<div id="circle"></div>
	</div>

</body>
</html>
