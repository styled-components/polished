import Ellipsis from '../Ellipsis';

describe('Ellipsis', function() {

  it('should pass parameter to the value of max-width', function() {
    expect(Ellipsis('250px')).toMatchSnapshot();
  });

  it('should default max-width to 100%', function() {
    expect(Ellipsis()).toMatchSnapshot();
  });

});
