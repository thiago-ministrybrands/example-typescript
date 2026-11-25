# Counter

## Purpose

A counter exposed both as a TypeScript library (`src/counter.ts`) and as a
static browser page (`public/`).

## Requirements

### Requirement: Counter starts at its initial value
A `Counter` SHALL start at the `initial` value given to its constructor, or `0`
when none is given, and `current` SHALL return the counter's present value.

#### Scenario: Default initial value
- **WHEN** a `Counter` is constructed without arguments
- **THEN** `current` is `0`

#### Scenario: Custom initial value
- **WHEN** a `Counter` is constructed with `5`
- **THEN** `current` is `5`

### Requirement: Counter increments by one
`increment()` SHALL add one to the counter and return the new value.

#### Scenario: Increment from zero
- **WHEN** `increment()` is called on a new `Counter`
- **THEN** it returns `1` and `current` is `1`

### Requirement: Browser page shows and increments the count
The page served at `/` SHALL show the count in the element with
`data-testid="count"`, starting at `0`, and clicking the
`data-testid="increment"` button SHALL increase the displayed count by one.

#### Scenario: Clicking increment
- **WHEN** a user opens `/` and clicks Increment twice
- **THEN** the displayed count is `2`
