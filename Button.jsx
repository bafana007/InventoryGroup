export default function Button({children,variant='',...props}){return <button className={variant} {...props}>{children}</button>}
