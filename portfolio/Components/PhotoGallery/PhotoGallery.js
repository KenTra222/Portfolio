import React from 'react'
import Image from 'next/image'

import styles from './PhotoGallery.scss'

const PhotoGallery = () => {
  return (
      <div className={styles.Grid}>
        <div>

        <Image/>
        </div>
        <div>
        <Image/>
        </div>
        <div>
        <Image/>
        </div>

    </div>
  )
}

export default PhotoGallery