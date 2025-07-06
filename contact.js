// import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';

  window.onload = () => {
    emailjs.init("9Dk6aaL4tIP2_OBTS");

    document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone1 = document.getElementById("phone1").value;
      const phone2 = document.getElementById("phone2").value;
      const message = document.getElementById("message").value;

      if (!name || !email || !phone1 || !message) {
        alert("Please fill in all required fields!");
        return;
      }

      emailjs.send("service_shgkzxc", "template_0a4p9tq", {
        from_name: name,
        phone1,
        phone2,
        reply_to: email,
        message,
      }).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
          document.getElementById("contactForm").reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send email.");
        }
      );
    });
  };