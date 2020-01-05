import React from "react";
import { Row, Col, Card, Icon } from "react-materialize";

const SectionTest = () => (
  <Row>
    <Col m={6} s={12}>
      <Card
        actions={[
          <a key="1" href="#">
            This is a link
          </a>,
          <a key="2" href="#">
            This is a link
          </a>
        ]}
        className="blue-grey darken-1"
        closeIcon={<Icon>close</Icon>}
        revealIcon={<Icon>more_vert</Icon>}
        textClassName="white-text"
        title="Card title"
      >
        I am a very simple card.
      </Card>
    </Col>
  </Row>
);


export default SectionTest;