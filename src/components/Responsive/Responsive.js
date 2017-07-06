import React from 'react';
import Responsive from 'react-responsive';

const Desktop = ({ children }) => <Responsive minWidth={992} children={children} values={process.env.ssr ? {width: 1280} : {}}/>;
const Tablet = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />;
const Mobile = ({ children }) => <Responsive maxWidth={992} children={children} />;

export { Desktop, Mobile, Tablet };