/**
 * @fileoverview Tests for no-console rule.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("../../../../lib/tests/eslintTester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------


eslintTester.add("wrap-regex", {
    valid: [
        "var f = function() { return (/foo/).test(bar); };",
        "var f = function() { return (/foo/ig).test(bar); };",
        "var f = function() { return /foo/; };"
    ],
    invalid: [
        { code: "var f = function() { return /foo/.test(bar); };",
          errors: [{ message: "Wrap the /regexp/ literal in parens to disambiguate the slash operator.", type: "Literal"}] },
        { code: "var f = function() { return /foo/ig.test(bar); };",
          errors: [{ message: "Wrap the /regexp/ literal in parens to disambiguate the slash operator.", type: "Literal"}] }

    ]
});