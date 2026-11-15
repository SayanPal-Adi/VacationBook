# Database Schema

This is a proposed logical schema. Confirm field types, constraints and naming against the actual SQLAlchemy models and migrations.

## users
- `id` — primary key (UUID recommended)
- `full_name` — required
- `email` — required, unique, normalized
- `password_hash` — required
- `role` — customer or admin
- `created_at`, `updated_at`

## properties
- `id` — primary key
- `title` — required
- `slug` — unique
- `description`
- `destination` and address/location fields
- `nightly_price` — non-negative numeric
- `max_guests` — positive integer
- `status` — draft, published or archived
- `created_at`, `updated_at`

## property_images
- `id` — primary key
- `property_id` — foreign key to properties
- `image_url`
- `alt_text`
- `display_order`

## amenities
- `id` — primary key
- `name` — unique

## property_amenities
- `property_id` — foreign key
- `amenity_id` — foreign key
- Composite unique/primary key on both columns

## bookings
- `id` — primary key (UUID recommended)
- `booking_reference` — unique
- `user_id` — foreign key to users
- `property_id` — foreign key to properties
- `check_in`, `check_out`
- `guest_count`
- `nightly_price_snapshot`
- `total_amount`
- `status` — pending, confirmed or cancelled
- `created_at`, `updated_at`

## simulated_payments
- `id` — primary key
- `booking_id` — foreign key to bookings
- `amount`
- `status` — simulated_success or simulated_failure
- `provider` — e.g. `mock`
- `created_at`

## Integrity and security
- Use foreign keys and appropriate indexes.
- Enforce unique email and booking reference constraints.
- Validate check-out is later than check-in.
- Store monetary values using an exact decimal/numeric type, not floating point.
- Do not store real payment credentials.
- Use transactions for booking and simulated-payment state changes.
- Define an explicit policy for overlapping bookings; enforce it server-side and, where practical, with database-level constraints.
