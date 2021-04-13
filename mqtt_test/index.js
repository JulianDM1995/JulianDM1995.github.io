
nnb_content = {
  header_tabs: [
    { body_div: "div_home", tabName: "HomeIcon", type: "icon", icon_src: "icon.svg", tabselect: "ConfigurarWIFI", showInWrapped: true },
  ],
  body_divs: ["div_home"],
  wrap_on_click: true,
  alwaysOnTop: true
}

nnb_start("topnav", nnb_content);
//WindVane

function getWindvaneDirection(angle) {
  switch (angle) {
    case 180:
      return "S"
    case 202.5:
      return "SSW"
    case 225:
      return "SW"
    case 247.5:
      return "WSW"
    case 270:
      return "W"
    case 292.5:
      return "WNW"
    case 315:
      return "NW"
    case 337.5:
      return "NNW"
    case 0:
      return "N"
    case 22.5:
      return "NNE"
    case 45:
      return "NE"
    case 67.5:
      return "ENE"
    case 90:
      return "E"
    case 112.5:
      return "ESE"
    case 135:
      return "SE"
    case 157.5:
      return "SSE"
  }
  return ""
}

