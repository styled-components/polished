import { error, warning } from '../_messageHandler'

describe('messageHandler', () => {
  it('should properly print an error', () => {
    global.console = { log: jest.fn() }
    const messageBody = `optionally takes a boolean that determines if opinionated rules should be included. However, you provided a parameter of type ${typeof excludeOpinionated} instead.`

    const header = '%c -- error --------------------------------------------------- test/_messageHandler.test.js -- '

    const body = `%c


_messageHandler.test %coptionally takes a boolean that determines if opinionated rules should be included. However, you provided a parameter of type undefined instead.

  `

    const info = `%c
Please see the documentation at %chttps://www.polished.js.org/#_messageHandler.test %cfor more information.

  `
    const message = `${header}${body}${info}`

    error(messageBody)
    // eslint-disable-next-line no-console
    expect(console.log).toBeCalledWith(message, 'padding: 2px; font-weight: bold; background: red; color: black', 'color: black', 'color: slategray; font-weight: bold', 'color: slategray', 'color: blue', 'color: slategray')
  })

  it('should properly print a warning', () => {
    global.console = { log: jest.fn() }
    const messageBody = `optionally takes a boolean that determines if opinionated rules should be included. However, you provided a parameter of type ${typeof excludeOpinionated} instead.`

    const header = '%c -- warning --------------------------------------------------- test/_messageHandler.test.js -- '

    const body = `%c


_messageHandler.test %coptionally takes a boolean that determines if opinionated rules should be included. However, you provided a parameter of type undefined instead.

  `

    const info = `%c
Please see the documentation at %chttps://www.polished.js.org/#_messageHandler.test %cfor more information.

  `
    const message = `${header}${body}${info}`

    warning(messageBody)
    // eslint-disable-next-line no-console
    expect(console.log).toBeCalledWith(message, 'padding: 2px; font-weight: bold; background: gold; color: black', 'color: black', 'color: slategray; font-weight: bold', 'color: slategray', 'color: blue', 'color: slategray')
  })
})
