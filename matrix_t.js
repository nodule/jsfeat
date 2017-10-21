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
        type: "array"
      },
      rows: {
        title: "Rows",
        type: "array"
      },
      type: {
        title: "Type",
        type: "string"
      }
    },
    output: {
      out: {
        title: "Matrix",
        type: "matrix_t"
      }
    }
  },
  fn: function matrixT(input, $, output, state, done, cb, on) {
    var r = function() {
      var type;

      switch ($.type) {
        case "jsfeat.U8_t | jsfeat.C1_t":
          type = jsfeat.U8_t | jsfeat.C1_t;
          break;
        case "jsfeat.F32C1_":
          type = jsfeat.F32C1_t;
          break;
        case "jsfeat.U8C1_t":
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