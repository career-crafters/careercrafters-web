function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Ensure the page scrolls to the top on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};