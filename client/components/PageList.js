import React from 'react';
import { Link } from 'react-router-dom';

const PageList = props => {
  return (
    <div>
      {props.pages.map(page => (
        <div key={page.id}>
          <Link to={`/wiki/${page.slug}`}>{page.title}</Link>
          {/* <td onClick={() => props.selectPage(page)}>Details</td> */}
        </div>
      ))}
    </div>
  );
};

export default PageList;
