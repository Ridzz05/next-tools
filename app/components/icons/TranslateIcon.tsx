import Image from 'next/image'

export default function TranslateIcon() {
  return (
    <Image 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/2048px-Google_Translate_logo.svg.png"
      alt="Google Translate Icon"
      width={24}
      height={24}
      className="w-6 h-6"
    />
  )
} 