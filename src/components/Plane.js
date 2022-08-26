const Plane = () => {
    return (
        <mesh position={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial color={"#404040"} />
        </mesh>
    );
}

export default Plane;