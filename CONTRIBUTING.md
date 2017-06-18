# Contributing
Thank you for considering contributing to `✨ polished`. Below you will find useful information for contributing including how to setup the library, how to work with it in development, and how to commit.

Is this your first Pull Request on GitHub? Learn more by reading [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

Want to know where to start helping? Check out our [ROADMAP.md](./ROADMAP.md) or our [active issues](https://github.com/styled-components/polished/issues) for places to start.

## Setup
`✨ polished` supports both `npm` and `yarn`. If using `yarn` just subsitute the below commands with the `yarn` equivalent.

```bash
npm install
```

## Development

Here are some useful commands for development:

- Run tests via `npm test`.
- Update Jest snapshots via `npm test -- -u`.
- Rebuild library and docs with every change via `npm run build:watch`
- Serve the docs locally via ``.

## Committing

`✨ polished` uses [`semantic-release`](https://npmjs.com/package/semantic-release) to do automatic releases and generate a changelog based on the commit history. In order for this to work, we follow [this convention][convention] for commit messages.

`commitizen` is installed to help you follow [this convention][convention].

Once you are ready to commit your changes, just use the following commands:

1. `git add <files to be committed>`
2. `git cz`

Then you just simply follow the prompts to craft your commit message.

[convention]: https://github.com/conventional-changelog/conventional-changelog-angular/blob/ed32559941719a130bb0327f886d6a32a8cbc2ba/convention.md
