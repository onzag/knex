// JoinClause
// ---------
(function(define) {

"use strict";

define(function(require, exports) {

  var JoinClause = function(type, table) {
    this.joinType = type;
    this.table    = table;
    this.clauses  = [];
  };

  JoinClause.prototype = {

    on: function(first, operator, second) {
      this.clauses.push({first: first, operator: operator, second: second, bool: 'and'});
      return this;
    },

    andOn: function() {
      return this.on.apply(this, arguments);
    },

    orOn: function(first, operator, second) {
      this.clauses.push({first: first, operator: operator, second: second, bool: 'or'});
      return this;
    },

    type: function(type) {
      this.joinType = type;
      return this;
    }

  };

  exports.JoinClause = JoinClause;

});

})(
  typeof define === 'function' && define.amd ? define : function (factory) { factory(require, exports); }
);