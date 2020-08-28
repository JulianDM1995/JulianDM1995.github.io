
var colorPicker = new iro.ColorPicker("#demoWheel", {
  width: 290,
  height: 360,
  handleRadius: 8,
  handleUrl: null,
  handleOrigin: {y: 0, x: 0},
  colors: [
    '#fff',
  ],
  borderWidth: 0,
  padding: 8,
  wheelLightness: true,
  wheelAngle: 270,
  wheelDirection: 'anticlockwise',
  layoutDirection: 'vertical',
  transparency: false,
});

colorPicker.on('input:change', function(color) {
  let r = color.rgb.r;
  let g = color.rgb.g;
  let b = color.rgb.b;
  actualizarRGB(r,g,b);
})
