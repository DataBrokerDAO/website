import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Form, Field, reduxForm } from 'redux-form';

class DocumentResponse extends Component {
  componentWillLoad() {}

  onDrop(acceptedFiles) {
    acceptedFiles.forEach(file => {
      //        const req = request.post('/upload');
      //   acceptedFiles.forEach(file => {
      //     req.attach(file.name, file);
      // });
      // req.end(callback);
    });
  }

  render() {
    const { extraId } = this.props;
    return (
      <div>
        <h2>We need some extra information</h2>
        <hr className="short" />
        <Dropzone />
      </div>
    );
  }
}

export default reduxForm({ form: 'document' })(DocumentResponse);