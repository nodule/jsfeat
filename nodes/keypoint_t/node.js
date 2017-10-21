output = function() {
  var out = new jsfeat.keypoint_t($.x, $.y, $.score, $.level, $.angle)
  
  output( { out: $.create(out) } );
  
  done();
};
