const GL = require("gl-react");
const React = require("react");

const {
  PropTypes
} = React;

const shaders = GL.Shaders.create({
  Sepia: {
    frag: `
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      uniform mat4 sepia;

      void main () {
        gl_FragColor = sepia * texture2D(t, uv);
      }`
  }
});

module.exports = GL.createComponent(
  ({ children: t, sepia: s }) =>
  {
    const mixArrays = (arr1, arr2, m) => arr1.map((v, i) => (1-m) * v + m * arr2[i]);
    const sepia = mixArrays([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ], [
      .3, .3, .3, 0,
      .6, .6, .6, 0,
      .1, .1, .1, 0,
      0.2, 0, -0.2, 1
    ], s);

    return <GL.Node
      shader={shaders.Sepia}
      uniforms={{ t, sepia }}
    />;
    
  },
  {
    displayName: "Sepia",
    propTypes: {
      children: PropTypes.any.isRequired
    }
  }
);