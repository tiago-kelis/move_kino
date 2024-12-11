import mergeClass from "@/utils/mergeClass";

interface GridProps {
    children: React.ReactNode
    className?: string
    colums?: boolean
    numCols?: number
    numRows?: number
}

export default function Grid({children, className, colums, numCols, numRows=1}: GridProps) {
    return (<div className={mergeClass(
        `grid grid-rows-${numRows}`,
        {[`grid-cols-${numCols}`]: colums}    
    )}>{children}</div>
)
}
    