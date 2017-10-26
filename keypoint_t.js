module.exports = {
  name: "keypoint_t",
  ns: "jsfeat",
  description: "Keypoint Type",
  phrases: {
    active: "Creating keypoint"
  },
  ports: {
    input: {
      x: {
        title: "X",
        type: "number"
      },
      y: {
        title: "Y",
        type: "number"
      },
      score: {
        title: "Score",
        type: "number",
        "default": 0
      },
      level: {
        title: "Level",
        type: "number",
        "default": 0
      },
      angle: {
        title: "Angle",
        type: "number",
        "default": -1
      }
    },
    output: {
      out: {
        title: "Keypoint",
        type: "keypoint_t"
      }
    }
  },
  dependencies: {
    npm: {
      jsfeat: require('jsfeat')
    }
  },
  fn: function keypointT(input, $, output, state, done, cb, on, jsfeat) {
    var r = function() {
      var out = new jsfeat.keypoint_t($.x, $.y, $.score, $.level, $.angle)

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