import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const thumbNailClassName = isActive ? 'thumbNailActive' : 'thumbNail'

  const onClickThumbNail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickThumbNail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbNailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
