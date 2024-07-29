import { Menu } from 'react-daisyui'
import { useState, useCallback } from 'react'
import { Button } from 'react-daisyui'
const PhoBien = () => {
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
            label="Phổ Biến"
            onClick={toggleOpen}
            open={open}
            className="text-[20px] text-[#1A1A1A]"
          >
            <Menu.Item>
              <div className="flex gap-2 mt-[20px] flex-wrap">
                <Button className="bg-[#F2F2F2] hover:bg-[#00B207] border rounded-full font-poppins text-[black]">
                  Healthy
                </Button>
                <Button className="bg-[#F2F2F2] hover:bg-[#00B207] border rounded-full font-poppins text-[black]">
                  Low fat
                </Button>
                <Button className="bg-[#F2F2F2] hover:bg-[#00B207] border rounded-full font-poppins text-[black]">
                  Vegetarian
                </Button>
                <Button className="bg-[#F2F2F2] hover:bg-[#00B207] border rounded-full font-poppins text-[black]">
                  Kid foods
                </Button>
                <Button className="bg-[#F2F2F2] hover:bg-[#00B207] border rounded-full font-poppins text-[black]">
                  Bread
                </Button>
                <Button className="bg-[#F2F2F2] hover:bg-[#00B207] border rounded-full font-poppins text-[black]">
                  Meat
                </Button>
                <Button className="bg-[#F2F2F2] hover:bg-[#00B207] border rounded-full font-poppins text-[black]">
                  Snacks
                </Button>
                <Button className="bg-[#F2F2F2] hover:bg-[#00B207] border rounded-full font-poppins text-[black]">
                  Tiffin
                </Button>
                <Button className="bg-[#F2F2F2] hover:bg-[#00B207] border rounded-full font-poppins text-[black]">
                  Launch
                </Button>
                <Button className="bg-[#F2F2F2] hover:bg-[#00B207] border rounded-full font-poppins text-[black]">
                  Dinner
                </Button>
                <Button className="bg-[#F2F2F2] hover:bg-[#00B207] border rounded-full font-poppins text-[black]">
                  Breackfast
                </Button>
                <Button className="bg-[#F2F2F2] hover:bg-[#00B207] border rounded-full font-poppins text-[black]">
                  Fruit
                </Button>
              </div>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu.Item>
      </Menu>
    </div>
  )
}
export default PhoBien
