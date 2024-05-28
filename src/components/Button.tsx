interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof BUTTON_COLORS,
  outline?: boolean
}

const BUTTON_COLORS = {
  default: 'royalBlue'
}

export default function Button({ variant = 'default', children }: IButtonProps) {
  const color = BUTTON_COLORS[variant]
  const styles = `px-6 py-4 rounded-full bg-${color}`

  return (
    <button className={styles}>
      {children}
    </button>
  )
}