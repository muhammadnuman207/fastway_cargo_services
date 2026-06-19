const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

const whatsappNumber = '923238441739';
const openWhatsApp = (message) => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
};

const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', event => {
    event.preventDefault();
    const message = `Hello FASTWAY CARGO, I want a shipping quote.\n\nOrigin: ${document.getElementById('quoteOrigin').value}\nDestination: ${document.getElementById('quoteDestination').value}\nWeight: ${document.getElementById('quoteWeight').value} kg\nDimensions: ${document.getElementById('quoteDimensions').value}\nService Type: ${document.getElementById('quoteService').value}\nCargo Details: ${document.getElementById('quoteDescription').value || 'Not provided'}`;
    openWhatsApp(message);
  });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const message = `Hello FASTWAY CARGO, I want to discuss a shipment.\n\nName: ${document.getElementById('contactName').value}\nEmail: ${document.getElementById('contactEmail').value || 'Not provided'}\nPhone: ${document.getElementById('contactPhone').value || 'Not provided'}\nMessage: ${document.getElementById('contactMessage').value}`;
    openWhatsApp(message);
  });
}
