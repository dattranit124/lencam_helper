import axios from "axios";
import https from "https";
//--
export default async function (req, res, next) {
  console.log("1: ", req);
  console.log("2: ", res);
  console.log("3: ", next);

  try {
    const Lencam = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });

    // Header
    let HEADERS = JSON.parse(JSON.stringify(req.headers));

    // HEADERS = {
    //         ...HEADERS,
    //         ... { shop: HEADERS.host }, //--mặc định shop luôn bằng với host
    //     }
    // Xóa cá header thừa thãi
    if (HEADERS.host) delete HEADERS.host;
    if (HEADERS["accept-encoding"]) delete HEADERS["accept-encoding"];

    // Lấy method
    const METHOD = req.method;

    // Data bắn lên
    let BODY_DATA = null;

    // Base url
    const API_URL = "https://api.lencam.com" + req.url;
    //const API_URL = "https://localhost:44305" + req.url;

    // Data trả về
    let res_data = null;

    //--Nếu là post thì đọc body data và ẩy lên
    if (METHOD == "POST") {
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      const data = Buffer.concat(buffers).toString();
      BODY_DATA = JSON.parse(data);
    }

    //--Lấy dữ liệu trên api gốc
    res_data = await Lencam({
      method: METHOD,
      url: API_URL,
      headers: HEADERS,
      // headers: {
      //     "shop": "localhost:6699",
      //     "connection": "keep-alive",
      //     "cache-control": "max-age=0",
      //     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
      //     "sec-ch-ua-mobile": "?0",
      //     "sec-ch-ua-platform": "\"Windows\"",
      //     "upgrade-insecure-requests": "1",
      //     "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      //     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      //     "sec-fetch-site": "none",
      //     "sec-fetch-mode": "navigate",
      //     "sec-fetch-user": "?1",
      //     "sec-fetch-dest": "document",
      //     //"accept-encoding": "gzip, deflate, br",
      //     "accept-language": "vi,en;q=0.9",
      //     "cookie": "_ga=GA1.1.779019287.1640767369; _gcl_au=1.1.1180805899.1640767369; _ga_Q5B4YR72C3=GS1.1.1641525842.4.1.1641526561.35; source=http://localhost:6699/collections/all; _ga_G98WGJPR9Z=GS1.1.1641526673.7.1.1641528480.0"
      // },
      data: BODY_DATA,
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return null;
      });

    //--Nếu lấy được dữ liệu từ API gốc
    if (res_data) {
      //--Response
      res.setHeader("Content-Type", res_data.headers["content-type"]);
      res.end(JSON.stringify(res_data.data));
    } else {
      //--Response NULL
      res.setHeader("Content-Type", "application/json");
      res.end("null");
    }
  } catch (err) {
    res.end("null");
  }
}
