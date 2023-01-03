class Factory {
  static generateMediaTagFactory(media) {
    let mediaHtml = '';
    let mediaAsset = String(Object.keys(media).filter(mediaAsset => mediaAsset === 'video' || mediaAsset === 'image'));
    if (mediaAsset === 'image') {
      mediaHtml = `
            <img
              id="media_element_${media.id}"
              class="media_element"
              data-media-id="${media.id}"
              src="assets/images/${media.image}"
            />
          `
    } else {
      mediaHtml = `
            <video
              id="media_element_${media.id}"
              class="media_element"
              controls
              data-media-id="${media.id}"
              src="assets/images/${media.video}"
              type="video/mp4"
            />
          `
    }
    return mediaHtml;
  }
}
