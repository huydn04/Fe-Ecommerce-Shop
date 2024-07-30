import { Select } from 'react-daisyui'

const LocSanPham = () => {
  return (
    <div className="flex w-[200px] component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="form-control w-[200px] max-w-xs border rounded-xl border-black">
        <Select
          defaultValue={'default'}
          onChange={(e) => console.log(e.target.value)}
        >
          <option value={'default'} disabled>
            Lọc...
          </option>
          <option value="Củ Nhất">Củ Nhất</option>
          <option value="Mới Nhất">Mới Nhất</option>
        </Select>
      </div>
    </div>
  )
}

export default LocSanPham
