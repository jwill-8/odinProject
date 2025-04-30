export function toContact(target) {
  target.innerHTML = `
          <div class="contact-container">
              <div class="contact-content">
                  <h1>Contact Us</h1>
                  <p><strong>Phone:</strong> (707) 555-1234</p>
                  <p><strong>Email:</strong> reservations@dbandg.com</p>
                  <p><strong>Address:</strong> 123 Airport Way, Warwick, RI</p>
                  <p><strong>Hours of Operation:</strong></p>
                  <p>
                  Monday - Thursday: 12:00 PM – 9:30 PM<br />
                  Friday - Saturday: 12:00 PM – 10:30 PM<br />
                  Sunday: Closed
                  </p>
              </div>
          </div>
      `;
}
