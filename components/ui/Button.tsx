import Link from "next/link"

interface ButtonType {
  text: String,
  onClick?: () => void,
  type?: String,
  className?: String,
  href?: string,

}

function Button({ text, className, onClick, type, href }: ButtonType) {
  const sharedStyles = `${className} cursor-pointer rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white`

  const renderButton = () => (
    <button className={sharedStyles}>
      {text}
    </button>
  )

  const renderLink = () => (
    <Link href={href || ''} >
      <button className={sharedStyles}>
        {text}
      </button>
    </Link>
  )

  return href
    ? renderLink()
    : renderButton()
}

export default Button
