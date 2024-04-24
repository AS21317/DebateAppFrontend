
// * ======>> Acccessing env file in vite is slightly different 
const upload_preset = "doctor-booking-02"
const cloud_name  = "dfyjwu1sh"

console.log("cloudd name : ",cloud_name);
console.log("cloudd name : ",upload_preset);


   const UploadImageToCloudinary = async (file)=>{

    const uploadData = new FormData();
    uploadData.append('file',file)
    uploadData.append('upload_preset',upload_preset)
    uploadData.append('cloud_name',cloud_name)



    // make a cloudinary req to save data 

    const res = await fetch(`https://api.cloudinary.com/v1_1/dfyjwu1sh/image/upload`,{
        method:"post",
        body:uploadData

    });

    const data = await res.json()
    return data;

}

export default UploadImageToCloudinary