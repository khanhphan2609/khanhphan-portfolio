let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= '+ id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Contact: Send to mail
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var emailBody = "Full Name: " + fullName + "\nEmail: " + email + "\nPhone Number: " + phoneNumber + "\nSubject: " + subject + "\n\nMessage: " + message;

    var emailLink = 'mailto:pvkhanh2609@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(emailBody);
    window.location.href = emailLink;
    console.log(emailLink)
});