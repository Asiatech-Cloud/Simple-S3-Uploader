var Minio = require('minio');
const { blob } = require('stream/consumers');

// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Client({
    endPoint: 'storage.asiatech.cloud',
    port: 443,
    useSSL: true,
    accessKey: 'Access Key Token',
    secretKey: 'Secret Key Token'
});

// File that needs to be uploaded.
var file = 'bob.jpg'

    // tms = Bucket Name
    // bob.jpg is name of file that save on storage
    minioClient.fPutObject('tms', 'bob.jpg', file, function(err, etag) {
      if (err) return console.log(err)
      console.log('File uploaded successfully.')
    });
