import React from "react";
import { Html, Body, Container, Text, Preview } from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome on board!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
