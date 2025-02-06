export default function Box({ backgroundColor, width, height }) {
  return (
    <div
      style={{
        backgroundColor: `${backgroundColor}`,
        width: `${width}`,
        height: `${height}`,
      }}>
      Box
    </div>
  );
}
