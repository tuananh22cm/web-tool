import React from 'react';
// import { Formik, Form, Field, FieldArray } from 'formik';

const App = () => {
  return (
    <div className="container">
      <h2 style={{textAlign:'center'}}>List Index</h2>
      <table className="table">
        <thead>
          <tr>
            <th style={{textAlign:'center'}}>Index URL</th>
            <th style={{textAlign:'center'}}>Stastus code</th>         
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Draphony.de</td>
            <td>200</td>
            <div className="container mt-3">
  
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    +
  </button>
  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content" style={{width:"1000px",height:"500px"}}>
        <div className="modal-header">
          <h4 className="modal-title">Title</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        
        
        <div className="modal-body">
          
Please enter...
        </div>      
        <div className="modal-footer">
        <div ><img src='https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/1672351091_963_50-anh-gai-xinh-cap-2-e28093-3-trong-sang.jpg' alt='loi' width='70' height='70' style={{marginLeft:"-250%"}} ></img></div>
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
          </tr>      
          <tr >
            <td>Draphony.de/Schung</td>
            <td>300</td>
            <div className="container mt-3">
  
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    +
  </button>
  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Title</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        
        
        <div className="modal-body">
          
Please enter...
        </div>
        
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>   
          </tr>
          <tr >
            <td>ccc</td>
            <td>400</td>
            <div className="container mt-3">
  
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    +
  </button>
  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Title</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        
        
        <div className="modal-body">
          
Please enter...
        </div>
        
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
          </tr>
          <tr >
            <td>aaa</td>
            <td>500</td>
            <div className="container mt-3">
  
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    +
  </button>
  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Title</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        
        
        <div className="modal-body">
          
Please enter...
        </div>
        
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
  // return (
  //   <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  //     <Formik
  //       initialValues={{
  //         accountName: '',
  //         idAccount: '',
  //         browsers: [{ browserss: '', number: '' }],
  //         keyword: [{ keyword: '', number1: '' }],
  //         targetlinks: [{ targetlink: '' }],
  //         defaulink: '',
  //         countpage: '',
  //       }}
  //       onSubmit={(values) => {
  //         console.log(values);
  //       }}
  //     >
  //       {({ values }) => (
  //         <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  //           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
  //             <span>AccountName:</span>
  //             <Field type="text" name="accountName" />
  //           </div>

  //           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
  //             <span>IdAccount:</span>
  //             <Field type="text" name="idAccount" />
  //           </div>

  //           <FieldArray name="browsers">
  //             {({ push }) => (
  //               <div>
  //                 <span>Browsers:</span>
  //                 {values.browsers.map((browser, index) => (
  //                   <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      
  //                     <div style={{ display: 'flex', alignItems: 'center' }}>
  //                       <Field type="text" name={`browsers[${index}].browserss`} />
  //                       <Field type="number" name={`browsers[${index}].number`} />
  //                       {index === values.browsers.length - 1 && (
  //                         <button type="button" onClick={() => push({ browserss: '', number: '' })}>
  //                           +
  //                         </button>
  //                       )}
  //                     </div>
  //                   </div>
  //                 ))}
  //               </div>
  //             )}
  //           </FieldArray>

  //           <FieldArray name="keyword">
  //             {({ push }) => (
  //               <div>
  //                 <span>Keyword:</span>
  //                 {values.keyword.map((kw, index) => (
  //                   <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      
  //                     <div style={{ display: 'flex', alignItems: 'center' }}>
  //                       <Field type="text" name={`keyword[${index}].keyword`} />
  //                       <Field type="number" name={`keyword[${index}].number1`} />
  //                       {index === values.keyword.length - 1 && (
  //                         <button type="button" onClick={() => push({ keyword: '', number1: '' })}>
  //                           +
  //                         </button>
  //                       )}
  //                     </div>
  //                   </div>
  //                 ))}
  //               </div>
  //             )}
  //           </FieldArray>

  //           <FieldArray name="targetlinks">
  //             {({ push }) => (
                
  //               <div> 
  //                 <span>Targetlink:</span>
  //                 {values.targetlinks.map((link, index) => (
  //                   <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      
  //                     <div style={{ display: 'flex', alignItems: 'center' }}>
  //                       <Field type="text" name={`targetlinks[${index}].targetlink`} />
  //                       {index === values.targetlinks.length - 1 && (
  //                         <button type="button" onClick={() => push({ targetlink: '' })}>
  //                           +
  //                         </button>
  //                       )}
  //                     </div>
  //                   </div>
  //                 ))}
  //               </div>
  //             )}
  //           </FieldArray>

  //           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
  //             <span>Count page number:</span>
  //             <Field type="number" name="countpage" />
  //           </div>

  //           <button type="submit">Submit</button>
  //         </Form>
  //       )}
  //     </Formik>
  //   </div>
  // );


export default App;
