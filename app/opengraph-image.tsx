import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "Pijus.dev — Svetainių kūrimas";
export const size = { width:1200, height:630 };
export const contentType = "image/png";
export default function Image(){ return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",background:"#0b0b0b",color:"#f2f0ea",padding:"64px",fontFamily:"Arial"}}><div style={{fontSize:28}}>Pijus.dev</div><div style={{fontSize:96,lineHeight:.95,letterSpacing:"-5px",maxWidth:900}}>Skaitmeniniai sprendimai, sukurti išskirtinai.</div><div style={{display:"flex",justifyContent:"space-between",fontSize:22,color:"#aaa79f"}}><span>Web · Shopify · Software</span><span>Kaunas, Lithuania</span></div></div>, size); }
