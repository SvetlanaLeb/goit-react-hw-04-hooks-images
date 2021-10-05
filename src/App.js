import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import imageApi from './services/imageAPI';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

function App() {
    const [requestName, setRequestName] = useState('');
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

    useEffect(() => {
        if (requestName === '') return;
        setLoading(true);
        imageApi(requestName, currentPage)
            .then(result => {
                setData(prevState => [...prevState, ...result.hits]);
            })
            .catch(error => setError(error))
            .finally(() => setLoading(false));
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }, [currentPage, requestName]);

    const handleFormSubmit = requestName => {
        setRequestName(requestName);
        setData([]);
        setCurrentPage(1);
    };

    const handleModalOpen = largeImageURL => {
        setShowModal(true);
        setModalImage(largeImageURL);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setModalImage('');
    };
    const onLoadBtnClick = () => {
        setCurrentPage(state => state + 1);
    };

    return (
        <div className="App">
            <Searchbar onSubmit={handleFormSubmit} />
            {error && <h2>{error.message}</h2>}
            {data && data.length === 0 && loading === false && (
                <h2>No results were found for your search</h2>
            )}
            {data && (
                <ImageGallery data={data} onImageClick={handleModalOpen} />
            )}
            {data && data.length !== 0 && (
                <Button onLoadClick={onLoadBtnClick} />
            )}
            {loading && (
                <Loader
                    type="ThreeDots"
                    color="blueviolet"
                    height={80}
                    width={80}
                    className="Loader"
                />
            )}
            {showModal && (
                <Modal modalImage={modalImage} onClose={handleModalClose}>
                    <img src={modalImage} alt="" />
                </Modal>
            )}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
