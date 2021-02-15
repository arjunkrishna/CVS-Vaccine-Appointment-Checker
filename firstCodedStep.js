/* First coded step: No action necessary, unless checking for another state. 

	This step clicks on the desired state.  Doing this is necessary to populate their availability data.

	Copy and paste the code - not the comment - into Selenium.
*/

Array.from(document.getElementsByClassName("type__link__text modal--link modal--cta")).forEach(function(a){
	if (a.getAttribute("data-analytics-name") == "California")
		a.click();
});