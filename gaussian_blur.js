module.exports = {
  name: "gaussian_blur",
  ns: "jsfeat",
  async: true,
  description: "Gaussian blur",
  phrases: {
    active: "Applying gaussian blur"
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
            jsfeat.gaussian_blur($.src, $.dest, $.kernel_size, $.sigma)

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
      kernel_size: {
        title: "Kernel Size",
        type: "number"
      },
      sigma: {
        title: "Sigma",
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