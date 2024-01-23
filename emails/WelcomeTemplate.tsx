import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";
import { CSSProperties } from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body style={body} className="bg-white text-3xl">
          <Container>
            <Text style={heading} className="font-bold font">
              Hello {name}
            </Text>
            <Link href="https://burza.gymnazium-opatov.cz">Check it out</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
