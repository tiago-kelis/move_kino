import mergeClass from "@/utils/mergeClass"

export interface FlexProps {
    children: React.ReactNode
    className?: string
    col?: boolean
    row?: boolean
}

export default function Flex({children, className, col, row}: FlexProps) {
    return (
        <div className={mergeClass(
            "flex  justify-center items-center gap-2",
            {'flex-col': col, 'flex-row': row},
            className
        )}>{children}</div>
    )
}