import { HeroPageProps } from './HeroPage'

export class HeroPageBuilder {
  private title: string = 'mock title'

  public withTitle(newTitle: string): HeroPageBuilder {
    this.title = newTitle
    return this
  }

  public build(): HeroPageProps {
    return {
      title: this.title
    }
  }
}

