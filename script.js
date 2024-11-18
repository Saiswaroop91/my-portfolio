// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Dynamically change LinkedIn profile picture
document.getElementById('profile-pic').src = 'https://media.licdn.com/dms/image/D4D03AQH...'; // Add your LinkedIn image URL
