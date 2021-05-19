import { forwardRef, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function getInit(element) {
  if (getComputedStyle(element).fontSize) {
    return {fontSize: getComputedStyle(element).fontSize,};
  }

  return getInit(element.parentElement);
}

// eslint-disable-next-line react/prop-types
function FontSize({ Tag, children, ...rest }, r) {
  const ref = useRef();
  const size = 0;
  const sortBy = 'img';
  console.log(size);
  const [init, setInit] = useState({});

  useEffect(() => {
    ref.current.removeAttribute("style");
    setInit(getInit(ref.current));
  }, [sortBy]);

  const style =
    size === 0 ? {} : { fontSize: `calc(${init.fontSize} + ${size}px)` };

  if (Tag === "a") {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <a ref={r} {...rest}>
        <span ref={ref} style={style}>
          {children}
        </span>
      </a>
    );
  }

  return (
    <Tag ref={ref} {...rest} style={style}>
      {children}
    </Tag>
  );
}

export default forwardRef(FontSize);
