// var express = require('express');
// var http = require('http');
// var https = require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();;
// const app = express()

// var fs = require('fs');



var httpsAgent = require('https-agent');
var fs = require('fs');
var https = require('https');
var axios = require('axios');
var httpsAgent = require('https-agent');

// const httpsAgent = new https.Agent({ rejectUnauthorized: false });
// var axios = require('axios');

// const axios = require('axios');

// axios.default.httpsAgent = new https.Agent({
//     rejectUnauthorized: false,
// });


// const instance = axios.create({
//     httpsAgent: new https.Agent({
//         rejectUnauthorized: false
//     })
// });
// instance.get('https://cvp1.moph.go.th/api/ImmunizationTarget?cid=1409900727635&hospital_code=13777');

// const agent = new https.Agent({
//     rejectUnauthorized: false
// });


// var option = {
//     key: fs.readFileSync('abels-key.pem'),
//     cert: fs.readFileSync('abels-cert.pem')
// }

var agent = httpsAgent({
    pfx: fs.readFileSync('test.p12'),
    passphrase: 'eixu7eoTah0ishum'
});

var options = {
    protocol: 'https:',
    hostname: 'cvp1.moph.go.th',
    path:'api/ImmunizationTarget?cid=1409900727635&hospital_code=13777',
    method: 'GET',
    // port: 443,
    agent: agent,
    headers:{
        Authorization: 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbl8xMzc3N0AxMzc3NyIsImlhdCI6MTYyMzExMzkyOSwiZXhwIjoxNjIzMTI0NzI5LCJpc3MiOiJNT1BIIEFjY291bnQgQ2VudGVyIiwiYXVkIjoiTU9QSCBBUEkiLCJjbGllbnQiOnsidXNlcl9pZCI6NTY5OSwidXNlcl9oYXNoIjoiMjlGMEQzRTY0ODlFM0ZCMkFGNDlBQzZCMkUxOUUyMTE3RTQ1OEVGNEVFRUQyMEJFNDRDMTNEMTgzREUxRTAwRDhBQ0VGRkFCIiwibG9naW4iOiJBZG1pbl8xMzc3NyIsIm5hbWUiOiLguJnguLLguIfguKrguLLguKLguKrguKHguKMg4Lil4Li14Lil4LiU4Liy4Lig4Lix4LiX4Lij4LiB4Li44LilIiwiaG9zcGl0YWxfbmFtZSI6IuC5guC4o-C4h-C4nuC4ouC4suC4muC4suC4peC4qOC4o-C4teC4meC4hOC4o-C4tOC4meC4l-C4o-C5jCDguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguILguK3guJnguYHguIHguYjguJkiLCJob3NwaXRhbF9jb2RlIjoiMTM3NzciLCJlbWFpbCI6InBzYWlzYUBra3UuYWMudGgiLCJjbGllbnRfaXAiOiIxODAuMTgzLjY4LjIwNyIsInNjb3BlIjpbeyJjb2RlIjoiSU1NVU5JWkFUSU9OX1ZJRVc6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9VUERBVEU6MSJ9LHsiY29kZSI6Ik1PUEhfQUNDT1VOVF9DRU5URVJfQURNSU46MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9QRVJTT05fVVBMT0FEOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fREFTSEJPQVJEOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fU0xPVDoxIn0seyJjb2RlIjoiSU1NVU5JWkFUSU9OX1FVT1RBOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fUkVQT1JUOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fUkVQT1JUX0VYQ0VMOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fQUVGSV9VUERBVEU6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9TTE9UX01BTkFHRVI6MSJ9XSwicm9sZSI6WyJtb3BoLWFwaSJdLCJzY29wZV9saXN0IjoiW0lNTVVOSVpBVElPTl9WSUVXOjFdW0lNTVVOSVpBVElPTl9VUERBVEU6MV1bTU9QSF9BQ0NPVU5UX0NFTlRFUl9BRE1JTjoxXVtJTU1VTklaQVRJT05fUEVSU09OX1VQTE9BRDoxXVtJTU1VTklaQVRJT05fREFTSEJPQVJEOjFdW0lNTVVOSVpBVElPTl9TTE9UOjFdW0lNTVVOSVpBVElPTl9RVU9UQToxXVtJTU1VTklaQVRJT05fUkVQT1JUOjFdW0lNTVVOSVpBVElPTl9SRVBPUlRfRVhDRUw6MV1bSU1NVU5JWkFUSU9OX0FFRklfVVBEQVRFOjFdW0lNTVVOSVpBVElPTl9TTE9UX01BTkFHRVI6MV0iLCJhY2Nlc3NfY29kZV9sZXZlbDEiOiInMTM3NzcnIiwiYWNjZXNzX2NvZGVfbGV2ZWwyIjoiJyciLCJhY2Nlc3NfY29kZV9sZXZlbDMiOiInJyIsImFjY2Vzc19jb2RlX2xldmVsNCI6IicnIiwiYWNjZXNzX2NvZGVfbGV2ZWw1IjoiJycifX0.DWrTFnnIURKIJz4M6SR3qKDEPGgtyrb-hDfqtJ93GM9347U1-2PXkm7dMowdHvXX249HJ_FKCYugZR711kJdA7H3Ddb3y19SWyBwnKaT3lkvm2b7VSYAC837iV9xBH_5HhAKUaZoJZu4XUUycSfGv7ar04JOKNvagNfal98hBrmKJK_nJFr4zTl3syUqLHftHvm8x3Er4fcgGN7yoVadpi7o2isocTA0loyMhAccog238EwHLZeo7u3j2TQDuJCaymssVytl7y59Gl9dLs7VLiAseRNKZVCrAF7tAOIM7VdxADZY8zszrZsrnBODekpOkmVs6qxH5tORYQlyoM_U10Xo-dB5WXas0HuKQPUAySn7Uch-p6_8T9eM83TMtRdpM2ssvQH6TAozJdXfboY2CJnNPJ8cpuSH2KtMsxDDOzkuRBYhBp44nOCqnyUXs-VXOdCvhq3R0-VACUP3x5moASR1kUiSgKRaOk0bxktl7DDShPlKv3zOnQ44ZYkkU1nQO1pTQ4H-zEnNl32s1r9IUss0cHvIozVLDAREAsYtBaZoiWITHBiJuj5Gr1kX73HvcCSRFnMv7l6FOy9hAa1lqGjWZdrBWn99mX73yU_UsuBXbifbp--cgFwvXOhO-_Qp-xJ0LYjT8G9dIlz805mCNyJiHfKDzYHnbX5rhx_oaeY'            
    }
}

