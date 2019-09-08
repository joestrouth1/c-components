/** @jsx jsx */
import { jsx, Styled, SxProps } from 'theme-ui'
import {
  forwardRef,
  Component,
  ComponentClass,
  RefObject,
  ComponentPropsWithoutRef,
} from 'react'

const Link = <T extends ComponentClass, OriginalProps extends {}>(
  WrappedComponent: ComponentClass<OriginalProps>
) => {
  type PrivateProps = { forwardedRef: RefObject<T> }

  type Props = OriginalProps & PrivateProps

  class Link extends Component<Props> {
    render() {
      const { forwardedRef, ...restPropsTmp } = this.props as PrivateProps

      const rest = restPropsTmp as OriginalProps

      return <WrappedComponent ref={forwardedRef} {...rest} />
    }
  }

  const RefForwardingFactory = (props: Props, ref: RefObject<T>) => (
    <Link {...props} forwardedRef={ref} />
  )

  return forwardRef<T, OriginalProps>(RefForwardingFactory as any)
}

const WrappedLink = Link<
  typeof Styled.a,
  ComponentPropsWithoutRef<typeof Styled.a>
>(Styled.a)
WrappedLink.displayName = 'Link'

export { WrappedLink as Link }

// interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, SxProps {

// }

// export const Link = forwardRef<HTMLAnchorElement, LinkProps & { as?: ElementType }>((props, ref) => {
//   return (
//     <Styled.a {...props} ref={ref}/>
//   )
// })

// interface LinkProps extends {
//   children: ReactNode | ReactNode[]
//   variant?: string
// }
// export const Link = ({variant = "links.default", ...props}: LinkProps) => {
//   return (
//     <Styled.a
//       {...props}
//       sx={{
//         variant: variant
//       }}
//     />
//   )
// }

// const UseLink = () => (
//   <Link as="button">Text</Link>
// )
