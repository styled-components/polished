# Fix color output until TravisCI fixes https://github.com/travis-ci/travis-ci/issues/7967
export FORCE_COLOR = true

SOURCES = packages shared

flow:
	flow check && flow-coverage-report -i "packages/**/!(*.test).js" "shared/**/!(*.test).js"

lint:
	eslint ${SOURCES}

test:
	jest ${SOURCES}

test-update:
	jest ${SOURCES} -u

format:
	eslint ${SOURCES} --fix
