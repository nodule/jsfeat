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
        type: "ImageData"
      },
      dest: {
        title: "Destination",
        async: true,
        type: "function",
        fn: function __DEST__(data, source, state, input, $, output, jsfeat) {
          var r = function() {
            jsfeat.imgproc.grayscale($.src.data, $.width, $.height, $.dest, $.code)

            output({
              out: $.write('dest', $.dest),
              imageData: $.write('src', $.src)
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
        type: "number",
        required: false
      }
    },
    output: {
      out: {
        title: "Out",
        type: "function"
      },
      imageData: {
        title: "Image Data",
        type: "ImageData"
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