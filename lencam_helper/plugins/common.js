//--Cấu hình axios set base url bằng domain hiện tại, ko dùng base url của api
export default ({ $axios, env, req }) => {
  let _host = "";
  // Client
  if (process.client) {
    // Get base url
    _host = window.location.origin;
  }
  // Server
  else if (process.server) {
    var proto = req.connection.encrypted ? "https" : "http";
    // only do this if you trust the proxy
    proto = req.headers["x-forwarded-proto"] || proto;
    const _proto = proto.split(/\s*,\s*/)[0];
    //--Header
    let HEADERS = JSON.parse(JSON.stringify(req.headers));
    _host = _proto + "://" + HEADERS.host;
  }

  // Set base url bằng domain hiện tại
  $axios.setBaseURL(_host + "/api");
};
