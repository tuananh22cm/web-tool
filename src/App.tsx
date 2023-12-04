import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

const App = () => {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Formik
        initialValues={{
          accountName: '',
          idAccount: '',
          browsers: [{ browserss: '', number: '' }],
          keyword: [{ keyword: '', number1: '' }],
          targetlinks: [{ targetlink: '' }],
          defaulink: '',
          countpage: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span>AccountName:</span>
              <Field type="text" name="accountName" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span>IdAccount:</span>
              <Field type="text" name="idAccount" />
            </div>

            <FieldArray name="browsers">
              {({ push }) => (
                <div>
                  <span>Browsers:</span>
                  {values.browsers.map((browser, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Field type="text" name={`browsers[${index}].browserss`} />
                        <Field type="number" name={`browsers[${index}].number`} />
                        {index === values.browsers.length - 1 && (
                          <button type="button" onClick={() => push({ browserss: '', number: '' })}>
                            +
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>

            <FieldArray name="keyword">
              {({ push }) => (
                <div>
                  <span>Keyword:</span>
                  {values.keyword.map((kw, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Field type="text" name={`keyword[${index}].keyword`} />
                        <Field type="number" name={`keyword[${index}].number1`} />
                        {index === values.keyword.length - 1 && (
                          <button type="button" onClick={() => push({ keyword: '', number1: '' })}>
                            +
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>

            <FieldArray name="targetlinks">
              {({ push }) => (
                
                <div> 
                  <span>Targetlink:</span>
                  {values.targetlinks.map((link, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Field type="text" name={`targetlinks[${index}].targetlink`} />
                        {index === values.targetlinks.length - 1 && (
                          <button type="button" onClick={() => push({ targetlink: '' })}>
                            +
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span>Count page number:</span>
              <Field type="number" name="countpage" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
