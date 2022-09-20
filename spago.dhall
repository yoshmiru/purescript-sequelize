{-
Welcome to a Spago project!
You can edit this file as you like.

Need help? See the following resources:
- Spago documentation: https://github.com/purescript/spago
- Dhall language tour: https://docs.dhall-lang.org/tutorials/Language-Tour.html

When creating a new Spago project, you can use
`spago init --no-comments` or `spago init -C`
to generate this file without the comments in this block.
-}
{ name = "sequelize"
, dependencies =
  [ "aff"
  , "aff-promise"
  , "arrays"
  , "bifunctors"
  , "console"
  , "contravariant"
  , "control"
  , "either"
  , "effect"
  , "enums"
  , "exceptions"
  , "foldable-traversable"
  , "foreign"
  , "foreign-object"
  , "free"
  , "functions"
  , "functors"
  , "identity"
  , "lists"
  , "maybe"
  , "newtype"
  , "options"
  , "ordered-collections"
  , "partial"
  , "prelude"
  , "record"
  , "simple-json"
  , "strings"
  , "transformers"
  , "tuples"
  , "unsafe-coerce"
  ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}
