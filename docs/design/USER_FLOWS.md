# User Flows

## Browse and discover
1. Visitor opens the home page.
2. Visitor searches by destination and optional dates/guest count.
3. Application displays matching published properties.
4. Visitor opens a property detail page.

## Register and sign in
1. Visitor opens registration or login.
2. Visitor submits the form.
3. Server validates input and credentials.
4. Server creates a session or returns a clear validation error.

## Booking and simulated checkout
1. Signed-in user selects dates and guest count.
2. Server validates dates, capacity, listing status and availability.
3. Server calculates the price and creates a pending booking.
4. User proceeds to the simulated payment screen.
5. User selects the mock outcome.
6. Server records the simulation result and updates booking status.
7. User sees a confirmation or failure message.

## Manage a booking
1. User opens their bookings.
2. Server returns only bookings belonging to that user.
3. User opens a booking and, if eligible, requests cancellation.
4. Server validates the cancellation policy and updates the record.
