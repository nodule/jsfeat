module.exports = {
  name: "matrix_t",
  ns: "jsfeat",
  description: "Matrix Type",
  phrases: {
    active: "Creating matrix"
  },
  ports: {
    input: {
      cols: {
        title: "Cols",
        type: "number"
      },
      rows: {
        title: "Rows",
        type: "number"
      },
      type: {
        title: "Type",
        type: "string",
        "enum": ["U8_t | C1_t",
          "F32C1_t",
          "U8C1_t"
        ]
      }
    },
    output: {
      out: {
        title: "Matrix",
        type: "matrix_t"
      }
    }
  },
  dependencies: {
    npm: {
      jsfeat: require('jsfeat')
    }
  },
  fn: function matrixT(input, $, output, state, done, cb, on, jsfeat) {
    var r = function() {
      var type;

      switch ($.type) {
        case "U8_t | C1_t":
          type = jsfeat.U8_t | jsfeat.C1_t;
          break;
        case "F32C1_":
          type = jsfeat.F32C1_t;
          break;
        case "U8C1_t":
          type = jsfeat.U8C1_t;
          break;
        default:
          throw Error('Unknown type: ' + $.type)
          break;
      }

      var out = new jsfeat.matrix_t($.cols, $.rows, type)

      output({
        out: $.create(out)
      });

      done();
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}