import backgroundImages from "../backgroundImages";

describe("backgroundImages", function() {
  it("should generate a single background from a parameter", function() {
    expect({
      ...backgroundImages('url("/image/background.jpg")'),
    }).toMatchSnapshot()
  })

  it("should generate a multiple backgroundImages from multiple parameters", function() {
    expect({
      ...backgroundImages('url("/image/background.jpg")', "linear-gradient(red, green)"),
    }).toMatchSnapshot()
  })
})
