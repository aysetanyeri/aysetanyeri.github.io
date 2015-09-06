/*Block comments*/
//LIne comments
//When the page loads
$(function() {

//Hide all the sections
$('h3').next().not('h3').hide();


$('img').on('click',askQuestions);


		//When the user clicks a h3 element
$('h3').on('click',function(){
		//Hide the next element
$(this).next().not('h3').slideToggle(800);

});
});	
function askQuestions() {


	var firstName=prompt('What is your first name?');
	var lastName=prompt('What is your last name?');
	var fullName=firstName+' '+lastName;
	console.log('User is called '+fullName);
	$('h2').text('Hello '+fullName);
	fullName
	var userAge=prompt('How old are you?');
	userAge=parseInt(userAge);



	if(userAge>=18) {
		console.log('User is an adult');


	} else if (userAge>=13) {
		console.log('User is a teenager');

	} else {
		console.log('Go away child');
	}
	if(firstName.toLowerCase()=='general' && lastName.toLowerCase()!='assembly') {
	console.log('Greetings general!');
	}
}

