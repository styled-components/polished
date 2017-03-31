import { error, warning } from '../_messageHandler'

describe('messageHandler', () => {
  it('should properly print an error', () => {
    global.console = { log: jest.fn() }
    const modulePath = 'mixins/normalize.js'
    const messageBody = `normalize optionally takes a boolean that determines if opinionated rules should be included. However, you provided a parameter of type ${typeof excludeOpinionated} instead.`
    const docPath = '#normalize'

    const header = '%c -- error --------------------------------------------------- mixins/normalize.js -- '

    const body = `%c


normalize optionally takes a boolean that determines if opinionated rules should be included. However, you provided a parameter of type undefined instead.

  `

    const info = `%c
Please see the documentation at %chttps://www.polished.js.org/#normalize %cfor more information.

  `
    const message = `${header}${body}${info}`

    error(modulePath, messageBody, docPath)
    // eslint-disable-next-line no-console
    expect(console.log).toBeCalledWith(message, 'padding: 2px; font-weight: bold; background: red; color: black', 'color: black', 'color: slategray', 'color: blue', 'color: slategray')
  })

  it('should properly print an warning', () => {
    global.console = { log: jest.fn() }
    const modulePath = 'mixins/normalize.js'
    const messageBody = `normalize optionally takes a boolean that determines if opinionated rules should be included. However, you provided a parameter of type ${typeof excludeOpinionated} instead.`
    const docPath = '#normalize'

    const header = '%c -- warning --------------------------------------------------- mixins/normalize.js -- '

    const body = `%c


normalize optionally takes a boolean that determines if opinionated rules should be included. However, you provided a parameter of type undefined instead.

  `

    const info = `%c
Please see the documentation at %chttps://www.polished.js.org/#normalize %cfor more information.

  `
    const message = `${header}${body}${info}`

    warning(modulePath, messageBody, docPath)
    // eslint-disable-next-line no-console
    expect(console.log).toBeCalledWith(message, 'padding: 2px; font-weight: bold; background: gold; color: black', 'color: black', 'color: slategray', 'color: blue', 'color: slategray')
  })
})
