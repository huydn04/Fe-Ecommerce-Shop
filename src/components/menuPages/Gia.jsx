import { Menu } from 'react-daisyui'
import { useState, useCallback } from 'react'
const Gia = () => {
  const [open, setOpen] = useState(true)
  const toggleOpen = useCallback(() => {
    setOpen((val) => !val)
  }, [setOpen])
  //
  const [value, setValue] = useState(0)

  const handlechange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <Menu>
        <Menu.Item>
          <Menu.Dropdown
            label="Giá"
            onClick={toggleOpen}
            open={open}
            className="text-[20px] text-[#1A1A1A]"
          >
            <Menu.Item>
              <input
                type="range"
                min="0"
                max="1000"
                value={value}
                onChange={handlechange}
                className="slider w-[200px]"
              />
              <br />
              <label className="">giá: {value}.000 VND</label>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu.Item>
      </Menu>
      <hr className="border-t-2 border-solid border-[#E6E6E6] my-4 ml-[27px]" />
    </div>
  )
}
export default Gia
