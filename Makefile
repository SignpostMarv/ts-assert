build:
	@echo 'building from ./tsconfig.app.json'
	@./node_modules/.bin/tsc --project ./tsconfig.app.json

generate: build generate--skip-build

generate--skip-build: generate--post-build
	@node ./generate.ts

generate--post-build:
	@./node_modules/.bin/tsc --project ./tsconfig.generated-types-check.json

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

lint--oxlint:
	@./node_modules/.bin/oxlint

lint: lint--prettier lint--oxlint

npm-prep: generate--skip-build lint
	@echo 'building from ./tsconfig.app-npm.json'
	@./node_modules/.bin/tsc --project ./tsconfig.app-npm.json
	@npm publish --dry-run
