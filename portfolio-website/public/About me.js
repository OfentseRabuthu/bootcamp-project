
const personalInfo = [
    { label: "Name", value: "Ofentse" },
    { label: "Surname", value: "Rabuthu" },
    { label: "Age", value: 36 },
    { label: "Likes", value: "Music, Poetry, Computers and literature" },
    { label: "Skills", value: [
        "Elctrical wiring",
        "Power and hand tools skills",
        "Electronics",
        "AWS systems knowledge",
        "Sales",
        "Paralegal Skills"
    ]}
];

const experience = [
        "Meteorological technician-2012/2015"
];

const education = [
	"Matric-2006",
	"Cerificate in Weather observations and technical applications-2012",
	"N3 Certificate Electrical engineering-2016",
	"Higher certificate in Law-2018"];

const projects = [
    "Mlab Personal Website-2024"
];

const aboutMeInfo = document.querySelector(".aboutme-info");

const personalInfoHeader = document.createElement("h1");
    personalInfoHeader.textContent = "Personal Info.";
	aboutMeInfo.appendChild(personalInfoHeader);

personalInfo.forEach(info => {
  
	if (Array.isArray(info.value)) {
	const ul = document.createElement("ul");
	info.value.forEach(skill => {
	const li = document.createElement("li");
	li.textContent = skill;
	ul.appendChild(li);
});
 const p = document.createElement("p");
        p.innerHTML = `<b>${info.label}:</b>`;
        p.appendChild(ul);
        aboutMeInfo.appendChild(p);
    } else {
        const p = document.createElement("p");
        p.innerHTML = `<b>${info.label}:</b> ${info.value}`;
        aboutMeInfo.appendChild(p);
    }
});


const educationList = document.createElement("ul");
	education.forEach(edu => {
	const li = document.createElement("li");
	li.textContent = edu;
	educationList.appendChild(li);
});
const educationHeader = document.createElement("h2");
	educationHeader.textContent = "Education.";
	aboutMeInfo.appendChild(educationHeader);
	aboutMeInfo.appendChild(educationList);


const experienceList = document.createElement("ul");
	experience.forEach(exp => {
	const li = document.createElement("li");
	li.textContent = exp;
	experienceList.appendChild(li);
});
const experienceHeader = document.createElement("h3");
	experienceHeader.textContent = "Experience.";
	aboutMeInfo.appendChild(experienceHeader);
	aboutMeInfo.appendChild(experienceList);

const projectsList = document.createElement("ul");
	projects.forEach(proj => {
	const li = document.createElement("li");
	li.textContent = proj;
	projectsList.appendChild(li);
})
const projectsHeader = document.createElement("h4");
	projectsHeader.textContent = "Projects.";
	aboutMeInfo.appendChild(projectsHeader);
	aboutMeInfo.appendChild(projectsList);


