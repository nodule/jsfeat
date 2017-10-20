module.exports = {
  name: "pyrdown",
  ns: "jsfeat",
  async: true,
  description: "Pyrdown",
  phrases: {
    active: "Pyrdown"
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
      sx: {
        title: "Sx",
        type: "number"
      },
      sy: {
        title: "Sy",
        type: "number"
      }
    },
    output: {
      out: {
        title: "Dest",
        type: "any"
      }
    }
  },
  dependencies: {
    npm: {
      jsfeat: require('jsfeat')
    }
  }
}