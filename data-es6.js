// exports browsers and tests

exports.name = 'ES6';
exports.target_file = 'es6/index.html';
exports.skeleton_file = 'es6/skeleton.html';

exports.browsers = {
  tr: {
    full: 'Traceur compiler',
    short: 'Traceur',
    obsolete: false, // always up-to-date version
    nonbrowser: true
  },
  ejs: {
    full: 'Echo JS',
    short: 'EJS',
    obsolete: false, // always up-to-date version
    nonbrowser: true
  },
  ie10: {
    full: 'Internet Explorer',
    short: 'IE 10',
    obsolete: false // no EOL any time soon
  },
  ie11: {
    full: 'Internet Explorer',
    short: 'IE 11',
    obsolete: false
  },
  firefox11: {
    full: 'Firefox',
    short: 'FF 11-12',
    obsolete: true
  },
  firefox13: {
    full: 'Firefox',
    short: 'FF 13',
    obsolete: true
  },
  firefox16: {
    full: 'Firefox',
    short: 'FF 16',
    obsolete: true
  },
  firefox17: {
    full: 'Firefox',
    short: 'FF 17',
    obsolete: true
  },
  firefox18: {
    full: 'Firefox',
    short: 'FF 18',
    obsolete: true
  },
  firefox23: {
    full: 'Firefox',
    short: 'FF 23',
    obsolete: true
  },
  firefox24: {
    full: 'Firefox',
    short: 'FF 24',
    obsolete: false // ESR (EOL at end of 2014)
  },
  firefox25: {
    full: 'Firefox',
    short: 'FF 25',
    obsolete: true
  },
  firefox27: {
    full: 'Firefox',
    short: 'FF 27-28',
    obsolete: true
  },
  firefox29: {
    full: 'Firefox',
    short: 'FF 29',
    obsolete: true
  },
  firefox30: {
    full: 'Firefox',
    short: 'FF 30',
    obsolete: true
  },
  firefox31: {
    full: 'Firefox',
    short: 'FF 31'
  },
  firefox32: {
    full: 'Firefox',
    short: 'FF 32'
  },
  firefox33: {
    full: 'Firefox',
    short: 'FF 33'
  },
  firefox34: {
    full: 'Firefox',
    short: 'FF 34'
  },
  chrome: {
    full: 'Chrome',
    short: 'CH &lt;19',
    obsolete: true
  },
  chrome19dev: {
    full: 'Chrome',
    short: 'CH 19',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome21dev: {
    full: 'Chrome',
    short: 'CH 21-29',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome30: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;30,<br>OP&nbsp;17',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome33: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;33,<br>OP&nbsp;20',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome34: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;34,<br>OP&nbsp;21',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome35: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;35,<br>OP&nbsp;22',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome37: {
    full: 'Chrome, Opera',
    short: 'CH&nbsp;37,<br>OP&nbsp;24',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  safari51: {
    full: 'Safari',
    short: 'SF 5.1',
    obsolete: true
  },
  safari6: {
    full: 'Safari',
    short: 'SF 6',
    obsolete: false // EOLs together with OS X 10.8
  },
  safari7: {
    full: 'Safari',
    short: 'SF 7',
    obsolete: false
  },
  webkit: {
    full: 'WebKit r172711',
    short: 'WK',
    obsolete: false // always up-to-date
  },
  opera: {
    full: 'Opera 12.16',
    short: 'OP 12',
    obsolete: false // still supported
  },
  konq49: {
    full: 'Konqueror 4.13',
    short: 'KQ 4.13'
  },
  rhino17: {
    full: 'Rhino 1.7',
    short: 'RH',
    nonbrowser: true
  },
  phantom: {
    full: 'PhantomJS 1.9.7 AppleWebKit/534.34',
    short: 'PH',
    nonbrowser: true,
  },
  node: {
    full: 'Node 0.10',
    short: 'Node',
    obsolete: false, // current version
    nonbrowser: true
  },
  nodeharmony: {
    full: 'Node 0.11.13 harmony',
    short: 'Node harmony',
    obsolete: false, // current version
    nonbrowser: true,
    note_id: 'harmony-flag',
    note_html: 'Have to be enabled via --harmony flag'
  }
};

exports.tests = [
{
  name: 'proper tail calls (tail call optimisation)',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tail-position-calls',
  exec: function() {
    "use strict";
    try {
      return (function f(n){
        if (n <= 0) {
          return  "foo";
        }
        return f(n - 1);
      }(1e6)) === "foo";
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'arrow functions',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:arrow_function_syntax',
  exec: function() {
    try {
      eval('var a = () => 5;');
    } catch (e) {
      return false;
    }
    return true;
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'const',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:const',
  exec: function () {
    try {
      return eval('(function () { const foobarbaz = 12; return typeof foobarbaz === "number"; }())');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     true,
    safari7:     true,
    webkit:      true,
    opera:       true,
    konq49:      true,
    rhino17:     false,
    phantom:     true,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'let',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:let',
  exec: [
    {
      type: 'application/javascript;version=1.8',
      script: function () {
        test((function () {
          try {
            return eval('(function () { let foobarbaz2 = 123; return foobarbaz2 == 123; }())');
          } catch (e) {
            return false;
          }
        }()));
        global.__let_script_executed = true;
      }
    },
    {
      script: function () {
        if (!global.__let_script_executed) {
          test((function () {
            try {
              return eval('(function () { "use strict"; __let_script_executed = true; let foobarbaz2 = 123; return foobarbaz2 == 123; }())');
            } catch (e) {
              return false;
            }
          }()));
        }
      }
    }
  ],
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        true,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    konq49:      false,
    opera:       false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'default function params',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values',
  exec: function () {
    try {
      return eval('(function (a = 5) { return a === 5; }())');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'rest parameters',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters',
  exec: function () {
    try {
      return eval('(function (...args) { return typeof args !== "undefined"; }())');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'spread call (...) operator',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:spread',
  exec: function () {
    try {
      return eval('Math.max(...[1, 2, 3]) === 3');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'spread array (...) operator',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:spread',
  exec: function () {
    try {
      return eval('[...[1, 2, 3]][2] === 3');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'string spreading',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:spread',
  exec: function () {
    try {
      return eval('["a", ..."bcd", "e"][3] === "d" && Math.max(..."1234") === 4');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   {
      val: false,
      note_id: 'fx-spreading-strings',
      note_html: 'Spreading strings in array literals, but not in calls, is supported from Firefox 16 up.'
    },
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'class',
  link: 'http://wiki.ecmascript.org/doku.php?id=strawman:maximally_minimal_classes',
  exec: function () {
    try {
      return eval(
         'class C extends Array {'
        +'  constructor() { this.b = true; }'
        +'  a(){}'
        +'  static d(){}'
        +'}'
        +'C.d && new C().a && new C().b && new C() instanceof Array');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'super',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-super-keyword',
  exec: function () {
    try {
      var passed = false;
      var B = eval(
         "class extends class {"
        +"  constructor(a) { return this.id + a; }"
        +"  foo(a)         { return a + this.id; }"
        +"} {"
        +"  constructor(a) {"
        +"    this.id = 'AB';"
          // "super" in the constructor calls
          // the superclass's constructor on "this".
        +"    passed  = super(a)     === 'ABCD';"
          // "super" can be also used to call
          // superclass methods on "this".
        +"    passed &= super.foo(a) === 'CDAB';"
        +"  }"
        +"  foo(a) {"
          // "super" in methods calls the
          // superclass's same-named method on "this".
        +"    passed &= super(a) === 'YZEF';"
        +"    passed &= super(a) === super.foo(a);"
        +"  }"
        +"}"
      );
      var b = new B("CD");
      // "super" is bound statically, even though "this" isn't
      var obj = { foo: b.foo, id:"EF" };
      obj.foo("YZ");
      return passed;
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'computed properties',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-initialiser',
  exec: function() {
    try {
      var x = 'y';
      return eval("({ [x]: 1 })['y'] === 1");
    }
    catch(e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'shorthand properties',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-initialiser',
  exec: function() {
    try {
      return eval("var a = 7, b = 8, c = {a,b}; c.a === 7 && c.b === 8");
    }
    catch(e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'shorthand methods',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-initialiser',
  exec: function() {
    try {
      return eval("({ y() { return 2; } }).y() === 2");
    }
    catch(e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: '__proto__ in object literals',
  annex_b: true,
  note_id: 'proto-in-object-literals',
  note_html: 'Note that this is distinct from the existence or functionality of <code>Object.prototype.__proto__</code>.',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-__proto__-property-names-in-object-initializers',
  exec: function() {
    var passed = { __proto__ : [] } instanceof Array;
    // If computed properties are supported, the following
    // check must also be passed.
    var a = "__proto__";
    try {
      return eval("passed && !({ [a] : [] } instanceof Array)");
    }
    catch(e) {
      return passed;
    }
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        true,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    webkit:      true,
    opera:       true,
    konq49:      true,
    rhino17:     true,
    phantom:     true,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'modules',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:modules',
  exec: function () {
    try {
      return eval('export var foo = 1;');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'For..of loops',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:iterators',
  exec: function () {
    try {
      return eval('(function () { var arr = [5]; for (var item of arr) return item === 5; }())');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Generators (yield)',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:generators',
  exec: [
    {
      type: 'application/javascript;version=1.8',
      script: function () {
        test((function () {
          try {
            eval('(function* () { yield 5; }())');
            return true;
          } catch (e) {
            return false;
          }
        }()));
        global.__yield_script_executed = true;
      }
    },
    {
      script: function () {
        if (!global.__yield_script_executed) {
          test((function () {
            try {
              eval('(function* () { yield 5; }())');
              return true;
            } catch (e) {
              return false;
            }
          }()));
          global.__yield_script_executed = true;
        }
      }
    }
  ],
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'octal literals',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-numeric-literals',
  exec: function () {
    try {
      return eval('0o10') === 8 && eval('0O10') === 8;
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    {
      val: true,
      note_id: 'octal-to-string',
      note_html: '<code>Number("0o1")</code> and <code>Number("0b1")</code> <a href="https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tonumber-applied-to-the-string-type">incorrectly</a> evaluate to 1 instead of <code>NaN</code>.'
    },
    chrome33:    { val: true, note_id: 'octal-to-string' },
    chrome34:    { val: true, note_id: 'octal-to-string' },
    chrome35:    { val: true, note_id: 'octal-to-string' },
    chrome37:    { val: true, note_id: 'octal-to-string' },
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'binary literals',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-numeric-literals',
  exec: function () {
    try {
      return eval('0b10') === 2 && eval('0B10') === 2;
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    { val: true, note_id: 'octal-to-string' },
    chrome33:    { val: true, note_id: 'octal-to-string' },
    chrome34:    { val: true, note_id: 'octal-to-string' },
    chrome35:    { val: true, note_id: 'octal-to-string' },
    chrome37:    { val: true, note_id: 'octal-to-string' },
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Template Strings',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:quasis',
  exec: function () {
    try {
      eval('var u = function () { return true }; u`literal`');
      return true;
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'RegExp "y" flag',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:regexp_y_flag',
  exec: function () {
    try {
      var re = new RegExp('\\w');
      var re2 = new RegExp('\\w', 'y');
      re.exec('xy');
      re2.exec('xy');
      return (re.exec('xy')[0] === 'x' && re2.exec('xy')[0] === 'y');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'RegExp "u" flag',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.unicode',
  exec: function() {
    try {
      return eval('"𠮷".match(/./u)[0].length === 2');
    }
    catch(err) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Map',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-map-objects',
  exec: function () {
    try {
      var map = new Map();
      map.set('key', 123);
      return map.has("key") && map.get('key') === 123 && map.size === 1;
    }
    catch(err) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        {
      val: true,
      note_id: 'map-constructor',
      note_html: 'Map and Set constructor arguments, such as <code>new Map([[key, val]])</code> or <code>new Set([obj1, obj2])</code>, are not supported.'
    },
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: { val: true, note_id: 'map-constructor' },
    chrome30:    { val: true, note_id: 'map-constructor' },
    chrome33:    { val: true, note_id: 'map-constructor' },
    chrome34:    { val: true, note_id: 'map-constructor' },
    chrome35:    { val: true, note_id: 'map-constructor' },
    chrome37:    { val: true, note_id: 'map-constructor' },
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      { val: true, note_id: 'map-constructor' },
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: { val: true, note_id: 'map-constructor' }
  }
},
{
  name: 'Set',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-set-objects',
  exec: function () {
    try {
      var set = new Set();
      set.add(123);
      return set.has(123) && set.size === 1;
    }
    catch(err) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        { val: true, note_id: 'map-constructor' },
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: { val: true, note_id: 'map-constructor' },
    chrome30:    { val: true, note_id: 'map-constructor' },
    chrome33:    { val: true, note_id: 'map-constructor' },
    chrome34:    { val: true, note_id: 'map-constructor' },
    chrome35:    { val: true, note_id: 'map-constructor' },
    chrome37:    { val: true, note_id: 'map-constructor' },
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      { val: true, note_id: 'map-constructor' },
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: { val: true, note_id: 'map-constructor' }
  }
},
{
  name: 'WeakMap',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakmap-objects',
  exec: function () {
    try {
      var weakMap = new WeakMap();
      var key = [1,2,3];
      weakMap.set(key, 123);
      return weakMap.has(key) && weakMap.get(key) === 123;
    }
    catch(err) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        {
      val: true,
      note_id: 'weakmap-constructor',
      note_html: 'WeakMap (and, except in Firefox, WeakSet) constructor arguments, such as <code>new WeakMap([[key, val]])</code> or <code>new WeakSet([obj1, obj2])</code>, are not supported.'
    },
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   { val: true, note_id: 'weakmap-constructor' },
    firefox24:   { val: true, note_id: 'weakmap-constructor' },
    firefox25:   { val: true, note_id: 'weakmap-constructor' },
    firefox27:   { val: true, note_id: 'weakmap-constructor' },
    firefox28:   { val: true, note_id: 'weakmap-constructor' },
    firefox29:   { val: true, note_id: 'weakmap-constructor' },
    firefox30:   { val: true, note_id: 'weakmap-constructor' },
    firefox31:   { val: true, note_id: 'weakmap-constructor' },
    firefox32:   { val: true, note_id: 'weakmap-constructor' },
    firefox33:   { val: true, note_id: 'weakmap-constructor' },
    firefox34:   { val: true, note_id: 'weakmap-constructor' },
    chrome:      false,
    chrome19dev: false,
    chrome21dev: { val: true, note_id: 'weakmap-constructor' },
    chrome30:    { val: true, note_id: 'weakmap-constructor' },
    chrome33:    { val: true, note_id: 'weakmap-constructor' },
    chrome34:    { val: true, note_id: 'weakmap-constructor' },
    chrome35:    { val: true, note_id: 'weakmap-constructor' },
    chrome37:    { val: true, note_id: 'weakmap-constructor' },
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      { val: true, note_id: 'weakmap-constructor' },
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: { val: true, note_id: 'weakmap-constructor' }
  }
},
{
  name: 'WeakSet',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-weakset-objects',
  exec: function () {
    try {
      var set = new WeakSet(), obj = { };
      set.add(obj);
      return set.has(obj);
    }
    catch(err) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    { val: true, note_id: 'weakmap-constructor' },
    chrome34:    { val: true, note_id: 'weakmap-constructor' },
    chrome35:    { val: true, note_id: 'weakmap-constructor' },
    chrome37:    { val: true, note_id: 'weakmap-constructor' },
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: { val: true, note_id: 'weakmap-constructor' }
  }
},
{
  name: 'Proxy',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:direct_proxies',
  exec: function () {
    try {
      return typeof Proxy !== "undefined" &&
           new Proxy({}, { get: function () { return 5; } }).foo === 5;
    }
    catch(err) { }
    return false;
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Reflect',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-reflection',
  exec: function () {
    var i, names =
      ["apply","construct","defineProperty","deleteProperty","getOwnPropertyDescriptor",
      "getPrototypeOf","has","isExtensible","set","setPrototypeOf"];

    if (typeof Reflect !== "object") {
      return false;
    }
    for (i = 0; i < names.length; i++) {
      if (!(names[i] in Reflect)) {
        return false;
      }
    }
    return true;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Reflect.Loader',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader-objects',
  exec: function () {
    var i, names =
      ["define", "delete", "entries", "get", "global", "has", "import",
      "keys", "load", "module", "newModule", "realm", "set", "values",
      "normalize", "locate", "fetch", "translate", "instantiate"];

    if (typeof Reflect !== "object" || typeof Reflect.Loader !== "function"
        || typeof Reflect.Loader.prototype !== "object") {
      return false;
    }
    for (i = 0; i < names.length; i++) {
      if (!(names[i] in Reflect.Loader.prototype)) {
        return false;
      }
    }
    return true;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Block-level function declaration',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:block_functions',
  exec: function () {
    'use strict';
    try {
      return eval('{function f(){}} typeof f == "undefined"');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Hoisted block-level function declaration',
  annex_b: true,
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-block-level-function-declarations-web-legacy-compatibility-semantics',
  exec: function () {
    // Note: only available outside of strict mode.
    try {
      return !!Function(
         'var passed = f() === 2 && g() === 4;'
        +'if (true) { function f(){ return 1; } } else { function f(){ return 2; } }'
        +'if (false){ function g(){ return 3; } } else { function g(){ return 4; } }'
        +'return passed;'
      )();
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    webkit:      true,
    opera:       true,
    konq49:      true,
    rhino17:     false,
    phantom:     true,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'Destructuring',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:destructuring',
  exec: function () {
    'use strict';
    try {
      return eval(
        // Array destructuring
         'var [a, , [b], g] = [5, null, [6]];'
        // Object destructuring
        +'var {c, x:d, h} = {c:7, x:8};'
        // Combined destructuring
        +'var [e, {x:f, i}] = [9, {x:10}];'
        +'a === 5 && b === 6 && c === 7 && d === 8 && e === 9 && f === 10 &&'
        +'g === undefined && h === undefined && i === undefined');
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Destructuring parameters',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:destructuring',
  exec: function () {
    'use strict';
    try {
      return eval(
         '(function({a, x:b}, [c, d]) {'
        +'  return a === 1 && b === 2 && c === 3 && d === 4;'
        +'}({a:1, x:2},[3, 4]))'
      );
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Destructuring defaults',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:destructuring',
  exec: function () {
    'use strict';
    try {
      return eval(
         'var {a = 1, b = 1, c = 3} = {b:2, c:undefined};'
        +'a === 1 && b === 2 && c === 3'
      );
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Destructuring rest',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:destructuring',
  exec: function () {
    'use strict';
    try {
      return eval(
         'var [a, ...b] = [3, 4, 5];'
        +'var [c, ...d] = [6];'
        +'a === 3 && b instanceof Array && (b + "") === "4,5" && '
        +'c === 6 && d instanceof Array && d.length === 0'
      );
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Promise',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise-objects',
  exec: function () {
    return typeof Promise !== 'undefined' &&
           typeof Promise.all === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Object.assign',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign',
  exec: function () {
    return typeof Object.assign === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Object.is',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.is',
  exec: function () {
    return typeof Object.is === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'Object.getOwnPropertySymbols',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.getownpropertysymbols',
  exec: function () {
    return typeof Object.getOwnPropertySymbols === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Object.setPrototypeOf',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.setprototypeof',
  exec: function () {
    return typeof Object.setPrototypeOf === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Object.prototype.__proto__',
  annex_b: true,
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.__proto__',
  exec: function () {
    var a = {},
        desc = Object.getOwnPropertyDescriptor
            && Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");
    return !!(desc
        && "get" in desc
        && "set" in desc
        && desc.configurable
        && !desc.enumerable
        && Object.create(a).__proto__ === a);
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        true,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      true,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    webkit:      true,
    opera:       true,
    konq49:      false,
    rhino17:     true,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'function "name" property',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-setfunctionname',
  exec: function () {
    return (function foo(){}).name == 'foo';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    webkit:      true,
    opera:       true,
    konq49:      true,
    rhino17:     true,
    phantom:     true,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'Function.prototype.toMethod',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-function.prototype.tomethod',
  exec: function f() {
    return typeof f.toMethod === "function";
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'String.raw',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.raw',
  exec: function () {
    return typeof String.raw === 'function';
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'String.fromCodePoint',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.fromcodepoint',
  exec: function () {
    return typeof String.fromCodePoint === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'String.prototype.codePointAt',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.codepointat',
  exec: function () {
    return typeof String.prototype.codePointAt === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'String.prototype.normalize',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.normalize',
  exec: function () {
    return typeof String.prototype.normalize === "function"
      && "c\u0327\u0301".normalize("NFC") === "\u1e09"
      && "\u1e09".normalize("NFD") === "c\u0327\u0301";
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'String.prototype.repeat',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.repeat',
  exec: function () {
    return typeof String.prototype.repeat === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'String.prototype.startsWith',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.startswith',
  exec: function () {
    return typeof String.prototype.startsWith === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'String.prototype.endsWith',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith',
  exec: function () {
    return typeof String.prototype.endsWith === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'String.prototype.contains',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.contains',
  exec: function () {
    return typeof String.prototype.contains === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'String.prototype HTML methods',
  annex_b: true,
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.anchor',
  exec: function () {
    var i, names = ["anchor", "big", "bold", "fixed", "fontcolor", "fontsize",
      "italics", "link", "small", "strike", "sub", "sup"];
    for (i = 0; i < names.length; i++) {
      if (typeof String.prototype[names[i]] !== 'function') {
        return false;
      }
    }
    return true;
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        true,
    ie11:        true,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    webkit:      true,
    opera:       true,
    konq49:      true,
    rhino17:     true,
    phantom:     true,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'Unicode code point escapes',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-string-literals',
  exec: function () {
    try {
      return eval("'\\u{1d306}' == '\\ud834\\udf06'");
    } catch (e) {
      return false;
    }
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-symbol-constructor',
  exec: function() {
    try {
      var object = {};
      var symbol = Symbol();
      var value = Math.random();
      object[symbol] = value;
      return typeof symbol === "symbol" &&
             object[symbol] === value &&
             Object.keys(object).length === 0 &&
             Object.getOwnPropertyNames(object).length === 0;
    }
    catch(e) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Global symbol registry',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-symbol.for',
  exec: function() {
    try {
      var symbol = Symbol.for('foo');
      return Symbol.for('foo') === symbol &&
             Symbol.keyFor(symbol) === 'foo';
    }
    catch(e) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Symbol.create',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    if (typeof Symbol === "function" && typeof Symbol.create === "symbol") {
      var a = 2, b = function(){};
      b[Symbol.create] = function() { a = 4; return {};};
      new b();
      return a === 4;
    }
    return false;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.hasInstance',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    if (typeof Symbol === "function" && typeof Symbol.hasInstance === "symbol") {
      var a = 2, b = function(){};
      b[Symbol.hasInstance] = function() { a = 4; return false; };
      ({}) instanceof b;
      return a === 4;
    }
    return false;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.isConcatSpreadable',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    if (typeof Symbol === "function" && typeof Symbol.isConcatSpreadable === "symbol") {
      var a = [], b = [];
      b[Symbol.isConcatSpreadable] = false;
      a = a.concat(b);
      return a[0] === b;
    }
    return false;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.isRegExp',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    return typeof Symbol === "function" && typeof Symbol.isRegExp === "symbol"
      && RegExp.prototype[Symbol.isRegExp] === true;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.iterator',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    try {
      var a = 0, b = {};
      b[Symbol.iterator] = function() {
        return {
          next: function() {
            return {
              done: a === 1,
              value: a++
            };
          }
        };
      };
      var c;
      eval("for (c of b) {}");
      return c === 0;
    }
    catch(e) {
      return false;
    }
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.toPrimitive',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    if (typeof Symbol === "function" && typeof Symbol.toPrimitive === "symbol") {
      var a = {};
      a[Symbol.toPrimitive] = function() { return 7; };
      return a == 7;
    }
    return false;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.toStringTag',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
      var a = {};
      a[Symbol.toStringTag] = "foo";
      return (a + "") === "[object foo]";
    }
    return false;
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Symbol.unscopables',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols',
  exec: function() {
    if (typeof Symbol === "function" && typeof Symbol.unscopables === "symbol") {
      var a = { foo: 1, bar: 2 };
      a[Symbol.unscopables] = { bar: true };
      with (a) {
        return foo === 1 && typeof bar === "undefined";
      }
    }
    return false;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'RegExp.prototype.match',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.match',
  exec: function () {
    return typeof RegExp.prototype.match === 'function';
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'RegExp.prototype.replace',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.replace',
  exec: function () {
    return typeof RegExp.prototype.replace === 'function';
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'RegExp.prototype.search',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.search',
  exec: function () {
    return typeof RegExp.prototype.search === 'function';
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'RegExp.prototype.split',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.split',
  exec: function () {
    return typeof RegExp.prototype.split === 'function';
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'RegExp.prototype.compile',
  annex_b: true,
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.compile',
  exec: function () {
    return typeof RegExp.prototype.compile === 'function';
  },
  res: {
    tr:          true,
    ejs:         false,
    ie10:        true,
    ie11:        true,
    firefox11:   true,
    firefox13:   true,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      true,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    true,
    safari6:     true,
    safari7:     true,
    webkit:      true,
    opera:       true,
    konq49:      true,
    rhino17:     true,
    phantom:     true,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'Array.from',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from',
  exec: function () {
    return typeof Array.from === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Array.of',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.of',
  exec: function () {
    return typeof Array.of === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Array.prototype.copyWithin',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.copywithin',
  exec: function () {
    return typeof Array.prototype.copyWithin === 'function';
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Array.prototype.find',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.find',
  exec: function () {
    return typeof Array.prototype.find === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Array.prototype.findIndex',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.findindex',
  exec: function () {
    return typeof Array.prototype.findIndex === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Array.prototype.fill',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.fill',
  exec: function () {
    return typeof Array.prototype.fill === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Array.prototype.keys',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.keys',
  exec: function () {
    return typeof Array.prototype.keys === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Array.prototype.values',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.values',
  exec: function () {
    return typeof Array.prototype.values === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   {
      val: false,
      note_id: 'fx-array-prototype-values',
      note_html: 'Available from Firefox 17 up to 27 as the non-standard <code>Array.prototype.iterator</code>'
    },
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   {
      val: false,
      note_id: 'fx-array-prototype-values-2',
      note_html: 'Available since Firefox 27 as the non-standard <code>Array.prototype["@@iterator"]</code>'
    },
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Array.prototype.entries',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.entries',
  exec: function () {
    return typeof Array.prototype.entries === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Array.prototype[Symbol.unscopables]',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype-@@unscopables',
  exec: function () {
    return typeof Symbol === "function" && typeof Symbol.unscopables === "symbol"
      && Array.prototype[Symbol.unscopables] instanceof Array
      && (Array.prototype[Symbol.unscopables] + "")
        .indexOf("find,findIndex,fill,copyWithin,entries,keys,values") >-1;
  },
  res: {
    tr:          false,
    ejs:         false,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false
  }
},
{
  name: 'Number.isFinite',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isfinite-number',
  exec: function () {
    return typeof Number.isFinite === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'Number.isInteger',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger',
  exec: function () {
    return typeof Number.isInteger === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Number.isSafeInteger',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.issafeinteger',
  exec: function () {
    return typeof Number.isSafeInteger === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   false,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Number.isNaN',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isnan',
  exec: function () {
    return typeof Number.isNaN === 'function';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   true,
    firefox17:   true,
    firefox18:   true,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: true,
    chrome21dev: true,
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        true,
    nodeharmony: true
  }
},
{
  name: 'Number.EPSILON',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.epsilon',
  exec: function () {
    return typeof Number.EPSILON === 'number';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Number.MIN_SAFE_INTEGER',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.min_safe_integer',
  exec: function () {
    return typeof Number.MIN_SAFE_INTEGER === 'number';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Number.MAX_SAFE_INTEGER',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer',
  exec: function () {
    return typeof Number.MAX_SAFE_INTEGER === 'number';
  },
  res: {
    tr:          true,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.clz32',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.clz32',
  exec: function () {
    return typeof Math.clz32 === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   false,
    firefox28:   false,
    firefox29:   false,
    firefox30:   false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      false,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.imul',
  link: 'http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.imul',
  exec: function () {
    return typeof Math.imul === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   true,
    firefox24:   true,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: {
      val: true,
      note_id: 'chromu-imul',
      note_html: 'Available since Chrome 28'
    },
    chrome30:    true,
    chrome33:    true,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     true,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.sign',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.sign',
  exec: function () {
    return typeof Math.sign === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.log10',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.log10',
  exec: function () {
    return typeof Math.log10 === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.log2',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.log2',
  exec: function () {
    return typeof Math.log2 === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.log1p',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.log1p',
  exec: function () {
    return typeof Math.log1p === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.expm1',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.expm1',
  exec: function () {
    return typeof Math.expm1 === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.cosh',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.cosh',
  exec: function () {
    return typeof Math.cosh === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.sinh',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.sinh',
  exec: function () {
    return typeof Math.sinh === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.tanh',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.atanh',
  exec: function () {
    return typeof Math.tanh === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.acosh',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.acosh',
  exec: function () {
    return typeof Math.acosh === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.asinh',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.asinh',
  exec: function () {
    return typeof Math.asinh === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.atanh',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.atanh',
  exec: function () {
    return typeof Math.atanh === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.hypot',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot',
  exec: function () {
    return typeof Math.hypot === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.trunc',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.trunc',
  exec: function () {
    return typeof Math.trunc === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.fround',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.fround',
  exec: function () {
    return typeof Math.fround === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   false,
    firefox27:   {
      val: true,
      note_id: 'fx-fround',
      note_html: 'Available since Firefox 26'
    },
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  }
},
{
  name: 'Math.cbrt',
  link: 'https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.cbrt',
  exec: function () {
    return typeof Math.cbrt === 'function';
  },
  res: {
    tr:          false,
    ejs:         true,
    ie10:        false,
    ie11:        false,
    firefox11:   false,
    firefox13:   false,
    firefox16:   false,
    firefox17:   false,
    firefox18:   false,
    firefox23:   false,
    firefox24:   false,
    firefox25:   true,
    firefox27:   true,
    firefox28:   true,
    firefox29:   true,
    firefox30:   true,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    chrome:      false,
    chrome19dev: false,
    chrome21dev: false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    true,
    chrome35:    true,
    chrome37:    true,
    safari51:    false,
    safari6:     false,
    safari7:     false,
    webkit:      true,
    opera:       false,
    konq49:      true,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: true
  },
  separator: 'after'
}
];

//Shift annex B features to the bottom
exports.tests = exports.tests.filter(function(e) { return !e.annex_b })
        .concat(exports.tests.filter(function(e) { return  e.annex_b }));
