import { PureCustomPipe } from './pure-custom.pipe';

describe('PureCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new PureCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
