import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const ColumnRight = () => {
  const crasher = { function: 'I live to crash' };
  const [ text, textSetter ] = useState(JSON.stringify(crasher));

  return (
    <Container className="column-right">
      <h2>Right column</h2>

      <p>
        On clicking the button, we will try to replace the stringified version
        of the object below with the original object.
      </p>

      <div className="code-block">
        <code>{text}</code>
      </div>

      <p>This will result in a rendering error</p>

      <Button
        className="my-5"
        variant="danger"
        onClick={() => {
          textSetter(crasher);
        }}
      >
        Crash app
      </Button>
    </Container>
  );
};
