import { ImageStoryBlokProps, LinkStoryBlokProps } from "../../../interfaces/common"

export class ImageBuilder {
  private filename: string = '../../../public/placeholder/hero-desktop.jpg'
  private alt: string = 'Alt Tag'

  public withFilename(newFilename: string): ImageBuilder {
    this.filename = newFilename
    return this
  }

  public withAlt(newAlt: string): ImageBuilder {
    this.alt = newAlt
    return this
  }

  public build(): ImageStoryBlokProps {
    return {
        filename: this.filename,
        alt: this.alt
    }
  }
}


export class LinkBuilder {
  private cached_url: string = '/'

  public withUrl(newFilename: string): LinkBuilder {
    this.cached_url = newFilename
    return this
  }

  public build(): LinkStoryBlokProps {
    return {
      cached_url: this.cached_url
    }
  }
}


