import { async, inject } from '@angular/core/testing';

import { TimeAgoPipe } from './time-ago.pipe';

describe('[Shared] Pipe: Time Ago', () => {
  let pipe: TimeAgoPipe;

  beforeEach(() => {
    pipe = new TimeAgoPipe();
  });

  it('should create the pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a string date', () => {
    const r: string = pipe.transform('2011-01-26T19:06:43Z');
    expect(r).toContain('años');
  });

  it('should transform a time stamp', () => {
    const r: string = pipe.transform(1362409597);
    expect(r).toContain('años');
  });
});
