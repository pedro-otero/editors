import React, {Fragment, useState} from "react";
import {Editor, EditorState, RichUtils} from 'draft-js';
import classNames from 'classnames';
import 'draft-js/dist/Draft.css';

const Draft = () => {
  const [content, setContent] = useState(EditorState.createEmpty());

  const toggleInlineStyle = (style) => () => setContent(RichUtils.toggleInlineStyle(content, style));
  const isInlineStyle = style => content.getCurrentInlineStyle().has(style);

  return (
    <Fragment>
      <h1>Draft.js</h1>
      <div className="container border">
        <div className="row bg-light">
          <div className="col py-2">
            <div className="btn-group btn-group-toggle" data-toggle="format">
              <button
                type="button"
                onClick={toggleInlineStyle('BOLD')}
                className={classNames("btn btn-outline-secondary", {active: isInlineStyle('BOLD')})}
              >
                <strong>B</strong>
              </button>
              <button
                type="button"
                onClick={toggleInlineStyle('ITALIC')}
                className={classNames("btn btn-outline-secondary", {active: isInlineStyle('ITALIC')})}
              >
                <em>I</em>
              </button>
              <button
                type="button"
                onClick={toggleInlineStyle('UNDERLINE')}
                className={classNames("btn btn-outline-secondary", {active: isInlineStyle('UNDERLINE')})}
              >
                <u>U</u>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col py-3">
            <Editor
              editorState={content}
              onChange={setContent}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Draft;