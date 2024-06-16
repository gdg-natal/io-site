interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean
  href: string
  target?: string
}

export default function Button({ outlined, href, target, children }: IButtonProps) {
  const styles = `px-6 py-4 border-2 rounded-full ${outlined ? 'border-lightGrey bg-transparent' : 'border-transparent bg-royalBlue'}`

  return (
    <a href={href ?? '#'} target={target} className={styles}>
      {children}
    </a>
  )
}