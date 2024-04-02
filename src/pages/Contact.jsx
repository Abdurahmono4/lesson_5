function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <span>
          Call us:
          <a className="dropdown-item" type=" #contact" href="tel:+1234567890">
            +998916830570{"📞"}
          </a>
        </span>
        <span>
          Email us:
          <a
            className="dropdown-item"
            type="gmail"
            href="https://abdurahmonolimjonov40@gmail.com"
          >
            Email:abdurahmonolimjonov40@gmail.com{"💬"}
          </a>
        </span>

        <span>
          Our Company:
          <a className="dropdown-item" href="#contact">
            Asaxiy Books{" 💯"}
          </a>
        </span>
        <span>
          Service:
          <a className="dropdown-item" href="#contact">
            free books{" ✅"}
          </a>
        </span>
      </div>

      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">YourBrand</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#home">Home</a>
      </li>
      <!-- ... other nav items ... -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Contact Us
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="tel:+1234567890">Call Us: +1 (234) 567-890</a>
          <a class="dropdown-item" href="mailto:info@yourbrand.com">Email: info@yourbrand.com</a>
          <a class="dropdown-item" href="#contact">Contact Form</a>
        </div>
      </li>
    </ul>
  </div>
</nav> */}
    </div>
  );
}

export default Contact;
