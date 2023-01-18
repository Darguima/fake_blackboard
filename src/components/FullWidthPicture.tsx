import React, { useEffect, useState } from 'react'
import { Image, ImageProps } from 'react-native'

const FullWidthImage: React.FC<ImageProps> = ({ source, ...others }) => {
  const [ratio, setRatio] = useState(1)

  useEffect(() => {
    if (source) {
      const { height, width } = Image.resolveAssetSource(source)
      setRatio(width / height)
    }
  }, [source])

  return (
    <Image
      {...others}

      source={source}

      style={{
        width: '100%',
        height: undefined,
        aspectRatio: ratio
      }}
    />
  )
}

export default FullWidthImage
