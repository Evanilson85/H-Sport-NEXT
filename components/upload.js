
import React from "react";
import axios from "axios"

import styles from "./upload.module.css";

const serverURL = "https://hcode-lab-adonis-hsport.herokuapp.com"
//const user = users
function  Upload() {
  return (
    <div className={styles.App}>
       
       <UploadPreview >
       
       </UploadPreview>
    </div>
  );
}

class UploadPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }
  onChange(event) {
    this.setState({
      file://`${serverURL}/admin/usuario/${use.id}/uploads` 
      URL.createObjectURL(event.target.files[0])
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }
  render() {
    return (
      <div>
          <div className={styles.fundo}>
          <img style={{  width: "100px",
                  height:"100px"}} id={styles.fotos} src={this.state.file} />
            </div>
        <input type="file" onChange={this.onChange} />
        {this.state.file && (
          <div style={{ }}>
            <button onClick={this.resetFile}>Remove File</button>
          </div>
        )}
        
      </div>
    );
  }
}



export default Upload;
