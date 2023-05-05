import { CarNumberPipe } from './car-number.pipe';

describe('CarNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CarNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
