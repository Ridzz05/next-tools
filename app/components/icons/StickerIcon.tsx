import Image from 'next/image'

export default function StickerIcon() {
  return (
    <Image 
      src="https://cdn-icons-png.flaticon.com/512/1038/1038535.png"
      alt="Sticker Icon"
      width={24}
      height={24}
      className="w-6 h-6"
    />
  )
} 