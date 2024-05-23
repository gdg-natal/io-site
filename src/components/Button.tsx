interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof ButtonColorEnum
}

enum ButtonColorEnum {
  default = 'royalBlue'
}

export default function Button({ variant = 'default', children }: IButtonProps) {
  const color = ButtonColorEnum[variant]
  const styles = `px-6 py-4 rounded-full bg-${color}`

  return (
    <button className={styles}>
      {children}
    </button>
  )
}