import "./Pagination.css";

export default function Pagination({ color }) {
  return (
    <div className="pagination">
      <div
        className="oval-full"
        style={{ background: `${color}`, border: `1px solid ${color}` }}
      ></div>
      <div
        className="oval"
        style={{ border: `1px solid ${color}` }}
      ></div>
      <div
        className="oval-full"
        style={{ background: `${color}`, border: `1px solid ${color}` }}
      ></div>
    </div>
  );
}
