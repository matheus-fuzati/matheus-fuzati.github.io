import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import GlassBlob from "./GlassBlob";

/**
 * Importado via React.lazy — só entra no bundle quando o WebGL check passa
 * e prefers-reduced-motion está desligado (ver Hero.tsx). Luz quente contida
 * do accent2 (verde-petróleo), sombra suave em vez de glow.
 */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 35 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[2, 2, 3]} intensity={1.1} color="#1e8f77" />
      <directionalLight position={[-3, -1, -2]} intensity={0.5} color="#2f5bd1" />
      <pointLight position={[1.2, 1.6, 2.4]} intensity={6} color="#ffffff" distance={6} />
      <Suspense fallback={null}>
        <GlassBlob />
      </Suspense>
    </Canvas>
  );
}
