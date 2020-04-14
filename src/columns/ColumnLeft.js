import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const ColumnLeft = () => {
  const [ images, setImages ] = useState([]);

  const fetchImages = async () => {
    const { data } = await axios.get(
      'https://picsum.photos/v2/list?page=0&limit=2'
    );
    setImages(data);
  };

  return (
    <Container className="column-left">
      <h2>Left column</h2>

      <Button
        onClick={() => {
          fetchImages();
        }}
        className="my-5"
        variant="primary"
      >
        Get images
      </Button>

      {images.map((c, i) => {
        const { author, download_url } = c;
        return (
          <div key={i} className="images">
            <img src={download_url} alt={author} />
          </div>
        );
      })}
    </Container>
  );
};
