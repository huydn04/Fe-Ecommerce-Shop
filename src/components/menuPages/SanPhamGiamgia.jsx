import { Menu } from 'react-daisyui'
import { useState, useCallback } from 'react'
const SanPhamGiamGia = () => {
  const [open, setOpen] = useState(true)
  const toggleOpen = useCallback(() => {
    setOpen((val) => !val)
  }, [setOpen])
  return (
    <div>
      <Menu>
        <Menu.Item>
          <Menu.Dropdown
            label="Sản phẩm giảm giá"
            onClick={toggleOpen}
            open={open}
            className="text-[20px] text-[#1A1A1A]"
          >
            <Menu.Item></Menu.Item>
          </Menu.Dropdown>
        </Menu.Item>
      </Menu>
      <hr className="border-t-2 border-solid border-[#E6E6E6] my-4 ml-[27px]" />
    </div>
  )
}
export default SanPhamGiamGia
