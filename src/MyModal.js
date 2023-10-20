import React, { useRef, useState } from 'react';

const MyModal = ({handleSubmit, setNewItem, newItem}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const inputRef = useRef()

  return (
    <div className='modalBtn'>
      <button onClick={openModal}> + New Task</button>
      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header p-2">
              <h5 className="modal-title">New Task</h5>
              <button type="button" className="close" onClick={closeModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body p-1">
              <form className='addForm' onSubmit={handleSubmit}>
                  <label htmlFor="addItem"></label>
                  <input type="text" 
                      autoFocus 
                      ref={inputRef}
                      id='addItem' 
                      value={newItem} 
                      onChange={(e)=>setNewItem(e.target.value)}  
                  />
                   <br />
                  <button type="button" className="btn btn-secondary btn-sm" onClick={closeModal}>
                    Close
                  </button>
                  <button type='submit' className="btn btn-primary btn-sm" aria-label='Add Item' onClick={()=> inputRef.current.focus()}> Save </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
