import { ButtonVariant, ButtonType  } from './Button.interface';
import { ButtonProps } from './Button'

export class ButtonBuilder {
  private children: string = 'mock text'
  private variant: ButtonVariant = "primary"
  private type: ButtonType = undefined

  public withChildren(newChildren: string): ButtonBuilder {
    this.children = newChildren
    return this
  }

  public withVariant(newVariant: ButtonVariant): ButtonBuilder {
    this.variant = newVariant
    return this
  }

  public withType(newType: ButtonType): ButtonBuilder {
    this.type = newType
    return this
  }

  public build(): ButtonProps {
    return {
      children: this.children,
      variant: this.variant,
      type: this.type
    }
  }
}

export class ButtonBuilderLink extends ButtonBuilder {
  private link: string = '/'

  public withLink(newLink: string): ButtonBuilderLink {
    this.link = newLink
    return this
  }

  public build(): ButtonProps {
    return {
      ...super.build(),
      link: this.link
    }
  }
}
