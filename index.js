require('dotenv').config({path: './.env', override: true});
const njalla = require('njalla-dns');
const hostToIp = require('dns');

;(async function main() {
    // Read the env variable specified by akash pro
    const akash_host = process.env.AKASH_CLUSTER_PUBLIC_HOSTNAME
    const cms_fqdn = process.env.CMS_DNS_A
    const njalla_id = parseInt(process.env.NJALLA_REC_ID, 10)

    // Initialize your client with your API key (You can grab one at njal.la/settings/api/)
    const dns = njalla(process.env.NJALLA_API_KEY)
    
    // Get records
    const records = await dns.getRecords(cms_fqdn)

    await hostToIp.lookup(akash_host, function(err, result) {
        console.log('ip         = ' + result)
        dns.update(cms_fqdn, records.find((r) => r.id === njalla_id), { content: result })
    })
    
    console.log('cms_fqdn   = ' + cms_fqdn)
    console.log('akash_host = ' + akash_host)
    console.log('njalla_id   = ' + njalla_id)
})()