https.get(options, function (res) {
    res.on('data', function (data) {
        console.log(data.toString());
    });
});




// app.get('/hi', (req, res) => {

//     res.send('test')

//     // axios.get('http://webcode.me').then(resp => {
//     //     console.log(resp.data);
//     // });
//     // axios.get('https://cvp1.moph.go.th/api/ImmunizationTarget?cid=1409900727635&hospital_code=13777',
//     //     {
//     //         headers: {
//     //             'Authorization': `Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbl8xMzc3N0AxMzc3NyIsImlhdCI6MTYyMzExMzkyOSwiZXhwIjoxNjIzMTI0NzI5LCJpc3MiOiJNT1BIIEFjY291bnQgQ2VudGVyIiwiYXVkIjoiTU9QSCBBUEkiLCJjbGllbnQiOnsidXNlcl9pZCI6NTY5OSwidXNlcl9oYXNoIjoiMjlGMEQzRTY0ODlFM0ZCMkFGNDlBQzZCMkUxOUUyMTE3RTQ1OEVGNEVFRUQyMEJFNDRDMTNEMTgzREUxRTAwRDhBQ0VGRkFCIiwibG9naW4iOiJBZG1pbl8xMzc3NyIsIm5hbWUiOiLguJnguLLguIfguKrguLLguKLguKrguKHguKMg4Lil4Li14Lil4LiU4Liy4Lig4Lix4LiX4Lij4LiB4Li44LilIiwiaG9zcGl0YWxfbmFtZSI6IuC5guC4o-C4h-C4nuC4ouC4suC4muC4suC4peC4qOC4o-C4teC4meC4hOC4o-C4tOC4meC4l-C4o-C5jCDguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguILguK3guJnguYHguIHguYjguJkiLCJob3NwaXRhbF9jb2RlIjoiMTM3NzciLCJlbWFpbCI6InBzYWlzYUBra3UuYWMudGgiLCJjbGllbnRfaXAiOiIxODAuMTgzLjY4LjIwNyIsInNjb3BlIjpbeyJjb2RlIjoiSU1NVU5JWkFUSU9OX1ZJRVc6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9VUERBVEU6MSJ9LHsiY29kZSI6Ik1PUEhfQUNDT1VOVF9DRU5URVJfQURNSU46MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9QRVJTT05fVVBMT0FEOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fREFTSEJPQVJEOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fU0xPVDoxIn0seyJjb2RlIjoiSU1NVU5JWkFUSU9OX1FVT1RBOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fUkVQT1JUOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fUkVQT1JUX0VYQ0VMOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fQUVGSV9VUERBVEU6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9TTE9UX01BTkFHRVI6MSJ9XSwicm9sZSI6WyJtb3BoLWFwaSJdLCJzY29wZV9saXN0IjoiW0lNTVVOSVpBVElPTl9WSUVXOjFdW0lNTVVOSVpBVElPTl9VUERBVEU6MV1bTU9QSF9BQ0NPVU5UX0NFTlRFUl9BRE1JTjoxXVtJTU1VTklaQVRJT05fUEVSU09OX1VQTE9BRDoxXVtJTU1VTklaQVRJT05fREFTSEJPQVJEOjFdW0lNTVVOSVpBVElPTl9TTE9UOjFdW0lNTVVOSVpBVElPTl9RVU9UQToxXVtJTU1VTklaQVRJT05fUkVQT1JUOjFdW0lNTVVOSVpBVElPTl9SRVBPUlRfRVhDRUw6MV1bSU1NVU5JWkFUSU9OX0FFRklfVVBEQVRFOjFdW0lNTVVOSVpBVElPTl9TTE9UX01BTkFHRVI6MV0iLCJhY2Nlc3NfY29kZV9sZXZlbDEiOiInMTM3NzcnIiwiYWNjZXNzX2NvZGVfbGV2ZWwyIjoiJyciLCJhY2Nlc3NfY29kZV9sZXZlbDMiOiInJyIsImFjY2Vzc19jb2RlX2xldmVsNCI6IicnIiwiYWNjZXNzX2NvZGVfbGV2ZWw1IjoiJycifX0.DWrTFnnIURKIJz4M6SR3qKDEPGgtyrb-hDfqtJ93GM9347U1-2PXkm7dMowdHvXX249HJ_FKCYugZR711kJdA7H3Ddb3y19SWyBwnKaT3lkvm2b7VSYAC837iV9xBH_5HhAKUaZoJZu4XUUycSfGv7ar04JOKNvagNfal98hBrmKJK_nJFr4zTl3syUqLHftHvm8x3Er4fcgGN7yoVadpi7o2isocTA0loyMhAccog238EwHLZeo7u3j2TQDuJCaymssVytl7y59Gl9dLs7VLiAseRNKZVCrAF7tAOIM7VdxADZY8zszrZsrnBODekpOkmVs6qxH5tORYQlyoM_U10Xo-dB5WXas0HuKQPUAySn7Uch-p6_8T9eM83TMtRdpM2ssvQH6TAozJdXfboY2CJnNPJ8cpuSH2KtMsxDDOzkuRBYhBp44nOCqnyUXs-VXOdCvhq3R0-VACUP3x5moASR1kUiSgKRaOk0bxktl7DDShPlKv3zOnQ44ZYkkU1nQO1pTQ4H-zEnNl32s1r9IUss0cHvIozVLDAREAsYtBaZoiWITHBiJuj5Gr1kX73HvcCSRFnMv7l6FOy9hAa1lqGjWZdrBWn99mX73yU_UsuBXbifbp--cgFwvXOhO-_Qp-xJ0LYjT8G9dIlz805mCNyJiHfKDzYHnbX5rhx_oaeY`
//     //         },
//     //     })
//     //     .then((res) => {
//     //         console.log(res.data)
//     //     })
//     //     .catch((error) => {
//     //         console.error(error)
//     //     })

