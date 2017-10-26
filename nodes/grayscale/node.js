on.input.dest  = function() {
  jsfeat.imgproc.grayscale($.src, $.width, $.height, $.dest, $.code)
 
  const data_u32 = new Uint32Array($.src.buffer)
  const alpha = (0xff << 24)
  let i = $.dest.cols * $.dest.rows
  let pix = 0;
  while(--i >= 0) {
    pix = $.dest.data[i]
    data_u32[i] = alpha | (pix << 16) | (pix << 8) | pix
  }
  
  output( { out: $.write('dest', $.dest) } );
};

