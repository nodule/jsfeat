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
        type: "function"
      },
      corners: {
        title: "Destination",
        type: "function"
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
        type: "function"
      }
    }
  },
  dependencies: {
    npm: {
      jsfeat: require('jsfeat')
    }
  }
}