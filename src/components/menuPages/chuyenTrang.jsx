import { useState } from 'react'

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1)
  }

  const handlePageClick = (page) => {
    onPageChange(page)
  }

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={handlePrevPage}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-lg hover:bg-gray-400 focus:outline-none"
        disabled={currentPage === 1}
      >
        &lt; {/* Left arrow */}
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={`px-4 py-2 ${
            currentPage === index + 1
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          } focus:outline-none`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-lg hover:bg-gray-400 focus:outline-none"
        disabled={currentPage === totalPages}
      >
        &gt; {/* Right arrow */}
      </button>
    </div>
  )
}

const ChuyenTrang = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 3 // Số lượng trang

  return (
    <div className="container mx-auto p-4">
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <div className="mt-4 text-center">
        <p>Trang: {currentPage}</p>
      </div>
    </div>
  )
}

export default ChuyenTrang
