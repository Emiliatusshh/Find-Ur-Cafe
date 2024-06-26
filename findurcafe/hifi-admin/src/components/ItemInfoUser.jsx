export default function ItemInfoUser({ lable, value }) {
  return (
    <div
      className="d-flex flex-column p-2"
      style={{ borderBottom: "solid 1px white" }}
    >
      <span style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}>
        {lable}
      </span>
      <span style={{ fontSize: 14, fontWeight: "normal", color: "#7a7a7a" }}>
        {value}
      </span>
    </div>
  );
}
