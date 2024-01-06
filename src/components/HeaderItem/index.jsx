import { HeaderItemStyle } from "./style";

export const HeaderItem = ({
  smallText,
  bigText,
  action,
  icon,
  index,
  value,
  HeaderCollapse,
}) => {
  return (
    <HeaderItemStyle collapse={HeaderCollapse}>
      <div
        tabIndex={index}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            action(value);
          }
        }}
      >
        <div className="acessibility-icons-label" onClick={() => action(value)}>
          {HeaderCollapse ? (
            <div className="item-container">
              {icon}
              <span className="item-label">{smallText}</span>
            </div>
          ) : (
            <>
              {icon}
              <span className="label-Header">{bigText}</span>
            </>
          )}
        </div>
      </div>
    </HeaderItemStyle>
  );
};
