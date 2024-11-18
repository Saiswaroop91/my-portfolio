// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Dynamically set profile picture
document.getElementById('profile-pic').src = 'https://via.placeholder.com/150'; // Replace with your LinkedIn image URL
