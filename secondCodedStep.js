/* Second coded step: What you need to fill out
	targets: Add cities you want to check for.  They can be partial names and order does not matter.
	recipient: Your email address
	stateCode: If checking for anything other than CA, change the two letter code appropriately.

	Copy and paste the code - not the comment - into Selenium.
*/
var targets = ["Wilton", "Stamford", "Norwalk", "Ridgefield", "Darien", "Old Greenwich"];
var available = [];
var recipient = "arjunkrishna@email.com";
var subject = "CVS Vaccine Appointment Available";
var msg = "Appointments available in: [";
var stateCode = ".ca.json";

Array.from(document.getElementsByClassName("covid-status tableFixHead")).forEach(function(div){ 
	if(div.getAttribute("data-url").toLowerCase().indexOf(stateCode.toLowerCase()) > 1) {
		Array.from(div.children[0].children[1].children).forEach(function(tr) {
			if (tr.children[1].innerText != "Fully Booked")
				available.push(tr.children[0].innerText);
			});
		}
	}
);

var targetsAreAvailable = false;
targets.forEach(function(t){
    available.forEach(function(a){
        if (a.indexOf(t) > -1) {
            msg += a + " | ";
			targetsAreAvailable = true;
		}
    });
});
msg = msg.substr(0, msg.length - 3);
msg += "]";

var url = "https://willmaynard.com/sendEmail.php?";
url += "recipient=" + encodeURIComponent(recipient);
url += "&subject=" + encodeURIComponent(subject);
url += "&body=" + encodeURIComponent(msg);

if (targetsAreAvailable)
    window.location.href = url;
else
    console.log("No Appointments Available");