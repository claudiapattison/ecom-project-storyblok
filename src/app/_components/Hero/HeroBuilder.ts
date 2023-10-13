import { ImageBuilder, LinkBuilder } from '../../../utils/Builders/ImageBuilder'
import { ImageStoryBlokProps, LinkStoryBlokProps } from '../../../../interfaces/common'
import { HeroProps } from './Hero'


export class HeroBuilder {
  private label: string = 'mock label'
  private title: string = 'mock title'
  private text: string = 'mock text'
  private link: LinkStoryBlokProps = new LinkBuilder().build()
  private image: ImageStoryBlokProps = new ImageBuilder().build()
  private imageMobile : ImageStoryBlokProps = new ImageBuilder().build()

  public withLabel(newLabel: string): HeroBuilder {
    this.label = newLabel
    return this
  }

  public withTitle(newTitle: string): HeroBuilder {
    this.title = newTitle
    return this
  }

  public withText(newText: string): HeroBuilder {
    this.text = newText
    return this
  }

  public withLink(newLink: LinkStoryBlokProps): HeroBuilder {
    this.link = newLink
    return this
  }

  public withImage(newImage: ImageStoryBlokProps): HeroBuilder {
    this.image = newImage
    return this
  }

  public withImageMobile(newImageMobile: ImageStoryBlokProps): HeroBuilder {
    this.imageMobile = newImageMobile
    return this
  }


  public build(): HeroProps {
    return {
      label: this.label,
      title: this.title,
      text: this.text,
      link: this.link,
      image: this.image,
      imageMobile: this.imageMobile
    }
  }
}

