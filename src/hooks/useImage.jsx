import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

export default function useImage(img) {

    const { setImg } = useOutletContext()

    useEffect(() => {
        setImg(img)
    },[img, setImg])

}