'use strict';
const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios');

const fs = require('fs');


process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


app.use(cors());


app.get('/id/:id', async (req, res) => {
    // res.send("Hello world")

    const id = req.params.id;
    let dataFile = "";
    try {
        dataFile = JSON.parse(fs.readFileSync('./token.json', 'utf8'))
        // console.log(dataFile)
    } catch (err) {
        console.error(err)
    }
    
    const response = await axios.get(`https://cvp1.moph.go.th/api/ImmunizationTarget?cid=${id}`,
        {
            headers: {
                'Authorization': `Bearer ${dataFile.token}`
            },
        }).catch(async (e) => {
            if (e.response) {
                if (e.response.status === 401) {
                    const resAuth = await axios.get(`https://cvp1.moph.go.th/token?Action=get_moph_access_token&user=admin_13777&password_hash=69BE3D4E0A72930DAA46E9F409525517DE393A9DB4643778AD0B6FCFEF317C09&hospital_code=13777`)
                    if (resAuth.status === 200) {
                        const dataW = JSON.stringify({
                            token: resAuth.data
                        })                        
                        fs.writeFile("./token.json", dataW, 'utf8', (err) => {
                            if (err) return console.log(err);
                            console.log('Add Token > token.json');
                        })
                    }
                }
            }
            // console.log("error.e", e.response);
        });

    if ( response && response.status === 200) {
        res.send(response.data);
    }



    // const id = req.params.id;
    // axios.get(`https://cvp1.moph.go.th/api/ImmunizationHistory?cid=${id}`,
    //     {
    //         headers: {
    //             'Authorization': `Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbl8xMzc3N0AxMzc3NyIsImlhdCI6MTYyNDQxNjAxNiwiZXhwIjoxNjI0NDI2ODE2LCJpc3MiOiJNT1BIIEFjY291bnQgQ2VudGVyIiwiYXVkIjoiTU9QSCBBUEkiLCJjbGllbnQiOnsidXNlcl9pZCI6NTY5OSwidXNlcl9oYXNoIjoiMjlGMEQzRTY0ODlFM0ZCMkFGNDlBQzZCMkUxOUUyMTE3RTQ1OEVGNEVFRUQyMEJFNDRDMTNEMTgzREUxRTAwRDhBQ0VGRkFCIiwibG9naW4iOiJBZG1pbl8xMzc3NyIsIm5hbWUiOiLguJnguLLguIfguKrguLLguKLguKrguKHguKMg4Lil4Li14Lil4LiU4Liy4Lig4Lix4LiX4Lij4LiB4Li44LilIiwiaG9zcGl0YWxfbmFtZSI6IuC5guC4o-C4h-C4nuC4ouC4suC4muC4suC4peC4qOC4o-C4teC4meC4hOC4o-C4tOC4meC4l-C4o-C5jCDguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguILguK3guJnguYHguIHguYjguJkiLCJob3NwaXRhbF9jb2RlIjoiMTM3NzciLCJlbWFpbCI6InBzYWlzYUBra3UuYWMudGgiLCJjbGllbnRfaXAiOiIxNC4yMDcuMjAyLjEzIiwic2NvcGUiOlt7ImNvZGUiOiJJTU1VTklaQVRJT05fVklFVzoxIn0seyJjb2RlIjoiSU1NVU5JWkFUSU9OX1VQREFURToxIn0seyJjb2RlIjoiTU9QSF9BQ0NPVU5UX0NFTlRFUl9BRE1JTjoxIn0seyJjb2RlIjoiSU1NVU5JWkFUSU9OX1BFUlNPTl9VUExPQUQ6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9EQVNIQk9BUkQ6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9TTE9UOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fUVVPVEE6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9SRVBPUlQ6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9SRVBPUlRfRVhDRUw6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9BRUZJX1VQREFURToxIn0seyJjb2RlIjoiSU1NVU5JWkFUSU9OX1NMT1RfTUFOQUdFUjoxIn1dLCJyb2xlIjpbIm1vcGgtYXBpIl0sInNjb3BlX2xpc3QiOiJbSU1NVU5JWkFUSU9OX1ZJRVc6MV1bSU1NVU5JWkFUSU9OX1VQREFURToxXVtNT1BIX0FDQ09VTlRfQ0VOVEVSX0FETUlOOjFdW0lNTVVOSVpBVElPTl9QRVJTT05fVVBMT0FEOjFdW0lNTVVOSVpBVElPTl9EQVNIQk9BUkQ6MV1bSU1NVU5JWkFUSU9OX1NMT1Q6MV1bSU1NVU5JWkFUSU9OX1FVT1RBOjFdW0lNTVVOSVpBVElPTl9SRVBPUlQ6MV1bSU1NVU5JWkFUSU9OX1JFUE9SVF9FWENFTDoxXVtJTU1VTklaQVRJT05fQUVGSV9VUERBVEU6MV1bSU1NVU5JWkFUSU9OX1NMT1RfTUFOQUdFUjoxXSIsImFjY2Vzc19jb2RlX2xldmVsMSI6IicxMzc3NyciLCJhY2Nlc3NfY29kZV9sZXZlbDIiOiInJyIsImFjY2Vzc19jb2RlX2xldmVsMyI6IicnIiwiYWNjZXNzX2NvZGVfbGV2ZWw0IjoiJyciLCJhY2Nlc3NfY29kZV9sZXZlbDUiOiInJyJ9fQ.kMmyoxk3F65UpsN2pRN9Nwl9-ToRJj4mMXZX6H0Gd3DMQzbfcT1dJfSx3IhATX9FKyb_5SNE6POWxcp8iYPS0ATXRuKE2jpcJ7NVszX_d0ACdoHgfMUNFjTMA9AAlWfuUlDunPCwDDSWCNN89gmIqUXAeoDJsJ7t6JvTBMQMsvRBm8EN3DNbao2X8hesYPK3o_TaK_RJF1VBLv4077eNkGQTOuXAGhEUmbEnKO8Oe1Xj_48N84wEDwdDTL1tJqEf2SNYJNIMJypVR_l5eIEkeufIex7rrB5AkuB7DVOrFXe-BkhKTG_Dsr2oROlVvXrhc8L0tyvkMDHfe0luJlycoV5-OOT9E2Wg-tfNy5_uAjzDvTHSj00OZoiZqQ8ZVXca_-oMT6iW1gNQv0dI35pM_wk2cw7HrPBtPWVFfUSn1y-HfK8i5Zqhjnd5yV9yFqp4aCTY-C2rV3MGH9qYPVT6c6nksYyOgdlfls8ybOvFVKll8UdwwnX554p10oWMykFnyy7AykNoXS_SS3ug7XsYJsSTwV8AmMP3QBC2rLBvN_2CgGuWkYK6x42ilZFa_90Sksp0okDgjvuO4T8KaSyR-knqcAqXby2dR31bXYfqs8TW_SMQbsHCTyNh9jKCFSh_bspLQ8O8Tqa6_WqiMkIDG32krElVGc8cdxK7owkZsdQ`
    //         },
    //     })
    // .then(resp => {
    //     res.send(resp.data.result.patient)
    // });

})


app.get('/home', async (req, res) => {
    const resAuth = await axios.get(`https://cvp1.moph.go.th/token?Action=get_moph_access_token&user=admin_13777&password_hash=69BE3D4E0A72930DAA46E9F409525517DE393A9DB4643778AD0B6FCFEF317C09&hospital_code=13777`)
    console.log("resAuth :", resAuth);
    if (resAuth.status === 200) {
        const dataW = JSON.stringify({
            token: resAuth.data
        })
        fs.writeFileSync("./token.json", dataW, 'utf8');
    }
});

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})