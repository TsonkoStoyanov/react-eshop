import './ConfirmModal.css'

const ConfirmModal = ({
    show,
    onClose,
    onSave,
}) => {
    return (
        <div className={`confirm-modal ${show ? 'show' : ''}`}>
            <div className='content'>
                <h3>Are you sure you want to delete this product?</h3>
            </div>
            <div className='actions'>
                <button className='btn btn-tertiary' onClick={onSave}>Yes</button>
                <button className='btn btn-secondary' onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default ConfirmModal;
