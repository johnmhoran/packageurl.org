---
id: purl-spec-schemas
title: Package-URL JSON Schemas
sidebar_label: Package-URL JSON Schemas
slug: purl-spec-schemas
---

# Package-URL JSON Schemas

## PURL Type Definition

The PURL Type Definition JSON Schema is the reference data model that is used to define PURL types in a structured way.

Each PURL type is specified in a JSON document that matches this schema. These JSON documents are then used to generate PURL type documentation and to support PURL libraries and tools so that they can more easily parse, build, and validate PURLs by type in a consistent and standardized manner across programming languages and technology stacks.

The PURL Type Definition JSON Schema is at: [https://github.com/package-url/purl-spec/blob/main/schemas/purl-type-definition.schema.json](https://github.com/package-url/purl-spec/blob/main/schemas/purl-type-definition.schema.json) .

## PURL Tests

The PURL Test JSON Schema provides the structure for test at two levels:

- Specification: These are tests for the specification across purl types The current set of specification test files are available on GitHub at: [https://github.com/package-url/purl-spec/tree/main/tests/spec/](https://github.com/package-url/purl-spec/tree/main/tests/spec/)

- Types: These tests are organized as one test file per PURL type. A PURL type test is required for adding or changing a purl type. The current set of PURL type test files are available on GitHub at: [https://github.com/package-url/purl-spec/tree/main/tests/types/](https://github.com/package-url/purl-spec/tree/main/tests/types/)

The PURL Test JSON Schema is at: [https://github.com/package-url/purl-spec/blob/main/schemas/purl-test.schema.json](https://github.com/package-url/purl-spec/blob/main/schemas/purl-test.schema.json) .
