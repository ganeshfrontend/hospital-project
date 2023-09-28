import React,{useState} from "react";
import { Formik } from "formik";
import { bedTypes } from "../../Constants";
import { useAddHospitalMutation } from "../../services/hospitalApi";
function AddHospital(){
  var [newbedtype,setNewbedtype]=useState({
    bedType:"",
    price:0
  })
var [addedbedtypes,setAddedbedtypes]=useState([])
var [addHospital] =useAddHospitalMutation()

function addbedtype(){
  setAddedbedtypes([...addedbedtypes,newbedtype])
}

    return(
      <div  class="border border-danger">
      <h3>AddHospital</h3>
        <Formik
       initialValues={
        {
          hospitalName:"",
          image:"",
          area:"",
          reviews:[],
          bedTypes:[],
          beds:[]
        }
      }
       onSubmit={(values) => {
        values.bedTypes=[...addedbedtypes]
         addHospital(values).then((response)=>{
           console.log(response)
        })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="hospitalName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.hospitalName}
             placeholder="Enter HospitalName"
           />
           <br />
           <input
             type="text"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
             placeholder="Enter image url"

           />
           <br />
            <input
             type="text"
             name="area"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.area}
             placeholder="Enter Hospital Location"
            />
            <br />


  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  +Bed Type
</button>

  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">AddBedType with price</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label htmlFor="">Select Bed Type</label>
        <select onChange={(e)=>{setNewbedtype({...newbedtype,bedType:e.target.value})}}>
          <option value={null} disabled selected>Please Select</option>
          {
            bedTypes.map((bedtype)=>{
              return <option value={bedtype}>{bedtype}</option>
            })
          }
        </select><br />
        <label htmlFor="">Set the Price:</label>
     <input type="text" placeholder="Enter the price" onChange={(e)=>{setNewbedtype({...newbedtype,price:e.target.value})}}/>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=>{addbedtype(values)}}>Add BedType</button>
      </div>
    </div>
  </div>
</div>
<br />

<button type="submit" class="btn btn-danger">Submit</button><br />

</form>
 )}
</Formik>



</div>
  )
  }
export default AddHospital;