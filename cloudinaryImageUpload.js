// import image from './newImages/indige-1.jpg'
var FormData = require('form-data');
var fs = require('fs');
var axios = require('axios');

var image = './newImages/indige-1.jpg'

function startUpload(image) {
    // const formData = new FormData();
    // formData.append("file", image);
    // formData.append("upload_preset", "dw8lufup")
    const formData = {
        file: image,
        upload_preset: 'dw8lufup'
    }
    console.log(formData)
    uploadImage(formData)
}

function uploadImage(data) {
    axios.post("https://api.cloudinary.com/v1_1/risidio/image/upload", data)
    .then((response) => {
    //   updatePhoto(response.data.url)
      console.log(response)
    }).catch((error) => {
        // console.log(error)
        console.log(error)
    })
}

startUpload(image)