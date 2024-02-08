export type ButtonProps = {
  /**
   * The text inside the button
   */
  label?: string | undefined
  /**
   * The background color of the button.
   */
  backgroundColor?: string | undefined
}

/**
 * Primary button component for user interaction.
 */
export const Button = ( props : ButtonProps ) => {
  return  <button { ...props } style={{ backgroundColor: props.backgroundColor }}>
            { props.label }
          </button>
}
