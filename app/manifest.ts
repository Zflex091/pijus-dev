import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name:"Pijus.dev", short_name:"Pijus.dev", description:"Svetainių ir individualių sistemų kūrimas.", start_url:"/", display:"standalone", background_color:"#0b0b0b", theme_color:"#0b0b0b", icons:[{src:"/icons/icon.svg",sizes:"any",type:"image/svg+xml"}] }; }
