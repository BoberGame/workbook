import React, { useCallback, useState } from 'react';
import table1Img from '../../assets/images/table1.jpg';
import table2Img from '../../assets/images/table2.jpg';
import ReactSimpleImageViewer from 'react-simple-image-viewer';
import styles from './Instruments.module.scss';

const images = [table1Img, table2Img];
const titles = ['Периодическая система химических элементов', 'Таблица растворимости'];

const Instruments = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      <div className={styles.img__wrapper}>
        {images.map((src, index) => (
          <img
            className={styles.img}
            src={src}
            onClick={() => openImageViewer(index)}
            width="100"
            key={index}
            style={{ margin: '2px' }}
            title={titles[index]}
            alt=""
          />
        ))}
      </div>

      {isViewerOpen && (
        <ReactSimpleImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          backgroundStyle={{
            paddingBlock: '50px',
            zIndex: 200,
            backgroundColor: 'rgba(0,0,0,0.9)',
          }}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default Instruments;
