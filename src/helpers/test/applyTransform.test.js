// @flow
import applyTransform from '../applyTransform'

describe('applyTransform', function() {
  it('should format a transform style object to a string', function() {
    const style = {
      // CSS properties.
      color: 'red',
      perspective: '17px',

      // Transform properties.
      matrix: '1.0, 2.0, 3.0, 4.0, 5.0, 6.0',
      translate: '12px, 50%',
      translateX: 2,
      translateY: 2,
      scale: '2, 0.5',
      scaleX: '2',
      scaleY: '0.5',
      rotate: '0.5turn',
      skew: '30deg, 20deg',
      skewX: '30deg',
      skewY: '1.07rad',
      matrix3d: '1.0, ..., 16.0',
      translate3d: '12px, 50%, 3em',
      translateZ: 2,
      scale3d: '2.5, 1.2, 0.3',
      scaleZ: '0.3',
      rotate3d: '1, 2.0, 3.0, 10deg',
      rotateX: '10deg',
      rotateY: '10deg',
      rotateZ: '10deg',
    };

    expect(applyTransform(style)).toMatchSnapshot();
  });

  it('should merge with an existing `transform` property', ()=> {
    const style = {
      transform: 'scale(1)',
      translate: '12px, 50%',
    };

    expect(applyTransform(style)).toMatchSnapshot();
  });

  it('should overwrite an empty `transform` property', ()=> {
    const styleA = {
      transform: 'none',
      color: 'red',
      translate: '12px, 50%',
    };

    const styleB = {
      transform: '',
      color: 'red',
      translate: '12px, 50%',
    };

    expect(applyTransform(styleA)).toMatchSnapshot();
    expect(applyTransform(styleB)).toMatchSnapshot();
  });
})
