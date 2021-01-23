import { OrbitControls } from "@react-three/drei"
import { Canvas } from "react-three-fiber"
import Box from "./Box"

function App() {
  return (
    <Canvas
      style={{ width: 800, height: 800 }}
      pixelRatio={window.devicePixelRatio ? window.devicePixelRatio : 1}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  )
}

export default App
