import Image from "next/image";
import "@/Static/CSS/index.css"
import Hero from "@/Component/Hero";
import Workouts from "@/Component/Workouts";
import Facilities from "@/Component/Facilities";
import React from "react";

export default function Home() {
  return (
  <>
    <Hero />
    <Workouts />
    <Facilities />
  </>
  );
}
