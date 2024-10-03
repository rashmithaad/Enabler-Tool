import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

const DownloadModal = ({ show, onHide, onDownload }) => {
    const formats = ['PDF', 'PPT', 'Word', 'Excel', 'PowerBI'];

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Select Download Format</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    {formats.map((format, index) => (
                        <ListGroup.Item key={index} onClick={() => onDownload(format)}>
                            {format}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DownloadModal;
