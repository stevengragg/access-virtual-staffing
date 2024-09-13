/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactFormTemplateProps {
  name: string;
  email: string;
  phone?: string | null;
  position: string;
  subject: string;
  message: string;
  origin: string;
}

// const baseUrl = process.env.VERCEL_DOMAIN
//   ? `https://${process.env.VERCEL_DOMAIN}`
//   : "";

export const ContactFormTemplate = ({
  name,
  email,
  phone,
  position,
  subject,
  message,
  origin,
}: ContactFormTemplateProps) => {
  const previewText = `Read ${name || email} Contact Form Message | ${origin}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img
              src={`https://${process.env.NEXT_VERCEL_DOMAIN}/opengraph-image.jpg`}
              width="96"
              height="30"
              alt="Access Virtual Staffing"
              style={{ backgroundColor: "#ffffff" }}
            />
          </Section>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>Here's what {name || email} wrote</Text>
              <Text style={review}>{message}</Text>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Text style={heading}>Other Important Details - {origin}</Text>

              <Text style={{ ...paragraph, fontWeight: "700" }}>Full Name</Text>
              <Text>{name || "Not provided"}</Text>
              <Text style={{ ...paragraph, fontWeight: "700" }}>Email</Text>
              <Text>{email || "Not provided"}</Text>
              <Text style={{ ...paragraph, fontWeight: "700" }}>
                Phone Number
              </Text>
              <Text>{phone || "Not provided"}</Text>
              <Text style={{ ...paragraph, fontWeight: "700" }}>Position</Text>
              <Text>{position || "Not provided"}</Text>
              <Text style={{ ...paragraph, fontWeight: "700" }}>
                Reason for Contacting
              </Text>
              <Text>{subject || "Not provided"}</Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
  backgroundColor: "#ffffff",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
