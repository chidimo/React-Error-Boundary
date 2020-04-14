import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const ColumnRight = () => {
  const crasher = { function: 'I live to crash' };
  const [ text, textSetter ] = useState(JSON.stringify(crasher));

  const eventHandler = () => {
    throw new Error('Event handler error');
  };

  return (
    <Container className="column-right">
      <h2>Right column</h2>

      <p>
        There are two types of errors we can trigger inside this component: A
        rendering error and a regular javascript error.
      </p>

      <hr />
      <p>
        Clicking this button will replace the <code>stringified</code> object,{' '}
        <code>{text}</code>, with the original object. This will result in a
        rendering error.
      </p>

      <Button
        className="mr-3"
        variant="danger"
        onClick={() => {
          textSetter(crasher);
        }}
      >
        Replace string with object
      </Button>

      <hr />

      <p>
        Clicking this button will invoke an event handler, inside of which an
        error is thrown.
      </p>

      <Button
        className="mr-3"
        variant="danger"
        onClick={() => {
          eventHandler();
        }}
      >
        Invoke event handler
      </Button>
    </Container>
  );
};
