/*

var name = "Amarpreet Walia"; 

var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); 

*/

var bio = {
	"name" : "Amarpreet Walia",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "347-570-8805",
		"email" : "amarpreet.s.walia@gmail.com",
		"github" : "https://github.com/awalia1",
		"twitter" : "@awalia100",
		"location" : "New York City",
	},
	"welcomeMessage" : "This is my online resume",
	"skills" : ["HTML", " HTML5", " CSS", " CSS3", " Javascript", " jQuery"],
	"pic": "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Batman-BenAffleck.jpg/200px-Batman-BenAffleck.jpg"	
};

/*var work = {};
	work.title = "Front End Developer";
	work.employer = "Hoop-Ball";
	work.startDate = "September 2017";*/
	
var work = {
	"jobs":[
		{
			"title" : "Front End Developer",
			"employer" : "Hoop-Ball",
			"dates" : "September 2017 - Present" ,
			"location" : "Remote",
			"description" : "Use front-end knowledge to help maintain and improve the company website."
		},
		{
			"title" : "Freelance Web Developer", 
			"employer" : "Freelance",
			"dates" : "January 2017 - Present",
			"location" : "Remote",
			"description" : "Use knowledge of languages like HTML, CSS, Javascript and more to create websites."
		}
	]
}

var education = {};
	education["name"] = "Queens College";
	education["years"] = "2011-2016";
	education["city"] ="Queens, New York";
	
var projects = {
	"project":[
		{
			"title" : "sidelineexpert.com",
			"date" : "June 2017",
			"description" : "Sports website",
			"image" : "https://upload.wikimedia.org/wikipedia/en/7/74/Batman_Detective_Comics_Vol_2_1.png"
		},
		{	
			"title" : "iqbalphotographynyc.com",
			"date" : "January 2018",
			"description" : "Photography website",
			"image" : "https://upload.wikimedia.org/wikipedia/en/7/74/Batman_Detective_Comics_Vol_2_1.png"
		}
	]
}

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
$("#topContacts").prepend(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
$("#header").prepend(formattedName, formattedRole);
$("#header").append(formattedMessage, formattedPic);

/*if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}*/

$("#header").append(HTMLskillsStart);

for (var i = 0; i < bio.skills.length; i++)
	var formattedSkill = HTMLskills.replace("%data%", bio.skills);
	$("#skills").append(formattedSkill); 
	
/*for (skill in bio.skills){
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill)
};*/

function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);
		var formattedWorkExperience = formattedEmployer + formattedTitle + formattedDates + formattedWorkLocation + formattedDescription;
		
		$(".work-entry:last").append(formattedWorkExperience);
	};
};

displayWork();

function locationizer (work_obj){
	var locationArray =[];
	
	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	
	return locationArray;
	
}

function inName(name){
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] +" "+name[1];
}

console.log(inName("Amarpreet Walia"))

$("#main").append(internationalizeButton);

projects.display = function(){
	for (stuff in projects.project){
		$("#projects").append(HTMLprojectStart);
		
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[stuff].title);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[stuff].description);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[stuff].date);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[stuff].image);
		var formattedProjects = formattedProjectTitle + formattedProjectDescription + formattedProjectDates + formattedProjectImage;
		
		$(".project-entry:last").append(formattedProjects); 
	}
}

projects.display();












