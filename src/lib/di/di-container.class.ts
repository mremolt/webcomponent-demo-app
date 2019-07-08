import { Container } from 'inversify';
import inversifyInjectDecorators from 'inversify-inject-decorators';

export class DiContainer {
  public static getInstance(): DiContainer {
    this.instance = this.instance || new DiContainer();
    return this.instance;
  }

  public static get decorators(): ReturnType<typeof inversifyInjectDecorators> {
    return this.getInstance().decorators;
  }

  public static get injectDecorator() {
    return this.decorators.lazyInject;
  }

  private static instance: DiContainer;

  public readonly container: Container;
  public readonly decorators: ReturnType<typeof inversifyInjectDecorators>;

  constructor() {
    this.container = new Container({ autoBindInjectable: true, skipBaseClassChecks: true });
    this.decorators = inversifyInjectDecorators(this.container);
  }

  public bind<T>(serviceIdentifier: string | symbol) {
    return this.container.bind<T>(serviceIdentifier);
  }

  public get<T>(serviceIdentifier: string | symbol): T {
    return this.container.get<T>(serviceIdentifier);
  }

  public getAll<T>(serviceIdentifier: string | symbol): ReadonlyArray<T> {
    return this.container.getAll<T>(serviceIdentifier);
  }
}

export const inject = DiContainer.injectDecorator;
