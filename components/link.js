import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Index({ children, to, as, ...rest }) {
  const internal = to instanceof Object || /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <Link href={to} as={as}>
        {children}
      </Link>
    );
  }

  const { title, className, id, onClick } = rest;

  return (
    <a
      href={to}
      title={title}
      className={className}
      id={id}
      onClick={onClick}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

Index.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  as: PropTypes.string,
};

Index.defaultProps = { as: undefined };
