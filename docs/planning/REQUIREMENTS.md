# Requirements

## Functional requirements

### Public browsing
- Visitors can view published properties.
- Visitors can search and filter properties.
- Visitors can open a property details page.
- Property pages show location, description, amenities, images, capacity and pricing.

### Accounts
- Users can register and sign in.
- Users can sign out.
- Users can view and update permitted profile fields.
- Passwords are stored as secure password hashes, never as plaintext.

### Bookings
- Authenticated users can submit booking dates and guest counts.
- The server validates date ranges, capacity, property status and availability.
- Users can view their own bookings.
- Users can cancel eligible bookings.
- The server calculates the authoritative total; the browser must not be trusted for price totals.

### Simulated checkout
- Users can complete a clearly labelled simulated payment.
- The application records a payment simulation status and booking reference.
- No card details or real payment credentials are collected.
- The interface must state that the payment is simulated.

### Administration
- Authorized administrators can create, edit, publish and archive properties.
- Authorized administrators can review bookings.
- Administrative routes enforce authorization on the server.

## Non-functional requirements
- Responsive layout for mobile, tablet and desktop.
- Server-side validation for all important inputs.
- Secure session and secret management.
- Database constraints for data integrity.
- Useful logging without exposing passwords, tokens or secrets.
- Graceful handling of database and application errors.
- Basic accessibility: semantic HTML, labels, keyboard access and visible focus states.

## Out of scope for this version
- Real payment gateway integration
- Airline or transport booking
- Native mobile applications
- Multi-currency settlement
- Third-party identity providers unless separately approved
