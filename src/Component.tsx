import React from 'react';

export interface ComponentProps {
   color?: string;
}

const Component: React.FunctionComponent<ComponentProps> = (props) => {
   const { color } = props;
   return <div>It happened, color: {color}</div>;
};

export { Component };
