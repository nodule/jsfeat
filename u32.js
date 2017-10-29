module.exports = {
  name: "u32",
  ns: "jsfeat",
  description: "To U32",
  phrases: {
    active: "Converting to U32"
  },
  ports: {
    input: {
      imageData: {
        title: "Image Data",
        type: "ImageData"
      },
      img_u8: {
        title: "Img U8",
        type: "function"
      }
    },
    output: {
      imageData: {
        title: "Image Data",
        type: "ImageData"
      },
      img_u8: {
        title: "Img U8",
        type: "function"
      }
    }
  },
  fn: function u32(input, $, output, state, done, cb, on) {
    var r = function() {
      // in-place 
      const data_u32 = new Uint32Array($.imageData.buffer)
      const alpha = (0xff << 24)
      let i = $.img_u8.cols * $.img_u8.rows
      let pix = 0;
      while (--i >= 0) {
        pix = $.img_u8.data[i]
        data_u32[i] = alpha | (pix << 16) | (pix << 8) | pix
      }

      output({
        imageData: $.write('imageData', $.imageData),
        img_u8: $.write('img_u8', $.img_u8)
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