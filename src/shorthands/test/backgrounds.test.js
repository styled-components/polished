import backgrounds from "../backgrounds";

describe("backgrounds", function() {
  it("should generate a single background from a parameter", function() {
    expect({
      ...backgrounds('url("/image/background.jpg")'),
    }).toMatchSnapshot()
  })

  it("should generate a multiple backgrounds from multiple parameters", function() {
    expect({
      ...backgrounds('url("/image/background.jpg")', "linear-gradient(red, green)", "center no-repeat"),
    }).toMatchSnapshot()
  })
})
