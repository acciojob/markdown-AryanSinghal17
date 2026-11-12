
import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "./styles.css";

function App() {
  const [markdown, setMarkdown] = useState("# Hello World");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(marked(markdown));
  }, [markdown]);

  return (
    <div className="markdown-editor">

      <h1>Markdown Editor</h1>

      <div className="editor-container">

        {/* Input Section */}
        <div className="editor-section">
          <h2>Write Markdown</h2>

          <textarea
            className="markdown-input"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Write your Markdown here..."
          />
        </div>

        {/* Preview Section */}
        <div className="preview-section">
          <h2>Live Preview</h2>

          <div
            className="markdown-preview"
            dangerouslySetInnerHTML={{ __html: preview }}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
