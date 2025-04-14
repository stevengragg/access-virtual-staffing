import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailNotificationTemplateProps {
  title: string;
  message: string;
  footer?: string;
}

export const EmailNotificationTemplate = ({
  title,
  message,
  footer,
}: EmailNotificationTemplateProps) => {
  const previewText = `${title} - ${message.substring(0, 50)}...`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={heading}>{title}</Text>
            <Text style={paragraph}>{message}</Text>
          </Section>
          {footer && (
            <Section>
              <Text style={footerStyle}>{footer}</Text>
            </Section>
          )}
        </Container>
        <br />
        <br />
        <br />

        <Container style={container}>
          <Section>
            <Text style={footerNormalStyle}>
              Go to your settings (/app/settings/notification) to manage your
              notification preferences.
            </Text>
          </Section>
          <Section>
            <Text style={footerStyle}>
              &copy; {new Date().getFullYear()} Access Virtual Staffing. All
              right reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailNotificationTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px",
  width: "580px",
  maxWidth: "100%",
  backgroundColor: "#ffffff",
};

const heading = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#333333",
  marginBottom: "16px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#555555",
};

const footerStyle = {
  fontSize: "14px",
  color: "#888888",
  marginTop: "20px",
};

const footerNormalStyle = {
  fontSize: "14px",
  color: "#888888",
};
