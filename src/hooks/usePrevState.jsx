import React, { useEffect, useRef } from 'react'

// it's a custom hook

const usePrevState = (state) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = state
    })

    return ref.current

}

export default usePrevState