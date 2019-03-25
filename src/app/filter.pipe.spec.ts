import { FilterPipe } from './filter.pipe';

fdescribe('FilterPipe', () => {
  fit('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
