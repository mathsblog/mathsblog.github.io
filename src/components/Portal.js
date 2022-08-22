import ReactDOM  from "react-dom";

export default function Portal({ to, children }) {
    return ReactDOM.createPortal(children, to);
}
