import { directive, Part, TemplateResult } from 'lit-html';
import { Observable } from 'rxjs';

export const asyncObservable = directive((obs: Observable<any>) => (part: Part) => {
  obs.subscribe(data => {
    part.setValue(data);
    part.commit();
  });
});

export const asyncObservableTemplate = directive(
  (obs: Observable<any>, templateFn: (context: any) => TemplateResult) => (part: Part) => {
    obs.subscribe(data => {
      part.setValue(templateFn(data));
      part.commit();
    });
  }
);
