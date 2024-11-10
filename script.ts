// document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get references to form elements using their IDs
//     const ProfilePictureInput = document.getElementById('ProfilePicture') as HTMLInputElement;
//     const nameElement = document.getElementById('name')
//     const emailElement = document.getElementById('email');
//     const phoneElement = document.getElementById('phone');
//     const educationElement = document.getElementById('education');
//     const experienceElement = document.getElementById('experience');
//     const skillsElement = document.getElementById('skills');


//     if (ProfilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//         const name = (nameElement as HTMLInputElement).value;
//         const email = (emailElement as HTMLInputElement).value;
//         const phone = (phoneElement as HTMLInputElement).value;
//         const education = (educationElement as HTMLInputElement).value;
//         const experience = (experienceElement as HTMLInputElement).value;
//         const skills = (skillsElement as HTMLInputElement).value;

//     // picture element 
//     const ProfilePictureFile = ProfilePictureInput.files?.[0]
//     const ProfilePictureURL = ProfilePictureFile ? URL.createObjectURL(ProfilePictureFile) : '';

//         const resumeOutput = `
//         <h2>Resume</h2>
//         ${ProfilePictureURL ? `<img src="${ProfilePictureURL} alt="profile picture" class="profilepicture">` : ''}
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong>${email}</p>
//         <p><strong>Phone Number:</strong>${phone}</p>
//         <h3>Education</h3>
//         <p">${education}</p>
//         <h3>Work Experience</h3>
//         <p">${experience}</p>
//         <h3>Skills</h3>
//         <p>${skills}</p>
//         `;

//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement) {

//             resumeOutputElement.innerHTML = resumeOutput;
//             resumeOutputElement.style.display = 'block';
//         }
//     } else {
//         console.error('One or more form elements are missing');
//     }
// });

// function makeEditable(){
//     const editableElements = document.querySelectorAll('.editable');
//     editableElements.forEach(element => {
//         element.addEventListener('click' , function(){
//             const currentElement = element as HTMLElement;
//             const currentvalue = currentElement.textContent || "";

//             //replace content
//             if(currentElement.tagName === "p" || currentElement.tagName === 'SPAN'){
//                 const input = document.createElement('input')
//                 input.type = 'text'
//                 input.value = currentvalue
//                 input.classList.add('editing input')

//                 input.addEventListener('blur', function (){
//                     currentElement.textContent = input.value;
//                     currentElement.style.display = 'inline'
//                     input.remove()
//                 })
//                 currentElement.style.display = 'none'
//                 currentElement.parentNode?.insertBefore(input, currentElement)
//                 input.focus()
//             }
//         })
//     })
// }

document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const ProfilePictureInput = document.getElementById('ProfilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');

    if (ProfilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = (nameElement as HTMLInputElement).value;
        const email = (emailElement as HTMLInputElement).value;
        const phone = (phoneElement as HTMLInputElement).value;
        const education = (educationElement as HTMLInputElement).value;
        const experience = (experienceElement as HTMLInputElement).value;
        const skills = (skillsElement as HTMLInputElement).value;

        // picture element 
        const ProfilePictureFile = ProfilePictureInput.files?.[0];
        const ProfilePictureURL = ProfilePictureFile ? URL.createObjectURL(ProfilePictureFile) : '';

        // Log ProfilePictureURL to debug
        console.log(ProfilePictureURL); 

        const resumeOutput = `
        <h2>Resume</h2>
        ${ProfilePictureURL ? `<img src="${ProfilePictureURL}" alt="profile picture" class="profilepicture">` : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>Phone Number:</strong>${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = 'block';
        }
    } else {
        console.error('One or more form elements are missing');
    }
});
