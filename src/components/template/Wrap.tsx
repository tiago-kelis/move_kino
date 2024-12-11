import mergeClass from "@/utils/mergeClass";

interface WrapProps {
    children: React.ReactNode
    className?: string
}

export default function Wrap({children, className}: WrapProps) {
    return (
        <div className={mergeClass(
            "w-full overflow-hidden", className
        )}>{children}</div>
    )
}