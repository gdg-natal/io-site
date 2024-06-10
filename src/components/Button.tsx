interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean
}

export default function Button({ outlined, children }: IButtonProps) {
  const styles = `px-6 py-4 border-2 rounded-full ${outlined ? 'border-lightGrey bg-transparent' : 'border-transparent bg-royalBlue'}`

  return (
    <button className={styles}>
      {children}
    </button>
  )
}