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
        type: "function"
      },
      dest: {
        title: "Destination",
        async: true,
        type: "function",
        fn: function __DEST__(data, source, state, input, $, output, jsfeat) {
          var r = function() {
            jsfeat.imgproc.gaussian_blur($.src, $.dest, $.kernel_size, $.sigma)

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
        type: "number",
        "default": 0
      },
      sigma: {
        title: "Sigma",
        type: "number",
        "default": 0
      }
    },
    output: {
      out: {
        title: "Out",
        type: "function"
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