import { Bannar } from '../../assets/Home'
import { Banner2 } from '../../assets/Home'
import { Banner3 } from '../../assets/Home'
const BanerBig = () => {
  return (
    <div className="w-full mt-2 flex flex-row justify-center">
      <div
        className="relative w-[750px] h-[530px] bg-cover rounded-[20px]"
        // style={{ backgroundImage: "url('/assets/Imagesssss.jpg')" }}
      >
        <img src={Bannar} alt="" />
      </div>

      <div className="w-[376px]">
        <div className="ml-[20px] hover:shadwo">
          <img src={Banner2} alt="" />
        </div>

        <div className="ml-[20px] hover:shadwo mt-[30px]">
          <img src={Banner3} alt="" />
        </div>
      </div>
    </div>
  )
}
export default BanerBig
