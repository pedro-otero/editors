import React, {Fragment} from "react";
import {Editor} from "@tinymce/tinymce-react";

const TinyMCE = () => {
  return (
    <Fragment>
      <h1>Tiny MCE</h1>
      <Editor
        apiKey={process.env.TINY_KEY}
        initialValue="<p>Initial content</p>"
        init={{
          height: 500,
          menubar: false,
          toolbar:
            'undo redo | formatselect | bold italic underline | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={console.log}
      />
    </Fragment>
  )
}
 export default TinyMCE;