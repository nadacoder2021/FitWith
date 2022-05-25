import * as THREE from "three";
import { proxy } from "valtio";
import pic1 from "../assets/1.jpeg"
import pic2 from "../assets/2.jpeg";
import pic3 from "../assets/3.jpeg";
import pic4 from "../assets/4.jpeg";
import pic5 from "../assets/5.jpeg"



export const damp = THREE.MathUtils.damp;
export const state = proxy({
  clicked: null,
  urls: [pic1, pic2, pic3, pic4, pic5],
});
