import React from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Preview,
  Link,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome on board!</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="samsoor.com">www.samsoor.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
