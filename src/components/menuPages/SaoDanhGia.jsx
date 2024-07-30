import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className="hidden "
            />
            <FaStar
              className="star cursor-pointer"
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        )
      })}
      <br />
      <p>{rating} Sao</p>
    </div>
  )
}

export default StarRating
