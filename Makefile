build:
	@echo 'building from ./tsconfig.app.json'
	@NODE_OPTIONS='' ./node_modules/.bin/tsc --project ./tsconfig.app.json

generate: build generate--skip-build

generate--skip-build: generate--post-build
	@node ./generate.ts

generate--post-build:
	@NODE_OPTIONS='' ./node_modules/.bin/tsc --project ./tsconfig.generated-types-check.json

.PHONY: tests
tests:
	@node --test

.PHONY: coverage
coverage: lint coverage--skip-lint

coverage--skip-lint:
	@node --experimental-test-coverage --test-coverage-include='${PWD}/lib/**/*.ts' --test

coverage--lcov:
	@node --experimental-test-coverage --test-coverage-include='${PWD}/lib/**/*.ts' --test --test-reporter=lcov --test-reporter-destination=coverage/lcov.info


lint--prettier:
	@echo 'running prettier'
	@./node_modules/.bin/prettier . --check

lint--eslint:
	@NODE_OPTIONS='' ./node_modules/.bin/tsc --project ./tsconfig.eslint.json
	@echo 'checking eslint for all issues with config'
	@./node_modules/.bin/eslint --config eslint.config.js.mjs --cache './**/*.mjs'
	@echo 'checking eslint for all issues'
	@./node_modules/.bin/eslint --cache './**/*.ts'

lint: lint--prettier lint--eslint

lint-fix:
	@echo 'fixing prettier issues'
	@./node_modules/.bin/prettier . --write
	@echo 'fixing eslint issues'
	@./node_modules/.bin/eslint --cache './*.ts' lib tests --fix
