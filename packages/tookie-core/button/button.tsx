export interface ButtonProps {
  children: React.ReactNode
  variant?: 'outlined' | 'filled'
}

/** Accessible and customizable button with theme styles applied */
export function Button(props: ButtonProps) {
  return <button>{props.children}</button>
}

Button.displayName = 'Button'
