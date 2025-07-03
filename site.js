function runCode() {
  const html = document.getElementById('html').value;
  const css = document.getElementById('css').value;
  const js = document.getElementById('js').value;
  const output = document.getElementById('output');
  const code = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `;
  output.srcdoc = code;
}

document.getElementById('runBtn').addEventListener('click', runCode);

// Run code on load
runCode();