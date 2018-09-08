# Fix color output until TravisCI fixes https://github.com/travis-ci/travis-ci/issues/7967
export FORCE_COLOR = true

SOURCE = packages

bootstrap:
	npx lerna bootstrap

flow:
	flow check && flow-coverage-report -i "${SOURCE}/**/!(*.test).js" -x "${SOURCE}/**/dist/*.js"

lint:
	eslint ${SOURCE}

test:
	jest ${SOURCE}

test-update:
	jest ${SOURCE} -u

format:
	eslint ${SOURCE} --fix
