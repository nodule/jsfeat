output = function() {
  // in-place 
  const data_u32 = new Uint32Array($.imageData.buffer)
  const alpha = (0xff << 24)
  let i = $.img_u8.cols * $.img_u8.rows
  let pix = 0;
  while(--i >= 0) {
    pix = $.img_u8.data[i]
    data_u32[i] = alpha | (pix << 16) | (pix << 8) | pix
  }

  cb({
    out: $.write('imageData', $.imageData),
    img_u8: $.write('img_u8', $.img_u8)
  });
  
  done();
};
