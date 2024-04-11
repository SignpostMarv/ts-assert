build:
	@echo 'building from ./tsconfig.app.json'
	@NODE_OPTIONS='' ./node_modules/.bin/tsc --project ./tsconfig.app.json

generate: build generate--skip-build

generate--skip-build: generate--post-build
	@./node_modules/.bin/ts-node ./generate.ts

generate--post-build:
	@NODE_OPTIONS='' ./node_modules/.bin/tsc --project ./tsconfig.generated-types-check.json

.PHONY: tests
tests: build
	@./node_modules/.bin/ts-node ./tests.ts

.PHONY: coverage
coverage: build
	@./node_modules/.bin/c8 ./node_modules/.bin/ts-node ./tests.ts

lint--prettier:
	@echo 'running prettier'
	@./node_modules/.bin/prettier . --check

lint--eslint:
	@echo 'checking eslint for fixable issues'
	@./node_modules/.bin/eslint --cache './*.ts' lib tests --fix-dry-run
	@echo 'checking eslint for all issues'
	@./node_modules/.bin/eslint --cache './*.ts' lib tests

lint: lint--prettier lint--eslint

lint-fix:
	@echo 'fixing prettier issues'
	@./node_modules/.bin/prettier . --write
	@echo 'fixing eslint issues'
	@./node_modules/.bin/eslint --cache './*.ts' lib tests --fix

publish:
	@npm config set git-tag-version=false && npm version $(git describe --tags) && npm publish --tag develop
