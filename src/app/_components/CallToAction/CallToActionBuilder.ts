import { ImageBuilder, LinkBuilder } from '../../../utils/Builders/ImageBuilder'
import { ImageStoryBlokProps, LinkStoryBlokProps } from '../../../../interfaces/common'
import { CallToActionProps } from './CallToAction'


export class CallToActionBuilder {
  private title: string = 'mock title'
  private text: string = 'mock text'
  private link: LinkStoryBlokProps = new LinkBuilder().build()
  private feature: boolean = false
  private spilt: boolean = false
  private image: ImageStoryBlokProps = new ImageBuilder().build()

  public withTitle(newTitle: string): CallToActionBuilder {
    this.title = newTitle
    return this
  }

  public withText(newText: string): CallToActionBuilder {
    this.text = newText
    return this
  }

  public withLink(newLink: LinkStoryBlokProps): CallToActionBuilder {
    this.link = newLink
    return this
  }

  public withFeature(newFeature: boolean): CallToActionBuilder {
    this.feature = newFeature
    return this
  }

  public withSpilt(newSpilt: boolean): CallToActionBuilder {
    this.spilt = newSpilt
    return this
  }
  
  public withImage(newImage: ImageStoryBlokProps): CallToActionBuilder {
    this.image = newImage
    return this
  }

  public build(): CallToActionProps {
    return {
      title: this.title,
      text: this.text,
      link: this.link,
      feature: this.feature,
      spilt: this.spilt,
      image: this.image
    }
  }
}

