import React from 'react'

export default function useImage(imgUrl) {
    
    const [img, setImg] = React.useState(null)

    React.useEffect(() => {
        async function fetchImage() {
            try {
                const response = await import("." + imgUrl)
                setImg(response.default)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchImage()
    }, [imgUrl])
    
    return img
}