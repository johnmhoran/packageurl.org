# PURL Types

## Package-URL type definitions

Each package manager, platform, type, or ecosystem has its own conventions
and protocols to identify, locate, and provision software packages.

The package `type` is the component of a Package-URL that is used to
capture this information with a short string such as `maven`, `npm`,
`nuget`, `gem`, `pypi`, etc.

PURL type definitions are maintained in a set of JSON Schema files with a
separate file for each `purl` `type`. Each `purl` `type` has a corresponding
file of automatically generated documentation. There is also a simple index
of all currently registered purl types.

## Where to find PURL type information

- In individual JSON files, one for each `purl` `type` definition at:
  https://github.com/package-url/purl-spec/tree/main/types

- As Markdown documentation, generated from each `purl` `type` JSON
  definition at:
  https://github.com/package-url/purl-spec/tree/main/types-doc

- In the JSON Index listing of all registered PURL types at:
  https://github.com/package-url/purl-spec/tree/main/purl-types-index.json

## How PURL Types are maintained

PURL type definitions are maintained as JSON definition files and JSON
test files in the PURL specification repository. These JSON files serve as
the source of truth and define the structure of each PURL type, including:

- Namespace and name formatting rules
- Supported qualifiers
- Repository requirements
- Mapping of PURL concepts to the native ecosystem concepts

On commit, a job automatically:

- Checks that all JSON files are schema-valid
- Formats all the JSON files
- Generates the ``purl-types-index.json`` file containing a list of defined
  registered PURL types
- Generates human-readable documentation for each type

## How to Propose a New PURL Type

To propose a new PURL type, create an **issue** and a corresponding
**pull request** in the repository with:

- a new JSON definition file under `types/`.
- a new JSON test file file under `tests/types/`.

Ensure that your proposal follows the **PURL Type Definition Schema** and
includes all required fields. For this see the README-dev.md for details to
run local checks.