//     // axios.get('https://cvp1.moph.go.th/api/ImmunizationTarget?cid=1409900727635&hospital_code=13777').then(resp => {
//     // res.send('resp.data');
//     // });

//     // const config = {
//     //     headers: { Authorization: `Bearer ${token}` }
//     // };

//     // Axios.post(
//     //     'http://localhost:8000/api/v1/get_token_payloads',
//     //     config
//     // ).then(console.log).catch(console.log);

//     // var config = {
//     //     method: 'get',
//     //     url: 'https://cvp1.moph.go.th/api/ImmunizationTarget?cid=1409900727635&hospital_code=13777',
//     //     headers: {
//     //         'Authorization': 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbl8xMzc3N0AxMzc3NyIsImlhdCI6MTYyMzEyNzExNCwiZXhwIjoxNjIzMTM3OTE0LCJpc3MiOiJNT1BIIEFjY291bnQgQ2VudGVyIiwiYXVkIjoiTU9QSCBBUEkiLCJjbGllbnQiOnsidXNlcl9pZCI6NTY5OSwidXNlcl9oYXNoIjoiMjlGMEQzRTY0ODlFM0ZCMkFGNDlBQzZCMkUxOUUyMTE3RTQ1OEVGNEVFRUQyMEJFNDRDMTNEMTgzREUxRTAwRDhBQ0VGRkFCIiwibG9naW4iOiJBZG1pbl8xMzc3NyIsIm5hbWUiOiLguJnguLLguIfguKrguLLguKLguKrguKHguKMg4Lil4Li14Lil4LiU4Liy4Lig4Lix4LiX4Lij4LiB4Li44LilIiwiaG9zcGl0YWxfbmFtZSI6IuC5guC4o-C4h-C4nuC4ouC4suC4muC4suC4peC4qOC4o-C4teC4meC4hOC4o-C4tOC4meC4l-C4o-C5jCDguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguILguK3guJnguYHguIHguYjguJkiLCJob3NwaXRhbF9jb2RlIjoiMTM3NzciLCJlbWFpbCI6InBzYWlzYUBra3UuYWMudGgiLCJjbGllbnRfaXAiOiIxODAuMTgzLjY4LjIwNyIsInNjb3BlIjpbeyJjb2RlIjoiSU1NVU5JWkFUSU9OX1ZJRVc6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9VUERBVEU6MSJ9LHsiY29kZSI6Ik1PUEhfQUNDT1VOVF9DRU5URVJfQURNSU46MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9QRVJTT05fVVBMT0FEOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fREFTSEJPQVJEOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fU0xPVDoxIn0seyJjb2RlIjoiSU1NVU5JWkFUSU9OX1FVT1RBOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fUkVQT1JUOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fUkVQT1JUX0VYQ0VMOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fQUVGSV9VUERBVEU6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9TTE9UX01BTkFHRVI6MSJ9XSwicm9sZSI6WyJtb3BoLWFwaSJdLCJzY29wZV9saXN0IjoiW0lNTVVOSVpBVElPTl9WSUVXOjFdW0lNTVVOSVpBVElPTl9VUERBVEU6MV1bTU9QSF9BQ0NPVU5UX0NFTlRFUl9BRE1JTjoxXVtJTU1VTklaQVRJT05fUEVSU09OX1VQTE9BRDoxXVtJTU1VTklaQVRJT05fREFTSEJPQVJEOjFdW0lNTVVOSVpBVElPTl9TTE9UOjFdW0lNTVVOSVpBVElPTl9RVU9UQToxXVtJTU1VTklaQVRJT05fUkVQT1JUOjFdW0lNTVVOSVpBVElPTl9SRVBPUlRfRVhDRUw6MV1bSU1NVU5JWkFUSU9OX0FFRklfVVBEQVRFOjFdW0lNTVVOSVpBVElPTl9TTE9UX01BTkFHRVI6MV0iLCJhY2Nlc3NfY29kZV9sZXZlbDEiOiInMTM3NzcnIiwiYWNjZXNzX2NvZGVfbGV2ZWwyIjoiJyciLCJhY2Nlc3NfY29kZV9sZXZlbDMiOiInJyIsImFjY2Vzc19jb2RlX2xldmVsNCI6IicnIiwiYWNjZXNzX2NvZGVfbGV2ZWw1IjoiJycifX0.Q5Q6gnrB50XNpRoF7I3gY6XZsOdZbb6wkXbOig8uecg8jjURo0G5rVnvFfKTv3bBrHkpUPIlFe9aNU7Lnwr_Mevgm0-ftA0SR7PKUAEesLNC7ZmANm-oVConkEQ4H8RNNdKwpGxufpNQgeHfQpRJexwouXFPxyqxblRxd84Ci0iZkdKOsssOFSJV7XsFK2QpoOOQ8sXlydZQnfdHCV-uGkWvg3toWXfWWkUsMPOt9EfoqFoAU7LngNjZRyr2G4572HT7pCBh4uDjCDJklWeov57lwvQGzCfGs5WSbmR-dvrpiDdPBaBWR-dSuBCtI2r8oDmq4exJwI-LI68NenlAG5JC0dMd4OJoU_VZlAdazmd1UQKia5k4h6Xj2q-LnC6LlUbN2rLMNWk55ks25GF4TUc2Dk94Y-aB1uq1ImG7OvOHDzl6krPRi9VIgBWHiw80fANsYORZewCoO-CX12RSOo0HUxdOYxSlUUZBQoY2bzJiRqVE0TY1KLx0KR3AD1xYNcNXf2HeyZHn4K6cF7ye69skXGbjpifzdCpwQcAvHCUT7sPnLcijqlPv_FE0hEtEOMX-W0rjr89uPKbALYsGSObF3jpCpgGVseGduMeS6_UZgkqeZSYTry6F_-g3cb3ZpfTx_Ik9d2h-G0F7U7X0knaKTvNOOC_6I1ic3Qt5G5s'
//     //     }
//     // };

//     // axios(config)
//     //     .then(function (response) {
//     //         console.log(JSON.stringify(response.data));
//     //     })
//     //     .catch(function (error) {
//     //         console.log(error);
//     //     });

// })


// // app.listen(8080, 'localhost')

// http.createServer(app).listen(8080), function () {
//     console.log("HTTPS 8080")
// }


// https.createServer(option, app).listen(443, function () {
//     console.log("HTTPS listenning on 44223")
// })