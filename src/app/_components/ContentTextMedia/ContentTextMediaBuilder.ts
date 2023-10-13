import { ImageBuilder } from '../../../utils/Builders/ImageBuilder'
import { ImageStoryBlokProps } from '../../../../interfaces/common'
import { ContentTextMediaProps } from './ContentTextMedia'


export class ContentTextMediaBuilder {
  private title: string = 'mock title'
  private text: string = 'mock text'
  private image: ImageStoryBlokProps = new ImageBuilder().build()

  public withTitle(newTitle: string): ContentTextMediaBuilder {
    this.title = newTitle
    return this
  }

  public withText(newText: string): ContentTextMediaBuilder {
    this.text = newText
    return this
  }


  public withImage(newImage: ImageStoryBlokProps): ContentTextMediaBuilder {
    this.image = newImage
    return this
  }

  public build(): ContentTextMediaProps {
    return {
      title: this.title,
      text: this.text,
      image: this.image
    }
  }
}

