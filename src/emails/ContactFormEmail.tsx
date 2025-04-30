// emails/ContactFormEmail.tsx
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
  Link,
} from "@react-email/components";
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

export default function ContactFormEmail({
  full_name,
  email,
  phone_number,
  bhk,
  location,
  floor_plan_url,
  additional_notes,
  preferences,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", padding: "20px" }}>
        <Container style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px" }}>
          <Heading style={{ fontSize: "24px", marginBottom: "20px" }}>New Estimate Request</Heading>

          <Text><strong>Full Name:</strong> {full_name}</Text>
          <Text><strong>Email:</strong> {email}</Text>
          <Text><strong>Phone Number:</strong> {phone_number}</Text>
          <Text><strong>BHK:</strong> {bhk}</Text>
          <Text><strong>Location:</strong> {location}</Text>

          <Text>
            <strong>Floor Plan URL:</strong>{" "}
            <Link href={floor_plan_url}>{floor_plan_url}</Link>
          </Text>

          <Text><strong>Preferences:</strong> {preferences}</Text>
          <Text><strong>Additional Notes:</strong> {additional_notes}</Text>

          <Text style={{ marginTop: "30px", fontSize: "12px", color: "#666" }}>
            Sent automatically via Future Interior Get Estimate form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
