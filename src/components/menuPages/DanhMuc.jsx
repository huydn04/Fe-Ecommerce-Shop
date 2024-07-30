import { useState } from 'react'
import { useCallback } from 'react'
import { Menu } from 'react-daisyui'
const DanhMuc = () => {
  const [open, setOpen] = useState(true)

  const toggleOpen = useCallback(() => {
    setOpen((val) => !val)
  }, [setOpen])
  //
  const [activeCheckbox1, setActiveCheckbox1] = useState(false)
  const [activeCheckbox2, setActiveCheckbox2] = useState(false)
  const [activeCheckbox3, setActiveCheckbox3] = useState(false)
  const [activeCheckbox4, setActiveCheckbox4] = useState(false)
  const [activeCheckbox5, setActiveCheckbox5] = useState(false)
  const [activeCheckbox6, setActiveCheckbox6] = useState(false)
  const [activeCheckbox7, setActiveCheckbox7] = useState(false)
  return (
    <div className="w-[312px] mt-[40px]">
      {/*  */}
      <div className="w-[312px]">
        <Menu>
          <Menu.Item>
            <Menu.Dropdown
              label="Danh Mục"
              onClick={toggleOpen}
              open={open}
              className="text-[20px] text-[#1A1A1A]"
            >
              <Menu.Item>
                <div
                  className="flex"
                  onClick={() => setActiveCheckbox1(!activeCheckbox1)}
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-6 w-6 border rounded-full border-[#CCCCCC]"
                    checked={activeCheckbox1}
                  />
                  <p
                    className="text-[17px]"
                    style={{ color: activeCheckbox1 ? 'green' : 'black' }}
                  >
                    {activeCheckbox1 ? 'Thịt' : 'Thịt'}
                  </p>
                </div>
              </Menu.Item>
              <Menu.Item className=" text-[14px] flex">
                <div
                  className="flex"
                  onClick={() => setActiveCheckbox2(!activeCheckbox2)}
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-6 w-6 border rounded-full border-[#CCCCCC]"
                    checked={activeCheckbox2}
                  />
                  <p
                    className="text-[17px]"
                    style={{ color: activeCheckbox2 ? 'green' : 'black' }}
                  >
                    {activeCheckbox2 ? 'Nhu Yếu Phẩm' : 'Nhu Yếu Phẩm'}
                  </p>
                </div>
              </Menu.Item>
              <Menu.Item className=" text-[14px]">
                <div
                  className="flex"
                  onClick={() => setActiveCheckbox3(!activeCheckbox3)}
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-6 w-6 border rounded-full border-[#CCCCCC]"
                    checked={activeCheckbox3}
                  />
                  <p
                    className="text-[17px]"
                    style={{ color: activeCheckbox3 ? 'green' : 'black' }}
                  >
                    {activeCheckbox3 ? 'Bếp' : 'Bếp'}
                  </p>
                </div>
              </Menu.Item>
              <Menu.Item className=" text-[14px]">
                <div
                  className="flex"
                  onClick={() => setActiveCheckbox4(!activeCheckbox4)}
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-6 w-6 border rounded-full border-[#CCCCCC]"
                    checked={activeCheckbox4}
                  />
                  <p
                    className="text-[17px]"
                    style={{ color: activeCheckbox4 ? 'green' : 'black' }}
                  >
                    {activeCheckbox4 ? 'Snacks' : 'Snacks'}
                  </p>
                </div>
              </Menu.Item>
              <Menu.Item className=" text-[14px]">
                <div
                  className="flex"
                  onClick={() => setActiveCheckbox5(!activeCheckbox5)}
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-6 w-6 border rounded-full border-[#CCCCCC]"
                    checked={activeCheckbox5}
                  />
                  <p
                    className="text-[17px]"
                    style={{ color: activeCheckbox5 ? 'green' : 'black' }}
                  >
                    {activeCheckbox5 ? 'Rau củ quả' : 'Rau củ quả'}
                  </p>
                </div>
              </Menu.Item>
              <Menu.Item className=" text-[14px]">
                <div
                  className="flex"
                  onClick={() => setActiveCheckbox6(!activeCheckbox6)}
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-6 w-6 border rounded-full border-[#CCCCCC]"
                    checked={activeCheckbox6}
                  />
                  <p
                    className="text-[17px]"
                    style={{ color: activeCheckbox6 ? 'green' : 'black' }}
                  >
                    {activeCheckbox6 ? 'Mỹ Phẩm' : 'Mỹ Phẩm'}
                  </p>
                </div>
              </Menu.Item>
              <Menu.Item className=" text-[14px]">
                <div
                  className="flex"
                  onClick={() => setActiveCheckbox7(!activeCheckbox7)}
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-6 w-6 border rounded-full border-[#CCCCCC]"
                    checked={activeCheckbox7}
                  />
                  <p
                    className="text-[17px]"
                    style={{ color: activeCheckbox7 ? 'green' : 'black' }}
                  >
                    {activeCheckbox7 ? 'Mỹ Phẩm' : 'Mỹ Phẩm'}
                  </p>
                </div>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu.Item>
        </Menu>
        <hr className="border-t-2 border-solid border-[#E6E6E6] my-4 ml-[27px]" />
      </div>
      {/*  */}
    </div>
  )
}
export default DanhMuc
