module.exports = {
  name: "grayscale",
  ns: "jsfeat",
  async: true,
  description: "Grayscale",
  phrases: {
    active: "Applying grayscale"
  },
  ports: {
    input: {
      src: {
        title: "Source",
        type: "any"
      },
      dest: {
        title: "Destination",
        async: true,
        type: "any",
        fn: function __DEST__(data, source, state, input, $, output, jsfeat) {
          var r = function() {
            jsfeat.imgproc.grayscale($.src, $.width, $.height, $.dest, $.code)

            output({
              out: $.write('dest', $.dest)
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      width: {
        title: "Width",
        type: "number"
      },
      height: {
        title: "Height",
        type: "number"
      },
      code: {
        title: "Code",
        type: "number"
      }
    },
    output: {
      out: {
        title: "Out",
        type: "any"
      }
    }
  },
  dependencies: {
    npm: {
      jsfeat: require('jsfeat')
    }
  },
  state: {}
}