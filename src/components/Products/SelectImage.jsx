import React, { useRef, useState } from 'react'

import { Photo } from '../../assets/img-product'

const SelectImage = () => {
  const inputRef = useRef(null)
  const [image, setImage] = useState('');

  const handleImageClick = () => {
    inputRef.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(event.target.files[0]);
  }

  return (
    <>
      <div>
        <p className='text-sm font-semibold text-center'>Ảnh sản phẩm</p>
        <div className='mt-2' onClick={handleImageClick}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="" className='w-[300px] h-[300px]' />
          ) : (
            <img src={Photo} alt="" className='w-[300px] h-[300px]' />
          )}
          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }} />
        </div>
      </div>
    </>
  )
}

export default SelectImage
