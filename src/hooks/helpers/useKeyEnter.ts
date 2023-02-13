

const useKeyEnter = (onClickFunction: Function) => {
    const handleKey = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onClickFunction()
        }
    }

    return {handleKey}
}

export default useKeyEnter