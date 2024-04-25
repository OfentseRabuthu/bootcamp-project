document.addEventListener("DOMContentLoaded",

function() 
{
 	const homeContent = document.querySelector(".home-content");
  
  	const name = document.createElement("h1");
  	name.textContent = "Ofentse Rabuthu";
  	homeContent.appendChild(name);
  
  	const bioTitle = document.createElement("h3");
  	bioTitle.textContent = "Bio";
  	homeContent.appendChild(bioTitle);
  
  	const bioText = document.createElement("p");
  	bioText.innerHTML = "Hi, I am proud to introduce myself as a passionate social justice warrior who is currently pursuing a Bachelor of Laws degree because of 	my unwavering determination and strong sense of justice. <br><br> I am on a mission to assist those who have been wrongly accused and imprisoned because I have 	seen many people end up in jail not because they are guilty, but because errors were made that led to their sentencing. <br><br> I also aim to fight for the 	rights of fathers to have access to their children through legal means, as I believe that society as a whole would be better off if all children have a father 	in their lives.";
  	homeContent.appendChild(bioText);

	const address = document.querySelector(".address");

	const addressTitle = document.createElement("h2");
	addressTitle.textContent = "Address";
	address.appendChild(addressTitle);

	const addressContent = document.querySelector(".address-content");
	
	const addressText = document.createElement("p1");
	addressText.innerHTML = "60 Wildcat Crescent<br>Montana Park<br>Pretoria<br>Gauteng<br>0150";
	addressContent.appendChild(addressText);

	const phone = document.querySelector(".phone");

	const phoneTitle = document.createElement("p2");
	phoneTitle.textContent = "Phone: 060 669 5279";
	phone.appendChild(phoneTitle);

});