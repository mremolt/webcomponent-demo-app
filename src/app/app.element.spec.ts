import { AppElement } from './app.element';

describe('AppElement', () => {
  let subject: AppElement;

  beforeEach(() => {
    subject = new AppElement();
  });

  it('should instantiate', () => {
    expect(subject).toBeInstanceOf(AppElement);
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await subject.connectedCallback();
    });

    it('should render', () => {
      expect((subject.shadowRoot as ShadowRoot).innerHTML).toMatchSnapshot();
    });

    it('should render the content of foo', () => {
      expect((subject.shadowRoot as ShadowRoot).innerHTML).toMatch('Hello World');
    });
  });
});
