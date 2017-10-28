module.exports = {
  name: "orbDescribe",
  ns: "jsfeat",
  async: true,
  description: "ORB Describe",
  phrases: {
    active: "Describing ORB"
  },
  ports: {
    input: {
      src: {
        title: "Source",
        type: "function"
      },
      corners: {
        title: "Destination",
        type: "function"
      },
      count: {
        title: "Count",
        type: "number"
      },
      descriptors: {
        title: "Descriptors",
        type: "function",
        async: true,
        fn: function __DESCRIPTORS__(data, source, state, input, $, output, jsfeat) {
          var r = function() {
            jsfeat.orb.describe($.src, $.corners, $.count, $.descriptors)

            output({
              out: $.write('descriptors', $.descriptors)
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        title: "Descriptors",
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