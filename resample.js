module.exports = {
  name: "resample",
  ns: "jsfeat",
  async: true,
  description: "Resample",
  phrases: {
    active: "Resampling"
  },
  ports: {
    input: {
      src: {
        title: "Source",
        type: "any"
      },
      dest: {
        title: "Destination",
        type: "any",
        async: true,
        fn: function __DEST__(data, source, state, input, $, output, jsfeat) {
          var r = function() {
            jsfeat.imgproc.resample($.src, $.dest, $.width, $.height)

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
        title: "width",
        type: "number"
      },
      height: {
        title: "Height",
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