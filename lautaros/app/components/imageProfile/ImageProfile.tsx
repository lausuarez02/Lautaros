import imgDev from '../../../public/profile.jpeg'
import Image from 'next/image'

interface ImageProps{
    size: "big" | "small" 
}

const ImageProfile = ({size}: ImageProps) => {
    if(size === "small"){
        return(
            <div className="flex -space-x-2 overflow-hidden">
             <Image
            width={50}
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src={imgDev}
            alt="imgProfile"
          />
          </div>
        )
    }
    return (
      <>
        <div className="flex -space-x-2 overflow-hidden">
          <Image
          width={300}
            className="inline-block h-50 w-50 rounded-full ring-2 ring-white"
            src={imgDev}
            alt="imgProfile"
          />
        </div>
      </>
    )
  }

export default ImageProfile;