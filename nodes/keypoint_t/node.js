output = function() {
  var out = new jsfeat.keypoint_t($.x, $.y, $.score, $.level, $.angle)
  
  cb( { out: $.create(out) } );
  
  done();
};
