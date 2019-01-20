import math from '../math'

describe('math', () => {
  it('should be able to do simple addition', () => {
    expect(math('1rem + 2rem')).toMatchSnapshot()
    expect(math('1rem + 2')).toMatchSnapshot()
    expect(math('1em + 5em')).toMatchSnapshot()
    expect(math('1in + 5in + 10')).toMatchSnapshot()
  })
  it('should be able to do simple subtraction', () => {
    expect(math('1rem - 2rem')).toMatchSnapshot()
    expect(math('1rem - 2')).toMatchSnapshot()
    expect(math('1em - 5em')).toMatchSnapshot()
    expect(math('1in - 5in - 10')).toMatchSnapshot()
  })
  it('should be able to do simple multiplication', () => {
    expect(math('1rem * 2rem')).toMatchSnapshot()
    expect(math('1rem * 2')).toMatchSnapshot()
    expect(math('1em * 5em')).toMatchSnapshot()
    expect(math('1in * 5in * 10')).toMatchSnapshot()
  })
  it('should be able to do simple division', () => {
    expect(math('1rem * 2rem')).toMatchSnapshot()
    expect(math('1rem * 2')).toMatchSnapshot()
    expect(math('1em * 5em')).toMatchSnapshot()
    expect(math('1in * 5in * 10')).toMatchSnapshot()
  })
  it('should be able to do simple factorial', () => {
    expect(math('3em!')).toMatchSnapshot()
  })
  it('should be able to do simple square root', () => {
    expect(math('sqrt(4em)')).toMatchSnapshot()
  })
  it('should be able to do simple exponent power', () => {
    expect(math('2em^3')).toMatchSnapshot()
  })
  it('should be able to do simple min', () => {
    expect(math('min(3em, 4em, 1em, 2em)')).toMatchSnapshot()
  })
  it('should be able to do simple max', () => {
    expect(math('max(3em, 8em, 1em, 2em)')).toMatchSnapshot()
  })
})
