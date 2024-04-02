import React, { SetStateAction } from 'react'

const ButtonComponent = (props: {handleClass: string, handle: (param: number, param2: number) => void, percent: string, bills: number, peoples: number}) => {
    return (
        <div>
            <button className={"min-h-[50px] flex items-center pb-1 justify-center w-full rounded-md " + props.handleClass} onClick={() => props.handle(props.bills, props.peoples)}>{props.percent}</button>
        </div>
    )
}

export default ButtonComponent
