// contact page for restaurant
import './styles.css';

export function contact() {
  const contentDiv = document.getElementById('content');
  if (contentDiv) {
    contentDiv.innerHTML = '';

    // Create and add the title
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    h1.className = 'contact-title';
    contentDiv.appendChild(h1);

    // Create and add a contact intro paragraph
    const introP = document.createElement('p');
    introP.textContent = 'We would love to hear from you. Please fill out the form below or reach us through the provided contact methods.';
    introP.className = 'contact-intro';
    contentDiv.appendChild(introP);

    // Contact form
    const form = document.createElement('form');
    form.className = 'contact-form';

    // Name field
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    nameLabel.htmlFor = 'contact-name';
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'contact-name';
    nameInput.name = 'name';
    nameInput.required = true;
    form.appendChild(nameInput);

    // Email field
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    emailLabel.htmlFor = 'contact-email';
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'contact-email';
    emailInput.name = 'email';
    emailInput.required = true;
    form.appendChild(emailInput);

    // Message field
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    messageLabel.htmlFor = 'contact-message';
    form.appendChild(messageLabel);

    const messageTextarea = document.createElement('textarea');
    messageTextarea.id = 'contact-message';
    messageTextarea.name = 'message';
    messageTextarea.rows = 5;
    messageTextarea.required = true;
    form.appendChild(messageTextarea);

    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Send Message';
    submitBtn.className = 'contact-submit-btn';
    form.appendChild(submitBtn);

    contentDiv.appendChild(form);

    // Alternative contact info
    const infoDiv = document.createElement('div');
    infoDiv.className = 'contact-info';

    const phoneP = document.createElement('p');
    phoneP.innerHTML = '<strong>Phone:</strong> (123) 456-7890';
    infoDiv.appendChild(phoneP);

    const emailP = document.createElement('p');
    emailP.innerHTML = '<strong>Email:</strong> reservations@gourmetparadise.com';
    infoDiv.appendChild(emailP);

    contentDiv.appendChild(infoDiv);
  }
}