interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean
  href: string
  target?: string
  size?: 'small'
}

export default function Button({ outlined, href, target, children, size }: IButtonProps) {
  const padding = size === 'small' ? 'py-1 md:py-2' : 'py-2 md:py-4'
  const styles = `px-6 ${padding} w-max border-2 flex justify-center items-center rounded-full ${outlined ? 'border-lightGrey bg-transparent' : 'border-transparent bg-royalBlue'}`

  return (
    <a href={href ?? '#'} target={target} className={styles}>
      {children}
    </a>
  )
}