function scrollToSection(sectionClass) {
    var section = document.getElementsByClassName(sectionClass)[0];
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
