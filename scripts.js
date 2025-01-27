
//contact form validation and submission
function validate(event){
	
	event.preventDefault();
	
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	
	// checks in name and email fields are filled
	if(!name || !email){
		alert("Please fill in all the required fields.");
		return false;
	}
	
	// email validation
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
		
    //success message functionality
	document.getElementById("success-message").style.display = 'block';
	// reset form
	document.getElementById("contact-form").reset();
	return false;
}

function showdate(){
	const date = document.getElementById("current-date");
	const currentdate = new Date();
	date.textContent = currentdate.toDateString();
}

//staff member hover
function showBio(member) {
	const bio = member.querySelector('.bio');
	bio.style.display = 'block';
}
function hideBio(member) {
    const bio = member.querySelector('.bio');
    bio.style.display = 'none';
    }

//Page preloader
function preloader() {
	var loader = document.getElementById("preloader");
	window.addEventListener("load",function(){
		loader.style.display = "none";
	})
	}