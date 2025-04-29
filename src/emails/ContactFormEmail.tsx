import * as React from "react";

interface ContactFormEmailProps {
  full_name: string;
  email: string;
  phone_number: string;
  bhk: string;
  location: string;
  floor_plan_url: string;
  additional_notes: string;
  preferences: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  full_name,
  email,
  phone_number,
  bhk,
  location,
  floor_plan_url,
  additional_notes,
  preferences,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
    <h1 style={{ color: "#4F46E5" }}>🏠 New Interior Estimate Request</h1>

    <p>
      <strong>Full Name:</strong> {full_name} <br />
      <strong>Email:</strong> {email} <br />
      <strong>Phone Number:</strong> {phone_number}
    </p>

    <hr style={{ margin: "20px 0" }} />

    <h2>📋 Property & Design Details</h2>
    <p>
      <strong>BHK Type:</strong> {bhk} <br />
      <strong>Location:</strong> {location} <br />
      <strong>Floor Plan:</strong> {floor_plan_url} <br />
      <strong>Design Preference:</strong> {preferences}
    </p>

    {additional_notes && (
      <>
        <h2>📝 Additional Notes</h2>
        <p>{additional_notes}</p>
      </>
    )}

    <hr style={{ margin: "20px 0" }} />

    <footer style={{ fontSize: "12px", color: "#777" }}>
      This email was sent from your interior design website's estimate form.
    </footer>
  </div>
);
