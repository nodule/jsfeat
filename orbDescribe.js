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
        type: "any"
      },
      corners: {
        title: "Destination",
        type: "any"
      },
      count: {
        title: "Count",
        type: "number"
      },
      descriptors: {
        title: "Descriptors",
        type: "any",
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