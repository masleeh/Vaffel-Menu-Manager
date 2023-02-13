import React, {useState} from 'react'

const useShowIcon = () => {
    const [isShowIcon, setShowIcon] = useState(false)

    const mouseOver = () => {
        setShowIcon(true)
    }

    const mouseOut = () => {
        setShowIcon(false)
    }

    return {isShowIcon, mouseOut, mouseOver}
}

export default useShowIcon