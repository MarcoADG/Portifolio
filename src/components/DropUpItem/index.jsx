import { DropUpItemStyle } from "./style";

export const DropUpItem = ({ text, action, icon, index, value }) => {
  return (
    <DropUpItemStyle>
      <div
        tabIndex={index}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            action(value);
          }
        }}
      >
        <div className="acessibility-icons-label" onClick={() => action(value)}>
          <div className="item-container">
            {icon}
            <span className="item-label">{text}</span>
          </div>
        </div>
      </div>
    </DropUpItemStyle>
  );
};
