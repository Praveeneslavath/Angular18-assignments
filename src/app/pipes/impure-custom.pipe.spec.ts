import { ImpureCustomPipe } from './impure-custom.pipe';

describe('ImpureCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new ImpureCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
