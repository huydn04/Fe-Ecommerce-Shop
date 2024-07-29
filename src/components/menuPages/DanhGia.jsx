import { Menu } from 'react-daisyui'
import { useState, useCallback } from 'react'
import SaoDanhGia from './SaoDanhGia'
const DanhGia = () => {
  const [open, setOpen] = useState(true)
  const toggleOpen = useCallback(() => {
    setOpen((val) => !val)
  }, [setOpen])
  //

  return (
    <div>
      <Menu>
        <Menu.Item>
          <Menu.Dropdown
            label="Đánh Giá"
            onClick={toggleOpen}
            open={open}
            className="text-[20px] text-[#1A1A1A]"
          >
            <Menu.Item>
              <SaoDanhGia />
            </Menu.Item>
          </Menu.Dropdown>
        </Menu.Item>
      </Menu>
      <hr className="border-t-2 border-solid border-[#E6E6E6] my-4 ml-[27px]" />
    </div>
  )
}
export default DanhGia
