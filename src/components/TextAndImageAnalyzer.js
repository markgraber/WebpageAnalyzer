import React, { useState } from 'react';
import UrlToContent from './UrlToContent';
import ImageCarousel from './ImageCarousel';
import WordCountTable from './WordCountTable';

const TextAndImageAnalyzer = () => {
  const [renderedText, setRenderedText] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [baseUrl, setBaseUrl] = useState('');

  return (
    <div>
      <UrlToContent setRenderedText={setRenderedText} setImageUrls={setImageUrls} setBaseUrl={setBaseUrl} />
      <WordCountTable text={renderedText} />
      <ImageCarousel images={imageUrls} baseUrl={baseUrl} />
    </div>
  );
};

export default TextAndImageAnalyzer;
