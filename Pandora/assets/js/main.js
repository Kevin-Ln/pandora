var cs = 0; //compteur des minutes
var ch = 0; //compteur des heures
var avancement = null;
/*var hTop = ["90px", "169px", "273px", "376px", "455px", "305px", "293px", "255px", "235px", "185px", "148px", "135px"];
var hLeft = ["390px", "466px", "495px", "465px", "384px", "203px", "153px", "116px", "103px", "116px", "153px", "203px"];*/

var sTop = ["53px", "148px", "271px", "392px", "484px", "530px", "477px", "388px", "271px", "155px", "53px", "3px"];
var sLeft = ["409px", "500px", "550px", "495px", "395px", "272px", "140px", "50px", "1px", "48px", "139px", "272px"];


	function start() {
        
		//var startu = setTimeout(function() {
			document.getElementById("heure").style.animation = "rotate 7200s infinite linear";
			document.getElementById("minute").style.animation = "rotate 3600s infinite linear";
		//}, 1);

		avancement = setInterval(function() {

			document.getElementById("sSeconde").style.top = sTop[cs];
			document.getElementById("sSeconde").style.left = sLeft[cs];
			cs++;

			if(cs==12) {
				cs=0;
				/*document.getElementById("sHeure").style.top = hTop[ch];
				document.getElementById("sHeure").style.left = hLeft[ch];
				ch++;

				if(ch==12) {
					ch=0;
				}*/
			}

		}, 5000);
	}	

	function stop() {
        
        clearInterval(avancement);
        cs=0;
        ch=0;
		document.getElementById("heure").style.animation = "";
        document.getElementById("minute").style.animation = "";
        
        
        document.getElementById("sSeconde").style.top = "3px";
        document.getElementById("sSeconde").style.left = "272px";
        
            
       /* document.getElementById("sHeure").style.top = "132px";
        document.getElementById("sHeure").style.left = "204px";*/
        

        
        console.log(hTop[ch]);
 	}


